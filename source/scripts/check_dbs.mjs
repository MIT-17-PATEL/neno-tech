import pg from 'pg';
const { Client } = pg;

if (!process.env.DATABASE_URL) {
  try { process.loadEnvFile('.env.local'); } catch {
    try { process.loadEnvFile('.env'); } catch {}
  }
}

const dbUrl = process.env.DATABASE_URL ? new URL(process.env.DATABASE_URL) : null;
const config = dbUrl ? {
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

async function test(dbName) {
  const c = new Client({ ...config, database: dbName });
  await c.connect();
  console.log(`=== DATABASE: ${dbName} ===`);
  const tables = await c.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'");
  console.log('Tables:', tables.rows.map(r => r.table_name));
  for (const table of ['blogs', 'projects', 'case_studies', 'users']) {
    try {
      const cnt = await c.query(`SELECT count(*) FROM "${table}"`);
      console.log(`  ${table}: ${cnt.rows[0].count} rows`);
    } catch (e) {
      console.log(`  ${table}: ${e.message}`);
    }
  }
  await c.end();
}

async function run() {
  await test('postgres');
  await test('awsneno');
}

run();
