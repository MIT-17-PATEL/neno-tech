/**
 * HONESTY GUARDRAIL:
 * These 5 items represent Neno Technology's core engineering capability blueprints,
 * NOT client case studies with fabricated stats.
 * Replace target KPIs with real measured numbers and relabel as Case Study
 * only once we have a live client with written permission to use their name/results.
 */

export interface AgentMeshItem {
    name: string;
    responsibility: string;
    color?: string;
}

export interface WorkflowStep {
    step: string;
    title: string;
    description: string;
}

export interface StackBreakdown {
    frontend: string;
    backend: string;
    aiOrchestration: string;
    dataStorage: string;
    integrations: string;
    infrastructure: string;
}

export interface TargetMetric {
    label: string;
    val: string;
    method?: string;
}

export interface CapabilityBlueprint {
    id: number;
    slug: string;
    categoryTag: string;
    title: string;
    positioningLine: string;
    subtitle: string;
    cardDescription: string;
    fullProblem: string;
    industries: string[];
    thumb: string;
    thumbFull: string;
    targetMetrics: TargetMetric[];
    tags: string[];
    actionText: string;
    inquiryParam: string;
    agentMesh: AgentMeshItem[];
    orchestrationPattern: string;
    workflowSteps: WorkflowStep[];
    fullStack: StackBreakdown;
    whatWeDeliver: string;
    outcomeModel: {
        description: string;
        kpis: { title: string; target: string; measurement: string }[];
    };
    theHardPart: string;
}

export const CAPABILITY_BLUEPRINTS: CapabilityBlueprint[] = [
    {
        id: 1,
        slug: "autonomous-revenue-engine",
        categoryTag: "REVENUE OPERATIONS",
        title: "Autonomous Revenue Engine",
        positioningLine: "A Self-Operating Go-to-Market Team",
        subtitle: "Engagement Blueprint · Autonomous Revenue Operations Core",
        cardDescription: "Replaces fragmented outbound SDR workflows with a coordinated agent cluster that continuously mines intent signals, conducts deep company research, and executes hyper-personalized multi-channel follow-ups within minutes.",
        fullProblem: "B2B revenue teams face structural latency and data leakage. Sales Development Reps spend over 65% of their working hours manually researching prospects, copy-pasting notes across disconnected CRMs, and drafting generic templated follow-ups. Inbound leads frequently sit untouched for hours, dropping deal conversion rates by over 80%. When reps leave, account context and pipeline history evaporate, leaving accounts cold and forecasting broken.",
        industries: ["Enterprise SaaS", "BFSI", "Manufacturing", "Retail", "Logistics"],
        thumb: "blueprint-revenue-engine.jpg",
        thumbFull: "blueprint-revenue-engine.jpg",
        targetMetrics: [
            { label: "Target Response Latency", val: "Sub-5-Min", method: "Inbound Webhook-to-Draft SLA" },
            { label: "Target CRM Data Completeness", val: "≥95%", method: "Zero-Drop Field Extraction Audit" }
        ],
        tags: ["Agentic AI", "Neno CRM", "Revenue Ops", "Outreach Automation", "LLM Orchestration"],
        actionText: "Explore Blueprint",
        inquiryParam: "autonomous-revenue-engine",
        agentMesh: [
            {
                name: "Territory & Signal Agent",
                responsibility: "Monitors Apollo, LinkedIn, and CRM webhooks for buying intent, executive hiring triggers, and technology stack updates.",
                color: "#6d6df6"
            },
            {
                name: "Deep Research Agent",
                responsibility: "Traverses regulatory 10-K filings, product release notes, and executive interviews to compile an actionable account intelligence dossier.",
                color: "#4facfe"
            },
            {
                name: "Contextual Copywriter Agent",
                responsibility: "Generates tailored outbound email pitches and LinkedIn connection notes with bespoke value propositions matching recipient persona.",
                color: "#9d4edd"
            },
            {
                name: "Live Inbox & Classification Agent",
                responsibility: "Continuously ingests replies, classifies sentiment (Interested, Objection, Not Now, Referral), and triggers instant objection-handling drafts or calendar bookings.",
                color: "#00f5d4"
            },
            {
                name: "CRM Sync & Hygiene Agent",
                responsibility: "Enforces bidirectional synchronization with Neno CRM, HubSpot, and Salesforce, recording conversation histories, sentiment scores, and stage updates.",
                color: "#f72585"
            }
        ],
        orchestrationPattern: "Hierarchical Event-Driven Supervisor Pattern. A centralized Campaign Supervisor agent consumes real-time streaming events, evaluates account scoring against ICP thresholds, dynamically dispatches sub-tasks to Research and Copywriter agents, and routes high-intent buyer replies directly to human Account Executives with structured pre-call briefing briefs.",
        workflowSteps: [
            {
                step: "01",
                title: "Intent Ingestion & Signal Filtering",
                description: "Ingests company visitor pings, job hiring changes, and inbound lead webhooks through real-time message queues."
            },
            {
                step: "02",
                title: "Deep Account Dossier Assembly",
                description: "Scrapes public corporate filings, product documentation, and tech stacks to assemble an actionable 1-page account intelligence profile."
            },
            {
                step: "03",
                title: "Contextual Outreach Generation",
                description: "Synthesizes account pain points with customer case studies to generate personalized, non-templated email and LinkedIn messages."
            },
            {
                step: "04",
                title: "Multi-Channel Cadence & Deliverability",
                description: "Schedules outbound sequences through warm IP pools while honoring cadence limits, domain deliverability safeguards, and unsubscribe rules."
            },
            {
                step: "05",
                title: "Autonomous Objection & Scheduling Core",
                description: "Classifies inbound responses in real time, addresses common objections deterministically, and embeds calendar booking links."
            }
        ],
        fullStack: {
            frontend: "React 19, Next.js App Router, Tailwind & Custom CSS dark console, WebSockets live feed",
            backend: "FastAPI (Python 3.12), Node.js microservices, BullMQ / Celery distributed queues",
            aiOrchestration: "LangGraph multi-agent state machines, Claude 3.5 Sonnet (reasoning), Llama 3.3 70B (classification), Instructor structured outputs",
            dataStorage: "PostgreSQL (pgvector for semantic search), Redis memory cache, ClickHouse analytics",
            integrations: "Neno CRM, Salesforce REST API, HubSpot API, Apollo API, Google Workspace / Microsoft Graph API",
            infrastructure: "Docker containers, Kubernetes, AWS ECS, VPC isolation, Cloudflare Zero Trust"
        },
        whatWeDeliver: "A production-ready, fully containerized autonomous revenue system deployed in your private cloud or on-premise infrastructure. Includes complete source code, agent prompt evaluation test suites, CRM bidirectional connectors, custom LLM routing policies, and end-to-end operational observability dashboards.",
        outcomeModel: {
            description: "All metrics below represent explicit engineering targets and SLA thresholds designed into the blueprint, not retrospective client claims.",
            kpis: [
                {
                    title: "Response Latency",
                    target: "Sub-5-Min Reply",
                    measurement: "Time elapsed from inbound email webhook ingestion to categorized draft generation and CRM notification."
                },
                {
                    title: "CRM Data Hygiene",
                    target: "≥95% Field Completeness",
                    measurement: "Automated verification of required account and opportunity attributes across all touched leads."
                },
                {
                    title: "AE Pipeline Throughput",
                    target: "3.5x Coverage per Rep",
                    measurement: "Increase in active qualified prospect accounts managed per Account Executive without adding SDR headcount."
                }
            ]
        },
        theHardPart: "Mitigating hallucinated value claims and maintaining email deliverability reputation across thousands of autonomous interactions. We solve this by implementing strict deterministic constraint layers: agents cannot cite customer numbers or product capabilities that do not exist in your verified vector ground-truth knowledge base. Every outgoing draft is checked against compliance rules, spam triggers, and domain warmup throttling prior to dispatch."
    },
    {
        id: 2,
        slug: "autonomous-contact-centre",
        categoryTag: "CUSTOMER OPERATIONS",
        title: "Autonomous Contact Centre",
        positioningLine: "A Sub-Second Autonomous Inbound & Outbound Voice Core",
        subtitle: "Engagement Blueprint · Voice AI Operations (Powered by Neno Voice)",
        cardDescription: "Deploys carrier-grade conversational voice agents capable of sub-200ms audio turnaround, intelligent turn-taking, and deterministic ERP/CRM transaction execution over live phone lines.",
        fullProblem: "Traditional IVR systems and human call centers are structurally fragile and expensive. Customers endure 15-minute hold queues navigating rigid press-1 menus, only to be transferred between multiple human agents who ask for the same verification details repeatedly. Human operator burnout drives 40%+ annual turnover, leading to inconsistent customer support quality, compliance violations, and unsustainable per-minute staffing costs.",
        industries: ["BFSI", "Retail", "Healthcare", "Logistics", "Enterprise SaaS"],
        thumb: "blueprint-contact-centre.jpg",
        thumbFull: "blueprint-contact-centre.jpg",
        targetMetrics: [
            { label: "Target Audio Latency", val: "<200ms", method: "Edge WebRTC Streaming WebSocket Benchmark" },
            { label: "Target Autonomous Resolution", val: "≥80%", method: "Zero-Escalation Call Disposition Audit" }
        ],
        tags: ["Voice AI", "Neno Voice", "WebRTC", "Sub-Second Audio", "Real-Time Transcription"],
        actionText: "Explore Blueprint",
        inquiryParam: "autonomous-contact-centre",
        agentMesh: [
            {
                name: "Conversation & Streaming Agent",
                responsibility: "Manages bidirectional audio buffers, voice activity detection (VAD), and natural interruption handling over edge WebRTC connections.",
                color: "#6d6df6"
            },
            {
                name: "Intent Classifier & Router Agent",
                responsibility: "Decodes caller utterances into domain intents, sentiment scores, and urgency tiers within 30 milliseconds.",
                color: "#4facfe"
            },
            {
                name: "Transactional Resolution Agent",
                responsibility: "Executes authorized database read/writes (refunds, order updates, booking changes) with transactional rollback safety.",
                color: "#00f5d4"
            },
            {
                name: "Regulatory Compliance & QA Agent",
                responsibility: "Monitors live call audio for compliance checklists (GDPR, PCI-DSS disclosure, disclaimer consent) in real-time.",
                color: "#f72585"
            },
            {
                name: "Human Escalation Agent",
                responsibility: "Bridges the call to a human supervisor with zero audio drop, passing a real-time transcript and sentiment timeline.",
                color: "#ffbe0b"
            }
        ],
        orchestrationPattern: "Pipeline-Parallel Streaming Orchestrator. Speech-to-Text (STT), LLM inference, and Text-to-Speech (TTS) run concurrently over streaming WebSockets. While the customer speaks, interim tokens are evaluated by early-exit intent classifiers, allowing the TTS engine to begin synthesizing response phonemes before the caller even finishes pausing.",
        workflowSteps: [
            {
                step: "01",
                title: "SIP Ingestion & Edge Audio Streaming",
                description: "The caller connects via carrier SIP trunking into low-latency edge WebSockets running Deepgram Nova-2 speech recognition."
            },
            {
                step: "02",
                title: "Zero-Latency Voice Activity & Interruption",
                description: "Custom VAD models detect pauses down to 180ms while gracefully stopping AI speech playback the instant the user speaks."
            },
            {
                step: "03",
                title: "Intent Extraction & Context Retrieval",
                description: "Parallel RAG vector search pulls customer CRM records, purchase history, and verified policy constraints in milliseconds."
            },
            {
                step: "04",
                title: "Deterministic Action Execution",
                description: "The agent calls secure internal microservice APIs to cancel subscriptions, reschedule deliveries, or collect secure payments."
            },
            {
                step: "05",
                title: "Real-Time QA & Disposition Logging",
                description: "Once the call concludes, full structured call analytics, sentiment tags, and recording summaries are pushed directly to Neno CRM."
            }
        ],
        fullStack: {
            frontend: "Carrier SIP Trunking, FreeSWITCH / Asterisk, WebRTC, React Audio Supervisor Panel",
            backend: "Go (Golang) real-time streaming server, Node.js control plane, Python execution runtime",
            aiOrchestration: "Deepgram Nova-2 (STT), ElevenLabs / Cartesia (streaming TTS), Claude 3.5 Haiku & Sonnet (LLM core), Silero VAD",
            dataStorage: "Redis memory buffers, PostgreSQL relational logs, AWS S3 call recording archive",
            integrations: "Neno Voice, Neno CRM, Twilio SIP, Zendesk, Salesforce Service Cloud, Stripe Billing",
            infrastructure: "Edge regional nodes (Mumbai, Frankfurt, Virginia), Kubernetes clusters, sub-50ms network peering"
        },
        whatWeDeliver: "Carrier-grade telephony integration running on dedicated cloud instances or on-premises SIP gateways. Complete audio streaming server code, custom voice cloning profiles, latency-optimized turn-taking logic, API connectors for billing/ticketing systems, and full supervisor monitoring suites.",
        outcomeModel: {
            description: "Designed for high-volume enterprise contact centers requiring sub-second human-like responsiveness with strict compliance guarantees.",
            kpis: [
                {
                    title: "Audio Latency",
                    target: "<200ms Turnaround",
                    measurement: "Measured from caller voice silence detection to first audio packet delivered over the SIP trunk."
                },
                {
                    title: "First-Contact Resolution",
                    target: "≥80% Autonomous Resolution",
                    measurement: "Percentage of inbound calls resolved end-to-end without requiring human agent transfer."
                },
                {
                    title: "Per-Call Cost Savings",
                    target: "60%+ Cost Reduction",
                    measurement: "Target reduction in operational delivery cost per call compared to blended Tier-1 human call center benchmarks."
                }
            ]
        },
        theHardPart: "Natural interruption (barge-in) and network jitter. In real phone calls, callers mumble 'uh-huh', cough, or interrupt mid-sentence. If the agent stops talking on every cough, the experience is broken; if it speaks over the caller, it feels robotic. We deploy fine-tuned acoustic classification at the edge to distinguish active user interruptions from passive acknowledgment murmurs, cutting accidental speech aborts to near zero."
    },
    {
        id: 3,
        slug: "agentic-talent-desk",
        categoryTag: "TALENT & WORKFORCE",
        title: "Agentic Talent Desk",
        positioningLine: "Autonomous Technical Sourcing & Assessment Infrastructure",
        subtitle: "Engagement Blueprint · Talent Operations (Tied to Hire Engineers)",
        cardDescription: "Eliminates 80% of technical recruiting friction with multi-agent candidate discovery, automated GitHub repo code parsing, and interactive LLM technical screening rounds.",
        fullProblem: "Technical hiring is bottlenecked by manual resume screening and non-technical recruiters. Engineering managers spend 15+ hours weekly reviewing misaligned CVs, conducting repetitive first-round tech screeners, and writing rejection notes. Sourcing teams rely on shallow keyword searches on LinkedIn that miss high-caliber passive engineers who build in public but maintain minimal social profiles.",
        industries: ["BFSI", "Healthcare", "Manufacturing", "Retail", "Enterprise SaaS"],
        thumb: "blueprint-talent-desk.jpg",
        thumbFull: "blueprint-talent-desk.jpg",
        targetMetrics: [
            { label: "Target Sourcing SLA", val: "<48-Hr", method: "Brief-to-Calibrated-Profile Clock" },
            { label: "Target Manager Match Rate", val: "≥90%", method: "Round-2 Manager Approval Percentage" }
        ],
        tags: ["Talent Tech", "Code Evaluation", "Multi-Agent Screening", "ATS Automation", "Staffing Ops"],
        actionText: "Explore Blueprint",
        inquiryParam: "agentic-talent-desk",
        agentMesh: [
            {
                name: "Passive Sourcing Agent",
                responsibility: "Crawls open-source GitHub repositories, technical blogs, and papers to discover engineers by actual code quality rather than resume buzzwords.",
                color: "#6d6df6"
            },
            {
                name: "Code & Architecture Evaluator",
                responsibility: "Clones candidate pull requests, analyzes commit diffs, evaluates architecture patterns, and benchmarks clean-code practices in secure sandboxes.",
                color: "#4facfe"
            },
            {
                name: "Interactive Screener Agent",
                responsibility: "Conducts structured 20-minute technical discovery chats, asking probing questions on distributed systems and debugging tradeoffs.",
                color: "#9d4edd"
            },
            {
                name: "Match & Scorecard Synthesizer",
                responsibility: "Compares candidate competencies directly against team hiring criteria, assigning calibrated match percentages and risk indicators.",
                color: "#00f5d4"
            },
            {
                name: "Candidate Experience Agent",
                responsibility: "Automates interview scheduling, answers technical questions about the role/stack, and ensures zero candidate ghosting.",
                color: "#f72585"
            }
        ],
        orchestrationPattern: "Continuous Pipeline State Machine. Sourcing agents continuously populate an evaluation queue. The Code Evaluation agent executes sandbox analysis, passing verified candidates to the Screener Agent. Human engineering directors review scored candidate summaries before triggering live final-stage culture and team interviews.",
        workflowSteps: [
            {
                step: "01",
                title: "Job Brief Calibration",
                description: "Parses engineering hiring manager briefs, extracting tech stack constraints, seniority benchmarks, and core architectural responsibilities."
            },
            {
                step: "02",
                title: "Code-First Sourcing",
                description: "Searches GitHub commits, open-source contributors, and developer communities for engineers who actively write production code in the target stack."
            },
            {
                step: "03",
                title: "Automated Codebase Analysis",
                description: "Analyzes code maintainability, test coverage discipline, and algorithmic complexity across the candidate’s real repositories."
            },
            {
                step: "04",
                title: "Structured Interactive Technical Chat",
                description: "Engages the candidate with contextual technical questions exploring their real-world system architecture decisions."
            },
            {
                step: "05",
                title: "Manager Scorecard Delivery",
                description: "Delivers a verified 1-page dossier with strengths, code samples, and salary expectation benchmarks directly into the hiring pipeline."
            }
        ],
        fullStack: {
            frontend: "React 19 Kanban recruitment board, candidate profile viewer, scorecard breakdown panel",
            backend: "Python FastAPI, Celery worker nodes, Git clone sandbox execution environment",
            aiOrchestration: "Claude 3.5 Sonnet (code analysis), GPT-4o mini (candidate communication), Tree-sitter AST parser",
            dataStorage: "PostgreSQL (candidate profiles), Qdrant / Pinecone (skill & code vector embeddings)",
            integrations: "GitHub REST/GraphQL API, LinkedIn Talent Solutions, Greenhouse ATS, Lever, Slack alerts",
            infrastructure: "Dockerized sandboxes for safe untrusted code parsing, AWS ECS, VPC security groups"
        },
        whatWeDeliver: "A specialized autonomous talent intelligence engine integrated with your ATS and Git ecosystem. Includes automated screening agents, candidate scorecard templates, codebase evaluation sandboxes, and interview scheduling workflows configured for your engineering rubrics.",
        outcomeModel: {
            description: "Engineered to compress hiring manager screening time while maintaining strict engineering rigor.",
            kpis: [
                {
                    title: "Shortlist Turnaround",
                    target: "<48-Hour Shortlist",
                    measurement: "Time elapsed from new job role requisition creation to delivery of 3 calibrated candidate dossiers."
                },
                {
                    title: "Manager Approval Rate",
                    target: "≥90% Tech Calibration",
                    measurement: "Percentage of shortlisted candidates who advance past the engineering manager technical interview."
                },
                {
                    title: "Screening Hours Saved",
                    target: "70% Time Reduction",
                    measurement: "Reduction in senior engineering hours spent conducting preliminary resume and tech screening calls."
                }
            ]
        },
        theHardPart: "Accurately evaluating code quality without falling for superficial vanity metrics like star counts or AI-generated resumes. We build AST (Abstract Syntax Tree) parsers and semantic diff analyzers that inspect actual engineering choices: exception handling discipline, modularity, test mocking depth, and concurrency safety."
    },
    {
        id: 4,
        slug: "bid-tender-response-factory",
        categoryTag: "GOV & ENTERPRISE PROCUREMENT",
        title: "Multi-Agent Bid & Tender Response Factory",
        positioningLine: "Autonomous RFP Ingestion, Compliance Matrix & Proposal Assembly",
        subtitle: "Engagement Blueprint · Enterprise & Government Procurement Core",
        cardDescription: "Ingests complex 200-page government and enterprise RFP documents, generates automated clause-by-clause compliance matrices, and drafts certified bids compliant with strict procurement rubrics.",
        fullProblem: "Bidding on large government, BFSI, and infrastructure contracts is brutally labor-intensive. Enterprise proposal teams spend weeks manually dissecting 300-page PDF tender documents, building compliance spreadsheets, and chasing internal technical leads for past-performance evidence. A single missed compliance clause or outdated financial document can result in instant disqualification, costing millions in lost contract value.",
        industries: ["Government", "BFSI", "Manufacturing", "Logistics", "Healthcare"],
        thumb: "blueprint-bid-tender.jpg",
        thumbFull: "blueprint-bid-tender.jpg",
        targetMetrics: [
            { label: "Target Compliance Verification", val: "100%", method: "Exhaustive Mandatory Criteria Audit" },
            { label: "Target Drafting Acceleration", val: "≥70%", method: "RFP Ingest-to-Proposal First Draft Benchmark" }
        ],
        tags: ["Document Intelligence", "RFP Automation", "GovTech", "Compliance AI", "Enterprise Legal"],
        actionText: "Explore Blueprint",
        inquiryParam: "bid-tender-response-factory",
        agentMesh: [
            {
                name: "RFP Parser & Shredder Agent",
                responsibility: "Ingests multi-part PDF/DOCX tenders, extracts tables, deadlines, submission rules, and mandatory clauses with layout-aware OCR.",
                color: "#6d6df6"
            },
            {
                name: "Compliance Matrix Agent",
                responsibility: "Maps every tender requirement against internal enterprise capabilities, assigning RED/AMBER/GREEN compliance scores.",
                color: "#4facfe"
            },
            {
                name: "Past Performance Retrieval Agent",
                responsibility: "Queries enterprise knowledge repositories for previous audited project deliveries, certifications, and verified case proof points.",
                color: "#9d4edd"
            },
            {
                name: "Technical Section Drafter Agent",
                responsibility: "Writes customized, compliant technical proposals adhering to the exact formatting and rubric scoring criteria of the tender.",
                color: "#00f5d4"
            },
            {
                name: "Red Team Reviewer Agent",
                responsibility: "Acts as a simulated procurement evaluation committee, scoring the drafted proposal against official tender evaluation rubrics.",
                color: "#f72585"
            }
        ],
        orchestrationPattern: "Multi-Stage Document Assembly DAG (Directed Acyclic Graph). Ingestion feeds a strict Compliance Matrix stage with human approval gates. Once verified, drafting agents work in parallel across sections (Executive, Technical, Financial, Security), with all outputs subjected to an adversarial Red Team evaluation agent before final export.",
        workflowSteps: [
            {
                step: "01",
                title: "Tender Document Shredding",
                description: "Ingests multi-part tender documents, separating instructions, technical specs, financial bid templates, and legal SLAs."
            },
            {
                step: "02",
                title: "Compliance Matrix Generation",
                description: "Identifies every 'shall', 'must', and 'mandatory' clause, generating an interactive compliance tracking spreadsheet."
            },
            {
                step: "03",
                title: "Evidence & Case Proof Retrieval",
                description: "Pulls ISO certifications, client satisfaction letters, and team resumes matching the requested procurement qualifications."
            },
            {
                step: "04",
                title: "Automated Proposal Drafting",
                description: "Synthesizes section drafts incorporating exact RFP terminology to maximize automated scoring marks."
            },
            {
                step: "05",
                title: "Adversarial Red-Team Scoring",
                description: "Evaluates final drafts against the tender's published evaluation criteria, flagging weak technical claims or missing attachments."
            }
        ],
        fullStack: {
            frontend: "Split-pane document review workbench, compliance matrix table with red/amber/green indicators, Word/PDF export preview",
            backend: "Python FastAPI, Celery worker nodes, high-throughput PDF/DOCX parsing pipelines",
            aiOrchestration: "Claude 3.5 Sonnet (complex clause reasoning), Unstructured.io / Marker OCR, LlamaParse, Vector RAG",
            dataStorage: "PostgreSQL (clause metadata), Qdrant vector database (past proposals and enterprise certifications)",
            integrations: "Microsoft SharePoint, Google Drive, SAP ERP, Salesforce, DocuSign",
            infrastructure: "Air-gapped / Private Cloud VPC deployment, zero data retention API policies, AES-256 encryption at rest"
        },
        whatWeDeliver: "A secure on-premise or sovereign cloud RFP factory that protects proprietary bid data. Complete document shredding pipelines, automated compliance matrix generators, pre-configured enterprise knowledge bases, and multi-agent proposal drafting workspaces.",
        outcomeModel: {
            description: "Tailored for enterprise bidders responding to complex government and BFSI procurements with zero margin for error.",
            kpis: [
                {
                    title: "Mandatory Clause Verification",
                    target: "100% Mandatory Check",
                    measurement: "Automated cross-check verifying zero mandatory tender requirements or statutory certificates are omitted."
                },
                {
                    title: "Drafting Cycle Time",
                    target: "≥70% Faster Turnaround",
                    measurement: "Reduction in proposal preparation time from receipt of tender documents to complete first draft."
                },
                {
                    title: "Monthly Bidding Capacity",
                    target: "2.5x Proposal Volume",
                    measurement: "Increase in qualified tenders pursued per month without increasing proposal management headcount."
                }
            ]
        },
        theHardPart: "Handling complex tabular data, multi-column layouts, and ambiguous tender requirements without losing context. Off-the-shelf LLMs hallucinate table values and miss fine-print disqualification criteria in footnotes. We employ vision-language models combined with deterministic OCR layout analyzers to parse every table cell and cross-reference financial ratios against audited company statements."
    },
    {
        id: 5,
        slug: "autonomous-back-office",
        categoryTag: "FINANCE & COMPLIANCE",
        title: "Zero-Headcount Company / Autonomous Back Office",
        positioningLine: "Continuous Autonomous Reconciliation & Statutory Operations",
        subtitle: "Engagement Blueprint · Operations & ERP Core (Tied to Neno ERP)",
        cardDescription: "Automates 90% of routine corporate operations: multi-vendor invoice reconciliation, vendor compliance checks, continuous bank matching, and automated statutory tax filings.",
        fullProblem: "Back-office operations in mid-market and enterprise businesses are plagued by repetitive human verification cycles. Finance and operations teams drown in vendor invoices, missing purchase orders, manual GST/tax reconciliation, and manual bank ledger updates. Month-end financial closes take 10–14 days, obscuring executive cash visibility and risking costly statutory penalties.",
        industries: ["Retail", "Logistics", "Manufacturing", "BFSI", "Enterprise SaaS"],
        thumb: "blueprint-autonomous-backoffice.jpg",
        thumbFull: "blueprint-autonomous-backoffice.jpg",
        targetMetrics: [
            { label: "Target Reconciliation Frequency", val: "Daily Close", method: "24-Hour Continuous Multi-Bank Matching" },
            { label: "Target Statutory Compliance", val: "100%", method: "Immutable Cryptographic Log Verification" }
        ],
        tags: ["Autonomous ERP", "Finance AI", "Neno ERP", "Reconciliation", "Tax Compliance"],
        actionText: "Explore Blueprint",
        inquiryParam: "autonomous-back-office",
        agentMesh: [
            {
                name: "Invoice Ingestion & OCR Agent",
                responsibility: "Extracts multi-currency line items, tax IDs, and payment terms from scanned bills and PDFs with 99.7% OCR precision.",
                color: "#6d6df6"
            },
            {
                name: "3-Way Match & Fraud Agent",
                responsibility: "Cross-checks vendor invoices against Purchase Orders (POs) and Goods Received Notes (GRNs), flagging price discrepancies.",
                color: "#4facfe"
            },
            {
                name: "Bank Reconciliation Agent",
                responsibility: "Matches bank transaction streams against ERP journal entries in real-time, handling FX fees and partial settlements.",
                color: "#9d4edd"
            },
            {
                name: "Statutory Tax & Compliance Agent",
                responsibility: "Validates vendor GST/VAT registration, checks withholding tax obligations, and pre-populates filing reports.",
                color: "#00f5d4"
            },
            {
                name: "Executive Reporting Agent",
                responsibility: "Synthesizes cash flows, accounts payable aging, and working capital forecasts into natural-language briefings.",
                color: "#f72585"
            }
        ],
        orchestrationPattern: "Deterministic Transaction Pipeline with Human-in-the-Loop Thresholds. Operations follow a strict automated rulebook: transactions below pre-set dollar limits with perfect 3-way match are reconciled autonomously. Discrepancies, tax rate mismatches, or high-value disbursements automatically halt and generate a 1-click approval alert for the CFO.",
        workflowSteps: [
            {
                step: "01",
                title: "Multi-Channel Document Ingestion",
                description: "Listens to dedicated finance inboxes, vendor portals, and EDI feeds, parsing incoming invoices instantly."
            },
            {
                step: "02",
                title: "Automated 3-Way Matching",
                description: "Verifies bill items against inventory receipts and ERP purchase orders to detect duplicate charges or overbilling."
            },
            {
                step: "03",
                title: "Real-Time Ledger Posting",
                description: "Creates double-entry journal records in Neno ERP or SAP, applying appropriate cost center tags and tax codes."
            },
            {
                step: "04",
                title: "Continuous Bank Reconciliation",
                description: "Matches bank statement feeds daily, categorizing merchant fees, interest, and international transfers."
            },
            {
                step: "05",
                title: "1-Click Statutory Filing & Reporting",
                description: "Generates audited tax returns, balance sheet summaries, and cash flow forecasts ready for CFO sign-off."
            }
        ],
        fullStack: {
            frontend: "React 19 financial control dashboard, approval queue panel, cash position forecast graphs",
            backend: "Go (Golang) ledger engine, Python automation workers, temporal workflow orchestrator",
            aiOrchestration: "Claude 3.5 Sonnet (complex unstructured invoices), Google Document AI, custom tax validation heuristics",
            dataStorage: "PostgreSQL (ACID compliant accounting ledger), Redis queues, immutable audit log storage",
            integrations: "Neno ERP, Odoo, SAP S/4HANA, TallyPrime, Stripe, Multi-Bank API feeds",
            infrastructure: "ISO 27001 / SOC 2 compliant cloud VPC, end-to-end field-level encryption, multi-tenant isolation"
        },
        whatWeDeliver: "A turnkey autonomous finance and operations back office connected directly to your existing banks and accounting software. Includes automated OCR pipelines, 3-way matching rules, statutory tax filing templates, CFO alerting systems, and complete ledger export tooling.",
        outcomeModel: {
            description: "Engineered for mid-market and enterprise businesses demanding continuous operational closure without headcount scaling.",
            kpis: [
                {
                    title: "Ledger Close Frequency",
                    target: "Daily Automated Close",
                    measurement: "Reduces month-end close cycles from 12 business days down to continuous daily reconciliation."
                },
                {
                    title: "Audit Trace Completeness",
                    target: "100% Deterministic Trace",
                    measurement: "Every financial entry is linked directly to the underlying source invoice, PO, and approval timestamp."
                },
                {
                    title: "Invoice Processing Cost",
                    target: "80% Cost Reduction",
                    measurement: "Eliminates manual data entry, paper filing, and verification labor across accounts payable."
                }
            ]
        },
        theHardPart: "Zero-tolerance for financial errors and edge-case exceptions. Unlike marketing copy where a small variation is acceptable, accounting requires 100% precision. We build a dual-verification architecture: an LLM extracts and normalizes unstructured invoice data, but all calculations, tax rates, and ledger balances are strictly evaluated by deterministic arithmetic engines that reject any transaction that doesn't balance to the cent."
    }
];

export const BLUEPRINT_INDUSTRIES = [
    "All",
    "Manufacturing",
    "BFSI",
    "Government",
    "Healthcare",
    "Retail",
    "Logistics"
] as const;
