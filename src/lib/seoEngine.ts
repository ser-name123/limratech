import type { Metadata } from 'next';
import { getServerCmsSnapshot } from '@/lib/cmsReader';
import { defaultPageSeoRegistry, PageSeoEntry } from '@/data/defaultCmsConfig';

export async function getPageSeoEntry(routePath: string): Promise<PageSeoEntry | undefined> {
  const cms = await getServerCmsSnapshot();
  const registry = cms.pageSeoRegistry || defaultPageSeoRegistry;
  return registry.find((entry) => entry.route === routePath);
}

export async function buildRouteMetadata(
  routePath: string,
  fallback?: {
    title?: string;
    description?: string;
    keywords?: string[];
    ogImage?: string;
    ogType?: 'website' | 'article';
  }
): Promise<Metadata> {
  const cms = await getServerCmsSnapshot();
  const globalSeo = cms.seo;
  const baseUrl = (globalSeo?.canonicalDomain || 'https://limradigitech.com').replace(/\/$/, '');
  const entry = (cms.pageSeoRegistry || defaultPageSeoRegistry).find((e) => e.route === routePath);

  // Also check if this route matches a service in cms.services that has custom SEO fields
  const cleanSlug = routePath.replace(/^\//, '');
  const matchedService: any = (cms.services || []).find((s: any) => s.slug === cleanSlug);

  const metaTitle =
    matchedService?.seo_title ||
    entry?.metaTitle ||
    fallback?.title ||
    globalSeo?.siteTitle ||
    'LIMRA Digitech | Transforming Businesses With Smart Digital Solutions';

  const metaDescription =
    matchedService?.seo_description ||
    entry?.metaDescription ||
    fallback?.description ||
    globalSeo?.metaDescription ||
    'LIMRA Digitech is a premier digital marketing, web development, creative design, mobile app, and custom software solutions company in India.';

  const focusKeyword =
    matchedService?.focus_keyword ||
    entry?.focusKeyword ||
    'LIMRA Digitech India';

  const secondaryKeywords: string[] =
    matchedService?.secondary_keywords ||
    entry?.secondaryKeywords ||
    fallback?.keywords ||
    [];

  const locations: string[] =
    matchedService?.target_locations ||
    entry?.targetLocations ||
    ['New Delhi', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Pan-India'];

  const allKeywords = Array.from(
    new Set([focusKeyword, ...secondaryKeywords, ...locations.map((loc) => `${focusKeyword} ${loc}`)])
  );

  const canonicalUrl =
    matchedService?.canonical_url ||
    entry?.canonicalUrl ||
    `${baseUrl}${routePath === '/' ? '' : routePath}`;

  const ogImage =
    matchedService?.og_image ||
    entry?.ogImage ||
    fallback?.ogImage ||
    globalSeo?.defaultOgImage ||
    '/limra-logo.png';

  const robotsDirective = matchedService?.robots || entry?.robots || 'index, follow';
  const isIndex = !robotsDirective.includes('noindex');

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: allKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: isIndex,
      follow: isIndex,
      googleBot: {
        index: isIndex,
        follow: isIndex,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title: entry?.ogTitle || metaTitle,
      description: entry?.ogDescription || metaDescription,
      url: canonicalUrl,
      siteName: 'LIMRA Digitech',
      locale: 'en_IN',
      type: fallback?.ogType || 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: entry?.ogTitle || metaTitle,
      description: entry?.ogDescription || metaDescription,
      images: [ogImage],
    },
    other: {
      'geo.region': globalSeo?.geoRegion || 'IN-DL',
      'geo.placename': globalSeo?.geoPlacename || 'New Delhi, India',
      'revisit-after': '3 days',
      author: 'LIMRA Digitech SEO & Engineering Team',
    },
  };
}

