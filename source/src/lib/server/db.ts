import { Pool, type QueryResultRow } from 'pg';

const globalForDb = globalThis as unknown as { nenoPool?: Pool };

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is required in source/.env for PostgreSQL access.');
}

const rawUrl = process.env.DATABASE_URL;
const isRemote = rawUrl.includes('rds.amazonaws.com') || rawUrl.includes('sslmode=') || rawUrl.includes('.aws.') || rawUrl.includes('neon.tech');

// Clean connection string to prevent pg-connection-string from enforcing CA validation on self-signed RDS certificates
const cleanConnectionString = rawUrl
  .replace(/([?&])sslmode=[^&]*/gi, '$1')
  .replace(/\?&/, '?')
  .replace(/[?&]$/, '');

export const db =
  globalForDb.nenoPool ??
  new Pool({
    connectionString: cleanConnectionString,
    ssl: isRemote ? { rejectUnauthorized: false } : undefined,
  });
if (process.env.NODE_ENV !== 'production') globalForDb.nenoPool = db;

export const query = async <T extends QueryResultRow>(text: string, values: unknown[] = []) => {
  const result = await db.query<T>(text, values);
  return result.rows;
};
