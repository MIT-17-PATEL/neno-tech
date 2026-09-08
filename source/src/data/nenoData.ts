export interface ServiceChild {
  slug: string;
  title: string;
  shortTitle?: string;
  description: string;
  href: string;
  image: string;
  overview?: string;
  capabilities?: string[];
  benefits?: string[];
  process?: string[];
  useCases?: string[];
  technologies?: string[];
  features?: string[];
  problem?: string;
  howWeHelp?: string[];
  approach?: string[];
  engagementFormat?: string;
  audience?: string[];
  areas?: string[];
  engagementOptions?: string[];
}

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  shortLabel: string;
  description: string;
  overview: string;
  capabilities: string[];
  benefits: string[];
  process: string[];
  href: string;
  image: string;
  children: ServiceChild[];
}

export interface ProductInfo {
  slug: string;
  title: string;
  description: string;
  overview: string;
  capabilities: string[];
  useCases: string[];
  features: string[];
  href: string;
}

export interface ConsultingInfo {
  slug: string;
  title: string;
  description: string;
  problem: string;
  howWeHelp: string[];
  approach: string[];
  engagementFormat: string;
  href: string;
}

export interface TrainingInfo {
  slug: string;
  title: string;
  description: string;
  overview: string;
  audience: string[];
  areas: string[];
  engagementOptions: string[];
  href: string;
}

export interface CaseStudy {
  slug: string;
  customer: string;
  challenge: string;
  approach: string;
  solution: string;
  technology: string[];
  outcome: string;
  industry: string;
  status: string;
  image?: string;
}

export interface EngineerType {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  overview: string;
  capabilities: string[];
  useCases: string[];
  engagementOptions: string[];
  technologies: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface HireEngineerRole {
  slug: string;
  title: string;
  shortTitle?: string;
  description: string;
  overview: string;
  capabilities: string[];
  technologies: string[];
  useCases: string[];
  engagementOptions: string[];
  href: string;
  image?: string;
}

export interface NenoServiceItem {
  slug: string;
  title: string;
  shortTitle?: string;
  description: string;
  overview: string;
  typicalBuild: string;
  capabilities: string[];
  deliverables: string[];
  technologies: string[];
  href: string;
  image?: string;
}

export const hireEngineersRoles: HireEngineerRole[] = [
  {
    slug: 'forward-deployed-engineer',
    title: 'Forward Deployed Engineer (FDE)',
    shortTitle: 'FDE',
    description: 'Sits with your customers and your product team. Turns real deployment friction into shipped fixes. Best when your AI product needs to survive contact with real users.',
    overview: 'Forward Deployed Engineers bridge the gap between complex software/AI systems and production end-users. They work on-site or embedded within client environments to integrate, debug, optimize, and customize systems in real-time.',
    capabilities: [
      'Customer-facing debugging & integration',
      'Production pipeline stabilization',
      'Custom client integrations & APIs',
      'Rapid turnaround for edge-case bugfixes',
      'Technical onboarding & client enablement',
    ],
    technologies: ['Python', 'TypeScript', 'LLM APIs', 'FastAPI / Node.js', 'Docker / Kubernetes', 'Vector DBs', 'REST / GraphQL'],
    useCases: [
      'Enterprise AI rollout & customer onboarding',
      'Mission-critical production deployments',
      'Complex multi-tenant software integrations',
      'Client-specific feature customizations',
    ],
    engagementOptions: ['Dedicated Engineer (Full-time)', 'Embedded Engineering Squad', 'Contract-to-Hire'],
    href: '/hire-engineers/forward-deployed-engineer',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'ai-agentic-ai-engineer',
    title: 'AI / Agentic AI Engineer',
    shortTitle: 'AI / Agentic Engineer',
    description: 'Designs multi-step agent systems that actually complete tasks — tool use, orchestration, memory, guardrails, and failure handling.',
    overview: 'Specialized engineers building autonomous and semi-autonomous multi-agent workflows, tool-calling systems, long-term memory architectures, and production-grade evaluation harnesses.',
    capabilities: [
      'Multi-agent orchestration & planning',
      'Tool calling & structured output extraction',
      'RAG architectures & hybrid vector retrieval',
      'Guardrails, deterministic fallbacks, & security',
      'Continuous evaluation & latency tuning',
    ],
    technologies: ['LangChain', 'LlamaIndex', 'CrewAI / AutoGen', 'Python / FastAPI', 'OpenAI / Claude APIs', 'Pinecone / Qdrant / pgvector'],
    useCases: [
      'Autonomous workflow automation',
      'Intelligent customer service & research agents',
      'Complex document analysis & extraction',
      'Enterprise knowledge assistants',
    ],
    engagementOptions: ['Dedicated Engineer (Full-time)', 'Embedded AI Squad', 'Contract-to-Hire'],
    href: '/hire-engineers/ai-agentic-ai-engineer',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'claude-llm-engineer',
    title: 'Claude & LLM Engineer',
    shortTitle: 'Claude & LLM Specialist',
    description: 'Specialists in Anthropic\'s Claude and the wider LLM stack — prompt architecture, context engineering, MCP integrations, fine-tuning, and cost/latency tuning.',
    overview: 'Engineers specialized in Anthropic Claude ecosystem, Model Context Protocol (MCP), prompt engineering, context window management, token optimization, and LLM benchmarking.',
    capabilities: [
      'Model Context Protocol (MCP) tool integration',
      'Long-context architecture & caching strategies',
      'Advanced prompt engineering & system prompts',
      'Synthetic dataset curation & LoRA fine-tuning',
      'Latency reduction & cost optimization',
    ],
    technologies: ['Anthropic Claude API', 'Model Context Protocol (MCP)', 'Python / TypeScript', 'Hugging Face / PyTorch', 'LangSmith', 'Weights & Biases'],
    useCases: [
      'Enterprise MCP tools & server development',
      'High-accuracy legal, financial, and code reasoning',
      'Context-heavy document processing',
      'Custom fine-tuned domain models',
    ],
    engagementOptions: ['Dedicated Specialist (Full-time)', 'Consulting & Implementation', 'Contract-to-Hire'],
    href: '/hire-engineers/claude-llm-engineer',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'full-stack-backend-engineer',
    title: 'Full Stack / Backend Engineer',
    shortTitle: 'Full Stack / Backend',
    description: 'Frontend to database, one owner. React/Next on the front, Node/Python behind it, delivering high-throughput APIs and reliable databases.',
    overview: 'Senior developers capable of architecting scalable applications end-to-end, building modern user experiences, resilient APIs, message queues, and high-performance databases.',
    capabilities: [
      'End-to-end web & mobile applications',
      'RESTful & GraphQL API design',
      'Database schema modeling & optimization',
      'Microservices & event-driven architecture',
      'CI/CD & automated testing pipelines',
    ],
    technologies: ['React / Next.js', 'Node.js / Express / NestJS', 'Python / FastAPI / Django', 'PostgreSQL / MongoDB / Redis', 'Docker / AWS / GCP'],
    useCases: [
      'Full-featured SaaS platforms',
      'High-throughput API backends',
      'Real-time collaborative web applications',
      'Legacy backend modernization',
    ],
    engagementOptions: ['Dedicated Engineer (Full-time)', 'Dedicated Full-Stack Squad', 'Contract-to-Hire'],
    href: '/hire-engineers/full-stack-backend-engineer',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'software-product-developer',
    title: 'Software Product Developer',
    shortTitle: 'Product Developer',
    description: 'Owns a product surface end to end — discovery, architecture, build, release. For teams that need a builder, not just a coder.',
    overview: 'Product-minded engineers who combine deep technical capability with product intuition, user experience considerations, and business goals to deliver polished features.',
    capabilities: [
      'Product discovery & technical scoping',
      'Rapid prototyping & iterative shipping',
      'User feedback translation to architecture',
      'Feature ownership from concept to release',
      'Technical debt & trade-off management',
    ],
    technologies: ['TypeScript / React / Next.js', 'Node.js / Python', 'TailwindCSS / UI Systems', 'PostgreSQL / Prisma', 'Vercel / AWS'],
    useCases: [
      '0 to 1 MVP development',
      'Core product expansion & major feature delivery',
      'Customer-facing product revitalization',
      'Interactive user tooling',
    ],
    engagementOptions: ['Dedicated Product Engineer', 'Rapid Build Squad', 'Contract-to-Hire'],
    href: '/hire-engineers/software-product-developer',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'security-engineer',
    title: 'Security Engineer',
    shortTitle: 'Security Engineer',
    description: 'Application and cloud security — reviews, hardening, compliance readiness, and security review of AI systems including prompt injection and data-leakage risk.',
    overview: 'Cybersecurity and AI security engineers dedicated to safeguarding infrastructure, codebases, APIs, and AI models against vulnerabilities, exploits, prompt injections, and data breaches.',
    capabilities: [
      'AI & LLM vulnerability assessments (prompt injection, jailbreaks)',
      'Application security & penetration testing',
      'Cloud security posture management (CSPM)',
      'Compliance readiness (SOC 2, ISO 27001, HIPAA, GDPR)',
      'Zero-trust architecture implementation',
    ],
    technologies: ['OWASP Top 10 / LLM Top 10', 'Terraform / CloudTrail / AWS GuardDuty', 'SonarQube / Snyk / Trivy', 'Python / Bash', 'SIEM / Splunk'],
    useCases: [
      'AI application threat modeling',
      'Pre-launch security audits & hardening',
      'SOC 2 & enterprise compliance preparation',
      'DevSecOps pipeline integration',
    ],
    engagementOptions: ['Dedicated Security Engineer', 'Security Audit & Hardening Project', 'Fractional CISO / Security Advisory'],
    href: '/hire-engineers/security-engineer',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'ui-ux-cloud-engineer',
    title: 'UI/UX & Cloud Engineer',
    shortTitle: 'UI/UX & Cloud',
    description: 'Interfaces people can actually use backed by infrastructure, CI/CD, cost control, and reliable deploys on AWS, Azure, or GCP.',
    overview: 'Engineers specializing in the combination of intuitive, high-performance user interfaces and scalable, automated, cost-efficient cloud infrastructure.',
    capabilities: [
      'Design system architecture & implementation',
      'Accessible, responsive frontend UI development',
      'Infrastructure as Code (IaC) with Terraform',
      'Kubernetes orchestration & serverless setups',
      'Multi-region deployment & observability',
    ],
    technologies: ['Figma / React / Next.js', 'Tailwind CSS / UI Systems', 'AWS / GCP / Azure', 'Docker / Kubernetes / Terraform', 'Datadog / Grafana'],
    useCases: [
      'Enterprise design systems & frontend rebuilds',
      'Cloud migration & Kubernetes setup',
      'Performance & lighthouse optimization',
      'Automated multi-stage CI/CD pipelines',
    ],
    engagementOptions: ['Dedicated Engineer (Full-time)', 'Frontend / DevOps Squad', 'Contract-to-Hire'],
    href: '/hire-engineers/ui-ux-cloud-engineer',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'application-support-team',
    title: 'Application Support Team',
    shortTitle: 'Support Team',
    description: 'Keep your existing applications running. Monitoring, bug fixes, upgrades, and a documented SLA — including legacy systems your in-house team doesn\'t want to touch.',
    overview: 'Dedicated application support and maintenance engineers providing 24/7 or high-overlap coverage, proactive monitoring, SLA-backed bug resolution, and system modernization.',
    capabilities: [
      'L1, L2, and L3 tier production support',
      '24/7 uptime monitoring & incident response',
      'Legacy codebase maintenance & patching',
      'Database health, backup, & DR management',
      'Performance optimization & dependency updates',
    ],
    technologies: ['Datadog / New Relic / Prometheus', 'Jira / PagerDuty / ServiceNow', 'PostgreSQL / MySQL / Oracle', 'Linux / AWS / Azure', 'Legacy & Modern Web Stacks'],
    useCases: [
      'Round-the-clock production maintenance',
      'SLA-backed tier-3 support for enterprise software',
      'Legacy system upkeep without pulling core devs',
      'Ongoing release and patch management',
    ],
    engagementOptions: ['Dedicated Support Squad', 'Shared Support Pod (SLA based)', 'Retainer Maintenance'],
    href: '/hire-engineers/application-support-team',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600',
  },
];

export const nenoServices: NenoServiceItem[] = [
  {
    slug: 'agentic-ai-development',
    title: 'Agentic AI Development',
    shortTitle: 'Agentic AI',
    description: 'Agents that do the work, not just answer questions. We build multi-step systems that use tools, call your APIs, handle failure, and stay observable in production.',
    overview: 'We design and engineer production-ready autonomous agent systems that execute multi-step workflows, integrate with external APIs and databases, utilize smart reflection and error recovery, and maintain full observability.',
    typicalBuild: '4–12 weeks',
    capabilities: [
      'Multi-step agent planning & workflow routing',
      'Deterministic fallback mechanisms & guardrails',
      'Custom tool and API integration',
      'Memory architecture (short-term, episodic, semantic)',
      'Observability, tracing, and cost controls',
    ],
    deliverables: [
      'Production-ready agent architecture',
      'Custom API & tool integrations',
      'Evaluation harness & accuracy benchmarks',
      'Deployment pipelines & monitoring dashboard',
      'Complete architecture & operation docs',
    ],
    technologies: ['LangChain', 'LlamaIndex', 'CrewAI / AutoGen', 'Claude API / OpenAI API', 'Python / FastAPI', 'Pinecone / Qdrant'],
    href: '/services/agentic-ai-development',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'ai-product-development',
    title: 'AI Product Development',
    shortTitle: 'AI Products',
    description: 'Take an AI product from idea to launch. Discovery, architecture, build, deploy, iterate — one accountable team.',
    overview: 'End-to-end design and delivery of AI-native SaaS platforms and enterprise tools. From initial user discovery and UI/UX design to scalable model deployment and cloud infrastructure.',
    typicalBuild: '8–16 weeks',
    capabilities: [
      'End-to-end full stack AI product development',
      'Product discovery & UX design for AI interfaces',
      'Scalable backend & real-time streaming architectures',
      'Model selection, evaluation, and latency optimization',
      'Automated deployment & post-launch scaling',
    ],
    deliverables: [
      'Interactive UI/UX design prototype in Figma',
      'Full-stack web/mobile application with AI features',
      'Scalable cloud infrastructure on AWS/GCP',
      'CI/CD pipelines & automated testing',
      'Source code repository & IP handover',
    ],
    technologies: ['Next.js / React', 'Node.js / Python / FastAPI', 'PostgreSQL / Supabase / Redis', 'OpenAI / Anthropic / Local LLMs', 'AWS / Docker / Kubernetes'],
    href: '/services/ai-product-development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'vibe-coding-squads',
    title: 'Vibe Coding Squads',
    shortTitle: 'Vibe Coding',
    description: 'An AI-native delivery squad that builds at a different speed. Engineers working with Claude and modern AI tooling as a core workflow — with senior review so speed never costs quality.',
    overview: 'Rapid AI-assisted software delivery squads. Our engineers use cutting-edge AI programming tools (Claude, Cursor, Copilot) combined with disciplined senior code review and architectural validation to ship 3x-5x faster.',
    typicalBuild: '2–6 weeks',
    capabilities: [
      'Hyper-fast prototyping and MVP delivery',
      'AI-assisted rapid full-stack development',
      'Senior peer review & architectural guardrails',
      'Rapid feature iteration & user testing',
      'Clean code standards & comprehensive test suites',
    ],
    deliverables: [
      'Fully functional MVP or internal tooling',
      'Production-ready codebase with test coverage',
      'Integrated database and API services',
      'Deployment to production environment',
      'Handover documentation and video walkthrough',
    ],
    technologies: ['Cursor / Claude 3.7 / Copilot', 'Next.js / TypeScript', 'Tailwind CSS', 'FastAPI / Node.js', 'PostgreSQL / Supabase', 'Vercel / Render'],
    href: '/services/vibe-coding-squads',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'ai-gtm',
    title: 'AI GTM (Go-To-Market)',
    shortTitle: 'AI GTM',
    description: 'AI applied to how you sell. Lead qualification agents, outbound systems, CRM intelligence, voice agents for follow-up, and pipeline analytics — built into your existing sales stack.',
    overview: 'Transform your sales motion with AI systems engineered to automate prospecting, prospect research, hyper-personalized outreach, conversational inbound qualification, and real-time CRM updates.',
    typicalBuild: '3–8 weeks',
    capabilities: [
      'Automated prospect research & enrichment pipelines',
      'Dynamic, personalized multi-channel outreach engines',
      'Inbound lead qualification & meeting scheduling bots',
      'Voice AI agents for instant phone follow-up',
      'CRM synchronization & automated pipeline hygiene',
    ],
    deliverables: [
      'Configured AI lead research pipeline',
      'Custom inbound & outbound messaging agents',
      'CRM integration (HubSpot, Salesforce, Neno CRM)',
      'Voice AI calling workflows & scripts',
      'Analytics dashboard for conversion tracking',
    ],
    technologies: ['Python / FastAPI', 'OpenAI / Claude APIs', 'HubSpot / Salesforce APIs', 'Twilio / ElevenLabs', 'Make / Zapier / Temporal'],
    href: '/services/ai-gtm',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f3ff?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'llm-fine-tuning-deployment',
    title: 'LLM Fine-Tuning & Deployment',
    shortTitle: 'LLM Fine-Tuning',
    description: 'When prompting isn\'t enough. Dataset preparation, fine-tuning, evaluation, and secure deployment — including private and on-premise setups for regulated data.',
    overview: 'Custom model adaptation for proprietary enterprise domains. We curate training data, perform parameter-efficient fine-tuning (LoRA/QLoRA), benchmark model output, and deploy secure on-premise or VPC inference endpoints.',
    typicalBuild: '4–10 weeks',
    capabilities: [
      'Proprietary dataset curation & synthetic data generation',
      'Parameter-efficient fine-tuning (LoRA, QLoRA, Full)',
      'Domain-specific evaluation benchmarks & automated scoring',
      'Quantization & inference acceleration (vLLM, TensorRT-LLM)',
      'Secure VPC or on-premise air-gapped deployment',
    ],
    deliverables: [
      'Curated, cleaned training and validation datasets',
      'Fine-tuned model weights and checkpoints',
      'Comprehensive evaluation report vs baseline models',
      'Production inference container / vLLM API server',
      'Cost and latency benchmarks',
    ],
    technologies: ['PyTorch / Hugging Face', 'vLLM / TensorRT-LLM', 'DeepSpeed / Axolotl / Unsloth', 'AWS SageMaker / RunPod / Lambda Labs', 'Triton Inference Server'],
    href: '/services/llm-fine-tuning-deployment',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'application-support-modernization',
    title: 'Application Support & Modernization',
    shortTitle: 'Support & Modernization',
    description: 'Keep what works, fix what doesn\'t, and bring AI to the rest. Support for existing applications, legacy modernization, and AI capability retrofitted into systems you already run.',
    overview: 'Modernize legacy systems and enhance existing business applications with AI capabilities while ensuring continuous uptime, robust security, and dedicated SLA-backed engineering support.',
    typicalBuild: 'Ongoing / 4–12 weeks migration',
    capabilities: [
      'Legacy codebase refactoring & cloud migration',
      'AI feature retrofitting into existing enterprise software',
      '24/7 proactive monitoring & incident resolution',
      'API modernizations & microservice extraction',
      'SLA-backed tier-2 and tier-3 maintenance',
    ],
    deliverables: [
      'Legacy architecture audit & modernization roadmap',
      'Incremental refactoring and cloud migration plan',
      'Integrated AI capabilities and automated workflows',
      'Automated testing and CI/CD deployment pipelines',
      'Dedicated SLA support dashboard and weekly reports',
    ],
    technologies: ['React / Next.js / Angular', 'Node.js / Python / Java / .NET', 'PostgreSQL / MySQL / Oracle', 'AWS / Azure / GCP', 'Docker / Kubernetes / Datadog'],
    href: '/services/application-support-modernization',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'hire-engineers',
    slug: 'hire-engineers',
    title: 'Hire Engineers',
    shortLabel: 'Hire Engineers',
    description: 'Pre-vetted senior engineering talent integrated into your team within days.',
    overview: 'Specialized engineering expertise aligned to your project requirements — from AI and full-stack to cloud and product design.',
    capabilities: [
      'AI engineering for intelligent systems',
      'Full-stack web and mobile development',
      'Cloud infrastructure and DevOps',
      'Product design and user experience',
      'Domain expertise for regulated environments',
    ],
    benefits: [
      'Pre-vetted professionals with verified domain expertise',
      'Flexible engagement models — full-time, part-time, or project',
      'Seamless integration with existing teams and workflows',
      'Scalable team composition on demand',
    ],
    process: [
      'Submit your technical requirements and team brief',
      'Matching engine identifies precision-fit candidates',
      'Review curated shortlist and conduct interviews',
      'Onboard selected talent with dedicated integration support',
    ],
    href: '/hire-engineers',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600',
    children: [
      {
        slug: 'forward-deployed-engineer',
        title: 'Forward Deployed Engineer (FDE)',
        description: 'Sits with your customers and your product team. Turns real deployment friction into shipped fixes.',
        overview: 'Forward Deployed Engineers bridge the gap between complex software/AI systems and production end-users.',
        capabilities: ['Customer-facing debugging & integration', 'Production pipeline stabilization', 'Custom client integrations & APIs', 'Rapid turnaround for edge-case bugfixes'],
        useCases: ['Enterprise AI rollout & customer onboarding', 'Mission-critical production deployments', 'Complex multi-tenant software integrations'],
        technologies: ['Python', 'TypeScript', 'LLM APIs', 'FastAPI / Node.js', 'Docker / Kubernetes'],
        href: '/hire-engineers/forward-deployed-engineer',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      },
      {
        slug: 'ai-agentic-ai-engineer',
        title: 'AI / Agentic AI Engineer',
        description: 'Designs multi-step agent systems that actually complete tasks — tool use, orchestration, memory, and guardrails.',
        overview: 'Specialized engineers building autonomous and semi-autonomous multi-agent workflows and production evaluation harnesses.',
        capabilities: ['Multi-agent orchestration & planning', 'Tool calling & structured output extraction', 'RAG architectures & hybrid vector retrieval'],
        useCases: ['Autonomous workflow automation', 'Intelligent customer service & research agents', 'Enterprise knowledge assistants'],
        technologies: ['LangChain', 'LlamaIndex', 'CrewAI / AutoGen', 'Python / FastAPI', 'OpenAI / Claude APIs'],
        href: '/hire-engineers/ai-agentic-ai-engineer',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      },
      {
        slug: 'claude-llm-engineer',
        title: 'Claude & LLM Engineer',
        description: 'Specialists in Anthropic\'s Claude and the wider LLM stack — prompt architecture, context engineering, and MCP.',
        overview: 'Engineers specialized in Anthropic Claude ecosystem, Model Context Protocol (MCP), prompt engineering, and token optimization.',
        capabilities: ['Model Context Protocol (MCP) tool integration', 'Long-context architecture & caching strategies', 'Synthetic dataset curation & LoRA fine-tuning'],
        useCases: ['Enterprise MCP tools & server development', 'High-accuracy legal, financial, and code reasoning', 'Custom fine-tuned domain models'],
        technologies: ['Anthropic Claude API', 'Model Context Protocol (MCP)', 'Python / TypeScript', 'LangSmith'],
        href: '/hire-engineers/claude-llm-engineer',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
      },
      {
        slug: 'full-stack-backend-engineer',
        title: 'Full Stack / Backend Engineer',
        description: 'Frontend to database, one owner. React/Next on the front, Node/Python behind it.',
        overview: 'Senior developers capable of architecting scalable applications end-to-end, building modern user experiences and resilient APIs.',
        capabilities: ['End-to-end web & mobile applications', 'RESTful & GraphQL API design', 'Database schema modeling & optimization'],
        useCases: ['Full-featured SaaS platforms', 'High-throughput API backends', 'Real-time collaborative web applications'],
        technologies: ['React / Next.js', 'Node.js / Express / NestJS', 'Python / FastAPI / Django', 'PostgreSQL / Redis'],
        href: '/hire-engineers/full-stack-backend-engineer',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
      },
      {
        slug: 'software-product-developer',
        title: 'Software Product Developer',
        description: 'Owns a product surface end to end — discovery, architecture, build, release.',
        overview: 'Product-minded engineers who combine deep technical capability with product intuition and user experience considerations.',
        capabilities: ['Product discovery & technical scoping', 'Rapid prototyping & iterative shipping', 'Feature ownership from concept to release'],
        useCases: ['0 to 1 MVP development', 'Core product expansion & major feature delivery', 'Customer-facing product revitalization'],
        technologies: ['TypeScript / React / Next.js', 'Node.js / Python', 'TailwindCSS / UI Systems', 'PostgreSQL'],
        href: '/hire-engineers/software-product-developer',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
      },
      {
        slug: 'security-engineer',
        title: 'Security Engineer',
        description: 'Application and cloud security — reviews, hardening, compliance readiness, and security review of AI systems.',
        overview: 'Cybersecurity and AI security engineers dedicated to safeguarding infrastructure, codebases, APIs, and AI models against vulnerabilities.',
        capabilities: ['AI & LLM vulnerability assessments', 'Application security & penetration testing', 'Cloud security posture management (CSPM)'],
        useCases: ['AI application threat modeling', 'Pre-launch security audits & hardening', 'SOC 2 & enterprise compliance preparation'],
        technologies: ['OWASP Top 10 / LLM Top 10', 'Terraform / CloudTrail', 'SonarQube / Snyk', 'Python / Bash'],
        href: '/hire-engineers/security-engineer',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
      },
      {
        slug: 'ui-ux-cloud-engineer',
        title: 'UI/UX & Cloud Engineer',
        description: 'Interfaces people can actually use backed by infrastructure, CI/CD, and reliable deploys.',
        overview: 'Engineers specializing in intuitive user interfaces and scalable, automated, cost-efficient cloud infrastructure.',
        capabilities: ['Design system architecture & implementation', 'Accessible frontend UI development', 'Infrastructure as Code (IaC) with Terraform'],
        useCases: ['Enterprise design systems & frontend rebuilds', 'Cloud migration & Kubernetes setup', 'Performance optimization'],
        technologies: ['Figma / React / Next.js', 'Tailwind CSS', 'AWS / GCP / Azure', 'Docker / Kubernetes / Terraform'],
        href: '/hire-engineers/ui-ux-cloud-engineer',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
      },
      {
        slug: 'application-support-team',
        title: 'Application Support Team',
        description: 'Keep your existing applications running. Monitoring, bug fixes, upgrades, and a documented SLA.',
        overview: 'Dedicated application support and maintenance engineers providing 24/7 or high-overlap coverage and proactive monitoring.',
        capabilities: ['L1, L2, and L3 tier production support', '24/7 uptime monitoring & incident response', 'Legacy codebase maintenance & patching'],
        useCases: ['Round-the-clock production maintenance', 'SLA-backed tier-3 support for enterprise software', 'Legacy system upkeep'],
        technologies: ['Datadog / New Relic / Prometheus', 'Jira / PagerDuty', 'PostgreSQL / MySQL', 'Linux / AWS / Azure'],
        href: '/hire-engineers/application-support-team',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  {
    id: 'project-solutions',
    slug: 'project-solutions',
    title: 'On demand Project & Solution',
    shortLabel: 'Project & Solution',
    description: 'We take individual projects for business, providing end-to-end delivery.',
    overview: 'Complete project lifecycle management and delivery. From requirements gathering to deployment, we build tailored software solutions for your specific business needs.',
    capabilities: [
      'End-to-end custom software development',
      'Dedicated project management and delivery',
      'Agile development methodology',
      'Quality assurance and testing',
    ],
    benefits: [
      'Fixed-scope or dedicated team models',
      'Transparent progress tracking',
      'Reduced time to market',
      'High-quality, scalable deliverables',
    ],
    process: [
      'Requirements discovery and scoping',
      'Architecture and UI/UX design',
      'Iterative development and testing',
      'Deployment and post-launch support',
    ],
    href: '/project-solutions',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
    children: [],
  },
  {
    id: 'products',
    slug: 'products',
    title: 'Products',
    shortLabel: 'Products',
    description: 'Purpose-built software products engineered for specific enterprise challenges.',
    overview: 'A suite of proprietary products that solve real operational challenges — from CRM and ERP to digital products and voice AI.',
    capabilities: [
      'Customer relationship management platforms',
      'Enterprise resource planning systems',
      'Domain-specific digital products',
      'Voice AI and conversational platforms',
    ],
    benefits: [
      'Production-ready out of the box',
      'Configurable to your workflows',
      'Integration with existing tools',
      'Ongoing product evolution and support',
    ],
    process: [
      'Discovery and requirements',
      'Configuration and integration',
      'Onboarding and enablement',
      'Continuous product enhancement',
    ],
    href: '/products',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
    children: [
      {
        slug: 'crm',
        title: 'CRM',
        description: 'Customer relationship management platform designed for relationship-driven businesses.',
        overview: 'A CRM system built around how your teams actually work — capturing the full customer lifecycle from lead to retention with workflow automation and actionable insights.',
        capabilities: ['Contact and account management', 'Sales pipeline tracking', 'Workflow automation and triggers', 'Reporting and analytics dashboards'],
        useCases: ['Sales team enablement', 'Customer lifecycle management', 'Pipeline forecasting and reporting', 'Multi-team customer coordination'],
        technologies: ['React / Next.js', 'Node.js / Python', 'PostgreSQL', 'Redis', 'REST / GraphQL APIs'],
        href: '/products/crm',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
      },
      {
        slug: 'erp',
        title: 'ERP',
        description: 'Enterprise resource planning system that connects operations, finance, and logistics.',
        overview: 'An ERP platform that unifies your core business operations — from inventory and procurement to finance and human resources — into a single coherent system.',
        capabilities: ['Financial management and reporting', 'Inventory and supply chain management', 'Human resources and payroll integration', 'Business intelligence and dashboards'],
        useCases: ['Operational visibility across departments', 'Financial close automation', 'Supply chain optimization', 'Regulatory compliance reporting'],
        technologies: ['Python / Django', 'PostgreSQL', 'React', 'REST APIs', 'Docker / Kubernetes'],
        href: '/products/erp',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      },
      {
        slug: 'digital-products',
        title: 'Digital Products',
        description: 'Domain-specific digital products engineered to address unique industry and business needs.',
        overview: 'Custom digital products built from the ground up for your specific market — combining domain expertise with modern software architecture.',
        capabilities: ['Domain-specific feature design', 'Multi-platform application development', 'Third-party system integration', 'Scalable cloud-native architecture'],
        useCases: ['Industry-specific SaaS platforms', 'Internal operational tools', 'Customer-facing digital experiences', 'Platform and marketplace development'],
        technologies: ['React / Next.js', 'Node.js / Python', 'MongoDB / PostgreSQL', 'AWS / GCP', 'GraphQL'],
        href: '/products/digital-products',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
      },
      {
        slug: 'voice-ai',
        title: 'Voice AI',
        description: 'Conversational AI and voice-enabled systems for natural human-computer interaction.',
        overview: 'Voice AI products that enable natural language interaction — from intelligent call routing and voice assistants to transcription and real-time translation.',
        capabilities: ['Speech recognition and transcription', 'Natural language understanding', 'Voice assistant and IVR systems', 'Real-time multilingual processing'],
        useCases: ['Intelligent customer support automation', 'Voice-enabled enterprise assistants', 'Call center automation', 'Real-time transcription and translation'],
        technologies: ['Python', 'OpenAI Whisper', 'ElevenLabs', 'Twilio / WebRTC', 'FastAPI'],
        href: '/products/voice-ai',
        image: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  {
    id: 'consulting',
    slug: 'consulting',
    title: 'Consulting',
    shortLabel: 'Consulting',
    description: 'Strategic technology consulting to accelerate decisions and reduce execution risk.',
    overview: 'Expert guidance to help you make the right technology decisions — from AI strategy through product scaling and marketing transformation.',
    capabilities: [
      'AI strategy and readiness assessment',
      'Software product and architecture consulting',
      'MVP to production scaling guidance',
      'Marketing technology and growth strategy',
    ],
    benefits: [
      'Independent expert perspective',
      'Reduced technology and execution risk',
      'Clear prioritization of opportunities',
      'Actionable roadmaps with measurable outcomes',
    ],
    process: [
      'Discovery and current-state assessment',
      'Strategy and opportunity mapping',
      'Architecture and roadmap design',
      'Guided execution and review',
    ],
    href: '/consulting',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600',
    children: [
      {
        slug: 'ai',
        title: 'AI Consulting',
        description: 'Strategic guidance for AI adoption — from readiness assessment through production deployment planning.',
        overview: 'We help organizations understand where AI creates genuine value, build a practical adoption roadmap, and avoid the common pitfalls of AI initiatives.',
        capabilities: ['AI readiness and maturity assessment', 'Use case prioritization and ROI modeling', 'Technology stack and vendor evaluation', 'Data strategy and governance planning'],
        useCases: ['AI strategy for enterprise organizations', 'LLM integration planning', 'Data platform strategy', 'Responsible AI governance frameworks'],
        technologies: ['OpenAI / Anthropic / Google AI', 'LangChain', 'Python / R', 'Vector databases', 'MLOps platforms'],
        href: '/consulting/ai',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      },
      {
        slug: 'software-product',
        title: 'Software Product Consulting',
        description: 'Architecture and strategy guidance for building, scaling, and evolving software products.',
        overview: 'Senior engineering perspectives on product architecture, technical debt, platform strategy, and engineering team structure.',
        capabilities: ['Product architecture review', 'Technical debt assessment and planning', 'Engineering team structure and process', 'Technology stack evaluation'],
        useCases: ['Platform architecture redesign', 'Technical due diligence', 'Engineering process improvement', 'Technology migration planning'],
        technologies: ['React / Next.js', 'Node.js / Python', 'Cloud platforms', 'Databases', 'API design'],
        href: '/consulting/software-product',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
      },
      {
        slug: 'mvp-production',
        title: 'MVP to Production Consulting',
        description: 'Guidance for scaling validated prototypes into production-grade, maintainable systems.',
        overview: 'Bridge the gap between proof-of-concept and production. We help you refactor, rearchitect, and scale your MVP into a system that handles real users and real data.',
        capabilities: ['Architecture review and refactoring', 'Performance and scalability planning', 'Security hardening and compliance', 'Team and process scaling'],
        useCases: ['MVP to production transition', 'Scale preparation for growth-stage products', 'Technical debt remediation', 'Production readiness assessment'],
        technologies: ['Cloud infrastructure', 'Container orchestration', 'CI/CD automation', 'Monitoring and observability', 'Database scaling'],
        href: '/consulting/mvp-production',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
      },
      {
        slug: 'marketing',
        title: 'Marketing Consulting',
        description: 'Technology-driven marketing strategy — from digital growth to marketing automation and analytics.',
        overview: 'Strategic marketing guidance that leverages technology for measurable growth — combining digital marketing, marketing technology, and data-driven optimization.',
        capabilities: ['Digital marketing strategy and execution', 'Marketing technology stack design', 'Analytics and attribution modeling', 'Growth strategy and experimentation'],
        useCases: ['Go-to-market strategy', 'Marketing automation implementation', 'Analytics infrastructure', 'Brand positioning and messaging'],
        technologies: ['Google Analytics / GA4', 'Marketing automation platforms', 'SEO / SEM tools', 'CRM integrations', 'Data visualization'],
        href: '/consulting/marketing',
        image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f3ff?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  {
    id: 'training',
    slug: 'training',
    title: 'Training',
    shortLabel: 'Training',
    description: 'Expert-led training programs that upskill engineering and product teams.',
    overview: 'Training delivered by practitioners who have built and deployed the systems they teach — across AI, software engineering, and cloud.',
    capabilities: [
      'AI and machine learning training',
      'Full-stack development bootcamps',
      'Cloud architecture and DevOps training',
      'Custom curriculum design',
    ],
    benefits: [
      'Practitioner-led instruction',
      'Curriculum aligned to your tech stack',
      'Flexible engagement formats',
      'Measurable learning outcomes',
    ],
    process: [
      'Skill gap assessment',
      'Curriculum design and customization',
      'Delivery — workshop, bootcamp, or ongoing mentorship',
      'Assessment and outcome tracking',
    ],
    href: '/training',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1600',
    children: [
      {
        slug: 'trainer-on-demand',
        title: 'Trainer on Demand',
        description: 'Access specialized trainers for targeted, role-specific technology training.',
        overview: 'Expert trainers available on-demand to deliver focused, hands-on training sessions — from one-day workshops to multi-week bootcamps.',
        capabilities: ['Custom curriculum development', 'Hands-on workshop delivery', 'Role-specific training paths', 'Progress assessment and certification'],
        useCases: ['Team upskilling programs', 'Technology onboarding', 'Certification preparation', 'Executive technology briefings'],
        technologies: ['Custom to client stack', 'Hands-on labs', 'Assessment frameworks', 'Learning management tools'],
        href: '/training/trainer-on-demand',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
      },
      {
        slug: 'education-consulting',
        title: 'Education Consulting',
        description: 'Strategic guidance for building and scaling technology education programs.',
        overview: 'Consulting services for organizations building internal training academies, upskilling programs, or technology curriculum — from design through delivery.',
        capabilities: ['Curriculum design and development', 'Learning path architecture', 'Training program evaluation', 'Technology education strategy'],
        useCases: ['Internal engineering academy setup', 'Technology curriculum design', 'Training program assessment', 'Workforce upskilling strategy'],
        technologies: ['LMS platforms', 'Curriculum frameworks', 'Assessment tools', 'Learning analytics'],
        href: '/training/education-consulting',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ai-crm-system',
    customer: 'Enterprise Client',
    challenge: 'Manual CRM processes were creating bottlenecks in lead management, proposal follow-ups, and customer communication — resulting in missed opportunities and inconsistent customer experience.',
    approach: 'We designed and built an AI-native CRM system with automated workflows, intelligent lead scoring, and a conversational AI agent for database queries and customer interactions.',
    solution: 'A custom CRM platform featuring automated proposal follow-ups, intelligent lead prioritization, and a conversational AI agent that enables natural language queries across the entire customer database.',
    technology: ['React', 'Node.js', 'Python', 'PostgreSQL', 'OpenAI API', 'LangChain'],
    outcome: 'Client engaged Neno Technology to design, build, and deploy a custom solution. Project completed in accordance with agreed timelines and technical specifications.',
    industry: 'Enterprise / Automation',
    status: 'Deployed',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'smart-email-outreach',
    customer: 'Sales Tech Company',
    challenge: 'Generic outreach campaigns had low engagement rates and poor personalization at scale. The sales team needed a way to deliver individualized outreach efficiently.',
    approach: 'We built an intelligent outreach platform that researches prospects, generates personalized content, and optimizes send timing based on engagement data.',
    solution: 'A personalized outreach platform that generates customized content based on prospect research and intelligent timing optimization for maximum engagement.',
    technology: ['Python', 'React', 'OpenAI API', 'PostgreSQL', 'Celery', 'Redis'],
    outcome: 'Client engaged Neno Technology to design, build, and deploy a custom solution. Project completed in accordance with agreed timelines and technical specifications.',
    industry: 'Sales Tech',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'enterprise-data-hub',
    customer: 'Fortune 500 Company',
    challenge: 'Data was siloed across multiple systems, making unified analytics and predictive forecasting impossible. Teams spent hours consolidating data manually.',
    approach: 'We architected a unified data hub integrating multiple data sources into a single visualization platform with predictive forecasting capabilities.',
    solution: 'A comprehensive analytics platform integrating multiple data sources into a unified visualization layer with predictive forecasting and automated reporting.',
    technology: ['Python', 'Apache Spark', 'PostgreSQL', 'React', 'AWS', 'Apache Airflow'],
    outcome: 'Client engaged Neno Technology to design, build, and deploy a custom solution. Project completed in accordance with agreed timelines and technical specifications.',
    industry: 'Data Intelligence',
    status: 'Deployed',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
  },
  {
    slug: 'ayugpt-health',
    customer: 'HealthTech Startup',
    challenge: 'Bridging ancient Ayurvedic wisdom with modern AI technology to provide personalized health guidance at scale.',
    approach: 'We developed a specialized conversational AI trained on Ayurvedic principles, capable of providing personalized health recommendations based on individual constitutions.',
    solution: 'AyuGPT — an AI-powered conversational platform providing personalized Ayurvedic health guidance, dosha analysis, and wellness recommendations.',
    technology: ['Python', 'LLM Fine-tuning', 'React', 'PostgreSQL', 'RAG Architecture'],
    outcome: 'Client engaged Neno Technology to design, build, and deploy a custom solution. Project completed in accordance with agreed timelines and technical specifications.',
    industry: 'Healthcare / Wellness',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Tirth Patel',
    role: 'Co-founder',
    bio: 'Strategist and visionary leading the business development and strategic partnership growth at Neno Technology.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    linkedin: 'https://www.linkedin.com/in/tirth-patel-nenotechnology/',
  },
];
