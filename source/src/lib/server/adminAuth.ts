import crypto from 'node:crypto';
import { cookies } from 'next/headers';
import { query } from './db';

const COOKIE = 'neno-admin-session';
const secret = () => process.env.DATABASE_URL as string;

const sign = (value: string) => crypto.createHmac('sha256', secret()).update(value).digest('hex');
const tokenFor = (userId: string) => `${Buffer.from(userId).toString('base64url')}.${sign(userId)}`;

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

export const isAdminRequest = async () => {
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token) return false;
  const [encoded, signature] = token.split('.');
  if (!encoded || !signature) return false;
  const userId = Buffer.from(encoded, 'base64url').toString('utf8');
  const expected = Buffer.from(sign(userId));
  return signature.length === expected.length && crypto.timingSafeEqual(Buffer.from(signature), expected) && (await query('SELECT 1 FROM users WHERE id = $1', [userId])).length > 0;
};

export const clearAdminSession = async () => (await cookies()).delete(COOKIE);
