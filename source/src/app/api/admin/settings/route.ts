import crypto from 'node:crypto';
import { NextResponse } from 'next/server';
import { getAdminUser, verifyPassword } from '@/lib/server/adminAuth';
import { query } from '@/lib/server/db';

const unauthorized = () => NextResponse.json({ error: 'Unauthorised.' }, { status: 401 });

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function GET() {
  const user = await getAdminUser();
  if (!user) return unauthorized();

  return NextResponse.json({
    name: user.name,
    email: user.email,
    role: user.role,
  });
}

export async function PUT(request: Request) {
  const user = await getAdminUser();
  if (!user) return unauthorized();

  const body = (await request.json().catch(() => ({}))) as {
    name?: string;
    email?: string;
    currentPassword?: string;
    newPassword?: string;
  };

  // Reject direct unverified password changes
  if (body.currentPassword !== undefined || body.newPassword !== undefined) {
    return NextResponse.json(
      { error: 'Password changes require secure OTP verification. Please use the verification flow.' },
      { status: 400 }
    );
  }

  // Handle Display Name Update
  const name = String(body.name || '').trim();
  if (!name) {
    return NextResponse.json({ error: 'Display name is required.' }, { status: 400 });
  }

  // If email is being changed, require OTP flow
  if (body.email && body.email.trim().toLowerCase() !== user.email.toLowerCase()) {
    return NextResponse.json(
      { error: 'Email changes require secure 2-step OTP verification. Please use the Change Email flow.' },
      { status: 400 }
    );
  }

  const updatedRows = await query<{ id: string; name: string; email: string; role: string }>(
    'UPDATE users SET name = $2, updated_at = NOW() WHERE id = $1 RETURNING id, name, email, role',
    [user.id, name]
  );

  return NextResponse.json(updatedRows[0]);
}

