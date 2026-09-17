import crypto from 'node:crypto';
import { cookies } from 'next/headers';
import { query } from './db';

const COOKIE = 'neno-admin-session';
const secret = () => process.env.DATABASE_URL as string;

const sign = (value: string) => crypto.createHmac('sha256', secret()).update(value).digest('hex');
const tokenFor = (userId: string) => `${Buffer.from(userId).toString('base64url')}.${sign(userId)}`;

export const hashPassword = (password: string): string => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
};

export const verifyPassword = (password: string, stored: string) => {
  const [salt, hash] = stored.split(':');
  if (!salt || !hash) return false;
  const actual = crypto.scryptSync(password, salt, 64);
  const expected = Buffer.from(hash, 'hex');
  return expected.length === actual.length && crypto.timingSafeEqual(actual, expected);
};

export const authenticate = async (email: string, password: string) => {
  const users = await query<{ id: string; password_hash: string }>('SELECT id, password_hash FROM users WHERE lower(email) = lower($1)', [email.trim()]);
  const user = users[0];
  if (!user || !verifyPassword(password, user.password_hash)) return false;
  const store = await cookies();
  store.set(COOKIE, tokenFor(user.id), { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/', maxAge: 60 * 60 * 8 });
  return true;
};

export const getAdminUser = async () => {
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token) return null;
  const [encoded, signature] = token.split('.');
  if (!encoded || !signature) return null;
  const userId = Buffer.from(encoded, 'base64url').toString('utf8');
  const expected = Buffer.from(sign(userId));
  if (signature.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(signature), expected)) {
    return null;
  }
  const users = await query<{ id: string; name: string; email: string; role: string; password_hash: string }>(
    'SELECT id, name, email, role, password_hash FROM users WHERE id = $1',
    [userId]
  );
  return users[0] || null;
};

export const isAdminRequest = async () => (await getAdminUser()) !== null;

export const clearAdminSession = async () => (await cookies()).delete(COOKIE);


