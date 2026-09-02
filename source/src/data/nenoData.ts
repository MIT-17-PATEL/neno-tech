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

export const brandData = {
  name: 'Neno-Tec',
  fullName: 'Neno Technologies',
  tagline: 'Precision Engineering & AI Transformation Partner',
  description: 'End-to-end technology services engineered for scale — from specialized talent to complete product delivery.',
  email: 'contact@nenotech.com',
  phone: '+1 (555) 019-2834',
  address: 'San Francisco, CA & Global Engineering Hubs',
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'engineer-on-demand',
    slug: 'engineer-on-demand',
    title: 'Engineer on Demand',
    shortLabel: 'Engineer on Demand',
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
    href: '/services/engineer-on-demand',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600',
    children: [
      {
        slug: 'fda-engineer',
        title: 'FDA Engineer',
        description: 'Regulated-environment engineering expertise with deep domain knowledge for FDA-compliant systems.',
        overview: 'Senior engineers who understand the intersection of software quality, regulatory requirements, and production reliability in regulated industries.',
        capabilities: ['GxP and FDA compliance knowledge', 'Quality system integration', 'Technical documentation and audit readiness', 'Cross-functional team leadership'],
        useCases: ['Medical device software development', 'Pharmaceutical manufacturing systems', 'Quality management platform engineering', 'Regulatory-compliant data systems'],
        technologies: ['Python', 'Java', 'SQL / PostgreSQL', 'GxP workflows', 'AWS / Azure'],
        href: '/services/engineer-on-demand/fda-engineer',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
      },
      {
        slug: 'ai-engineer',
        title: 'AI Engineer',
        description: 'Design and implement intelligent systems, AI workflows, and production-ready machine learning applications.',
        overview: 'Engineers who build AI systems that solve real business problems — from natural language processing and computer vision to recommendation engines and predictive analytics.',
        capabilities: ['Machine learning model development', 'Natural language processing and LLM integration', 'Computer vision and data pipelines', 'AI system architecture and MLOps'],
        useCases: ['Intelligent document processing', 'Predictive analytics platforms', 'Conversational AI and chatbots', 'Recommendation and personalization engines'],
        technologies: ['Python', 'TensorFlow / PyTorch', 'LangChain', 'OpenAI / Claude APIs', 'AWS SageMaker'],
        href: '/services/engineer-on-demand/ai-engineer',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      },
      {
        slug: 'full-stack-engineer',
        title: 'Full-Stack Engineer',
        description: 'Build scalable applications across frontend, backend, APIs, and data infrastructure.',
        overview: 'Senior engineers capable of owning features end-to-end — from database schema and API design to responsive UI and deployment.',
        capabilities: ['Frontend development with modern frameworks', 'Backend API and microservice architecture', 'Database design and optimization', 'CI/CD pipeline and deployment automation'],
        useCases: ['SaaS product development', 'E-commerce platform engineering', 'Internal tool and dashboard development', 'API-first platform architecture'],
        technologies: ['React / Next.js', 'Node.js', 'Python / Django / FastAPI', 'PostgreSQL / MongoDB', 'Docker / Kubernetes'],
        href: '/services/engineer-on-demand/full-stack-engineer',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
      },
      {
        slug: 'ui-ux',
        title: 'UI/UX Designer',
        description: 'Design clear, intuitive digital experiences backed by structured product thinking.',
        overview: 'Designers who bridge the gap between user needs, business goals, and technical constraints — creating interfaces that feel effortless.',
        capabilities: ['User research and journey mapping', 'Interaction design and prototyping', 'Design system architecture', 'Usability testing and iteration'],
        useCases: ['Product redesign and modernization', 'Design system creation', 'Mobile application UX', 'Enterprise dashboard design'],
        technologies: ['Figma', 'React / Next.js', 'Design tokens', 'Prototyping tools', 'User research frameworks'],
        href: '/services/engineer-on-demand/ui-ux',
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d0f?auto=format&fit=crop&q=80&w=800',
      },
      {
        slug: 'backend-engineer',
        title: 'Backend Engineer',
        description: 'Design and build secure, scalable backend architectures and APIs.',
        overview: 'Specialized engineers focusing on server-side logic, database architecture, API development, and high-performance distributed systems.',
        capabilities: ['API design and development', 'Microservices architecture', 'Database optimization', 'Performance tuning and scalability'],
        useCases: ['High-traffic API services', 'Complex data processing pipelines', 'Legacy system modernization', 'Secure backend architecture'],
        technologies: ['Node.js', 'Python', 'Java', 'PostgreSQL / MongoDB', 'Redis'],
        href: '/services/engineer-on-demand/backend-engineer',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
      },
      {
        slug: 'cloud-engineer',
        title: 'Cloud Engineer',
        description: 'Design and optimize secure cloud infrastructure for reliable, scalable, and cost-efficient applications.',
        overview: 'Engineers who architect and manage cloud infrastructure — from initial deployment and scaling to monitoring, security, and cost optimization.',
        capabilities: ['Cloud architecture and infrastructure design', 'Container orchestration with Kubernetes', 'CI/CD and infrastructure automation', 'Monitoring, logging, and observability'],
        useCases: ['Cloud migration and modernization', 'Multi-cloud architecture design', 'Infrastructure cost optimization', 'Disaster recovery and high availability'],
        technologies: ['AWS / GCP / Azure', 'Docker / Kubernetes', 'Terraform', 'Prometheus / Grafana', 'CI/CD pipelines'],
        href: '/services/engineer-on-demand/cloud-engineer',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
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
    href: '/services/project-solutions',
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
    href: '/services/products',
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
        href: '/services/products/crm',
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
        href: '/services/products/erp',
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
        href: '/services/products/digital-products',
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
        href: '/services/products/voice-ai',
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
    href: '/services/consulting',
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
        href: '/services/consulting/ai',
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
        href: '/services/consulting/software-product',
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
        href: '/services/consulting/mvp-production',
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
        href: '/services/consulting/marketing',
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
    href: '/services/training',
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
        href: '/services/training/trainer-on-demand',
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
        href: '/services/training/education-consulting',
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
