import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import pg from 'pg';

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  try { process.loadEnvFile('.env.local'); } catch {
    try { process.loadEnvFile('.env'); } catch {}
  }
}

const dbUrl = process.env.DATABASE_URL ? new URL(process.env.DATABASE_URL) : null;
const RDS_CONFIG = dbUrl ? {
  host: dbUrl.hostname,
  port: parseInt(dbUrl.port || '5432', 10),
  user: decodeURIComponent(dbUrl.username),
  password: decodeURIComponent(dbUrl.password),
  ssl: { rejectUnauthorized: false }
} : {
  host: process.env.PGHOST || 'neno-db.cu56aywm8089.us-east-1.rds.amazonaws.com',
  port: parseInt(process.env.PGPORT || '5432', 10),
  user: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD,
  ssl: { rejectUnauthorized: false }
};

const DUMMY_BLOGS = [];

const DUMMY_PROJECTS = [];
const DUMMY_CASE_STUDIES = [];

async function seedDatabase(targetDb) {
  console.log(`\nSeeding target database: "${targetDb}" on AWS RDS...`);
  const pool = new Pool({ ...RDS_CONFIG, database: targetDb });
  const schemaSql = await fs.readFile(new URL('../database/schema.sql', import.meta.url), 'utf8');
  await pool.query(schemaSql);

  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync('admin123', salt, 64).toString('hex');
  await pool.query(
    `INSERT INTO users (id, name, email, password_hash, role) 
     VALUES ($1, $2, $3, $4, 'admin') 
     ON CONFLICT (email) DO NOTHING`,
    [crypto.randomUUID(), 'Neno Team', 'admin@neno.com', `${salt}:${hash}`]
  );

  for (const b of DUMMY_BLOGS) {
    await pool.query(
      `INSERT INTO blogs (id, title, slug, category, author, publish_date, reading_time, short_description, content, button_text, button_link, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
       ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, content = EXCLUDED.content, updated_at = NOW()`,
      [b.id, b.title, b.slug, b.category, b.author, b.publish_date, b.reading_time, b.short_description, b.content, b.button_text, b.button_link, b.status]
    );
  }

  for (const p of DUMMY_PROJECTS) {
    await pool.query(
      `INSERT INTO projects (id, title, slug, category, client, publish_date, description, content, link, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, content = EXCLUDED.content, updated_at = NOW()`,
      [p.id, p.title, p.slug, p.category, p.client, p.publish_date, p.description, p.content, p.link, p.status]
    );
  }

  for (const c of DUMMY_CASE_STUDIES) {
    await pool.query(
      `INSERT INTO case_studies (id, title, slug, category, client, publish_date, description, content, link, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, content = EXCLUDED.content, updated_at = NOW()`,
      [c.id, c.title, c.slug, c.category, c.client, c.publish_date, c.description, c.content, c.link, c.status]
    );
  }

  const bCount = await pool.query('SELECT count(*) FROM blogs');
  const pCount = await pool.query('SELECT count(*) FROM projects');
  const cCount = await pool.query('SELECT count(*) FROM case_studies');
  console.log(`Done! "${targetDb}" has: blogs=${bCount.rows[0].count}, projects=${pCount.rows[0].count}, case_studies=${cCount.rows[0].count}`);
  await pool.end();
}

async function run() {
  await seedDatabase('postgres');
  await seedDatabase('awsneno');
}

run().catch(console.error);
