export interface ConsultingService {
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

export const consultingServices: ConsultingService[] = [
    {
        slug: "ai-strategy",
        title: "AI Strategy Consulting",
        pillBadge: "AI STRATEGY CONSULTING",
        shortTitle: "AI Strategy",
        description: "Formulate an actionable enterprise AI adoption roadmap, evaluate foundation models, prioritize high-ROI use cases, and establish responsible AI governance.",
        overview: "We help leadership and engineering teams navigate AI adoption with technical clarity. Our AI architects conduct hands-on readiness audits, evaluate model architectures (OpenAI, Anthropic Claude, open-source LLMs), architect data and RAG pipelines, and build a phased adoption roadmap aligned with your business goals.",
        duration: "2 to 4 Weeks Advisory",
        capabilities: [
            "AI Readiness and Technical Maturity Assessment",
            "LLM and Foundation Model Evaluation (Cost, Latency, Accuracy)",
            "High-ROI Use-Case Identification and Feasibility Scoring",
            "Enterprise Data Strategy, RAG Architecture, and Governance",
            "Responsible AI, Guardrails, and Security Compliance (OWASP LLM Top 10)",
            "Build vs. Buy Decision Modeling and AI Vendor Due Diligence"
        ],
        deliverables: [
            "Comprehensive AI Technical Readiness Audit Report",
            "Phased 12-Month Enterprise AI Implementation Roadmap",
            "Inference Compute and Token Cost Projection Model",
            "Target-State Architecture and RAG Pipeline Specifications",
            "Responsible AI, Data Privacy, and Security Guardrail Guidelines"
        ],
        technologies: [
            "Anthropic Claude API",
            "OpenAI GPT-4o",
            "LangChain & LlamaIndex",
            "Pinecone / Qdrant / Weaviate",
            "Hugging Face",
            "AWS Bedrock / GCP Vertex AI",
            "LangSmith / TruLens",
            "Ollama / vLLM"
        ],
        useCases: [
            "Enterprise AI adoption planning across engineering and operations",
            "LLM-powered internal workflow automation and developer copilots",
            "Customer-facing AI product strategy and technical scoping",
            "Legacy system modernization leveraging agentic pipelines"
        ],
        benefits: [
            "Practical implementation blueprints from engineers who build production systems",
            "Clear token cost and infrastructure modeling before writing code",
            "Risk mitigation addressing data leakage, hallucination, and compliance requirements",
            "Vendor-neutral recommendations tailored to your infrastructure requirements"
        ],
        process: [
            {
                step: "01",
                title: "Discovery & Opportunity Audit",
                desc: "We audit existing tech stacks, proprietary data assets, security policies, and strategic priorities to map viable AI opportunities."
            },
            {
                step: "02",
                title: "Feasibility & ROI Scoring",
                desc: "Each proposed AI use case is rigorously scored against technical feasibility, token/compute costs, latency tolerances, and expected ROI."
            },
            {
                step: "03",
                title: "Architecture & Security Blueprint",
                desc: "We design the target-state system architecture, model selection, RAG indexing pipelines, and enterprise security guardrails."
            },
            {
                step: "04",
                title: "Execution Roadmap & Handover",
                desc: "We deliver an executive roadmap complete with sprint breakdowns, team resourcing plans, vendor selection matrices, and KPIs."
            }
        ],
        href: "/consulting/ai-strategy"
    },
    {
        slug: "software-product",
        title: "Software Product Consulting",
        pillBadge: "SOFTWARE PRODUCT CONSULTING",
        shortTitle: "Product Consulting",
        description: "Senior architectural guidance on distributed systems, tech debt mitigation, modern cloud frameworks, and high-velocity engineering practices.",
        overview: "We provide architectural leadership to improve sprint velocity, resolve technical debt, and design resilient cloud systems. Our systems architects review code repositories, isolate performance bottlenecks, and establish modular patterns that allow your engineering team to ship reliably.",
        duration: "3 to 6 Weeks Advisory",
        capabilities: [
            "End-to-End System Architecture Review and Scalability Audits",
            "Technical Debt Remediation and Incremental Refactoring Roadmaps",
            "Cloud-Native Microservices and Event-Driven Architecture Design",
            "Engineering Velocity, CI/CD Pipeline, and Toolchain Optimization",
            "High-Throughput API Design and Database Schema Modernization",
            "Technical Due Diligence for Investors, M&A, and Board Audits"
        ],
        deliverables: [
            "Architectural Health and Codebase Scalability Audit",
            "Prioritized Technical Debt Remediation Backlog",
            "Target-State Distributed System Architecture Diagrams",
            "Developer Tooling and CI/CD Pipeline Optimization Plan",
            "Executive Technical Due Diligence and Risk Report"
        ],
        technologies: [
            "React / Next.js",
            "TypeScript / Node.js / NestJS",
            "Python / FastAPI / Django",
            "Go / Rust",
            "PostgreSQL / Redis / MongoDB",
            "Apache Kafka / RabbitMQ",
            "AWS / GCP / Cloudflare",
            "Docker / Kubernetes / Terraform"
        ],
        useCases: [
            "Growing web applications encountering latency or database bottlenecks",
            "Monolith to modular service migrations without stopping feature delivery",
            "Sprint velocity slowdowns caused by accumulated legacy code",
            "Preparation for enterprise customer onboarding or technical audits"
        ],
        benefits: [
            "Restores engineering throughput by systematically addressing technical blockers",
            "Modular architecture designed for independent team deployment",
            "Reduced cloud compute and infrastructure maintenance expenses",
            "Actionable code blueprints and ADRs rather than abstract slides"
        ],
        process: [
            {
                step: "01",
                title: "Deep-Dive Codebase Audit",
                desc: "We inspect code quality, component boundaries, database query efficiency, dependency health, and deployment pipelines."
            },
            {
                step: "02",
                title: "Bottleneck Identification",
                desc: "We isolate concurrency bottlenecks, single points of failure, latency spikes, and developer velocity friction points."
            },
            {
                step: "03",
                title: "Target Architecture Design",
                desc: "We design a clean, modular system architecture that supports new feature delivery while allowing phased refactoring."
            },
            {
                step: "04",
                title: "Sprint Implementation Playbook",
                desc: "We provide detailed task breakdowns, architectural decision records (ADRs), and mentoring for your core development team."
            }
        ],
        href: "/consulting/software-product"
    },
    {
        slug: "mvp-to-production",
        title: "MVP → Production Consulting",
        pillBadge: "MVP → PRODUCTION CONSULTING",
        shortTitle: "MVP to Production",
        description: "The hardest gap in AI. Your demo works; your production system doesn't. We help teams move AI prototypes and early MVPs into reliable production systems by solving the challenges that usually appear after the demo: reliability, evaluation, cost, latency, security, deployment, and monitoring.",
        overview: "AI prototypes can perform well in controlled demos but break down when real users, production traffic, larger datasets, and enterprise requirements are introduced. Our consultants identify and address the technical gaps between an AI prototype and a production-ready system — from model evaluation and reliability to infrastructure, performance, security, and operational monitoring.",
        duration: "2 to 6 Weeks Advisory",
        capabilities: [
            "Production Readiness Assessment and Gap Analysis",
            "AI Evaluation Framework and Reliability Benchmarks",
            "Cost & Latency Optimization Plan",
            "Production Deployment Architecture",
            "Security, Monitoring & Observability Blueprint",
            "CI/CD and Incident-Response Workflows"
        ],
        deliverables: [
            "Production Readiness Assessment and Gap Analysis",
            "AI Evaluation Framework and Reliability Benchmarks",
            "Cost & Latency Optimization Plan",
            "Production Deployment Architecture",
            "Security, Monitoring & Observability Blueprint"
        ],
        technologies: [
            "OpenAI / Anthropic / Gemini",
            "LangChain / LangGraph",
            "Python / FastAPI / Node.js",
            "AWS / GCP / Azure",
            "Docker / Kubernetes",
            "Terraform / OpenTofu",
            "PostgreSQL / Redis",
            "GitHub Actions / GitLab CI",
            "Datadog / Prometheus / Grafana",
            "Sentry / OpenTelemetry"
        ],
        useCases: [
            "Transitioning an AI prototype or MVP into production",
            "Preparing an AI product for real customer traffic",
            "Reducing unexpectedly high model and infrastructure costs",
            "Improving inconsistent AI outputs through systematic evaluation",
            "Fixing latency, reliability, and scalability issues before launch",
            "Preparing an AI application for enterprise security and operational requirements"
        ],
        benefits: [
            "Reliable AI systems that perform beyond controlled demos",
            "Measurable AI quality with structured evaluation and testing",
            "Lower model, API, and infrastructure costs",
            "Faster and more predictable response times",
            "Secure production deployments with proper monitoring",
            "A scalable technical foundation for growing AI workloads"
        ],
        process: [
            {
                step: "01",
                title: "Production Readiness Audit",
                desc: "We evaluate your AI application architecture, model integrations, prompts, data pipelines, APIs, cloud infrastructure, security controls, secrets management, and failure handling to identify production-critical gaps."
            },
            {
                step: "02",
                title: "Evaluation & Reliability Testing",
                desc: "We establish evaluation criteria, test datasets, quality benchmarks, regression tests, and failure scenarios to measure AI output quality and system reliability before production deployment."
            },
            {
                step: "03",
                title: "Cost & Latency Optimization",
                desc: "We analyze model selection, token usage, inference patterns, API calls, database queries, caching, and infrastructure utilization to reduce operating costs and improve response times."
            },
            {
                step: "04",
                title: "Production Deployment & Monitoring",
                desc: "We design the production deployment architecture and establish CI/CD, logging, tracing, monitoring, alerting, and incident-response processes required to operate the AI system reliably at scale."
            }
        ],
        href: "/consulting/mvp-to-production"
    },
    {
        slug: "marketing-gtm",
        title: "Marketing & GTM Consulting",
        pillBadge: "MARKETING & GTM CONSULTING",
        shortTitle: "Marketing & GTM",
        description: "Positioning, channel strategy, and an AI-assisted go-to-market motion — from messaging through to the systems that run the pipeline.",
        overview: "Strong products often struggle to grow because the positioning is unclear, the right acquisition channels are not defined, and marketing and sales systems operate separately. Our GTM consultants help teams clarify their market position, sharpen messaging, identify the right channels, and design AI-assisted systems that turn demand into a measurable, repeatable pipeline.",
        duration: "3 to 6 Weeks Advisory",
        capabilities: [
            "Positioning & Messaging Strategy",
            "Channel Strategy and Go-to-Market Plan",
            "AI GTM System Design and Workflow Blueprint",
            "Pipeline Metrics and Conversion Dashboard",
            "CRM, Lead Qualification & Follow-Up Playbooks"
        ],
        deliverables: [
            "Positioning & Messaging Strategy",
            "Channel Strategy and Go-to-Market Plan",
            "AI GTM System Design and Workflow Blueprint",
            "Pipeline Metrics and Conversion Dashboard",
            "CRM, Lead Qualification & Follow-Up Playbooks"
        ],
        technologies: [
            "HubSpot / Salesforce / Zoho CRM",
            "Neno CRM",
            "Apollo / Clay / ZoomInfo",
            "OpenAI / Gemini / Claude",
            "n8n / Make / Zapier",
            "Google Analytics 4 / Mixpanel / PostHog",
            "Customer.io / Klaviyo",
            "Google Sheets / Microsoft Excel",
            "Looker Studio / Metabase / Power BI",
            "Calendly / Microsoft Bookings",
            "Slack / Microsoft Teams"
        ],
        useCases: [
            "Launching a new product or entering a new market",
            "Repositioning a product for a clearer target customer",
            "Building a scalable outbound or inbound acquisition motion",
            "Introducing AI into marketing and sales workflows",
            "Improving lead qualification and follow-up processes",
            "Connecting marketing activity to measurable pipeline and revenue",
            "Fixing unclear messaging, weak conversion, or inconsistent GTM execution"
        ],
        benefits: [
            "Clearer positioning that makes your product easier to understand and buy",
            "Focused acquisition channels aligned with your target customers",
            "AI-assisted workflows that reduce repetitive GTM work",
            "Faster lead qualification and more consistent follow-up",
            "Better visibility into pipeline performance and conversion",
            "A repeatable GTM motion that can scale with the business"
        ],
        process: [
            {
                step: "01",
                title: "Positioning & Messaging",
                desc: "We analyze your product, target customers, competitors, and existing messaging to define a clear market position, differentiated value proposition, and messaging framework for your key customer segments."
            },
            {
                step: "02",
                title: "Channel Strategy",
                desc: "We identify and prioritize the acquisition channels best suited to your business — including outbound, inbound, content, partnerships, paid acquisition, and product-led channels — and create a practical channel plan."
            },
            {
                step: "03",
                title: "AI GTM System Design",
                desc: "We design AI-assisted workflows for lead qualification, enrichment, outbound research, personalized follow-up, meeting booking, CRM updates, and sales handoffs while fitting into your existing sales and marketing stack."
            },
            {
                step: "04",
                title: "Pipeline Metrics & Optimization",
                desc: "We establish the metrics needed to measure GTM performance, including lead-to-meeting conversion, pipeline velocity, channel performance, qualification rates, customer acquisition cost, and revenue attribution."
            }
        ],
        href: "/consulting/marketing-gtm"
    }
];

export function getConsultingServiceBySlug(slug: string): ConsultingService | undefined {
    return consultingServices.find(s => s.slug === slug);
}
