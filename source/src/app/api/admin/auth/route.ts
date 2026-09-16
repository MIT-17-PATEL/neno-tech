import { NextResponse } from 'next/server';
import { authenticate, clearAdminSession } from '@/lib/server/adminAuth';

export async function POST(request: Request) {
  const body = await request.json() as { email?: string; password?: string; action?: string };
  if (body.action === 'logout') {
    await clearAdminSession();
    return NextResponse.json({ ok: true });
  }
  if (!body.email || !body.password) return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
  if (!(await authenticate(body.email, body.password))) return NextResponse.json({ error: 'That email or password is not recognised.' }, { status: 401 });
  return NextResponse.json({ ok: true });
}
