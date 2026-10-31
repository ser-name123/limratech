import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ADMIN_SESSION_COOKIE, verifySessionToken } from '@/lib/adminAuth';
import { getServerCmsSnapshot } from '@/lib/cmsReader';

/**
 * Proxy (Next 16's renamed middleware). Handles:
 *  1. Admin gate — /admin sub-pages require a valid session.
 *  2. Page URL overrides — a page can be moved to a new URL from the admin;
 *     the page serves at the new URL and the old URL 301-redirects to it.
 *  3. 301 redirects — the admin's redirect rules are enforced here.
 *
 * Override/redirect rules are read from the CMS and cached briefly so we do
 * not hit the database on every request.
 */

interface Rule { from: string; to: string }
let cache: { at: number; overrides: Rule[]; redirects: Rule[] } = { at: 0, overrides: [], redirects: [] };
const TTL = 5_000;

async function getRules() {
  if (Date.now() - cache.at < TTL) return cache;
  try {
    const cms = await getServerCmsSnapshot();
    const overrides = ((cms.seo as any)?.routeOverrides || [])
      .filter((o: any) => o && o.enabled && o.from && o.to)
      .map((o: any) => ({ from: o.from.trim(), to: o.to.trim() }));
    const redirects = ((cms.seo as any)?.redirects || [])
      .filter((r: any) => r && r.from && r.to)
      .map((r: any) => ({ from: r.from.trim(), to: r.to.trim() }));
    cache = { at: Date.now(), overrides, redirects };
  } catch {
    /* keep last good cache on failure */
  }
  return cache;
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Internal override rewrite — render as-is, never redirect again (loop-breaker).
  if (request.headers.get('x-url-override') === '1') {
    return NextResponse.next();
  }


  // 1. Admin gate for sub-pages (e.g. /admin/editor). /admin itself shows login.
  if (pathname.startsWith('/admin/')) {
    if (!verifySessionToken(request.cookies.get(ADMIN_SESSION_COOKIE)?.value)) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
    return NextResponse.next();
  }

  const { overrides, redirects } = await getRules();

  // 2a. A moved page's NEW url → render the original page at this URL (rewrite).
  const servedAs = overrides.find((o) => o.to === pathname);
  if (servedAs) {
    const dest = request.nextUrl.clone();
    dest.pathname = servedAs.from;
    const headers = new Headers(request.headers);
    headers.set('x-url-override', '1');
    return NextResponse.rewrite(dest, { request: { headers } });
  }

  // 2b. A moved page's OLD url → 301 to the new url.
  const moved = overrides.find((o) => o.from === pathname);
  if (moved) {
    return NextResponse.redirect(new URL(moved.to, request.url), 301);
  }

  // 3. Plain 301 redirect rules.
  const redirect = redirects.find((r) => r.from === pathname);
  if (redirect) {
    return NextResponse.redirect(new URL(redirect.to, request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  // Run on page routes; skip API, Next internals, metadata files and static assets.
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|css|js|txt|xml|woff|woff2)).*)',
  ],
};
