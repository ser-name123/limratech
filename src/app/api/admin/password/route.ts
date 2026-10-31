import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import {
  ADMIN_SESSION_COOKIE,
  verifySessionToken,
  verifyPasswordEffective,
  hashPassword,
} from '@/lib/adminAuth';
import { dbGetAdminAuth, dbSetAdminAuth } from '@/lib/supabase';

/**
 * Update the admin LOGIN credentials (email/username and/or password).
 * Requires an active session and the correct current password.
 * Body: { currentPassword, newUsername?, newPassword? }
 */
export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    if (!verifySessionToken(cookieStore.get(ADMIN_SESSION_COOKIE)?.value)) {
      return NextResponse.json({ success: false, error: 'Please sign in again.' }, { status: 401 });
    }

    const body = await request.json().catch(() => ({}));
    const currentPassword = String(body.currentPassword || '');
    const newUsername = typeof body.newUsername === 'string' ? body.newUsername.trim() : '';
    const newPassword = typeof body.newPassword === 'string' ? body.newPassword : '';

    if (!newUsername && !newPassword) {
      return NextResponse.json({ success: false, error: 'Nothing to update.' }, { status: 400 });
    }
    if (newPassword && newPassword.length < 8) {
      return NextResponse.json(
        { success: false, error: 'New password must be at least 8 characters long.' },
        { status: 400 }
      );
    }
    if (newUsername && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newUsername)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid login email address.' },
        { status: 400 }
      );
    }

    // Verify the current password before allowing any change.
    const auth = await dbGetAdminAuth();
    if (!verifyPasswordEffective(currentPassword, auth.passwordHash)) {
      return NextResponse.json(
        { success: false, error: 'Your current password is incorrect.' },
        { status: 400 }
      );
    }

    const fields: { username?: string; passwordHash?: string } = {};
    if (newUsername) fields.username = newUsername;
    if (newPassword) fields.passwordHash = hashPassword(newPassword);

    const saved = await dbSetAdminAuth(fields);
    if (!saved) {
      return NextResponse.json(
        { success: false, error: 'Could not save your changes. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, username: newUsername || undefined });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Update failed' },
      { status: 500 }
    );
  }
}
