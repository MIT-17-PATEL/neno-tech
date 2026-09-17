import pg from 'pg';
const { Pool } = pg;

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  try {
    const res = await pool.query("SELECT table_name FROM information_schema.tables WHERE table_schema='public'");
    console.log('Tables in DB:', res.rows.map(r => r.table_name));
  } finally {
    await pool.end();
  }
}

main().catch(console.error);
