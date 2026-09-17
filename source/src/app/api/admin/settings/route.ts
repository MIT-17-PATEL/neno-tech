import crypto from 'node:crypto';
import { NextResponse } from 'next/server';
import { isAdminRequest, verifyPassword } from '@/lib/server/adminAuth';
import { query } from '@/lib/server/db';

const unauthorized = () => NextResponse.json({ error: 'Unauthorised.' }, { status: 401 });
export async function GET() {
  if (!(await isAdminRequest())) return unauthorized();
  const rows = await query<{ name: string; email: string; role: string }>('SELECT name,email,role FROM users ORDER BY created_at LIMIT 1');
  return NextResponse.json(rows[0]);
}
export async function PUT(request: Request) {
  if (!(await isAdminRequest())) return unauthorized();
  const body = await request.json();
  if (body.currentPassword || body.newPassword) {
    const users = await query<{ id: string; password_hash: string }>('SELECT id,password_hash FROM users ORDER BY created_at LIMIT 1');
    const user = users[0];
    if (!user || !body.currentPassword || !verifyPassword(body.currentPassword, user.password_hash)) return NextResponse.json({ error: 'Current password is incorrect.' }, { status: 400 });
    if (!body.newPassword || String(body.newPassword).length < 6) return NextResponse.json({ error: 'New password must be at least 6 characters.' }, { status: 400 });
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.scryptSync(body.newPassword, salt, 64).toString('hex');
    await query('UPDATE users SET password_hash=$2,updated_at=NOW() WHERE id=$1', [user.id, `${salt}:${hash}`]);
    return NextResponse.json({ ok: true });
  }
  if (!body.name || !body.email) return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
  const rows = await query('UPDATE users SET name=$2,email=$3,updated_at=NOW() WHERE id=(SELECT id FROM users ORDER BY created_at LIMIT 1) RETURNING name,email,role', [body.name, body.email]);
  return NextResponse.json(rows[0]);
}
