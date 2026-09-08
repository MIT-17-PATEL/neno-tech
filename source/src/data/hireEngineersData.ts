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
        overview: "A Forward Deployed Engineer (FDE) is a senior practitioner who embeds full-time within your organization — attending standups, owning critical workstreams, and delivering production-quality output from day one. Unlike consultants who produce slide decks, our FDEs write code, design systems, lead technical reviews, and mentor your existing team. Engagements are structured for immediate measurable impact across product, infrastructure, and AI initiatives.",
        availability: "Available in 48 Hours",
        capabilities: [
            "Full-cycle product feature delivery from design to production",
            "Real-time architectural decision-making & technical leadership",
            "Cross-functional collaboration with product, design & engineering",
            "Legacy system migration & incremental modernization",
            "AI/LLM feature integration into existing product workflows",
            "Code reviews, pair programming & engineering mentorship"
        ],
        deliverables: [
            "Production-ready feature code merged to main branch",
            "Architectural decision records (ADRs) for all major decisions",
            "Technical documentation & onboarding materials",
            "Weekly progress reports & velocity metrics",
            "Knowledge transfer sessions with your in-house team"
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
            "Critical product launches requiring senior engineering velocity",
            "Bridging the gap during senior engineering hiring gaps",
            "Scaling a high-growth startup's engineering capacity rapidly",
            "AI feature integration requiring specialized implementation expertise"
        ],
        benefits: [
            "Immediate output from day one — no ramp-up lag",
            "Senior-level expertise without senior-level hiring overhead",
            "Flexible engagement: part-time, full-time, or project-based",
            "Embedded team culture fit with transparent daily communication"
        ],
        process: [
            { step: "01", title: "Needs Assessment", desc: "We understand your stack, team structure, roadmap priorities, and the specific gaps an FDE needs to fill." },
            { step: "02", title: "Engineer Matching", desc: "We match you with a vetted FDE whose technical profile and domain expertise aligns with your exact workstream needs." },
            { step: "03", title: "Rapid Onboarding", desc: "Your FDE joins standups, reviews the codebase, and begins contributing to the sprint backlog within 48 hours." },
            { step: "04", title: "Continuous Delivery", desc: "Weekly syncs ensure delivery stays aligned with business objectives, with bi-weekly retrospectives for continuous improvement." }
        ],
        href: "/hire-engineers/forward-deployed-engineer"
    },
    {
        slug: "agentic-ai-engineer",
        title: "AI / Agentic AI Engineer",
        pillBadge: "AI / AGENTIC AI ENGINEER",
        shortTitle: "Agentic AI Engineer",
        description: "Hire specialists who design and build autonomous AI agents, multi-agent orchestration systems, and LLM-powered workflows that operate reliably in production.",
        overview: "Agentic AI systems represent the cutting edge of enterprise software — autonomous agents that reason, plan, and execute multi-step tasks with minimal human intervention. Our Agentic AI Engineers combine deep LLM expertise with production engineering rigor to design robust agent architectures, tool-calling pipelines, memory management systems, and human-in-the-loop guardrail frameworks that work reliably at enterprise scale.",
        availability: "Available in 48–72 Hours",
        capabilities: [
            "Multi-agent orchestration frameworks (LangGraph, AutoGen, CrewAI)",
            "Tool-calling & function-calling pipeline architecture",
            "RAG system design, vector store integration & semantic search",
            "Agent memory management: episodic, semantic & procedural",
            "Human-in-the-loop guardrails & safety evaluation frameworks",
            "LLM prompt engineering, chain optimization & cost management"
        ],
        deliverables: [
            "Production-deployed agentic AI system with monitoring",
            "Agent architecture diagrams & technical specifications",
            "RAG pipeline with data ingestion & vector store configuration",
            "Evaluation benchmark suite for agent reliability & accuracy",
            "Comprehensive documentation for agent maintenance & extension"
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
            "Autonomous research, analysis & report generation agents",
            "AI-powered customer support and escalation routing systems",
            "Internal enterprise copilots for engineering, sales & operations",
            "Multi-agent workflow automation for document processing & data pipelines"
        ],
        benefits: [
            "10x operational leverage by automating complex multi-step workflows",
            "Production-grade reliability with evaluation benchmarks & fallback logic",
            "Cost-optimized inference with model routing & caching strategies",
            "Vendor-neutral architecture avoiding single LLM provider lock-in"
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
        description: "Hire engineers specialized in building production LLM applications using Anthropic Claude, OpenAI, and open-source models — from prompt engineering to fine-tuning.",
        overview: "LLM engineering is a discipline that spans model selection, prompt architecture, context window management, latency optimization, cost governance, and production reliability engineering. Our Claude & LLM Engineers are practitioners who have shipped LLM-powered products into production — deeply familiar with Claude's extended thinking, tool use, and computer use APIs, as well as OpenAI function calling, Gemini, and leading open-source models.",
        availability: "Available in 48–72 Hours",
        capabilities: [
            "Advanced prompt engineering & structured output design",
            "Anthropic Claude API: extended thinking, tool use & computer use",
            "OpenAI function calling, assistants API & structured outputs",
            "LLM evaluation frameworks, red-teaming & quality benchmarking",
            "Token cost optimization, model routing & caching strategies",
            "Fine-tuning pipelines: LoRA, QLoRA & RLHF on open-source models"
        ],
        deliverables: [
            "Production LLM application with structured I/O & error handling",
            "Prompt library with versioning, evaluation results & changelogs",
            "LLM evaluation dataset & automated benchmark test suite",
            "Cost projection model & inference optimization recommendations",
            "Model fine-tuning dataset, training scripts & deployment artifacts"
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
            "Document intelligence, extraction & classification pipelines",
            "Customer-facing AI chatbots with domain-specific knowledge",
            "Internal LLM-powered code review, search & knowledge assistants",
            "Fine-tuned domain-specific models for specialized industry applications"
        ],
        benefits: [
            "Models selected based on cost-latency-accuracy tradeoff analysis",
            "Structured output schemas eliminating hallucination-induced parsing failures",
            "Continuous evaluation pipelines catching regression before production",
            "Open-source fine-tuning reducing long-term inference cost by 60–80%"
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
        overview: "Our full stack and backend engineers are seasoned practitioners who have architected and shipped complex software products — from high-throughput REST and GraphQL APIs to event-driven microservices and real-time systems. They bring opinionated engineering practices, modern toolchains, and a strong bias for clean, maintainable code that scales with your business.",
        availability: "Available in 24–48 Hours",
        capabilities: [
            "Scalable REST & GraphQL API design with authentication & authorization",
            "Microservices & event-driven architecture with Kafka / RabbitMQ",
            "Database design: SQL schema modeling, indexing & query optimization",
            "Real-time systems with WebSockets, SSE & pub/sub architectures",
            "Cloud infrastructure: AWS / GCP serverless, containers & managed services",
            "Caching strategies: Redis, CDN edge caching & application-level memoization"
        ],
        deliverables: [
            "Production-deployed API with OpenAPI documentation",
            "Database schema with migration scripts and seed data",
            "Unit, integration & load test suites with CI/CD pipeline",
            "Infrastructure-as-code (Terraform / CDK) for all cloud resources",
            "Technical runbook for deployment, rollback & incident response"
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
            "Greenfield SaaS product development from zero to launch",
            "High-traffic API performance optimization & database scaling",
            "Legacy backend refactoring and API modernization",
            "Real-time data pipelines and event-driven system integrations"
        ],
        benefits: [
            "Battle-tested engineers who have owned services at scale",
            "Strong code review culture with automated linting & type safety",
            "API-first design enabling rapid frontend and mobile client development",
            "Pragmatic architecture decisions balancing velocity and long-term maintainability"
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
        overview: "A Software Product Developer at Neno Technology is a rare hybrid — an engineer with deep product empathy who thinks in user outcomes, not just technical specifications. They translate ambiguous product requirements into clean, functional software, participate in discovery and UX critique, and proactively identify product edge cases before they reach users. Ideal for early-stage teams building consumer products, SaaS platforms, or internal tools.",
        availability: "Available in 24–48 Hours",
        capabilities: [
            "Full product feature delivery from discovery to deployment",
            "User story analysis, acceptance criteria definition & edge case identification",
            "Frontend & backend implementation with design system adherence",
            "Performance optimization: Core Web Vitals, TTI, LCP & bundle size",
            "A/B experiment instrumentation & feature flag implementation",
            "Product analytics integration: Mixpanel, PostHog & Segment event tracking"
        ],
        deliverables: [
            "Fully functional feature with responsive UI and complete backend integration",
            "Analytics event schema and tracking implementation",
            "Automated test coverage: unit, integration & end-to-end",
            "User-facing changelog entry and internal product documentation",
            "Performance benchmark report before and after feature launch"
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
            "Consumer-facing SaaS product feature development",
            "Internal tooling for operations, sales & support teams",
            "B2B dashboard and data visualization product development",
            "Mobile web progressive web apps (PWA) with offline capability"
        ],
        benefits: [
            "Product empathy reduces build-measure-learn cycle time significantly",
            "Proactive edge case identification prevents costly post-launch bugs",
            "Analytics-first approach providing clear data on feature adoption",
            "Clear written communication suitable for async remote team environments"
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
        overview: "Our Security Engineers combine deep application security expertise with modern cloud infrastructure knowledge to protect your systems from the inside out. From threat modeling and penetration testing to SOC2 readiness and zero-trust network architecture, our engineers embed into your team to systematically identify vulnerabilities, implement security controls, and build lasting security engineering practices.",
        availability: "Available in 48–72 Hours",
        capabilities: [
            "Application penetration testing & OWASP Top 10 vulnerability remediation",
            "Cloud security posture management (CSPM) & misconfiguration audits",
            "SOC2 Type I & II readiness preparation & evidence collection",
            "Zero-trust network architecture & IAM policy hardening",
            "Secrets management: Vault, AWS Secrets Manager & environment controls",
            "SAST / DAST pipeline integration & dependency vulnerability scanning"
        ],
        deliverables: [
            "Comprehensive vulnerability assessment report with risk ratings",
            "Remediation backlog prioritized by severity & exploitability",
            "SOC2 control implementation evidence & audit documentation",
            "Security runbook for incident response & breach containment",
            "Hardened IaC templates & security guardrails for CI/CD pipelines"
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
            "Pre-fundraise or pre-acquisition security due diligence",
            "SOC2 / ISO 27001 / HIPAA compliance certification preparation",
            "Enterprise customer security questionnaire and vendor assessment support",
            "Remediating active security vulnerabilities & data exposure incidents"
        ],
        benefits: [
            "SOC2 readiness unlocking enterprise-tier customer deals",
            "Systematic risk reduction reducing breach probability significantly",
            "Security embedded in CI/CD pipelines preventing vulnerabilities at source",
            "Clear board-level security posture reporting and risk quantification"
        ],
        process: [
            { step: "01", title: "Security Assessment", desc: "We conduct a comprehensive audit of application code, cloud configuration, IAM policies, data flows, and third-party integrations." },
            { step: "02", title: "Risk Prioritization", desc: "We classify findings by CVSS severity, exploitability, and business impact — creating a prioritized remediation roadmap." },
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
        description: "Hire engineers who craft pixel-perfect, high-performance user interfaces and architect scalable cloud infrastructure — combining design execution with DevOps mastery.",
        overview: "UI/UX & Cloud Engineers bridge two historically siloed disciplines — delivering outstanding user experiences on the frontend while architecting the cloud infrastructure that makes them scale. Our specialists are equally comfortable implementing component libraries in React, optimizing Core Web Vitals, and configuring Kubernetes clusters, CDN edge rules, and auto-scaling infrastructure on AWS or GCP.",
        availability: "Available in 24–48 Hours",
        capabilities: [
            "React / Next.js component library development with design system tokens",
            "Responsive, accessible UI development (WCAG 2.1 AA compliance)",
            "Core Web Vitals optimization: LCP, INP, CLS & TTI",
            "Cloud architecture: AWS / GCP multi-region deployments & CDN configuration",
            "Container orchestration: Kubernetes, Helm & service mesh (Istio / Linkerd)",
            "CI/CD pipeline design with blue-green & canary deployment strategies"
        ],
        deliverables: [
            "Production component library with Storybook documentation",
            "Lighthouse performance audit report with optimization implementation",
            "Cloud architecture diagram with Terraform IaC modules",
            "Deployed containerized application with auto-scaling & health checks",
            "CDN & edge caching configuration with performance benchmark results"
        ],
        technologies: [
            "React / Next.js / TypeScript",
            "Tailwind CSS / Radix UI / shadcn/ui",
            "Framer Motion / GSAP (animations)",
            "Figma (design collaboration & token extraction)",
            "AWS CloudFront / S3 / ECS / EKS",
            "GCP Cloud Run / GKE / Firebase",
            "Terraform / Pulumi / AWS CDK",
            "Cloudflare Pages / Workers / R2"
        ],
        useCases: [
            "Design system implementation from Figma to production component library",
            "SaaS dashboard rebuild with performance and accessibility improvements",
            "Multi-region cloud infrastructure for global user base",
            "Migration from monolithic hosting to containerized microservices on Kubernetes"
        ],
        benefits: [
            "One engineer covers frontend execution AND cloud infrastructure — no siloed handoffs",
            "Design-to-code fidelity eliminating designer-developer misalignment",
            "Core Web Vitals improvements directly improving SEO rankings and conversion rates",
            "Infrastructure-as-code enabling reproducible, version-controlled cloud environments"
        ],
        process: [
            { step: "01", title: "Design & Infrastructure Audit", desc: "We assess your current UI component quality, design token gaps, Core Web Vitals scores, and cloud architecture scalability." },
            { step: "02", title: "Design System & Architecture Plan", desc: "We plan the component hierarchy, design token schema, cloud region strategy, and CI/CD deployment model." },
            { step: "03", title: "Build & Deploy", desc: "We develop UI components, integrate them into pages, and provision cloud infrastructure in parallel using Terraform." },
            { step: "04", title: "Performance Benchmarking & Handover", desc: "We run Lighthouse audits, load tests, and CDN performance tests — handing over full documentation for your team." }
        ],
        href: "/hire-engineers/ui-ux-cloud-engineer"
    },
    {
        slug: "application-support-team",
        title: "Application Support Team",
        pillBadge: "APPLICATION SUPPORT TEAM",
        shortTitle: "Application Support",
        description: "Deploy a dedicated application support team to manage incidents, resolve bugs, maintain uptime, and own Tier 1–3 engineering support for your production systems.",
        overview: "Production systems demand continuous monitoring, rapid incident response, and disciplined maintenance engineering. Our Application Support Teams are structured pods of senior engineers who own your production environment — triaging and resolving incidents, managing release stability, monitoring SLA compliance, and executing proactive maintenance to prevent outages before they occur.",
        availability: "Available in 48–72 Hours",
        capabilities: [
            "24/7 production monitoring with custom alert thresholds & on-call rotation",
            "Tier 1–3 incident triage, root cause analysis & post-mortem documentation",
            "Bug fix prioritization, patch development & safe hotfix deployment",
            "Release management: feature flags, canary rollouts & rollback execution",
            "Proactive performance profiling & database slow-query remediation",
            "SLA monitoring, uptime reporting & executive-level incident summaries"
        ],
        deliverables: [
            "Monthly system health & incident summary report",
            "Runbook library for all critical system components & failure scenarios",
            "Automated alerting dashboard with PagerDuty / OpsGenie integration",
            "Bug resolution report with root cause analysis and preventive measures",
            "SLA compliance report with mean time to resolve (MTTR) metrics"
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
            "Post-launch production support for newly shipped SaaS products",
            "Supplementing an internal team lacking DevOps or SRE coverage",
            "24/7 incident response coverage for global user-base applications",
            "Application maintenance during internal team restructuring or hiring gaps"
        ],
        benefits: [
            "Mean time to resolve (MTTR) reduced to under 30 minutes for critical incidents",
            "Proactive monitoring preventing 80% of outages before user impact",
            "Structured post-mortems building institutional knowledge over time",
            "Predictable monthly support cost replacing unpredictable firefighting overhead"
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
