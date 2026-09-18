import pg from 'pg';
const { Client } = pg;

if (!process.env.DATABASE_URL) {
  try { process.loadEnvFile('.env.local'); } catch {
    try { process.loadEnvFile('.env'); } catch {}
  }
}

const dbUrl = new URL(process.env.DATABASE_URL);
const baseConfig = {
  host: dbUrl.hostname,
  port: parseInt(dbUrl.port || '5432', 10),
  user: decodeURIComponent(dbUrl.username),
  password: decodeURIComponent(dbUrl.password),
  ssl: { rejectUnauthorized: false }
};

async function cleanBlogs(dbName) {
  console.log(`Connecting to database: ${dbName}...`);
  const client = new Client({ ...baseConfig, database: dbName });
  await client.connect();

  const toDelete = await client.query(
    "SELECT id, title FROM blogs WHERE id LIKE 'blog-%' OR title LIKE '%Autonomous Multi-Agent Swarms%' OR title LIKE '%Production RAG at Scale%' OR title LIKE '%Engineering Real-Time Autonomous Voice Agents%' OR title LIKE '%Building Production MCP Servers%' OR title LIKE '%LoRA Fine-Tuning vs Prompt Context Caching%'"
  );

  console.log(`Found ${toDelete.rows.length} dummy blogs in ${dbName}:`);
  for (const b of toDelete.rows) {
    console.log(` - [${b.id}] ${b.title}`);
  }

  if (toDelete.rows.length > 0) {
    const res = await client.query(
      "DELETE FROM blogs WHERE id LIKE 'blog-%' OR title LIKE '%Autonomous Multi-Agent Swarms%' OR title LIKE '%Production RAG at Scale%' OR title LIKE '%Engineering Real-Time Autonomous Voice Agents%' OR title LIKE '%Building Production MCP Servers%' OR title LIKE '%LoRA Fine-Tuning vs Prompt Context Caching%'"
    );
    console.log(`Deleted ${res.rowCount} dummy blogs from ${dbName}.`);
  } else {
    console.log(`No dummy blogs to delete in ${dbName}.`);
  }

  const remaining = await client.query('SELECT id, title, slug FROM blogs');
  console.log(`Total remaining blogs in ${dbName}: ${remaining.rows.length}`);
  for (const r of remaining.rows) {
    console.log(` - [${r.id}] ${r.title} (/${r.slug})`);
  }

  await client.end();
}

async function run() {
  for (const db of ['postgres', 'awsneno']) {
    try {
      await cleanBlogs(db);
    } catch (err) {
      console.error(`Error cleaning ${db}:`, err.message);
    }
  }
}

run();
