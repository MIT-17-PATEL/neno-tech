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
        overview: "We help leadership and engineering teams navigate the complex AI ecosystem with technical clarity. Rather than generic slide decks, our senior AI architects conduct hands-on readiness audits, evaluate model architectures (OpenAI, Anthropic Claude, open-source LLMs), architect scalable data and RAG pipelines, and build a risk-weighted adoption roadmap aligned with your business objectives.",
        duration: "2–4 Weeks Advisory",
        capabilities: [
            "AI Readiness & Technical Maturity Assessment",
            "LLM & Foundation Model Evaluation (Cost, Latency, Accuracy)",
            "High-ROI Use-Case Identification & Feasibility Scoring",
            "Enterprise Data Strategy, RAG Architecture & Governance",
            "Responsible AI, Guardrails & Security Compliance (NIST, OWASP LLM)",
            "Build vs. Buy Decision Modeling & AI Vendor Due Diligence"
        ],
        deliverables: [
            "Comprehensive AI Technical Readiness Audit Report",
            "Phased 12-Month Enterprise AI Implementation Roadmap",
            "Inference Compute & Token Cost Projection Model",
            "Target-State Architecture & RAG Pipeline Specifications",
            "Responsible AI, Data Privacy & Security Guardrail Guidelines"
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
            "Enterprise AI adoption across engineering & operations",
            "LLM-powered internal workflow automation & copilots",
            "Customer-facing AI product strategy & technical scoping",
            "Legacy system modernization using generative AI"
        ],
        benefits: [
            "Avoid expensive trial-and-error with proven practitioner blueprints",
            "Clear ROI modeling before committing capital to engineering",
            "Risk mitigation against hallucinations, data leaks, and compliance gaps",
            "Vendor-neutral recommendations tailored strictly to your data"
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
        overview: "We provide hands-on architectural leadership to unblock product velocity, eliminate technical debt, and design resilient cloud-native systems. Our seasoned engineering directors and systems architects analyze code repositories, identify performance bottlenecks, and establish scalable practices that empower your development team to ship with confidence and speed.",
        duration: "3–6 Weeks Advisory",
        capabilities: [
            "End-to-End System Architecture Review & Scalability Audits",
            "Technical Debt Remediation & Incremental Refactoring Roadmaps",
            "Cloud-Native Microservices & Event-Driven Architecture Design",
            "Engineering Velocity, CI/CD Pipeline & Toolchain Optimization",
            "High-Throughput API Design & Database Schema Modernization",
            "Technical Due Diligence for Investors, M&A, and Board Audits"
        ],
        deliverables: [
            "Architectural Health & Codebase Scalability Audit",
            "Prioritized Technical Debt Remediation Backlog",
            "Target-State Distributed System Architecture Diagrams",
            "Developer Tooling & CI/CD Pipeline Optimization Plan",
            "Executive Technical Due Diligence & Risk Report"
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
            "Rapidly growing platforms experiencing scalability bottlenecks",
            "Monolith to modular or microservices architecture migrations",
            "Engineering velocity stagnation due to legacy technical debt",
            "Preparation for high-traffic product launches or investor audits"
        ],
        benefits: [
            "Reclaim engineering velocity by systematically dismantling tech debt",
            "Future-proof architecture capable of scaling 10x without rewrites",
            "Reduced cloud infrastructure and maintenance operational expenses",
            "Actionable code blueprints rather than abstract theoretical diagrams"
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
        pillBadge: "MVP TO PRODUCTION CONSULTING",
        shortTitle: "MVP to Production",
        description: "Bridge the gap between proof-of-concept and enterprise-grade reliability with infrastructure hardening, CI/CD automation, and scale testing.",
        overview: "Validated prototypes and early MVPs often face catastrophic failure when subjected to real-world production load, traffic surges, and enterprise compliance requirements. Our production engineering consultants harden applications from infrastructure to application code — eliminating single points of failure, automating deployments, scaling databases, and establishing enterprise SOC2-ready foundations.",
        duration: "2–6 Weeks Advisory",
        capabilities: [
            "Production Readiness Audits & Failure Mode Analysis",
            "Distributed Load Testing & Concurrency Bottleneck Mitigation",
            "Database Query Optimization, Indexing & Read Replica Scaling",
            "Automated Zero-Downtime CI/CD Pipelines & Canary Deployments",
            "Security Hardening, Secret Management & SOC2 Compliance Readiness",
            "Real-Time Observability, Alerting & Incident Response Frameworks"
        ],
        deliverables: [
            "Production Readiness Scorecard & Gap Analysis",
            "Distributed Load & Concurrency Benchmark Reports",
            "Infrastructure-as-Code (Terraform / Helm) Blueprints",
            "Automated CI/CD Pipeline Configuration with Zero-Downtime Rollbacks",
            "Unified Observability Dashboard & PagerDuty Alerting Standards"
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
            "Transitioning a seed-stage MVP into an enterprise-ready SaaS",
            "Preparing infrastructure for major product launches or enterprise pilots",
            "Remediating recurring production outages and database lockups",
            "Passing enterprise customer vendor security assessments (SOC2 / ISO)"
        ],
        benefits: [
            "99.99% uptime resilience with automated recovery and failover",
            "Confidently support 10x traffic spikes without performance degradation",
            "Shortened release cycles from weeks to minutes with zero downtime",
            "Enterprise compliance readiness unlocking high-ticket B2B deals"
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
        description: "Technology-driven go-to-market strategies that align product capabilities with market demand, automated growth funnels, and data-backed attribution.",
        overview: "Sustainable growth requires seamlessly bridging product capabilities, data intelligence, and go-to-market execution. We consult with high-growth technology companies to engineer automated lead generation engines, implement multi-touch attribution models, configure AI-powered outbound pipelines, and design product-led growth (PLG) user onboarding flows that reliably convert.",
        duration: "3–6 Weeks Advisory",
        capabilities: [
            "Go-to-Market Technology Stack Design & Systems Integration",
            "Full-Funnel Analytics, Event Tracking & Multi-Touch Attribution",
            "AI-Powered Outbound Engines & Automated Lead Enrichment",
            "Product-Led Growth (PLG) Onboarding & Conversion Funnel Optimization",
            "Technical SEO Architecture & Programmatic Growth Engineering",
            "CRM Lifecycle Automation & Multi-Channel Nurturing Workflows"
        ],
        deliverables: [
            "GTM Strategy & Growth Technology Stack Architecture Blueprint",
            "Unified Tracking Schema & Executive Attribution Dashboard",
            "Automated AI Outbound & Lead Enrichment Workflow Documentation",
            "PLG Onboarding Friction Audit & Wireframe Recommendations",
            "CRM Lifecycle Automation Playbooks & Sales Handover SOPs"
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
            "Tech startups launching a new product into competitive B2B markets",
            "Fixing broken attribution and inaccurate marketing spend analytics",
            "Automating high-volume outbound prospecting with AI enrichment",
            "Transitioning from sales-led to hybrid product-led growth (PLG)"
        ],
        benefits: [
            "Crystal-clear visibility into which marketing channels drive pipeline revenue",
            "Automated outbound workflows generating qualified meetings on autopilot",
            "Optimized product onboarding that turns trial signups into paid accounts",
            "Unified sales and marketing data eliminating manual CRM administration"
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
