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

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is required in source/.env or source/.env.local.');
  process.exit(1);
}

const isRemote = process.env.DATABASE_URL?.includes('rds.amazonaws.com');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isRemote ? { rejectUnauthorized: false } : undefined,
});

const DUMMY_BLOGS = [];

const DUMMY_PROJECTS = [];
const DUMMY_CASE_STUDIES = [];

async function seed() {
  try {
    // 1. Ensure schema exists
    await pool.query(await fs.readFile(new URL('../database/schema.sql', import.meta.url), 'utf8'));

    // 2. Seed Blogs
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
    console.log(`Seeded ${DUMMY_BLOGS.length} blogs successfully.`);

    // 3. Seed Projects
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
    console.log(`Seeded ${DUMMY_PROJECTS.length} projects successfully.`);

    // 4. Seed Case Studies
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
    console.log(`Seeded ${DUMMY_CASE_STUDIES.length} case studies successfully.`);

    console.log('Database seeding complete: 5 dummy items seeded per collection.');
  } catch (error) {
    console.error('Seeding error:', error.message);
  } finally {
    await pool.end();
  }
}

seed();
