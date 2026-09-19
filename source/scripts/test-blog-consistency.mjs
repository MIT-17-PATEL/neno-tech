import pg from 'pg';
import crypto from 'node:crypto';
const { Client } = pg;

// Load environment variables
if (!process.env.DATABASE_URL) {
  try { process.loadEnvFile('.env.local'); } catch {
    try { process.loadEnvFile('.env'); } catch {}
  }
}

const dbUrl = new URL(process.env.DATABASE_URL);
const clientConfig = {
  host: dbUrl.hostname,
  port: parseInt(dbUrl.port || '5432', 10),
  user: decodeURIComponent(dbUrl.username),
  password: decodeURIComponent(dbUrl.password),
  database: dbUrl.pathname.replace(/^\//, ''),
  ssl: { rejectUnauthorized: false }
};

async function runEndToEndVerification() {
  console.log('====================================================');
  console.log('Starting End-to-End Blog Data Consistency Test');
  console.log(`Target RDS Host: ${clientConfig.host}`);
  console.log(`Database: ${clientConfig.database}`);
  console.log('====================================================\n');

  const client = new Client(clientConfig);
  await client.connect();
  console.log('Connected to AWS RDS PostgreSQL successfully.\n');

  const testId = crypto.randomUUID();
  const testSlug = `e2e-agentic-test-${Date.now()}`;
  const testTitle = 'E2E Verified: Autonomous Agent Swarms in Production';
  const testCategory = 'Agentic AI';
  const testAuthor = 'Neno AI Research Lab';
  const testShortDesc = 'Automated end-to-end verification post testing live database reactivity.';
  const testContent = 'Paragraph 1: Testing real-time database synchronization.\n\nParagraph 2: Ensuring zero caching delays and complete single source of truth.';

  try {
    // Step 1: Raw SQL INSERT into blog_posts
    console.log(`[Step 1] Inserting test post into "blog_posts" view (id: ${testId})...`);
    const insertRes = await client.query(
      `INSERT INTO blog_posts (
        id, title, slug, category, author, publish_date, reading_time, short_description, content, button_text, button_link, status
      ) VALUES ($1, $2, $3, $4, $5, NOW(), $6, $7, $8, $9, $10, $11) RETURNING id, title, slug, status`,
      [testId, testTitle, testSlug, testCategory, testAuthor, '4 min read', testShortDesc, testContent, 'Read More', '', 'Published']
    );
    console.log(`  Inserted: "${insertRes.rows[0].title}" [status: ${insertRes.rows[0].status}]`);

    // Step 2: Confirm physical table "blogs" and view "blog_posts" both reflect the post
    console.log('\n[Step 2] Verifying direct PostgreSQL query on "blogs" physical table...');
    const blogsQuery = await client.query('SELECT id, title, status FROM blogs WHERE id = $1', [testId]);
    if (blogsQuery.rows.length === 1) {
      console.log(`  PASSED: Found post in physical table "blogs": ${blogsQuery.rows[0].title}`);
    } else {
      throw new Error('FAILED: Post not found in physical table "blogs"');
    }

    // Step 3: Verify the public server-side query format
    console.log('\n[Step 3] Simulating public server-component query (getPublishedBlogs)...');
    const publishedQuery = await client.query(
      `SELECT id, title, slug, category, author, to_char(publish_date, 'DD Month, YYYY') AS "date", short_description AS "shortDescription", content, status 
       FROM blog_posts 
       WHERE status = 'Published' AND id = $1`,
      [testId]
    );
    if (publishedQuery.rows.length === 1) {
      console.log(`  PASSED: Public data query finds published post.`);
      console.log(`  Data: ${JSON.stringify(publishedQuery.rows[0], null, 2)}`);
    } else {
      throw new Error('FAILED: Public data query did not return published post');
    }

    // Step 4: Verify slug lookup (for /blog-single/[id])
    console.log(`\n[Step 4] Simulating single-article lookup by slug ("${testSlug}")...`);
    const singleBySlug = await client.query(
      `SELECT id, title, slug FROM blog_posts WHERE (id = $1 OR slug = $1) AND status = 'Published' LIMIT 1`,
      [testSlug]
    );
    if (singleBySlug.rows.length === 1 && singleBySlug.rows[0].id === testId) {
      console.log(`  PASSED: Successfully resolved article by slug: "${singleBySlug.rows[0].slug}"`);
    } else {
      throw new Error('FAILED: Slug lookup failed');
    }

    // Step 5: Delete the post (simulating admin delete)
    console.log(`\n[Step 5] Deleting test post via blog_posts (id: ${testId})...`);
    await client.query('DELETE FROM blog_posts WHERE id = $1', [testId]);
    console.log('  Deleted successfully.');

    // Step 6: Verify immediate absence without any stale cache
    console.log('\n[Step 6] Confirming post is immediately gone from public query...');
    const checkDeleted = await client.query(
      `SELECT id FROM blog_posts WHERE (id = $1 OR slug = $2)`,
      [testId, testSlug]
    );
    if (checkDeleted.rows.length === 0) {
      console.log('  PASSED: Post has immediately disappeared from PostgreSQL queries with zero lag.');
    } else {
      throw new Error('FAILED: Post still visible after deletion');
    }

    console.log('\n====================================================');
    console.log('All End-to-End Verification Steps PASSED!');
    console.log('====================================================\n');
  } finally {
    await client.end();
  }
}

runEndToEndVerification().catch(err => {
  console.error('\nE2E Verification FAILED:', err);
  process.exit(1);
});
