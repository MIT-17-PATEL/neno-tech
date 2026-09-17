import fs from 'node:fs/promises';
import pg from 'pg';

const { Pool } = pg;
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is required in source/.env.');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

try {
  const schemaSql = await fs.readFile(new URL('../database/schema.sql', import.meta.url), 'utf8');
  await pool.query(schemaSql);
  console.log('Successfully applied database schema including otp_verifications table.');
} catch (err) {
  console.error('Migration error:', err);
  process.exit(1);
} finally {
  await pool.end();
}
