export interface EngineerRole {
    slug: string;
    title: string;
    pillBadge: string;
    shortTitle: string;
    description: string;
    overview: string;
    availability: string;
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

export const engineerRoles: EngineerRole[] = [
    {
        slug: "forward-deployed-engineer",
        title: "Forward Deployed Engineer (FDE)",
        pillBadge: "FORWARD DEPLOYED ENGINEER",
        shortTitle: "FDE",
        description: "Embed a senior engineer directly inside your team to accelerate product velocity, solve complex architectural problems, and bridge the gap between strategy and execution.",
        overview: "A Forward Deployed Engineer (FDE) is a senior practitioner who embeds full-time within your team. They participate in daily standups, take ownership of critical workstreams, write tested code, design system architecture, and lead technical reviews alongside your in-house engineers.",
        availability: "Available in 48 Hours",
        capabilities: [
            "Full-cycle product feature delivery from design to production",
            "Technical leadership and architectural decision-making",
            "Cross-functional collaboration with product, design, and engineering leads",
            "Legacy system migration and incremental modernization",
            "AI and LLM feature integration into existing application workflows",
            "Code reviews, pair programming, and engineering mentorship"
        ],
        deliverables: [
            "Production-ready feature code merged to your repository",
            "Architectural Decision Records (ADRs) for major system choices",
            "Technical documentation and onboarding runbooks",
            "Weekly progress logs and sprint delivery tracking",
            "Knowledge transfer sessions with your internal engineering team"
        ],
        technologies: [
            "TypeScript / Node.js / React / Next.js",
            "Python / FastAPI / Django",
            "AWS / GCP / Azure",
            "Docker / Kubernetes / Terraform",
            "PostgreSQL / Redis / MongoDB",
            "OpenAI / Anthropic Claude APIs",
            "GitHub Actions / GitLab CI",
            "Datadog / Sentry / PagerDuty"
        ],
        useCases: [
            "High-priority product milestones requiring senior engineering capacity",
            "Bridging technical gaps during permanent hiring cycles",
            "Accelerating roadmap delivery for scaling software products",
            "Integrating custom LLM APIs and tool-calling workflows"
        ],
        benefits: [
            "Direct contribution from day one with established development setups",
            "Senior engineering capability without long recruitment timelines",
            "Flexible engagement models: full-time, part-time, or milestone-based",
            "Transparent communication through your Slack, Jira, and GitHub repositories"
        ],
        process: [
            { step: "01", title: "Needs Assessment", desc: "We review your tech stack, repository structure, roadmap priorities, and the exact role requirements." },
            { step: "02", title: "Engineer Matching", desc: "We match you with a vetted senior engineer whose technical background aligns with your workstream." },
            { step: "03", title: "Rapid Onboarding", desc: "Your engineer joins standups, sets up local development, and starts picking up sprint tasks within 48 hours." },
            { step: "04", title: "Continuous Delivery", desc: "Regular check-ins ensure delivery tracks with business goals, with bi-weekly reviews for sprint alignment." }
        ],
        href: "/hire-engineers/forward-deployed-engineer"
    },
    {
        slug: "agentic-ai-engineer",
        title: "AI / Agentic AI Engineer",
        pillBadge: "AI / AGENTIC AI ENGINEER",
        shortTitle: "Agentic AI Engineer",
        description: "Hire specialists who design and build autonomous AI agents, multi-agent orchestration systems, and LLM-powered workflows that operate reliably in production.",
        overview: "Our Agentic AI Engineers build autonomous software agents that plan steps, call external APIs, evaluate responses, and recover from failures. They combine LLM prompt architecture with backend engineering discipline to implement tool schemas, persistent agent memory, and deterministic approval checkpoints.",
        availability: "Available in 48 to 72 Hours",
        capabilities: [
            "Multi-agent orchestration frameworks (LangGraph, AutoGen, CrewAI)",
            "Tool-calling and function-calling pipeline architecture",
            "RAG system design, vector store integration, and hybrid search",
            "Agent memory management: episodic, semantic, and procedural state",
            "Human-in-the-loop guardrails and deterministic validation checkpoints",
            "Prompt engineering, token optimization, and inference cost tracking"
        ],
        deliverables: [
            "Production-deployed agent system with logging and telemetry",
            "Agent architecture diagrams and schema definitions",
            "RAG pipeline with automated document ingestion and indexing",
            "Automated evaluation test suite measuring reliability and accuracy",
            "Runbooks detailing agent maintenance, fallbacks, and model updates"
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
            "Automated research, data extraction, and structured report synthesis",
            "Intelligent customer support triage and escalation routing",
            "Internal technical assistants for engineering, sales, and operations",
            "Multi-agent data pipelines processing unstructured enterprise documents"
        ],
        benefits: [
            "Automate multi-step operational tasks that previously required manual handling",
            "Engineered reliability with benchmark suites and fallback execution paths",
            "Cost-managed inference using intelligent model routing and prompt caching",
            "Vendor-neutral design allowing flexible model substitution as providers evolve"
        ],
        process: [
            { step: "01", title: "Use-Case Scoping", desc: "We define the agent's goal, tool inventory, memory requirements, success criteria, and acceptable failure modes." },
            { step: "02", title: "Architecture Design", desc: "We design the agent graph, tool-calling schema, RAG pipeline, and human-in-the-loop checkpoints before writing a line of code." },
            { step: "03", title: "Iterative Agent Development", desc: "We build, evaluate, and iterate on agent behavior using benchmark datasets and production-representative test cases." },
            { step: "04", title: "Production Deployment & Monitoring", desc: "We deploy the agent with full observability, cost tracking, latency benchmarks, and on-call runbooks." }
        ],
        href: "/hire-engineers/agentic-ai-engineer"
    },
    {
        slug: "claude-llm-engineer",
        title: "Claude & LLM Engineer",
        pillBadge: "CLAUDE & LLM ENGINEER",
        shortTitle: "Claude & LLM Engineer",
        description: "Hire engineers specialized in building production LLM applications using Anthropic Claude, OpenAI, and open-source models, from prompt architecture to fine-tuning.",
        overview: "LLM engineering requires rigorous prompt architecture, context window management, latency control, cost tracking, and output validation. Our engineers have deployed production applications on Anthropic Claude, OpenAI, Gemini, and open-source foundation models, implementing structured outputs, tool use, and custom evaluation harnesses.",
        availability: "Available in 48 to 72 Hours",
        capabilities: [
            "Structured prompt engineering and JSON schema enforcement",
            "Anthropic Claude API: extended thinking, tool calling, and context caching",
            "OpenAI function calling, assistants architecture, and structured outputs",
            "LLM evaluation frameworks, benchmark suites, and regression testing",
            "Token cost optimization, intelligent model routing, and response caching",
            "Fine-tuning workflows: LoRA and QLoRA on domain-specific datasets"
        ],
        deliverables: [
            "Production LLM integration with schema validation and error fallbacks",
            "Version-controlled prompt repository with evaluation logs",
            "Automated benchmark dataset for regression and hallucination testing",
            "Token cost projections and model selection tradeoff analysis",
            "Fine-tuning datasets, training scripts, and serving deployment files"
        ],
        technologies: [
            "Anthropic Claude 3.5 / 4 APIs",
            "OpenAI GPT-4o / o3",
            "Google Gemini 2.0 Flash",
            "Llama 3.3 / Mistral / Qwen (open-source)",
            "LangChain / LlamaIndex / Instructor",
            "Hugging Face Transformers / PEFT / TRL",
            "vLLM / Ollama / SGLang",
            "LangSmith / W&B Weave / Helicone"
        ],
        useCases: [
            "Document intelligence, data extraction, and entity classification",
            "Domain-specific conversational assistants with strict factual boundaries",
            "Internal code generation and documentation search copilots",
            "Domain-specialized small models for low-latency batch processing"
        ],
        benefits: [
            "Model choices grounded in concrete latency, accuracy, and cost data",
            "Strict schema validation preventing malformed LLM responses from breaking UI",
            "Automated test suites catching prompt regressions before production rollout",
            "Private model fine-tuning to protect confidential internal data"
        ],
        process: [
            { step: "01", title: "Requirements & Model Selection", desc: "We evaluate task complexity, latency requirements, data sensitivity, and cost constraints to select the optimal foundation model." },
            { step: "02", title: "Prompt Architecture", desc: "We design and iterate prompt templates, system instructions, few-shot examples, and chain-of-thought reasoning structures." },
            { step: "03", title: "Integration & Evaluation", desc: "We integrate the LLM into your application stack and run evaluation benchmarks to measure accuracy, hallucination rate, and latency." },
            { step: "04", title: "Production Monitoring & Optimization", desc: "We configure inference observability, establish token cost alerts, and implement caching & routing to optimize production costs." }
        ],
        href: "/hire-engineers/claude-llm-engineer"
    },
    {
        slug: "full-stack-backend-engineer",
        title: "Full Stack / Backend Engineer",
        pillBadge: "FULL STACK / BACKEND ENGINEER",
        shortTitle: "Full Stack & Backend",
        description: "Hire senior full stack and backend engineers to build scalable APIs, robust data architectures, and high-performance web applications from concept to production.",
        overview: "Our full stack and backend engineers architect and deploy production web services, from REST and GraphQL APIs to event-driven queues and relational data models. They implement strict type safety, automated test coverage, and clean modular codebases designed for maintainability.",
        availability: "Available in 24 to 48 Hours",
        capabilities: [
            "Scalable REST and GraphQL API design with authentication and role-based access",
            "Microservices and event-driven architecture using Kafka and RabbitMQ",
            "Relational and document database schema design, indexing, and query tuning",
            "Real-time data streaming using WebSockets and Server-Sent Events",
            "Cloud infrastructure: AWS / GCP serverless, container services, and CI/CD",
            "Caching and performance optimization using Redis and edge CDN layers"
        ],
        deliverables: [
            "Production API code with OpenAPI / Swagger documentation",
            "Database migrations, seed scripts, and indexing configurations",
            "Unit, integration, and load test suites wired into CI/CD pipelines",
            "Infrastructure-as-Code modules (Terraform / AWS CDK) for cloud hosting",
            "Deployment runbooks with rollback procedures and monitoring alerts"
        ],
        technologies: [
            "TypeScript / Node.js / NestJS / Express",
            "Python / FastAPI / Django / Flask",
            "Go / Rust",
            "PostgreSQL / MySQL / MongoDB / DynamoDB",
            "Redis / Elasticsearch",
            "React / Next.js (frontend)",
            "AWS / GCP / Cloudflare Workers",
            "Docker / Kubernetes / Terraform"
        ],
        useCases: [
            "Greenfield SaaS product backend and frontend development",
            "High-throughput API optimization and database query refactoring",
            "Legacy monolithic application decoupling and service modernization",
            "Event-driven data processing pipelines and webhook integrations"
        ],
        benefits: [
            "Experienced practitioners who have owned production systems under load",
            "Disciplined review standards with automated linting, typing, and tests",
            "API contracts clearly defined for independent frontend delivery",
            "Pragmatic architectural choices focused on delivery speed and reliability"
        ],
        process: [
            { step: "01", title: "Technical Discovery", desc: "We review your existing codebase, data models, integration requirements, and scalability expectations." },
            { step: "02", title: "API & Data Modeling", desc: "We design the system data model, API contract, authentication strategy, and integration interfaces before coding begins." },
            { step: "03", title: "Iterative Development", desc: "We follow sprint-based delivery with code reviews, automated tests, and weekly demo sessions to ensure alignment." },
            { step: "04", title: "Production Readiness", desc: "We prepare CI/CD pipelines, observability tooling, load tests, and deployment runbooks before shipping to production." }
        ],
        href: "/hire-engineers/full-stack-backend-engineer"
    },
    {
        slug: "software-product-developer",
        title: "Software Product Developer",
        pillBadge: "SOFTWARE PRODUCT DEVELOPER",
        shortTitle: "Software Product Developer",
        description: "Hire product-minded software developers who combine technical execution with strong product intuition to ship features that users actually love.",
        overview: "Software Product Developers at Neno Technology combine full stack coding skills with product understanding. They translate feature specifications into working interfaces, identify edge cases during technical discovery, and build accessible, responsive web applications.",
        availability: "Available in 24 to 48 Hours",
        capabilities: [
            "End-to-end feature delivery from initial user story to production release",
            "Technical requirement analysis, edge case mapping, and UX review",
            "Frontend and backend feature implementation aligned with your design system",
            "Web performance optimization: Core Web Vitals, bundle splitting, and render speed",
            "Feature flag management and analytics event instrumentation",
            "Product analytics tracking using Mixpanel, PostHog, or Segment"
        ],
        deliverables: [
            "Complete feature implementations with responsive frontend UI and API endpoints",
            "Analytics tracking schemas and event verification",
            "Automated test suites: unit, integration, and end-to-end tests",
            "User changelogs and internal technical documentation",
            "Performance benchmarking verifying Core Web Vitals standards"
        ],
        technologies: [
            "React / Next.js / TypeScript",
            "Tailwind CSS / CSS Modules / Styled Components",
            "Node.js / Prisma / tRPC",
            "PostgreSQL / Supabase / PlanetScale",
            "Vercel / Netlify / AWS Amplify",
            "Mixpanel / PostHog / Segment",
            "Playwright / Vitest / Jest",
            "Figma (design collaboration)"
        ],
        useCases: [
            "Core SaaS feature engineering and customer workflow additions",
            "Internal administration portals and operational dashboards",
            "Interactive reporting and data visualization tools",
            "Responsive web application redesigns and component library builds"
        ],
        benefits: [
            "Engineers who understand business context and reduce spec ambiguities",
            "Thorough edge case testing preventing user-facing regressions",
            "Instrumentation from day one to measure feature adoption accurately",
            "Clear async written communication and proactive status updates"
        ],
        process: [
            { step: "01", title: "Product Discovery", desc: "We review user stories, wireframes, and success metrics to fully understand the 'why' behind each feature before building." },
            { step: "02", title: "Technical Design", desc: "We produce a lightweight technical spec covering data models, API contracts, UI component hierarchy, and edge case handling." },
            { step: "03", title: "Build & Iterate", desc: "We ship incremental working software with daily async updates, enabling rapid feedback loops with product and design stakeholders." },
            { step: "04", title: "Launch & Measure", desc: "We instrument analytics events, run A/B tests where applicable, and monitor error rates and performance metrics post-launch." }
        ],
        href: "/hire-engineers/software-product-developer"
    },
    {
        slug: "security-engineer",
        title: "Security Engineer",
        pillBadge: "SECURITY ENGINEER",
        shortTitle: "Security Engineer",
        description: "Hire security engineers to harden your application and cloud infrastructure, achieve compliance certifications, and build a security-first engineering culture.",
        overview: "Our Security Engineers help software teams audit cloud infrastructure, resolve application vulnerabilities, implement zero-trust access controls, and prepare for SOC2 or ISO 27001 compliance reviews. They integrate automated vulnerability scanners into CI/CD pipelines and harden authentication systems.",
        availability: "Available in 48 to 72 Hours",
        capabilities: [
            "Application vulnerability audits and OWASP Top 10 remediation",
            "Cloud security posture reviews (AWS, GCP) and IAM policy hardening",
            "SOC2 Type I and Type II preparation and technical evidence collection",
            "Network access controls, VPC peering, and zero-trust configuration",
            "Secrets management: HashiCorp Vault, AWS Secrets Manager, and rotation policies",
            "Static and dynamic code analysis (SAST/DAST) in deployment pipelines"
        ],
        deliverables: [
            "Vulnerability audit report with classified risk severities and fix steps",
            "Prioritized security remediation backlog",
            "SOC2 technical control documentation and audit evidence packages",
            "Incident response runbooks and breach containment procedures",
            "Hardened Terraform templates and automated CI/CD security scans"
        ],
        technologies: [
            "AWS Security Hub / GCP Security Command Center",
            "Snyk / Dependabot / Trivy",
            "HashiCorp Vault / AWS Secrets Manager",
            "OWASP ZAP / Burp Suite",
            "Falco / OPA / Kyverno (Kubernetes)",
            "Cloudflare WAF / AWS Shield / AWS WAF",
            "SonarQube / Semgrep",
            "Vanta / Drata (compliance automation)"
        ],
        useCases: [
            "Security audits prior to enterprise customer onboarding or fundraising",
            "SOC2, ISO 27001, or HIPAA compliance technical preparation",
            "Enterprise vendor security reviews and questionnaire completion",
            "Hardening cloud infrastructure against unauthorized data exposure"
        ],
        benefits: [
            "Technical evidence readiness for enterprise procurement reviews",
            "Systematic identification and closure of code and cloud security gaps",
            "Automated CI/CD security checks preventing misconfigurations from reaching production",
            "Clear technical risk documentation for leadership and auditors"
        ],
        process: [
            { step: "01", title: "Security Assessment", desc: "We conduct a comprehensive audit of application code, cloud configuration, IAM policies, data flows, and third-party integrations." },
            { step: "02", title: "Risk Prioritization", desc: "We classify findings by CVSS severity, exploitability, and business impact to create a prioritized remediation roadmap." },
            { step: "03", title: "Remediation Engineering", desc: "We implement security fixes, configuration hardening, secrets rotation, and automated vulnerability scanning in CI/CD." },
            { step: "04", title: "Compliance & Verification", desc: "We compile evidence packages, implement monitoring controls, and conduct final verification scanning before audit submission." }
        ],
        href: "/hire-engineers/security-engineer"
    },
    {
        slug: "ui-ux-cloud-engineer",
        title: "UI/UX & Cloud Engineer",
        pillBadge: "UI/UX & CLOUD ENGINEER",
        shortTitle: "UI/UX & Cloud",
        description: "Hire engineers who craft clean, responsive user interfaces and configure scalable cloud hosting with modern CI/CD automation.",
        overview: "UI/UX & Cloud Engineers build accessible, responsive web interfaces in React and Next.js while configuring the cloud infrastructure, edge caching, and deployment pipelines that deliver fast page loads globally.",
        availability: "Available in 24 to 48 Hours",
        capabilities: [
            "React and Next.js component development using design system tokens",
            "Responsive and accessible frontend implementation (WCAG 2.1 standards)",
            "Core Web Vitals optimization: LCP, INP, and CLS performance tuning",
            "Cloud hosting: AWS and GCP deployments, edge routing, and CDN rules",
            "Container orchestration: Docker, Kubernetes, and automated deployment pipelines",
            "CI/CD workflow design with preview environments and automated testing"
        ],
        deliverables: [
            "Reusable UI component library with documentation",
            "Lighthouse performance audit and Core Web Vitals optimization report",
            "Cloud architecture diagrams and Infrastructure-as-Code templates",
            "Containerized deployment configuration with health check monitoring",
            "Edge caching and CDN rules for static and dynamic assets"
        ],
        technologies: [
            "React / Next.js / TypeScript",
            "Tailwind CSS / Radix UI / shadcn/ui",
            "Framer Motion / GSAP (animations)",
            "Figma (design tokens)",
            "AWS CloudFront / S3 / ECS / EKS",
            "GCP Cloud Run / GKE / Firebase",
            "Terraform / Pulumi / AWS CDK",
            "Cloudflare Pages / Workers / R2"
        ],
        useCases: [
            "Translating Figma design systems into reusable production components",
            "Web application frontend redesigns targeting sub-second load times",
            "Setting up multi-environment preview deployments for product teams",
            "Migrating web apps to containerized services with CDN acceleration"
        ],
        benefits: [
            "Direct alignment between design specifications and production UI code",
            "Strong Core Web Vitals scores supporting search rankings and conversion",
            "Infrastructure-as-Code ensuring reproducible hosting environments",
            "Automated preview builds for rapid stakeholder review"
        ],
        process: [
            { step: "01", title: "Design & Infrastructure Audit", desc: "We assess your current UI component quality, design token gaps, Core Web Vitals scores, and cloud architecture scalability." },
            { step: "02", title: "Design System & Architecture Plan", desc: "We plan the component hierarchy, design token schema, cloud region strategy, and CI/CD deployment model." },
            { step: "03", title: "Build & Deploy", desc: "We develop UI components, integrate them into pages, and provision cloud infrastructure in parallel using Terraform." },
            { step: "04", title: "Performance Benchmarking & Handover", desc: "We run Lighthouse audits, load tests, and CDN performance tests, handing over full documentation for your team." }
        ],
        href: "/hire-engineers/ui-ux-cloud-engineer"
    },
    {
        slug: "application-support-team",
        title: "Application Support Team",
        pillBadge: "APPLICATION SUPPORT TEAM",
        shortTitle: "Application Support",
        description: "Deploy a dedicated application support team to manage incidents, resolve bugs, maintain uptime, and own Tier 1 to Tier 3 engineering support for production systems.",
        overview: "Our Application Support Teams are dedicated engineering pods that maintain production stability. They handle on-call incident response, investigate root causes, deploy tested bug fixes, monitor SLAs, and perform routine infrastructure maintenance.",
        availability: "Available in 48 to 72 Hours",
        capabilities: [
            "24/7 production monitoring with alerting policies and on-call schedules",
            "Tier 1 to Tier 3 incident triage, root cause analysis, and post-mortems",
            "Bug resolution, regression verification, and scheduled patch deployments",
            "Release management: feature flag toggles and deployment verification",
            "Performance monitoring and database query optimization",
            "SLA tracking, uptime logging, and monthly incident summaries"
        ],
        deliverables: [
            "Monthly system health reports and incident logs",
            "Operational runbook covering critical workflows and escalation paths",
            "Configured alert routing integrated with PagerDuty or OpsGenie",
            "Resolved bug reports with verified root cause documentation",
            "SLA reporting with Mean Time to Detect (MTTD) and Resolve (MTTR)"
        ],
        technologies: [
            "Datadog / New Relic / Dynatrace",
            "PagerDuty / OpsGenie / VictorOps",
            "Sentry / Rollbar / Bugsnag",
            "Prometheus / Grafana / Loki",
            "AWS CloudWatch / GCP Cloud Monitoring",
            "Jira / Linear / ServiceNow",
            "Docker / Kubernetes",
            "GitHub / GitLab CI"
        ],
        useCases: [
            "Post-launch production support for newly deployed web platforms",
            "Providing structured 24/7 on-call coverage for international applications",
            "Handling ongoing maintenance while internal teams build new roadmap features",
            "Establishing formal incident escalation runbooks and SLA tracking"
        ],
        benefits: [
            "Rapid response times for production-critical alerts under defined SLAs",
            "Structured monitoring that identifies performance regressions early",
            "Documented post-mortems that systematically reduce recurring incidents",
            "Predictable monthly engineering coverage for ongoing system maintenance"
        ],
        process: [
            { step: "01", title: "Systems Onboarding", desc: "We document your architecture, critical services, alert thresholds, deployment processes, and escalation contacts." },
            { step: "02", title: "Monitoring Setup", desc: "We configure comprehensive observability tooling, alert policies, and on-call rotation schedules within the first week." },
            { step: "03", title: "Active Support Operations", desc: "Our team triages alerts, resolves incidents, executes releases, and coordinates with your internal team on escalations." },
            { step: "04", title: "Monthly Review & Optimization", desc: "We present monthly health reports, incident trends, and infrastructure optimization recommendations to stakeholders." }
        ],
        href: "/hire-engineers/application-support-team"
    }
];

export function getEngineerRoleBySlug(slug: string): EngineerRole | undefined {
    return engineerRoles.find(r => r.slug === slug);
}
