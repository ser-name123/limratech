import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import {
  verifyCredentials,
  createSessionToken,
  ADMIN_SESSION_COOKIE,
  SESSION_COOKIE_OPTIONS,
} from '@/lib/adminAuth';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const username = String(body.username || body.email || '').trim();
    const password = String(body.password || '');

    if (!verifyCredentials(username, password)) {
      // Generic message — do not reveal which field was wrong.
      return NextResponse.json(
        { success: false, error: 'Invalid admin username or password.' },
        { status: 401 }
      );
    }

    const token = createSessionToken(username);
    const cookieStore = await cookies();
    cookieStore.set(ADMIN_SESSION_COOKIE, token, SESSION_COOKIE_OPTIONS);

    return NextResponse.json({ success: true, username });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Login failed' },
      { status: 500 }
    );
  }
}
