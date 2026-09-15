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
        title: "Agentic AI Development",
        pillBadge: "AGENTIC AI DEVELOPMENT",
        shortTitle: "Agentic AI",
        description: "We design and build production-grade autonomous AI agents, multi-agent orchestration systems, and LLM-powered workflows that automate complex business processes end-to-end.",
        overview: "Agentic AI enables systems to perceive context, reason through multi-step tasks, execute API tool calls, and handle edge cases with human oversight. Our engineering teams build robust agent graphs, tool-calling pipelines, and multi-agent orchestration frameworks with full observability, safety guardrails, and deterministic fallbacks.",
        duration: "6 to 16 Weeks",
        capabilities: [
            "Autonomous AI agent design and multi-agent orchestration systems",
            "Tool-calling and function-calling pipeline architecture (LangGraph, AutoGen)",
            "RAG system design: vector ingestion, chunking, and retrieval optimization",
            "Agent memory management: episodic, semantic, and procedural memory",
            "Human-in-the-loop guardrails, approval workflows, and safety evaluation",
            "Production deployment with observability, cost tracking, and alerting"
        ],
        deliverables: [
            "Production-deployed agentic system integrated with your existing stack",
            "Agent architecture documentation and system design specifications",
            "RAG pipeline with semantic search and real-time data ingestion",
            "Evaluation benchmark suite measuring accuracy, reliability, and cost",
            "Comprehensive runbooks for agent monitoring, maintenance, and extension"
        ],
        technologies: [
            "Anthropic Claude / OpenAI GPT-4o",
            "LangChain / LangGraph / LlamaIndex",
            "AutoGen / CrewAI / Semantic Kernel",
            "Pinecone / Qdrant / Weaviate / pgvector",
            "Python / FastAPI",
            "AWS Bedrock / GCP Vertex AI",
            "LangSmith / Arize / TruLens",
            "Redis / PostgreSQL"
        ],
        useCases: [
            "Autonomous research, document analysis, and structured report generation",
            "AI-powered sales development representatives and outbound automation",
            "Internal enterprise copilots for engineering, ops, and support teams",
            "Multi-agent data pipelines for document processing and workflow automation"
        ],
        benefits: [
            "Measurable operational leverage by automating repetitive knowledge workflows",
            "Production-grade reliability with evaluation benchmarks and fallback logic",
            "Cost-optimized inference with intelligent model routing and caching",
            "Vendor-neutral architecture preventing single-provider lock-in"
        ],
        process: [
            { step: "01", title: "Use-Case Scoping & Feasibility", desc: "We define agent goals, tool inventories, memory requirements, success metrics, and acceptable failure modes with your team." },
            { step: "02", title: "Agent Architecture Design", desc: "We design the agent graph, tool-calling schema, RAG pipeline, and human-in-the-loop checkpoints before writing code." },
            { step: "03", title: "Iterative Development & Evaluation", desc: "We build, evaluate, and iterate agent behavior using benchmark datasets and production-representative test scenarios." },
            { step: "04", title: "Production Deployment & Monitoring", desc: "We deploy with full observability, cost tracking dashboards, latency benchmarks, and comprehensive on-call runbooks." }
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
