import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import pg from 'pg';

const { Client, Pool } = pg;

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

async function run() {
  console.log('1. Connecting to AWS RDS postgres maintenance database...');
  const rootClient = new Client({ ...RDS_CONFIG, database: 'postgres' });
  await rootClient.connect();

  const checkDb = await rootClient.query("SELECT 1 FROM pg_database WHERE datname = 'awsneno'");
  if (checkDb.rows.length === 0) {
    console.log('Creating database "awsneno" on AWS RDS...');
    await rootClient.query('CREATE DATABASE awsneno');
    console.log('Database "awsneno" created successfully!');
  } else {
    console.log('Database "awsneno" already exists on AWS RDS.');
  }
  await rootClient.end();

  console.log('2. Connecting directly to "awsneno" database on AWS RDS...');
  const pool = new Pool({ ...RDS_CONFIG, database: 'awsneno' });

  console.log('3. Applying schema (tables: users, blogs, case_studies, projects)...');
  const schemaSql = await fs.readFile(new URL('../database/schema.sql', import.meta.url), 'utf8');
  await pool.query(schemaSql);
  console.log('Schema tables applied successfully.');

  console.log('4. Creating admin user if missing...');
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync('admin123', salt, 64).toString('hex');
  await pool.query(
    `INSERT INTO users (id, name, email, password_hash, role) 
     VALUES ($1, $2, $3, $4, 'admin') 
     ON CONFLICT (email) DO NOTHING`,
    [crypto.randomUUID(), 'Neno Team', 'admin@neno.com', `${salt}:${hash}`]
  );

  console.log('5. Seeding blogs (skipped: dummy blogs removed)...');
  const DUMMY_BLOGS = [];

  for (const b of DUMMY_BLOGS) {
    await pool.query(
      `INSERT INTO blogs (id, title, slug, category, author, publish_date, reading_time, short_description, content, button_text, button_link, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
       ON CONFLICT (slug) DO UPDATE SET
         title = EXCLUDED.title,
         category = EXCLUDED.category,
         author = EXCLUDED.author,
         short_description = EXCLUDED.short_description,
         content = EXCLUDED.content,
         status = EXCLUDED.status,
         updated_at = NOW()`,
      [b.id, b.title, b.slug, b.category, b.author, b.publish_date, b.reading_time, b.short_description, b.content, b.button_text, b.button_link, b.status]
    );
  }
  console.log(`Seeded ${DUMMY_BLOGS.length} blogs.`);

  console.log('6. Seeding projects (skipped: dummy data removed)...');
  const DUMMY_PROJECTS = [];

  for (const p of DUMMY_PROJECTS) {
    await pool.query(
      `INSERT INTO projects (id, title, slug, category, client, publish_date, description, content, link, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       ON CONFLICT (slug) DO UPDATE SET
         title = EXCLUDED.title,
         category = EXCLUDED.category,
         client = EXCLUDED.client,
         description = EXCLUDED.description,
         content = EXCLUDED.content,
         status = EXCLUDED.status,
         updated_at = NOW()`,
      [p.id, p.title, p.slug, p.category, p.client, p.publish_date, p.description, p.content, p.link, p.status]
    );
  }
  console.log(`Seeded ${DUMMY_PROJECTS.length} projects.`);

  console.log('7. Seeding case studies (skipped: dummy data removed)...');
  const DUMMY_CASE_STUDIES = [];

  for (const c of DUMMY_CASE_STUDIES) {
    await pool.query(
      `INSERT INTO case_studies (id, title, slug, category, client, publish_date, description, content, link, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       ON CONFLICT (slug) DO UPDATE SET
         title = EXCLUDED.title,
         category = EXCLUDED.category,
         client = EXCLUDED.client,
         description = EXCLUDED.description,
         content = EXCLUDED.content,
         status = EXCLUDED.status,
         updated_at = NOW()`,
      [c.id, c.title, c.slug, c.category, c.client, c.publish_date, c.description, c.content, c.link, c.status]
    );
  }
  console.log(`Seeded ${DUMMY_CASE_STUDIES.length} case studies.`);

  // Verify counts
  const blogsCount = await pool.query('SELECT count(*) FROM blogs');
  const projCount = await pool.query('SELECT count(*) FROM projects');
  const caseCount = await pool.query('SELECT count(*) FROM case_studies');
  const userCount = await pool.query('SELECT count(*) FROM users');

  console.log('--- VERIFICATION ON AWS RDS awsneno ---');
  console.log('Users count:', userCount.rows[0].count);
  console.log('Blogs count:', blogsCount.rows[0].count);
  console.log('Projects count:', projCount.rows[0].count);
  console.log('Case studies count:', caseCount.rows[0].count);
  console.log('ALL DATA SUCCESSFULLY CREATED IN AWS RDS awsneno!');

  await pool.end();
}

run().catch(e => {
  console.error('Migration to AWS RDS failed:', e);
  process.exit(1);
});
