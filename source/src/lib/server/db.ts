import { Pool, type QueryResultRow } from 'pg';

const globalForDb = globalThis as unknown as { nenoPool?: Pool };

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is required in source/.env for PostgreSQL access.');
}

const isRemote = process.env.DATABASE_URL?.includes('rds.amazonaws.com');

export const db =
  globalForDb.nenoPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: isRemote ? { rejectUnauthorized: false } : undefined,
  });
if (process.env.NODE_ENV !== 'production') globalForDb.nenoPool = db;

export const query = async <T extends QueryResultRow>(text: string, values: unknown[] = []) => {
  const result = await db.query<T>(text, values);
  return result.rows;
};
