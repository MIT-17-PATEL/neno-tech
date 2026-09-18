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

async function setupAndClean() {
  for (const dbName of ['postgres', 'awsneno']) {
    console.log(`Connecting to ${dbName}...`);
    const c = new Client({ ...baseConfig, database: dbName });
    await c.connect();

    // 1. Create or replace blog_posts view
    await c.query('CREATE OR REPLACE VIEW blog_posts AS SELECT * FROM blogs;');
    console.log(`Created view blog_posts on ${dbName}.`);

    // 2. Delete dummy case studies
    const delCs = await c.query("DELETE FROM case_studies WHERE id LIKE 'cs-%' OR id LIKE 'case-%'");
    console.log(`Deleted dummy case studies from ${dbName}: ${delCs.rowCount}`);

    // 3. Delete dummy projects
    const delProj = await c.query("DELETE FROM projects WHERE id LIKE 'proj-%' OR id LIKE 'project-%'");
    console.log(`Deleted dummy projects from ${dbName}: ${delProj.rowCount}`);

    const csCount = await c.query('SELECT count(*) FROM case_studies');
    const pCount = await c.query('SELECT count(*) FROM projects');
    const bCount = await c.query('SELECT count(*) FROM blogs');
    console.log(`${dbName} state -> blogs: ${bCount.rows[0].count}, case_studies: ${csCount.rows[0].count}, projects: ${pCount.rows[0].count}`);

    await c.end();
  }
}

setupAndClean().catch((err) => {
  console.error('Error running setup and clean:', err);
  process.exit(1);
});
