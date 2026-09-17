import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import pg from 'pg';

const { Pool } = pg;

const RDS_CONFIG = {
  host: 'neno-db.cu56aywm8089.us-east-1.rds.amazonaws.com',
  port: 5432,
  user: 'postgres',
  password: 'TirthAshishkumarPatel02032005',
  ssl: { rejectUnauthorized: false }
};

const DUMMY_BLOGS = [
  {
    id: 'blog-1',
    title: 'Architecting Autonomous Multi-Agent Swarms with LangGraph & Claude 3.5',
    slug: 'architecting-autonomous-multi-agent-swarms',
    category: 'Agentic AI',
    author: 'Neno AI Lab',
    publish_date: '2026-03-10',
    reading_time: '5 min read',
    short_description: 'How to design resilient multi-agent swarms with Claude 3.5 Sonnet, tool-calling safeguards, and stateful graph recovery in mission-critical environments.',
    content: 'Building production-grade multi-agent architectures requires transitioning from linear chains to stateful cyclical execution graphs. In this deep dive, we explore how LangGraph orchestrates specialized micro-agents with deterministic handoffs, error-recovery loops, and rigorous human-in-the-loop validation checkpoints.',
    button_text: 'Read Article',
    button_link: '/blog-single-with-sidebar/1',
    status: 'Published',
  },
  {
    id: 'blog-2',
    title: 'Production RAG at Scale: Hybrid Search, Re-Ranking, and Vector Optimization',
    slug: 'production-rag-at-scale-hybrid-search',
    category: 'Enterprise AI',
    author: 'Neno Systems',
    publish_date: '2026-03-04',
    reading_time: '7 min read',
    short_description: 'Optimizing enterprise retrieval pipelines with hybrid BM25 + dense vector embeddings, cross-encoder re-ranking, and quantization techniques.',
    content: 'Standard vector search degrades when dealing with enterprise acronyms, part numbers, and domain-specific terminology. Learn how we engineer hybrid sparse-dense retrieval pipelines with Cohere re-ranking and pgvector index tuning to achieve 98.6% retrieval precision.',
    button_text: 'Read Article',
    button_link: '/blog-single-with-sidebar/2',
    status: 'Published',
  },
  {
    id: 'blog-3',
    title: 'Engineering Real-Time Autonomous Voice Agents with Sub-500ms Latency',
    slug: 'engineering-real-time-voice-agents-sub-500ms',
    category: 'Voice AI',
    author: 'Voice AI Research',
    publish_date: '2026-02-26',
    reading_time: '6 min read',
    short_description: 'Building full-duplex conversational voice agents with sub-500ms turn-around latency using WebRTC and streaming speech synthesis architectures.',
    content: 'Human conversation requires response latencies under 500 milliseconds. We examine audio chunk streaming, websocket pipeline parallelization, local voice activity detection (VAD), and speculative LLM completion to eliminate conversational lag.',
    button_text: 'Read Article',
    button_link: '/blog-single-with-sidebar/3',
    status: 'Published',
  },
  {
    id: 'blog-4',
    title: 'Building Production MCP Servers: Connecting LLMs to Enterprise Databases',
    slug: 'building-production-mcp-servers-enterprise-databases',
    category: 'Tool Use & MCP',
    author: 'Mit Patel',
    publish_date: '2026-02-18',
    reading_time: '8 min read',
    short_description: 'Connecting LLMs securely to production databases, internal APIs, and private infrastructure using the Model Context Protocol (MCP).',
    content: 'The Model Context Protocol establishes an open, standardized bridge between foundation models and private data silos. Here is an end-to-end engineering guide to deploying secure, rate-limited, and audited MCP servers in high-compliance environments.',
    button_text: 'Read Article',
    button_link: '/blog-single-with-sidebar/4',
    status: 'Published',
  },
  {
    id: 'blog-5',
    title: 'LoRA Fine-Tuning vs Prompt Context Caching: 2026 Production Benchmark',
    slug: 'lora-fine-tuning-vs-prompt-context-caching-benchmark',
    category: 'Model Engineering',
    author: 'Neno Research',
    publish_date: '2026-02-12',
    reading_time: '6 min read',
    short_description: 'A comprehensive benchmark on cost, latency, and accuracy trade-offs between LoRA fine-tuning and prompt context caching for domain-specific tasks.',
    content: 'With context caching now widely available across top-tier LLM providers, should engineering teams still invest in LoRA fine-tuning? We analyze empirical benchmarks across 100,000 evaluation prompts measuring domain adherence, token expenditure, and cold-start latency.',
    button_text: 'Read Article',
    button_link: '/blog-single-with-sidebar/5',
    status: 'Published',
  },
];

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
