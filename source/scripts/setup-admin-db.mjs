import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import pg from 'pg';

const { Pool } = pg;
if (!process.env.DATABASE_URL) {
  try {
    process.loadEnvFile('.env.local');
  } catch {
    try {
      process.loadEnvFile('.env');
    } catch {}
  }
}
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is required in source/.env or source/.env.local.');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
try {
  await pool.query(await fs.readFile(new URL('../database/schema.sql', import.meta.url), 'utf8'));
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync('admin123', salt, 64).toString('hex');
  await pool.query(`INSERT INTO users (id,name,email,password_hash,role) VALUES ($1,$2,$3,$4,'admin') ON CONFLICT (email) DO NOTHING`, [crypto.randomUUID(), 'Neno team', 'admin@neno.com', `${salt}:${hash}`]);
  console.log('NenoDB schema is ready and the admin user exists.');
} finally {
  await pool.end();
}
