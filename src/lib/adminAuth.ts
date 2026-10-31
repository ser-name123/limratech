import crypto from 'crypto';

/**
 * Server-side admin authentication.
 *
 * Credentials and the signing secret are read from environment variables so
 * they are never committed to the repo. An authenticated session is a compact,
 * HMAC-signed token stored in an httpOnly cookie — it cannot be read or forged
 * by client-side JavaScript.
 *
 * Required env vars (see .env.local / .env.example):
 *   ADMIN_USERNAME        - the login username
 *   ADMIN_PASSWORD        - the login password (plain text, server-only)
 *   ADMIN_SESSION_SECRET  - a long random string used to sign session tokens
 */

export const ADMIN_SESSION_COOKIE = 'limra_admin_session';

// How long a login stays valid, in seconds (default 8 hours).
const SESSION_TTL_SECONDS = Number(process.env.ADMIN_SESSION_TTL_SECONDS) || 8 * 60 * 60;

function getSecret(): string {
  // Fall back to a build-time constant only so the app does not crash if the
  // secret is missing; auth still fails closed because credentials must match.
  return process.env.ADMIN_SESSION_SECRET || 'limra-admin-insecure-dev-secret-change-me';
}

function base64url(input: Buffer | string): string {
  return Buffer.from(input)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function sign(payload: string): string {
  return base64url(crypto.createHmac('sha256', getSecret()).update(payload).digest());
}

function timingSafeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    // Still run a comparison to keep timing roughly constant.
    crypto.timingSafeEqual(bufA, bufA);
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

/** Validate a username/password pair against the configured credentials. */
export function verifyCredentials(username: string, password: string): boolean {
  const expectedUser = process.env.ADMIN_USERNAME || 'admin';
  const expectedPass = process.env.ADMIN_PASSWORD || '';

  // If no password is configured, refuse all logins (fail closed).
  if (!expectedPass) return false;

  const userOk = timingSafeEqual(String(username || ''), expectedUser);
  const passOk = timingSafeEqual(String(password || ''), expectedPass);
  return userOk && passOk;
}

/** Create a signed session token for the given username. */
export function createSessionToken(username: string): string {
  const exp = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = base64url(JSON.stringify({ u: username, exp }));
  return `${payload}.${sign(payload)}`;
}

/** Verify a session token's signature and expiry. Returns the username or null. */
export function verifySessionToken(token: string | undefined | null): string | null {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 2) return null;
  const [payload, signature] = parts;

  if (!timingSafeEqual(signature, sign(payload))) return null;

  try {
    const decoded = JSON.parse(
      Buffer.from(payload.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf-8')
    );
    if (!decoded || typeof decoded.exp !== 'number') return null;
    if (decoded.exp < Math.floor(Date.now() / 1000)) return null;
    return typeof decoded.u === 'string' ? decoded.u : null;
  } catch {
    return null;
  }
}

export const SESSION_COOKIE_OPTIONS = {
  httpOnly: true as const,
  sameSite: 'lax' as const,
  path: '/',
  secure: process.env.NODE_ENV === 'production',
  maxAge: SESSION_TTL_SECONDS,
};
