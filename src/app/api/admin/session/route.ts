import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { ADMIN_SESSION_COOKIE, verifySessionToken } from '@/lib/adminAuth';

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  const username = verifySessionToken(token);
  return NextResponse.json({ authenticated: Boolean(username), username: username || null });
}
