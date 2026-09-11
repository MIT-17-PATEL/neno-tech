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
        title: "MVP to Production Consulting",
        pillBadge: "MVP TO PRODUCTION CONSULTING",
        shortTitle: "MVP to Production",
        description: "Transition early software prototypes into production systems with infrastructure hardening, automated CI/CD, and scalability testing.",
        overview: "Prototypes and early MVPs often face stability issues when exposed to production traffic, concurrent sessions, and enterprise security requirements. Our production engineering consultants harden systems across application logic and cloud infrastructure, setting up automated deployments, database connection pooling, and SOC2 readiness.",
        duration: "2 to 6 Weeks Advisory",
        capabilities: [
            "Production Readiness Audits and Failure Mode Analysis",
            "Distributed Load Testing and Concurrency Bottleneck Remediation",
            "Database Query Optimization, Indexing, and Connection Pooling",
            "Automated Zero-Downtime CI/CD Pipelines and Rollback Protocols",
            "Security Hardening, Secrets Management, and Compliance Verification",
            "Centralized Observability, Metrics Dashboards, and Incident Alerting"
        ],
        deliverables: [
            "Production Readiness Scorecard and Gap Analysis",
            "Distributed Load and Concurrency Benchmark Reports",
            "Infrastructure-as-Code (Terraform / Helm) Blueprints",
            "Automated CI/CD Pipeline Configuration with Rollback Steps",
            "Unified Observability Dashboard and Alerting Rules"
        ],
        technologies: [
            "Terraform / OpenTofu",
            "Kubernetes / Docker",
            "AWS ECS / EKS / CloudFront",
            "Datadog / Prometheus / Grafana",
            "PostgreSQL / RDS / Redis",
            "GitHub Actions / GitLab CI",
            "HashiCorp Vault / AWS Secrets Manager",
            "Snyk / SonarQube"
        ],
        useCases: [
            "Transitioning early validated MVPs into reliable commercial platforms",
            "Preparing cloud infrastructure for product launches and customer spikes",
            "Resolving database lockups, memory leaks, and sporadic downtime",
            "Technical compliance preparation for enterprise vendor reviews"
        ],
        benefits: [
            "Resilient production infrastructure with automated recovery protocols",
            "Confidence during traffic surges without performance degradation",
            "Predictable release workflows with automated tests and zero downtime",
            "Technical readiness meeting enterprise security standards"
        ],
        process: [
            {
                step: "01",
                title: "Production Readiness Audit",
                desc: "We evaluate application code, cloud infrastructure, secrets management, data backups, and failure recovery protocols."
            },
            {
                step: "02",
                title: "Stress & Load Simulation",
                desc: "We simulate peak concurrent user loads to expose memory leaks, database connection pool exhaustion, and latency degradation."
            },
            {
                step: "03",
                title: "Infrastructure Hardening",
                desc: "We implement Infrastructure-as-Code, auto-scaling groups, database read replicas, connection pooling, and multi-AZ failovers."
            },
            {
                step: "04",
                title: "Telemetry & Incident Playbooks",
                desc: "We configure end-to-end distributed tracing, APM dashboards, threshold alerts, and step-by-step incident response playbooks."
            }
        ],
        href: "/consulting/mvp-to-production"
    },
    {
        slug: "marketing-gtm",
        title: "Marketing & GTM Consulting",
        pillBadge: "MARKETING & GTM CONSULTING",
        shortTitle: "Marketing & GTM",
        description: "Technical go-to-market strategies aligning product capabilities with customer acquisition, automated lead workflows, and multi-touch attribution.",
        overview: "Go-to-market execution in software companies relies on technical infrastructure. We consult with engineering and revenue teams to build automated lead enrichment systems, multi-touch attribution models, outbound pipelines, and product-led growth onboarding flows that measure conversion accurately.",
        duration: "3 to 6 Weeks Advisory",
        capabilities: [
            "Go-to-Market Technology Stack Design and Integration",
            "Full-Funnel Analytics, Event Tracking, and Multi-Touch Attribution",
            "Automated Outbound Pipelines and Lead Enrichment Workflows",
            "Product-Led Growth (PLG) Onboarding and Activation Tracking",
            "Technical SEO Architecture and Programmatic Page Generation",
            "CRM Lifecycle Automation and Customer Nurturing Workflows"
        ],
        deliverables: [
            "GTM Strategy and Growth Technology Architecture Blueprint",
            "Unified Tracking Schema and Attribution Dashboard",
            "Lead Enrichment and Outbound Pipeline Workflow Documentation",
            "PLG Onboarding Friction Audit and Implementation Recommendations",
            "CRM Automation Playbooks and Lead Handoff SOPs"
        ],
        technologies: [
            "Segment / RudderStack",
            "Mixpanel / PostHog / Google Analytics 4",
            "HubSpot / Salesforce / Neno CRM",
            "Apollo / Clay / ZoomInfo",
            "Customer.io / Klaviyo",
            "Next.js SEO / Structured Data",
            "Make / Zapier / n8n",
            "Metabase / Looker"
        ],
        useCases: [
            "B2B SaaS companies establishing scalable outbound acquisition",
            "Resolving inaccurate multi-channel attribution and analytics tracking",
            "Automating lead qualification using enrichment data sources",
            "Building self-serve user onboarding and activation tracking"
        ],
        benefits: [
            "Direct visibility into customer acquisition cost and channel ROI",
            "Automated enrichment pipelines reducing manual sales research",
            "Structured product onboarding shortening user time-to-value",
            "Synchronized data across CRM, analytics, and messaging tools"
        ],
        process: [
            {
                step: "01",
                title: "Funnel & Tech Stack Audit",
                desc: "We analyze your customer acquisition journey, event tracking instrumentation, analytics accuracy, and conversion drop-offs."
            },
            {
                step: "02",
                title: "Attribution & Tracking Architecture",
                desc: "We design a clean tracking schema across web, app, and CRM, ensuring 100% data fidelity for multi-touch attribution."
            },
            {
                step: "03",
                title: "Automated Engine Implementation",
                desc: "We build and connect automated lead enrichment pipelines, AI outbound sequences, and lifecycle onboarding email triggers."
            },
            {
                step: "04",
                title: "Growth Playbook & Team Training",
                desc: "We deliver comprehensive executive growth dashboards, standard operating procedures, and training for your sales and marketing teams."
            }
        ],
        href: "/consulting/marketing-gtm"
    }
];

export function getConsultingServiceBySlug(slug: string): ConsultingService | undefined {
    return consultingServices.find(s => s.slug === slug);
}
