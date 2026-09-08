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
        overview: "Agentic AI represents the next frontier of enterprise automation — systems that autonomously perceive context, reason over information, and execute multi-step tasks with minimal human intervention. Our engineering teams design robust agent graphs, tool-calling pipelines, and multi-agent orchestration frameworks that operate at enterprise scale with full observability, safety guardrails, and human-in-the-loop controls.",
        duration: "6–16 Weeks",
        capabilities: [
            "Autonomous AI agent design & multi-agent orchestration systems",
            "Tool-calling & function-calling pipeline architecture (LangGraph, AutoGen)",
            "RAG system design: vector ingestion, chunking, retrieval optimization",
            "Agent memory management: episodic, semantic & procedural memory",
            "Human-in-the-loop guardrails, approval workflows & safety evaluation",
            "Production deployment with observability, cost tracking & alerting"
        ],
        deliverables: [
            "Production-deployed agentic system integrated with your existing stack",
            "Agent architecture documentation & system design specifications",
            "RAG pipeline with semantic search and real-time data ingestion",
            "Evaluation benchmark suite measuring accuracy, reliability & cost",
            "Comprehensive runbooks for agent monitoring, maintenance & extension"
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
            "Autonomous research, document analysis & structured report generation",
            "AI-powered sales development representatives & outbound automation",
            "Internal enterprise copilots for engineering, ops & support teams",
            "Multi-agent data pipelines for document processing & workflow automation"
        ],
        benefits: [
            "10–50x operational leverage by automating complex knowledge workflows",
            "Production-grade reliability with evaluation benchmarks & fallback logic",
            "Cost-optimized inference with intelligent model routing & caching",
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
        description: "We build end-to-end AI-powered software products — from architecture and LLM integration to production deployment and go-to-market readiness.",
        overview: "Building an AI product requires far more than calling an API. It demands thoughtful UX for AI uncertainty, robust prompt engineering, evaluation pipelines, cost governance, and a product infrastructure that scales with user growth. Our AI product engineering teams have shipped multiple AI-native SaaS products across healthcare, fintech, legaltech, and enterprise workflow automation.",
        duration: "8–20 Weeks",
        capabilities: [
            "End-to-end AI product architecture: frontend, backend & AI layer",
            "LLM feature integration with structured output & hallucination mitigation",
            "AI UX patterns: streaming responses, confidence indicators & human handoff",
            "Product evaluation: LLM accuracy benchmarking & regression testing",
            "Multi-tenant SaaS architecture with usage-based billing & rate limiting",
            "GTM-ready product: onboarding flows, analytics & conversion optimization"
        ],
        deliverables: [
            "Production-deployed AI product with authentication & billing integration",
            "LLM evaluation dataset & automated regression test pipeline",
            "API documentation and integration guides for enterprise customers",
            "User onboarding flow with in-product analytics instrumentation",
            "Technical architecture documentation & engineering handover package"
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
            "AI-native SaaS product development from zero to launch",
            "Adding intelligent AI features to an existing software product",
            "Rebuilding a legacy product with an AI-first user experience",
            "Internal AI tooling for operations, legal, finance or HR teams"
        ],
        benefits: [
            "Full-stack engineering team eliminating the need to hire 5+ separate roles",
            "Proven AI UX patterns reducing user confusion and abandonment",
            "Evaluation-first engineering preventing silent quality regressions",
            "GTM-ready product with onboarding, analytics & billing from day one"
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
        description: "Deploy a high-velocity AI-augmented engineering squad that ships production code at 3–5x the speed of traditional development teams using cutting-edge agentic tooling.",
        overview: "Vibe Coding Squads are Neno Technology's flagship high-velocity engineering model — small, senior engineering pods that leverage the latest AI coding agents, code generation tools, and agentic workflows to ship working software at unprecedented speed. Each squad combines an engineering lead, full stack developers, and AI tooling specialists who operate in a fully AI-augmented development environment.",
        duration: "Ongoing Retainer or Project-Based",
        capabilities: [
            "AI-augmented software development at 3–5x traditional team velocity",
            "Agentic coding: Cursor, GitHub Copilot, Claude Code & Devin workflows",
            "Rapid prototyping: from concept to working demo in 1–3 days",
            "Test-driven development with AI-generated test scaffolding",
            "Automated code review, refactoring & documentation generation",
            "End-to-end feature delivery: design → backend → frontend → deployment"
        ],
        deliverables: [
            "Production-quality feature code with full test coverage",
            "Weekly shipping metrics: features shipped, lines reviewed, bugs fixed",
            "Automated CI/CD pipeline with AI-assisted code quality gates",
            "Engineering velocity benchmarks vs. industry baselines",
            "Monthly retrospective report with team learnings & process improvements"
        ],
        technologies: [
            "Cursor / GitHub Copilot / Claude Code",
            "Devin / Lovable / Bolt.new (prototyping)",
            "React / Next.js / TypeScript",
            "Python / FastAPI / Node.js",
            "PostgreSQL / Redis / Prisma",
            "AWS / GCP / Cloudflare",
            "GitHub Actions / Linear / Notion",
            "Datadog / Sentry"
        ],
        useCases: [
            "Startups needing to ship an MVP in 2–4 weeks instead of 3–6 months",
            "Scale-ups that need to double engineering output without doubling headcount",
            "Enterprises running AI transformation pilots that need rapid proof-of-concepts",
            "Product teams rebuilding legacy features with modern AI-native architecture"
        ],
        benefits: [
            "3–5x shipping velocity compared to traditionally staffed engineering teams",
            "No hiring, onboarding, or training overhead — squad is productive from day one",
            "AI tooling ROI demonstrated through measurable weekly velocity metrics",
            "Access to the latest AI coding tools without internal tooling procurement complexity"
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
        description: "We build AI-powered go-to-market engines — automated outbound systems, AI SDRs, product-led growth infrastructure, and attribution analytics that drive compounding pipeline growth.",
        overview: "Modern go-to-market execution is a software engineering problem as much as a sales and marketing problem. Our AI GTM team designs and builds the technology infrastructure that powers scalable, automated growth: AI-powered outbound sequences, lead enrichment pipelines, multi-touch attribution systems, product-led growth onboarding flows, and RevOps automation that eliminates manual CRM administration.",
        duration: "4–12 Weeks",
        capabilities: [
            "AI SDR & automated outbound pipeline design and implementation",
            "Lead enrichment automation: Clay, Apollo, ZoomInfo & AI scoring",
            "Multi-touch attribution modeling & full-funnel analytics instrumentation",
            "Product-led growth (PLG) onboarding flow design & conversion optimization",
            "CRM lifecycle automation: HubSpot, Salesforce & Neno CRM workflows",
            "Technical SEO architecture & programmatic content growth engineering"
        ],
        deliverables: [
            "Fully operational AI outbound system with enrichment & sequencing",
            "Multi-touch attribution dashboard with channel-level ROI reporting",
            "PLG onboarding flow with activation metrics and A/B test framework",
            "CRM automation playbooks with sales & marketing handoff SOPs",
            "GTM tech stack documentation & team training materials"
        ],
        technologies: [
            "Clay / Apollo / ZoomInfo (enrichment)",
            "Instantly / Smartlead / Outreach (sequencing)",
            "HubSpot / Salesforce / Neno CRM",
            "Segment / RudderStack (event tracking)",
            "Mixpanel / PostHog / GA4 (analytics)",
            "Customer.io / Klaviyo (lifecycle automation)",
            "Make / n8n / Zapier (workflow automation)",
            "Metabase / Looker (BI dashboards)"
        ],
        useCases: [
            "B2B SaaS startups building their first scalable outbound motion",
            "Fixing broken attribution and inaccurate marketing spend data",
            "Transitioning from sales-led to product-led growth (PLG) motion",
            "Automating high-volume outbound prospecting with AI enrichment"
        ],
        benefits: [
            "Automated outbound generating qualified meetings on autopilot 24/7",
            "Crystal-clear attribution data showing exact marketing spend ROI",
            "PLG onboarding reducing time-to-value and increasing trial conversion",
            "RevOps automation eliminating 20+ hours of manual CRM work per week"
        ],
        process: [
            { step: "01", title: "GTM Audit & Strategy", desc: "We analyze your current acquisition channels, attribution accuracy, conversion funnel gaps, and CRM data integrity." },
            { step: "02", title: "Tech Stack Design & Configuration", desc: "We design and configure the GTM technology stack: enrichment, sequencing, CRM, analytics, and automation tools." },
            { step: "03", title: "Pipeline & Automation Build", desc: "We build outbound sequences, lead scoring models, CRM workflows, attribution tracking, and PLG onboarding flows." },
            { step: "04", title: "Launch, Optimize & Train", desc: "We launch the full GTM engine, monitor key metrics, optimize conversion rates, and train your team on operations." }
        ],
        href: "/services/ai-gtm"
    },
    {
        slug: "llm-fine-tuning-deployment",
        title: "LLM Fine-Tuning & Deployment",
        pillBadge: "LLM FINE-TUNING & DEPLOYMENT",
        shortTitle: "LLM Fine-Tuning",
        description: "We fine-tune open-source and proprietary language models on your proprietary data, reducing inference costs by 60–80% while achieving domain-specific accuracy exceeding frontier models.",
        overview: "General-purpose foundation models are expensive, slow, and often underperform on specialized domain tasks. Our LLM fine-tuning service trains compact, domain-specialized models on your proprietary data using LoRA, QLoRA, and RLHF techniques — producing models that are faster, cheaper, and more accurate than calling GPT-4o or Claude on your specific use case. We handle everything from dataset curation to production serving infrastructure.",
        duration: "4–10 Weeks",
        capabilities: [
            "Dataset curation, cleaning, formatting & quality assessment pipelines",
            "Supervised fine-tuning (SFT): LoRA, QLoRA & full-parameter fine-tuning",
            "RLHF & DPO alignment training for response quality & safety",
            "Model evaluation: accuracy benchmarking, hallucination rate & BLEU/ROUGE scoring",
            "Quantization (GPTQ, GGUF) for efficient CPU/GPU inference",
            "Production model serving: vLLM, TGI, Ollama & managed API endpoints"
        ],
        deliverables: [
            "Fine-tuned model weights with evaluation benchmark comparison vs. base model",
            "Dataset curation pipeline with quality filtering & deduplication scripts",
            "Model card with performance metrics, training configuration & usage guidelines",
            "Production serving infrastructure with autoscaling & latency benchmarks",
            "Cost comparison analysis: fine-tuned vs. frontier API cost per 1M tokens"
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
            "Domain-specific document extraction, classification & summarization",
            "Customer-facing chatbots requiring consistent brand voice & knowledge",
            "Code generation models tuned on your internal codebase & conventions",
            "Reducing frontier model API costs by 60–80% on high-volume inference"
        ],
        benefits: [
            "60–80% inference cost reduction vs. calling frontier model APIs at volume",
            "Domain accuracy improvements of 15–40% over general-purpose base models",
            "Data privacy: model runs on your infrastructure, no data leaving your environment",
            "Faster inference latency enabling real-time applications unsuitable for frontier APIs"
        ],
        process: [
            { step: "01", title: "Data Assessment & Strategy", desc: "We evaluate your proprietary data assets, identify gaps, design the fine-tuning dataset schema, and plan the training strategy." },
            { step: "02", title: "Dataset Curation & Preparation", desc: "We curate, clean, format, and quality-filter training examples — creating instruction-response pairs aligned with your use case." },
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
        description: "We provide dedicated engineering support teams and execute systematic legacy application modernization — from 24/7 incident response to cloud-native re-architecture.",
        overview: "Legacy applications accumulate technical debt that slows new feature delivery, increases operational risk, and creates recruitment challenges. Our Application Support & Modernization service combines ongoing production support with a systematic modernization roadmap — ensuring business continuity while incrementally replacing aging infrastructure with modern, cloud-native alternatives that support long-term growth.",
        duration: "Ongoing + 12–24 Week Modernization",
        capabilities: [
            "24/7 production monitoring, incident management & SLA reporting",
            "Legacy codebase audit: tech debt scoring, dependency mapping & risk assessment",
            "Strangler fig pattern: incremental modernization without big-bang rewrites",
            "Cloud migration: on-premise to AWS / GCP with zero-downtime cutover",
            "Database modernization: schema migration, replication & polyglot persistence",
            "API layer modernization: monolith decomposition & microservices extraction"
        ],
        deliverables: [
            "Comprehensive legacy application audit report with tech debt scoring",
            "Phased modernization roadmap with risk assessment and business continuity plan",
            "Monthly support operations report with incident trends & SLA compliance",
            "Modernized application components with automated test coverage",
            "Cloud infrastructure migration with IaC templates & runbooks"
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
            "Legacy monolith applications blocking new feature delivery velocity",
            "On-premise infrastructure requiring cloud migration for scalability",
            "Aging technology stacks creating engineering recruitment challenges",
            "Production systems lacking monitoring, alerting & incident response coverage"
        ],
        benefits: [
            "Business continuity maintained throughout incremental modernization process",
            "Engineering velocity restored as legacy tech debt is systematically eliminated",
            "Cloud infrastructure reducing operational costs by 30–50% vs. on-premise",
            "Modern architecture enabling rapid feature development and talent acquisition"
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
