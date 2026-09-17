import pg from 'pg';
import fs from 'node:fs';

let databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl && fs.existsSync('.env')) {
  const content = fs.readFileSync('.env', 'utf8');
  for (const line of content.split('\n')) {
    const match = line.match(/^\s*DATABASE_URL\s*=\s*["']?([^"'\r\n]+)["']?/);
    if (match) {
      databaseUrl = match[1];
      break;
    }
  }
}

if (!databaseUrl) {
  console.error('DATABASE_URL not found.');
  process.exit(1);
}

const { Pool } = pg;
const pool = new Pool({ connectionString: databaseUrl });

async function main() {
  try {
    const tablesRes = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);
    console.log('Tables in DB:', tablesRes.rows.map(r => r.table_name));

    for (const tbl of ['projects', 'case_studies', 'blogs']) {
      const colRes = await pool.query(`
        SELECT column_name, data_type, is_nullable, column_default
        FROM information_schema.columns
        WHERE table_name = $1
        ORDER BY ordinal_position
      `, [tbl]);
      console.log(`\nColumns for ${tbl}:`);
      console.table(colRes.rows);

      const countRes = await pool.query(`SELECT COUNT(*) FROM "${tbl}"`);
      console.log(`Total rows in ${tbl}:`, countRes.rows[0].count);
    }
  } catch (err) {
    console.error('Error inspecting DB:', err);
  } finally {
    await pool.end();
  }
}

main();
