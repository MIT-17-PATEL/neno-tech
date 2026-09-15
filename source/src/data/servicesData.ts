export interface ServiceItem {
    slug: string;
    title: string;
    pillBadge: string;
    shortTitle: string;
    description: string;
    overview: string;
    duration: string;
    capabilities: string[];
    deliverables: string[];
    technologies: string[];
    useCases: string[];
    benefits: string[];
    process: {
        step: string;
        title: string;
        desc: string;
    }[];
    href: string;
}

export const serviceItems: ServiceItem[] = [
    {
        slug: "agentic-ai-development",
        title: "Agentic AI Development & System Delivery",
        pillBadge: "AGENTIC AI DELIVERY",
        shortTitle: "Agentic AI Systems",
        description: "We architect, build, and ship custom autonomous multi-agent systems directly into your production environment. Fixed-scope delivery milestones, enterprise SLAs, and deterministic governance.",
        overview: "You define the operational outcome; our specialized engineering squads build, test, and ship the complete autonomous agentic system. Unlike staff augmentation, our turnkey delivery model takes full accountability for end-to-end architecture, tool-calling reliability, persistent memory schemas, security guardrails, and production SLAs. We hand over a fully operational system running inside your cloud infrastructure.",
        duration: "6 to 14 Weeks (Milestone-Based)",
        capabilities: [
            "Turnkey multi-agent architecture and autonomous workflow system delivery",
            "Deterministic tool-calling pipelines and enterprise system integrations (ERP, CRM, SQL)",
            "Dual-layer safety guardrails, approval gates, and compliance audit logging",
            "Hybrid RAG and persistent vector memory orchestration at scale",
            "Inference cost reduction, intelligent model routing, and latency optimization",
            "Production deployment with automated observability, SLAs, and runbooks"
        ],
        deliverables: [
            "Production-ready, deployed multi-agent codebase running in your cloud VPC",
            "End-to-end system architecture blueprint and agent state machine specifications",
            "Deterministic evaluation test suite measuring reliability, latency, and accuracy",
            "Admin operations dashboard with telemetry, cost tracking, and kill-switches",
            "Comprehensive engineering handover package, staff training, and 90-day SLA warranty"
        ],
        technologies: [
            "LangGraph / CrewAI / Semantic Kernel",
            "Anthropic Claude 3.5 / OpenAI GPT-4o / DeepSeek R1",
            "Python / FastAPI / Docker / Kubernetes",
            "Qdrant / Pinecone / pgvector / ClickHouse",
            "AWS Bedrock / Azure AI / GCP Vertex AI",
            "LangSmith / Arize Phoenix / OpenTelemetry",
            "Temporal.io / Celery / Kafka"
        ],
        useCases: [
            "Autonomous back-office operations, claims verification, and invoice clearing",
            "Multi-system workflow automation reconciling ERP, CRM, and internal databases",
            "Complex regulatory compliance auditing and automated risk report synthesis",
            "High-volume customer support resolution swarms with deterministic human escalation"
        ],
        benefits: [
            "Turnkey delivery ownership: our senior squad designs, builds, and launches the system",
            "Fixed-timeline sprints with milestone-based sign-offs and zero budget creep",
            "Enterprise SLA warranty covering post-launch monitoring, tuning, and bug fixes",
            "100% IP ownership: all models, prompt schemas, and custom code belong to you"
        ],
        process: [
            { step: "01", title: "Architecture Blueprint & Feasibility", desc: "We audit your workflows, define agent state graphs, map external API contracts, and establish deterministic error boundaries in a formal delivery spec." },
            { step: "02", title: "Core Graph & Integration Engineering", desc: "Our engineering squad builds the multi-agent graph, implements tool calling, integrates enterprise databases, and provisions secure private cloud VPCs." },
            { step: "03", title: "Benchmark Evals & Security Hardening", desc: "We subject the system to hundreds of edge-case scenarios, adversarial penetration testing, latency stress tests, and human-in-the-loop validation." },
            { step: "04", title: "Production Deployment & Handover", desc: "We deploy the system into your live environment, configure real-time telemetry dashboards, train your team, and provide 90 days of dedicated SLA support." }
        ],
        href: "/services/agentic-ai-development"
    },
    {
        slug: "ai-product-development",
        title: "AI Product Development",
        pillBadge: "AI PRODUCT DEVELOPMENT",
        shortTitle: "AI Product",
        description: "We build end-to-end AI-powered software products, covering architecture, LLM integration, production deployment, and go-to-market readiness.",
        overview: "Building an AI product requires more than calling an API. It demands thoughtful UX for model latency and uncertainty, structured prompt engineering, evaluation pipelines, cost controls, and scalable backend architecture. Our engineering teams ship full-stack AI SaaS products across healthcare, finance, legal, and operational workflows.",
        duration: "8 to 20 Weeks",
        capabilities: [
            "End-to-end AI product architecture: frontend, backend, and AI layer",
            "LLM feature integration with structured output and error handling",
            "AI UX patterns: streaming responses, confidence indicators, and human handoff",
            "Product evaluation: accuracy benchmarking and regression testing",
            "Multi-tenant SaaS architecture with usage-based billing and rate limiting",
            "Production-ready product: onboarding flows, analytics, and conversion instrumentation"
        ],
        deliverables: [
            "Production-deployed AI product with authentication and billing integration",
            "LLM evaluation dataset and automated regression test pipeline",
            "API documentation and integration guides for enterprise customers",
            "User onboarding flow with in-product analytics instrumentation",
            "Technical architecture documentation and engineering handover package"
        ],
        technologies: [
            "Next.js / React / TypeScript",
            "Python / FastAPI / Node.js",
            "Anthropic Claude / OpenAI / Gemini APIs",
            "PostgreSQL / Redis / Prisma ORM",
            "Stripe / Orb (usage-based billing)",
            "AWS / Vercel / Cloudflare",
            "PostHog / Mixpanel (product analytics)",
            "Stytch / Auth0 / Clerk (authentication)"
        ],
        useCases: [
            "AI-native SaaS product development from initial spec to launch",
            "Adding intelligent AI features to an existing software product",
            "Rebuilding a legacy product with an AI-first user experience",
            "Internal AI tooling for operations, legal, finance, or HR teams"
        ],
        benefits: [
            "Full-stack engineering team eliminating the overhead of managing multiple contractors",
            "Proven AI UX patterns reducing user confusion and drop-off",
            "Evaluation-first engineering preventing silent quality regressions",
            "Complete product setup with onboarding, analytics, and billing from day one"
        ],
        process: [
            { step: "01", title: "Product Discovery & Architecture", desc: "We work with your team to define the product vision, user journeys, technical architecture, and AI integration strategy." },
            { step: "02", title: "Core AI Feature Engineering", desc: "We build and evaluate the LLM integration layer, prompt architecture, structured output schemas, and data pipelines." },
            { step: "03", title: "Product Development & Iteration", desc: "We develop the full product in sprints with weekly demos, user feedback integration, and continuous AI quality evaluation." },
            { step: "04", title: "Launch & Growth Engineering", desc: "We ship the product with observability, onboarding flows, billing, and analytics instrumentation for post-launch iteration." }
        ],
        href: "/services/ai-product-development"
    },
    {
        slug: "vibe-coding-squads",
        title: "Vibe Coding Squads",
        pillBadge: "VIBE CODING SQUADS",
        shortTitle: "Vibe Coding",
        description: "Deploy an AI-augmented engineering squad to ship production features with high velocity using agentic development workflows.",
        overview: "Vibe Coding Squads are senior engineering pods that leverage AI coding agents, automated testing, and agentic workflows to ship tested software rapidly. Each squad combines an engineering lead, full stack developers, and AI tooling specialists operating in a shared CI/CD environment with human code review.",
        duration: "Ongoing Retainer or Project-Based",
        capabilities: [
            "AI-augmented software development with measured sprint velocity",
            "Agentic coding workflows: Cursor, GitHub Copilot, Claude Code, and test scaffolding",
            "Rapid prototyping: from concept to working demo in days",
            "Test-driven development with automated test coverage",
            "Automated code review, refactoring, and documentation generation",
            "End-to-end feature delivery: architecture, backend, frontend, and deployment"
        ],
        deliverables: [
            "Production-quality feature code with complete test coverage",
            "Weekly shipping logs: features delivered, PRs merged, and bugs resolved",
            "Automated CI/CD pipeline with automated code quality gates",
            "Engineering velocity metrics compared against baseline estimates",
            "Monthly sprint retrospective with codebase health reports"
        ],
        technologies: [
            "Cursor / GitHub Copilot / Claude Code",
            "React / Next.js / TypeScript",
            "Python / FastAPI / Node.js",
            "PostgreSQL / Redis / Prisma",
            "AWS / GCP / Cloudflare",
            "GitHub Actions / Linear / Notion",
            "Datadog / Sentry"
        ],
        useCases: [
            "Startups shipping an MVP to validate customer demand quickly",
            "Scale-ups needing increased sprint capacity without lengthy hiring cycles",
            "Enterprises running proof-of-concept AI transformation projects",
            "Product teams modernizing legacy interfaces with contemporary web stacks"
        ],
        benefits: [
            "Higher shipping velocity compared to traditional single-contributor workflows",
            "No recruitment overhead: squads integrate directly into your repository and sprint board",
            "Measurable progress tracked through weekly pull requests and deployment demos",
            "Access to structured AI tooling workflows without procurement friction"
        ],
        process: [
            { step: "01", title: "Squad Composition & Kickoff", desc: "We staff a tailored squad based on your tech stack, product complexity, and desired velocity targets." },
            { step: "02", title: "AI Tooling Environment Setup", desc: "We configure the full AI-augmented development environment: IDEs, agents, CI/CD pipelines, and code quality tooling." },
            { step: "03", title: "Sprint-Based Delivery", desc: "The squad operates in weekly sprints with daily async updates, code reviews, and demo sessions every Friday." },
            { step: "04", title: "Velocity Reporting & Optimization", desc: "Monthly retrospectives analyze velocity data, identify bottlenecks, and optimize squad composition and AI tooling usage." }
        ],
        href: "/services/vibe-coding-squads"
    },
    {
        slug: "ai-gtm",
        title: "AI GTM (Go-To-Market)",
        pillBadge: "AI GTM (GO-TO-MARKET)",
        shortTitle: "AI GTM",
        description: "AI applied to how you sell. Build intelligent lead qualification, outbound automation, CRM intelligence, AI voice follow-ups, and pipeline analytics directly into your existing sales stack.",
        overview: "Sales teams often lose opportunities because leads are not qualified quickly, follow-ups are inconsistent, CRM data is incomplete, and sales teams spend too much time on repetitive outreach. Our AI GTM consultants design and integrate intelligent sales workflows that automate qualification, engagement, follow-up, and pipeline intelligence while fitting into your existing CRM and sales operations.",
        duration: "2 to 6 Weeks Advisory",
        capabilities: [
            "AI GTM Strategy and Sales Workflow Blueprint",
            "Lead Qualification Agent and Scoring Logic",
            "Automated Outbound and Follow-Up Workflows",
            "CRM Intelligence and Data-Enrichment Configuration",
            "AI Voice Agent for Lead Follow-Up and Qualification",
            "Pipeline Analytics Dashboard and Conversion Insights"
        ],
        deliverables: [
            "AI GTM Strategy and Sales Workflow Blueprint",
            "Lead Qualification Agent and Scoring Logic",
            "Automated Outbound and Follow-Up Workflows",
            "CRM Intelligence and Data-Enrichment Configuration",
            "AI Voice Agent for Lead Follow-Up and Qualification",
            "Pipeline Analytics Dashboard and Conversion Insights"
        ],
        technologies: [
            "Salesforce / HubSpot / Zoho CRM",
            "Google Sheets / Microsoft Excel",
            "n8n / Make",
            "OpenAI / Gemini / Claude",
            "Twilio / Vapi",
            "Slack / Microsoft Teams",
            "Calendly / Microsoft Bookings",
            "HubSpot Marketing Hub",
            "PostgreSQL / Supabase",
            "Power BI / Looker Studio"
        ],
        useCases: [
            "Automating qualification for high-volume inbound leads",
            "Building AI-powered outbound prospecting systems",
            "Automatically following up with leads that do not respond",
            "Using AI voice agents to qualify leads and schedule meetings",
            "Connecting website leads, CRM, email, and booking systems into one workflow",
            "Identifying stalled opportunities and pipeline leakage",
            "Giving sales managers AI-powered visibility into pipeline performance"
        ],
        benefits: [
            "Faster lead response and qualification",
            "Higher sales productivity through automated repetitive workflows",
            "More consistent follow-up across every lead",
            "Better CRM data quality and pipeline visibility",
            "Increased meeting-booking and conversion opportunities",
            "Sales teams focused on high-value conversations instead of manual tasks"
        ],
        process: [
            {
                step: "01",
                title: "GTM & Sales Process Audit",
                desc: "We evaluate your existing lead sources, CRM workflows, qualification process, outreach channels, sales stages, follow-up practices, and pipeline data to identify automation opportunities and revenue bottlenecks."
            },
            {
                step: "02",
                title: "AI Lead Qualification & Engagement",
                desc: "We design AI-powered qualification workflows that capture incoming leads, understand buyer intent, score prospects, ask relevant qualification questions, and route high-value opportunities to the right sales representatives."
            },
            {
                step: "03",
                title: "Outbound & Follow-Up Automation",
                desc: "We build automated outreach and follow-up systems across email, CRM, messaging, and voice channels. AI agents can personalize outreach, respond to common questions, schedule meetings, and continuously follow up with prospects."
            },
            {
                step: "04",
                title: "CRM Intelligence & Pipeline Analytics",
                desc: "We connect AI workflows with your CRM to keep customer data updated, identify pipeline risks, surface high-intent opportunities, and provide actionable insights into conversion rates, sales velocity, and follow-up performance."
            }
        ],
        href: "/services/ai-gtm"
    },
    {
        slug: "llm-fine-tuning-deployment",
        title: "LLM Fine-Tuning & Deployment",
        pillBadge: "LLM FINE-TUNING & DEPLOYMENT",
        shortTitle: "LLM Fine-Tuning",
        description: "We fine-tune open-source and proprietary language models on domain datasets, reducing API costs while improving accuracy on specialized domain tasks.",
        overview: "General-purpose foundation models can be expensive and slow on repetitive domain tasks. Our LLM fine-tuning service trains compact models on your proprietary data using LoRA, QLoRA, and preference alignment. We manage data curation, evaluation benchmarks, and production serving infrastructure.",
        duration: "4 to 10 Weeks",
        capabilities: [
            "Dataset curation, cleaning, formatting, and quality filtering pipelines",
            "Supervised fine-tuning (SFT): LoRA, QLoRA, and full-parameter tuning",
            "DPO and preference alignment for output consistency and safety",
            "Model evaluation: accuracy benchmarking, error analysis, and task-specific evals",
            "Quantization (GPTQ, AWQ, GGUF) for optimized inference latency",
            "Production model serving: vLLM, TGI, Ollama, and containerized endpoints"
        ],
        deliverables: [
            "Fine-tuned model weights with benchmark comparisons against base models",
            "Dataset curation pipeline with deduplication and quality filters",
            "Model card detailing training configuration, evaluation results, and usage",
            "Production serving infrastructure with autoscaling and latency monitoring",
            "Inference cost comparison detailing savings per million tokens"
        ],
        technologies: [
            "Llama 3.3 / Mistral / Qwen / Phi-4 (base models)",
            "Hugging Face Transformers / PEFT / TRL",
            "Axolotl / LLaMA Factory (training frameworks)",
            "GPTQ / AWQ / GGUF (quantization)",
            "vLLM / TGI / Ollama (serving)",
            "Weights & Biases / MLflow (experiment tracking)",
            "AWS SageMaker / GCP Vertex AI / Lambda Labs (compute)",
            "LangSmith / Arize (production evaluation)"
        ],
        useCases: [
            "Domain-specific document extraction, classification, and summarization",
            "Customer-facing assistant applications with strict tone and domain knowledge",
            "Code generation models tuned for internal libraries and design systems",
            "Lowering token costs on high-volume production LLM workloads"
        ],
        benefits: [
            "Substantial inference cost reduction compared to commercial APIs at high volume",
            "Higher accuracy on specialized domain terminology and formatted outputs",
            "Private infrastructure hosting ensuring sensitive data remains in your VPC",
            "Reduced inference latency for real-time and edge applications"
        ],
        process: [
            { step: "01", title: "Data Assessment & Strategy", desc: "We evaluate your proprietary data assets, identify gaps, design the fine-tuning dataset schema, and plan the training strategy." },
            { step: "02", title: "Dataset Curation & Preparation", desc: "We clean, format, and quality-filter training examples to create verified instruction-response pairs for your domain." },
            { step: "03", title: "Fine-Tuning & Evaluation", desc: "We train the model using LoRA/QLoRA, run comprehensive benchmarks, and iterate until target accuracy metrics are achieved." },
            { step: "04", title: "Production Deployment & Cost Analysis", desc: "We deploy the model on your infrastructure with autoscaling, provide cost-per-token analysis, and establish monitoring dashboards." }
        ],
        href: "/services/llm-fine-tuning-deployment"
    },
    {
        slug: "application-support-modernization",
        title: "Application Support & Modernization",
        pillBadge: "APPLICATION SUPPORT & MODERNIZATION",
        shortTitle: "App Support & Modernization",
        description: "We provide dedicated engineering support teams and execute legacy application modernization, from 24/7 incident response to cloud-native re-architecture.",
        overview: "Legacy applications accumulate technical debt that slows feature velocity and increases operational risk. Our Application Support and Modernization service combines ongoing production support with a step-by-step modernization plan, maintaining uptime while replacing aging services with cloud-native components.",
        duration: "Ongoing + 12 to 24 Week Modernization",
        capabilities: [
            "24/7 production monitoring, incident response, and SLA adherence",
            "Legacy codebase audit: dependency mapping, security checks, and debt scoring",
            "Strangler fig pattern: incremental module extraction without full rewrites",
            "Cloud migration: on-premise to AWS / GCP with planned zero-downtime cutover",
            "Database modernization: schema refactoring, replication, and data integrity checks",
            "API modernization: service decoupling and REST / GraphQL architecture"
        ],
        deliverables: [
            "Application health audit report detailing technical debt and risks",
            "Phased modernization roadmap with business continuity safeguards",
            "Monthly support report detailing uptime, resolved incidents, and SLAs",
            "Modernized microservices with automated test coverage",
            "Cloud infrastructure automation with Infrastructure-as-Code templates"
        ],
        technologies: [
            "Node.js / Python / Go (modernization targets)",
            "React / Next.js (frontend modernization)",
            "PostgreSQL / Redis / MongoDB",
            "Docker / Kubernetes / Helm",
            "AWS / GCP (cloud migration targets)",
            "Terraform / AWS CDK (IaC)",
            "Datadog / Prometheus / Grafana (observability)",
            "GitHub Actions / GitLab CI (CI/CD)"
        ],
        useCases: [
            "Monolithic codebases slowing sprint delivery and deployment frequency",
            "On-premise servers needing migration to scalable cloud infrastructure",
            "Legacy frameworks requiring modernization to improve maintainability",
            "Production systems requiring structured on-call monitoring and incident SLAs"
        ],
        benefits: [
            "Uninterrupted business continuity during phased system updates",
            "Restored developer velocity as legacy bottlenecks are systematically resolved",
            "Optimized cloud infrastructure reducing hosting and operational costs",
            "Modern technical foundation supporting long-term feature expansion"
        ],
        process: [
            { step: "01", title: "Legacy Audit & Modernization Assessment", desc: "We analyze the existing application architecture, code quality, data models, dependencies, and infrastructure to produce a comprehensive modernization report." },
            { step: "02", title: "Modernization Roadmap Design", desc: "We design a phased migration plan using the strangler fig pattern, prioritizing high-risk components and quick-win modules." },
            { step: "03", title: "Parallel Support & Incremental Modernization", desc: "Our support team maintains production stability while modernization engineers incrementally replace legacy components." },
            { step: "04", title: "Cutover, Validation & Handover", desc: "We execute zero-downtime cutovers, validate each modernized component in production, and transfer ownership to your team with full documentation." }
        ],
        href: "/services/application-support-modernization"
    }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
    return serviceItems.find(s => s.slug === slug);
}
