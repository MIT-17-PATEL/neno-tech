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

async function migrateAndSeed() {
  try {
    console.log('--- 1. Altering tables to ensure all columns exist ---');
    await pool.query(`
      ALTER TABLE projects ADD COLUMN IF NOT EXISTS industry TEXT DEFAULT '';
      ALTER TABLE projects ADD COLUMN IF NOT EXISTS image TEXT DEFAULT '';
      ALTER TABLE projects ADD COLUMN IF NOT EXISTS metric1_value TEXT DEFAULT '';
      ALTER TABLE projects ADD COLUMN IF NOT EXISTS metric1_label TEXT DEFAULT '';
      ALTER TABLE projects ADD COLUMN IF NOT EXISTS metric2_value TEXT DEFAULT '';
      ALTER TABLE projects ADD COLUMN IF NOT EXISTS metric2_label TEXT DEFAULT '';
      ALTER TABLE projects ADD COLUMN IF NOT EXISTS metric3_value TEXT DEFAULT '';
      ALTER TABLE projects ADD COLUMN IF NOT EXISTS metric3_label TEXT DEFAULT '';
      ALTER TABLE projects ADD COLUMN IF NOT EXISTS tags TEXT[] DEFAULT '{}';
      ALTER TABLE projects ADD COLUMN IF NOT EXISTS related_case_study TEXT DEFAULT '';

      ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS industry TEXT DEFAULT '';
      ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS badge TEXT DEFAULT '';
      ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS hero_image TEXT DEFAULT '';
      ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS overview TEXT DEFAULT '';
      ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS challenge TEXT DEFAULT '';
      ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS solution TEXT DEFAULT '';
      ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS implementation TEXT DEFAULT '';
      ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS results TEXT DEFAULT '';
      ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS metric1_value TEXT DEFAULT '';
      ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS metric1_label TEXT DEFAULT '';
      ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS metric2_value TEXT DEFAULT '';
      ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS metric2_label TEXT DEFAULT '';
      ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS metric3_value TEXT DEFAULT '';
      ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS metric3_label TEXT DEFAULT '';
      ALTER TABLE case_studies ADD COLUMN IF NOT EXISTS technologies TEXT[] DEFAULT '{}';

      ALTER TABLE case_studies ALTER COLUMN description SET DEFAULT '';
      ALTER TABLE case_studies ALTER COLUMN content SET DEFAULT '';
      ALTER TABLE projects ALTER COLUMN description SET DEFAULT '';
      ALTER TABLE projects ALTER COLUMN content SET DEFAULT '';

      ALTER TABLE case_studies ALTER COLUMN description DROP NOT NULL;
      ALTER TABLE case_studies ALTER COLUMN content DROP NOT NULL;
      ALTER TABLE projects ALTER COLUMN description DROP NOT NULL;
      ALTER TABLE projects ALTER COLUMN content DROP NOT NULL;
    `);
    console.log('Columns verified and added successfully.');

    console.log('\n--- 2. Seeding Projects into PostgreSQL ---');
    const projects = [
      {
        id: 'proj-1',
        title: 'AI-Native CRM System for Enterprise Bottleneck Resolution',
        slug: 'ai-native-crm-system',
        client: 'Enterprise FinTech',
        industry: 'Financial Services',
        shortDescription: 'Engineered an autonomous multi-agent CRM system that identifies deal pipeline bottlenecks, generates instant lead summaries, and automates high-touch follow-up workflows for global revenue teams.',
        fullDescription: 'Designed and deployed a state-of-the-art AI-native CRM architecture that replaces manual SDR qualification and CRM data entry with autonomous event-driven agent swarms. The system connects directly with company communication channels, monitors deal progression, flags stall risks, and dynamically generates personalized multi-channel outreach strategies tailored to prospect behavior.',
        image: '/assets/img/projects/project-ai-1.jpg',
        metric1Value: '+140%',
        metric1Label: 'Pipeline Velocity',
        metric2Value: '-65%',
        metric2Label: 'Resolution Time',
        metric3Value: '99.4%',
        metric3Label: 'Accuracy Rate',
        tags: ['AI CRM', 'Enterprise', 'Automation', 'Multi-Agent'],
        relatedCaseStudy: 'Autonomous Voice AI Agents for Real-Time FinTech Underwriting',
        status: 'Published'
      },
      {
        id: 'proj-2',
        title: 'Smart Email Outreach & Personalized Content Platform',
        slug: 'smart-email-outreach-platform',
        client: 'Hyper-Growth SaaS',
        industry: 'Enterprise SaaS',
        shortDescription: 'Built a contextual generative AI engine that personalizes multi-channel outreach at scale, dynamically tailoring pitches based on prospect behavioral data with a 3.4x higher response rate.',
        fullDescription: 'Architected an automated content personalization and outreach orchestration engine. It analyzes prospect LinkedIn activity, recent firmographic milestones, and historical sales conversation transcripts to craft bespoke pitch sequences that resonate deeply with B2B executives while preserving brand voice and tone guardrails.',
        image: '/assets/img/projects/project-ai-2.jpg',
        metric1Value: '3.4x',
        metric1Label: 'Response Rate',
        metric2Value: '68.4%',
        metric2Label: 'Open Rate',
        metric3Value: '15 hrs/wk',
        metric3Label: 'Rep Hours Saved',
        tags: ['Sales Tech', 'Outreach', 'LLM', 'Contextual AI'],
        relatedCaseStudy: 'Autonomous Dialer & Unified CRM for Enterprise SaaS Sales',
        status: 'Published'
      },
      {
        id: 'proj-3',
        title: 'Unified Enterprise Data Hub & Predictive Forecasting',
        slug: 'unified-enterprise-data-hub',
        client: 'Global Logistics Corp',
        industry: 'Logistics & Supply Chain',
        shortDescription: 'Architected a cloud-native real-time predictive analytics hub integrating fragmented data lakes into a centralized neural forecasting engine with 99.4% demand prediction accuracy.',
        fullDescription: 'Modernized a fragmented enterprise logistics infrastructure by implementing real-time Apache Kafka streaming pipelines into high-throughput neural forecasting models. The platform processes millions of sensor and freight tracking records per second, providing instant dispatch routing recalculations and predictive maintenance alerts across global fleets.',
        image: '/assets/img/projects/project-ai-3.jpg',
        metric1Value: '99.4%',
        metric1Label: 'Forecast Accuracy',
        metric2Value: '10M+ rows/s',
        metric2Label: 'Data Processing',
        metric3Value: '-22%',
        metric3Label: 'Fuel Overhead',
        tags: ['Data Intelligence', 'Analytics', 'AWS', 'Kafka'],
        relatedCaseStudy: 'Forward-Deployed Squad: Modernizing Legacy Logistics ERP with AI',
        status: 'Published'
      }
    ];

    for (const p of projects) {
      await pool.query(`
        INSERT INTO projects (
          id, title, slug, category, client, description, content, link,
          industry, image, metric1_value, metric1_label, metric2_value, metric2_label,
          metric3_value, metric3_label, tags, related_case_study, status
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8,
          $9, $10, $11, $12, $13, $14,
          $15, $16, $17, $18, $19
        )
        ON CONFLICT (slug) DO UPDATE SET
          title = EXCLUDED.title,
          category = EXCLUDED.category,
          client = EXCLUDED.client,
          description = EXCLUDED.description,
          content = EXCLUDED.content,
          industry = EXCLUDED.industry,
          image = EXCLUDED.image,
          metric1_value = EXCLUDED.metric1_value,
          metric1_label = EXCLUDED.metric1_label,
          metric2_value = EXCLUDED.metric2_value,
          metric2_label = EXCLUDED.metric2_label,
          metric3_value = EXCLUDED.metric3_value,
          metric3_label = EXCLUDED.metric3_label,
          tags = EXCLUDED.tags,
          related_case_study = EXCLUDED.related_case_study,
          status = EXCLUDED.status,
          updated_at = NOW();
      `, [
        p.id, p.title, p.slug, p.industry, p.client, p.shortDescription, p.fullDescription, p.image,
        p.industry, p.image, p.metric1Value, p.metric1Label, p.metric2Value, p.metric2Label,
        p.metric3Value, p.metric3Label, p.tags, p.relatedCaseStudy, p.status
      ]);
      console.log(`Inserted/updated project: ${p.title}`);
    }

    console.log('\n--- 3. Seeding Case Studies into PostgreSQL ---');
    const caseStudies = [
      {
        id: 'cs-1',
        title: 'Autonomous Voice AI Agents for Real-Time FinTech Underwriting',
        slug: 'autonomous-voice-ai-agents-fintech',
        client: 'Global FinTech & Lending Platform',
        industry: 'Financial Services',
        badge: 'NENO VOICE DEPLOYMENT',
        heroImage: '/assets/img/projects/project-ai-1.jpg',
        overview: 'Deployed autonomous voice agents powered by <200ms streaming LLM pipelines to conduct borrower pre-qualifications and real-time document verification.',
        challenge: 'Manual call centers faced 45% drop-off during peak lending seasons and high operational costs ($4.20 per qualification call).',
        solution: 'Built a customized voice pipeline with Neno Voice, carrier-grade SIP routing, and deterministic guardrails ensuring 100% regulatory compliance.',
        implementation: 'Configured sub-200ms low-latency WebSocket audio streams directly integrated into Twilio SIP trunks. Deployed Claude 3.5 Sonnet with customized prompt chains for real-time risk scoring, KYC check validation, and seamless warm transfers.',
        results: 'Eliminated manual qualification backlogs while slashing per-call operational costs by 68% and improving qualification conversion accuracy to 99.4%.',
        metric1Value: '68%',
        metric1Label: 'Cost Reduction',
        metric2Value: '4.2x Faster',
        metric2Label: 'Call Qualification',
        metric3Value: '99.4%',
        metric3Label: 'Accuracy Rate',
        technologies: ['Neno Voice', '<200ms Audio Pipeline', 'Claude 3.5 Sonnet', 'Twilio SIP', 'PostgreSQL'],
        status: 'Published',
        publishDate: '2026-01-20'
      },
      {
        id: 'cs-2',
        title: 'Multi-Agent Swarms for Automated Healthcare Claims Adjudication',
        slug: 'multi-agent-swarms-healthcare-claims',
        client: 'Tier-1 Healthcare Network',
        industry: 'Healthcare & Insurance',
        badge: 'AGENTIC AI SYSTEMS',
        heroImage: '/assets/img/projects/project-ai-2.jpg',
        overview: 'Engineered multi-agent swarms that autonomously review medical claims, parse unstructured EHR notes, cross-reference policy guidelines, and flag fraud.',
        challenge: 'Over 20,000 weekly claims resulted in an 18-day processing backlog and significant billing discrepancy disputes.',
        solution: 'Implemented deterministic multi-agent architectures running inside HIPAA-compliant private cloud VPCs with continuous human-in-the-loop oversight.',
        implementation: 'Developed a swarm of specialized micro-agents: OCR & Document Extraction Agent, Policy Verification Agent, Fraud Detection Classifier, and Reconciliation Agent coordinated via an event-driven task queue.',
        results: 'Accelerated claims turnaround from 18 days to 4 hours with 99.8% precision, saving $1.4M in annual administrative overhead.',
        metric1Value: '10x Faster',
        metric1Label: 'Processing Speed',
        metric2Value: '$1.4M',
        metric2Label: 'Annual Overhead Saved',
        metric3Value: '99.8%',
        metric3Label: 'Adjudication Precision',
        technologies: ['Multi-Agent Swarms', 'Private RAG', 'HIPAA Compliant VPC', 'Python / FastAPI', 'Vector Search'],
        status: 'Published',
        publishDate: '2026-02-05'
      },
      {
        id: 'cs-3',
        title: 'Forward-Deployed Squad: Modernizing Legacy Logistics ERP with AI',
        slug: 'forward-deployed-squad-logistics-erp',
        client: 'Global Freight & Supply Chain Operator',
        industry: 'Logistics & Supply Chain',
        badge: 'FORWARD DEPLOYED SQUAD',
        heroImage: '/assets/img/projects/project-ai-3.jpg',
        overview: 'Embedded a 5-engineer Neno squad to modernize a legacy on-premises ERP into a real-time, predictive dispatch and tracking platform.',
        challenge: 'Legacy architecture suffered from siloed database tables, zero mobile observability, and 12-hour delayed cargo route recalculations.',
        solution: 'Redesigned data pipelines with modern Next.js frontends, Kafka real-time event streaming, and predictive route optimization models.',
        implementation: 'Squad embedded directly on-site and remotely. Replaced monolithic batch queries with Kafka streams, connected IoT sensor feeds to cloud analytics, and launched custom Next.js progressive dispatch consoles.',
        results: 'Delivered MVP to production in 14 days. Reduced fleet fuel overhead by 22% and established 100% real-time GPS tracking across 3,400 active freight vehicles.',
        metric1Value: '14 Days',
        metric1Label: 'Time to Production',
        metric2Value: '-22%',
        metric2Label: 'Fuel Overhead',
        metric3Value: '100%',
        metric3Label: 'Real-Time Visibility',
        technologies: ['Next.js', 'TypeScript', 'Apache Kafka', 'Kubernetes', 'Fine-Tuned Llama 3'],
        status: 'Published',
        publishDate: '2026-02-22'
      },
      {
        id: 'cs-4',
        title: 'Autonomous Dialer & Unified CRM for Enterprise SaaS Sales',
        slug: 'autonomous-dialer-unified-crm-saas',
        client: 'High-Growth B2B Cloud Platform',
        industry: 'Enterprise SaaS',
        badge: 'NENO DIALER & CRM',
        heroImage: '/assets/img/projects/project-ai-1.jpg',
        overview: 'Deployed Neno Dialer with bidirectional CRM synchronization to automate outbound follow-ups, qualification notes, and calendar scheduling.',
        challenge: 'Sales reps spent over 3 hours daily manually logging notes, dialing unanswered calls, and juggling disconnected spreadsheets.',
        solution: 'Integrated Neno Dialer directly with Salesforce and HubSpot, enabling automatic call transcription, sentiment analysis, and instant meeting booking.',
        implementation: 'Created seamless browser and mobile CTI integration. Deployed Whisper transcription and sentiment scoring to automatically update Salesforce lead stages and book executive meetings.',
        results: 'Increased connect rates by 34%, saved reps 15 hours per week on administrative work, and increased generated pipeline by 2.8x.',
        metric1Value: '+34%',
        metric1Label: 'Connect Rate',
        metric2Value: '15 hrs/wk',
        metric2Label: 'Rep Hours Saved',
        metric3Value: '2.8x',
        metric3Label: 'Pipeline Generated',
        technologies: ['Neno Dialer', 'Neno CRM', 'Salesforce API', 'HubSpot Sync', 'Voice Sentiment AI'],
        status: 'Published',
        publishDate: '2026-03-01'
      }
    ];

    for (const cs of caseStudies) {
      await pool.query(`
        INSERT INTO case_studies (
          id, title, slug, category, client, description, content, link, publish_date,
          industry, badge, hero_image, overview, challenge, solution, implementation,
          results, metric1_value, metric1_label, metric2_value, metric2_label,
          metric3_value, metric3_label, technologies, status
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9,
          $10, $11, $12, $13, $14, $15, $16,
          $17, $18, $19, $20, $21,
          $22, $23, $24, $25
        )
        ON CONFLICT (slug) DO UPDATE SET
          title = EXCLUDED.title,
          category = EXCLUDED.category,
          client = EXCLUDED.client,
          description = EXCLUDED.description,
          content = EXCLUDED.content,
          publish_date = EXCLUDED.publish_date,
          industry = EXCLUDED.industry,
          badge = EXCLUDED.badge,
          hero_image = EXCLUDED.hero_image,
          overview = EXCLUDED.overview,
          challenge = EXCLUDED.challenge,
          solution = EXCLUDED.solution,
          implementation = EXCLUDED.implementation,
          results = EXCLUDED.results,
          metric1_value = EXCLUDED.metric1_value,
          metric1_label = EXCLUDED.metric1_label,
          metric2_value = EXCLUDED.metric2_value,
          metric2_label = EXCLUDED.metric2_label,
          metric3_value = EXCLUDED.metric3_value,
          metric3_label = EXCLUDED.metric3_label,
          technologies = EXCLUDED.technologies,
          status = EXCLUDED.status,
          updated_at = NOW();
      `, [
        cs.id, cs.title, cs.slug, cs.industry, cs.client, cs.overview, cs.solution, cs.heroImage, cs.publishDate,
        cs.industry, cs.badge, cs.heroImage, cs.overview, cs.challenge, cs.solution, cs.implementation,
        cs.results, cs.metric1Value, cs.metric1Label, cs.metric2Value, cs.metric2Label,
        cs.metric3Value, cs.metric3Label, cs.technologies, cs.status
      ]);
      console.log(`Inserted/updated case study: ${cs.title}`);
    }

    console.log('\n--- 4. Final verification of rows in DB ---');
    const pCount = await pool.query('SELECT COUNT(*) FROM projects');
    const csCount = await pool.query('SELECT COUNT(*) FROM case_studies');
    console.log(`Projects in PostgreSQL: ${pCount.rows[0].count}`);
    console.log(`Case Studies in PostgreSQL: ${csCount.rows[0].count}`);

  } catch (err) {
    console.error('Migration/seed error:', err);
  } finally {
    await pool.end();
  }
}

migrateAndSeed();
