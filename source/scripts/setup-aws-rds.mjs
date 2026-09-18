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

  console.log('6. Seeding 5 dummy projects...');
  const DUMMY_PROJECTS = [
    {
      id: 'proj-1',
      title: 'AI-Native CRM System for Enterprise Bottleneck Resolution',
      slug: 'ai-native-crm-system',
      category: 'Financial Services',
      client: 'Enterprise FinTech',
      publish_date: '2026-01-15',
      description: 'Engineered an autonomous multi-agent CRM system that identifies deal pipeline bottlenecks, generates instant lead summaries, and automates high-touch follow-up workflows.',
      content: 'Designed and deployed an AI-native CRM architecture that replaces manual SDR qualification and CRM data entry with autonomous event-driven agent swarms.',
      link: '/project-details',
      status: 'Published',
    },
    {
      id: 'proj-2',
      title: 'Smart Email Outreach & Personalized Content Platform',
      slug: 'smart-email-outreach-platform',
      category: 'Enterprise SaaS',
      client: 'Hyper-Growth SaaS',
      publish_date: '2026-02-01',
      description: 'Built a contextual generative AI engine that personalizes multi-channel outreach at scale, dynamically tailoring pitches based on prospect behavioral data.',
      content: 'Architected an automated content personalization and outreach orchestration engine analyzing prospect firmographic milestones and sales conversation transcripts.',
      link: '/project-details',
      status: 'Published',
    },
    {
      id: 'proj-3',
      title: 'Unified Enterprise Data Hub & Predictive Forecasting',
      slug: 'unified-enterprise-data-hub',
      category: 'Logistics & Supply Chain',
      client: 'Global Logistics Corp',
      publish_date: '2026-02-18',
      description: 'Architected a cloud-native real-time predictive analytics hub integrating fragmented data lakes into a centralized neural forecasting engine.',
      content: 'Modernized a fragmented enterprise logistics infrastructure by implementing real-time Apache Kafka streaming pipelines with 99.4% demand prediction accuracy.',
      link: '/project-details',
      status: 'Published',
    },
    {
      id: 'proj-4',
      title: 'Autonomous Voice Telephony & Multi-Channel Contact Mesh',
      slug: 'autonomous-voice-telephony-mesh',
      category: 'Enterprise SaaS',
      client: 'Global Telecom & Enterprise Support',
      publish_date: '2026-02-25',
      description: 'Deployed sub-200ms conversational audio pipelines integrated with WebRTC and carrier SIP trunks, automating Tier-1 customer resolution.',
      content: 'Architected low-latency full-duplex speech AI agents with dynamic interruption handling, caller intent classification, and real-time knowledge base retrieval.',
      link: '/project-details',
      status: 'Published',
    },
    {
      id: 'proj-5',
      title: 'Real-Time Fraud Detection & Autonomous Transaction Guard',
      slug: 'real-time-fraud-detection-engine',
      category: 'Financial Services',
      client: 'Tier-1 Digital Banking Group',
      publish_date: '2026-03-01',
      description: 'Engineered a streaming graph-neural network platform processing 45,000 tx/sec to detect synthetic identity theft and unauthorized transactions.',
      content: 'Designed and deployed an ultra-low latency risk assessment engine leveraging vectorized transaction embeddings, anomaly detection models, and automated compliance alerts.',
      link: '/project-details',
      status: 'Published',
    },
  ];

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

  console.log('7. Seeding 5 dummy case studies...');
  const DUMMY_CASE_STUDIES = [
    {
      id: 'cs-1',
      title: 'Autonomous Voice AI Agents for Real-Time FinTech Underwriting',
      slug: 'autonomous-voice-ai-agents-fintech',
      category: 'Financial Services',
      client: 'Global FinTech & Lending Platform',
      publish_date: '2026-01-20',
      description: 'Deployed autonomous voice agents powered by <200ms streaming LLM pipelines to conduct borrower pre-qualifications and real-time document verification.',
      content: 'Built a customized voice pipeline with Neno Voice, carrier-grade SIP routing, and deterministic guardrails ensuring 100% regulatory compliance.',
      link: '/case-studies',
      status: 'Published',
    },
    {
      id: 'cs-2',
      title: 'Multi-Agent Swarms for Automated Healthcare Claims Adjudication',
      slug: 'multi-agent-swarms-healthcare-claims',
      category: 'Healthcare & Insurance',
      client: 'Tier-1 Healthcare Network',
      publish_date: '2026-02-05',
      description: 'Engineered multi-agent swarms that autonomously review medical claims, parse unstructured EHR notes, cross-reference policy guidelines, and flag fraud.',
      content: 'Implemented deterministic multi-agent architectures running inside HIPAA-compliant private cloud VPCs with continuous human-in-the-loop oversight.',
      link: '/case-studies',
      status: 'Published',
    },
    {
      id: 'cs-3',
      title: 'Forward-Deployed Squad: Modernizing Legacy Logistics ERP with AI',
      slug: 'forward-deployed-squad-logistics-erp',
      category: 'Logistics & Supply Chain',
      client: 'Global Freight & Supply Chain Operator',
      publish_date: '2026-02-22',
      description: 'Embedded a 5-engineer Neno squad to modernize a legacy on-premises ERP into a real-time, predictive dispatch and tracking platform.',
      content: 'Redesigned data pipelines with modern Next.js frontends, Kafka real-time event streaming, and predictive route optimization models.',
      link: '/case-studies',
      status: 'Published',
    },
    {
      id: 'cs-4',
      title: 'Autonomous Dialer & Unified CRM for Enterprise SaaS Sales',
      slug: 'autonomous-dialer-unified-crm-saas',
      category: 'Enterprise SaaS',
      client: 'High-Growth B2B Cloud Platform',
      publish_date: '2026-03-01',
      description: 'Deployed Neno Dialer with bidirectional CRM synchronization to automate outbound follow-ups, qualification notes, and calendar scheduling.',
      content: 'Integrated Neno Dialer directly with Salesforce and HubSpot, enabling automatic call transcription, sentiment analysis, and instant meeting booking.',
      link: '/case-studies',
      status: 'Published',
    },
    {
      id: 'cs-5',
      title: 'Autonomous IoT Predictive Maintenance & Edge AI for Smart Manufacturing',
      slug: 'predictive-maintenance-edge-ai-manufacturing',
      category: 'Manufacturing & Robotics',
      client: 'Global Industrial Automation Group',
      publish_date: '2026-03-08',
      description: 'Deployed containerized edge ML models and acoustic anomaly detectors across 1,200 CNC machines to eliminate unplanned factory downtime.',
      content: 'Architected lightweight on-premise edge inference agents connected to vibration sensors with automated maintenance work order dispatching.',
      link: '/case-studies',
      status: 'Published',
    },
  ];

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
