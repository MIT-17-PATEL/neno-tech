import { Brain, Code, Cpu, Briefcase, MessageSquare } from 'lucide-react';

/* ─── Child Service ───────────────────────────────────────────── */
export interface ServiceChild {
  id: string;
  title: string;
  slug: string;
  href: string;
  description: string;
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

/* ─── Top-Level Service Category ──────────────────────────────── */
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
  icon: React.ReactNode;
  children: ServiceChild[];
}

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
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    icon: <Brain className="text-white" size={24} />,
    children: [
      {
        id: 'fda-engineer', title: 'FDA Engineer', slug: 'fda-engineer', href: '/services/engineer-on-demand/fda-engineer',
        description: 'Engineers with experience building software for FDA-regulated environments, understanding validation requirements, and designing compliant technical solutions.',
        image: 'https://images.unsplash.com/photo-1581093458791-9f302e4d0169?auto=format&fit=crop&q=80&w=800',
        overview: 'Software engineers with domain knowledge relevant to FDA-regulated environments — including medical devices, digital health, and life sciences software.',
        capabilities: ['Software development for regulated environments', 'Understanding of validation and compliance considerations', 'System architecture for medical/health tech products', 'Data integrity and audit trail implementation', 'Quality management system integration'],
        useCases: ['Medical device software development', 'Digital health platform engineering', 'Clinical data management systems', 'Regulatory documentation tooling'],
        technologies: ['Python', 'Java', 'C#/.NET', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS/GCP/Azure', 'Docker', 'Kubernetes', 'React', 'Vue.js', 'Angular'],
      },
      {
        id: 'ai-engineer', title: 'AI Engineer', slug: 'ai-engineer', href: '/services/engineer-on-demand/ai-engineer',
        description: 'Machine learning and AI engineers specializing in LLMs, NLP, computer vision, and production AI systems at enterprise scale.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        overview: 'Deep technical expertise in artificial intelligence and machine learning. These engineers architect, train, and deploy intelligent systems designed for production reliability.',
        capabilities: ['Large language model development and fine-tuning', 'Natural language processing pipelines', 'Computer vision and multimodal AI', 'MLOps and model deployment infrastructure', 'Data pipeline architecture and feature engineering', 'AI agent and autonomous workflow design'],
        useCases: ['Custom LLM development and fine-tuning', 'Intelligent document processing systems', 'Conversational AI and chatbots', 'Predictive analytics platforms', 'AI-powered automation workflows', 'Computer vision applications'],
        technologies: ['Python', 'PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'LlamaIndex', 'OpenAI API', 'AWS SageMaker', 'Vertex AI', 'Docker', 'Kubernetes', 'FastAPI'],
      },
      {
        id: 'full-stack-engineer', title: 'Full-Stack Engineer', slug: 'full-stack-engineer', href: '/services/engineer-on-demand/full-stack-engineer',
        description: 'Full-stack engineers capable of building complete web applications from database to frontend, with strong architecture and API design skills.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
        overview: 'Versatile engineers who own the full delivery lifecycle — from database schema and API architecture to responsive frontend interfaces.',
        capabilities: ['Full application lifecycle development', 'RESTful and GraphQL API design', 'Database schema design and optimization', 'Responsive frontend implementation', 'Authentication and authorization systems', 'Performance optimization and caching strategies'],
        useCases: ['Web application development', 'SaaS product development', 'Enterprise dashboard and admin panels', 'E-commerce platforms', 'Internal tooling and workflows', 'API-first platform development'],
        technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python/Django', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs', 'AWS', 'Docker', 'Redis'],
      },
      {
        id: 'backend-engineer', title: 'Backend Engineer', slug: 'backend-engineer', href: '/services/engineer-on-demand/backend-engineer',
        description: 'Senior backend engineers specializing in microservice architecture, API design, high-performance database optimization, and secure server-side systems.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
        overview: 'Backend architects and software engineers who build robust server-side infrastructure, scalable APIs, and distributed systems.',
        capabilities: ['Microservice & REST/gRPC API architecture', 'Database optimization & schema design', 'Event-driven systems & message queues', 'Security compliance & data encryption'],
        useCases: ['High-throughput API development', 'Database migration & optimization', 'Microservices architectural refactoring', 'Real-time WebSocket & streaming systems'],
        technologies: ['Node.js / NestJS', 'Python / FastAPI', 'Go / Rust', 'PostgreSQL / Redis / MongoDB', 'Kafka / Docker / Kubernetes'],
      },
      {
        id: 'ui-ux', title: 'UI/UX Designer', slug: 'ui-ux', href: '/services/engineer-on-demand/ui-ux',
        description: 'Designers who craft intuitive, research-driven digital experiences — translating complex requirements into elegant, usable interfaces.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
        overview: 'Human-centered design professionals who bridge the gap between complex technical requirements and elegant user experiences.',
        capabilities: ['User research and persona development', 'Wireframing and interactive prototyping', 'Visual design and design systems', 'Usability testing and iteration', 'Information architecture', 'Accessibility-first design'],
        useCases: ['SaaS dashboard design', 'Mobile app UX/UI', 'Design system creation', 'AI product interface design', 'Enterprise software UX', 'Data visualization interfaces'],
        technologies: ['Figma', 'Adobe Creative Suite', 'Framer', 'Principle', 'Design Tokens', 'Storybook', 'React / React Native'],
      },
      {
        id: 'cloud-engineer', title: 'Cloud Engineer', slug: 'cloud-engineer', href: '/services/engineer-on-demand/cloud-engineer',
        description: 'Cloud and DevOps engineers specializing in infrastructure automation, CI/CD pipelines, Kubernetes orchestration, and zero-downtime deployments.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
        overview: 'Infrastructure specialists who design, build, and maintain cloud environments optimized for reliability, scalability, and cost efficiency.',
        capabilities: ['Cloud infrastructure design and architecture', 'CI/CD pipeline automation', 'Container orchestration with Kubernetes', 'Infrastructure as Code (Terraform, Pulumi)', 'Monitoring, logging, and observability', 'Security and compliance in cloud environments'],
        useCases: ['Cloud migration and architecture', 'Kubernetes cluster management', 'CI/CD pipeline design and automation', 'Infrastructure cost optimization', 'Disaster recovery and backup strategies', 'Multi-cloud and hybrid cloud setups'],
        technologies: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Helm', 'Terraform', 'Pulumi', 'GitHub Actions', 'GitLab CI', 'Prometheus', 'Grafana', 'ELK Stack', 'Ansible'],
      },
    ],
  },
  {
    id: 'on-demand-projects',
    slug: 'on-demand-projects',
    title: 'On-Demand Projects & Solutions',
    shortLabel: 'Projects & Solutions',
    description: 'End-to-end technology delivery — from discovery and architecture through production deployment.',
    overview: 'Customized technology solutions designed, built, and deployed by our engineering teams. End-to-end ownership of your technology challenges.',
    capabilities: [
      'AI and machine learning solution development',
      'Full-stack web and mobile application development',
      'Custom CRM and ERP system development',
      'Cloud infrastructure design and deployment',
      'API architecture and integration',
      'Data pipeline and analytics platform engineering',
    ],
    benefits: [
      'Dedicated cross-functional engineering team',
      'Transparent delivery milestones',
      'Production-grade architecture and security',
      'Direct linkage to our case studies',
    ],
    process: [
      'Problem definition and scope alignment',
      'Strategy and architecture design',
      'Build with continuous review',
      'Deploy and scale into production',
    ],
    href: '/services/on-demand-projects',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    icon: <Code className="text-white" size={24} />,
    children: [
      {
        id: 'customized-solutions', title: 'Customized Technology Solutions', slug: 'customized-solutions', href: '/services/on-demand-projects/customized-solutions',
        description: 'Purpose-built technology solutions engineered to solve your specific business challenges — from initial concept through production deployment.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
        overview: 'We take full ownership of your technology requirements. Our project teams combine deep domain expertise with modern engineering practices.',
        capabilities: ['End-to-end solution design and development', 'Custom CRM and ERP implementation', 'AI and automation integration', 'Cloud-native deployment and scaling'],
        useCases: ['Custom business application development', 'Legacy system modernization', 'AI-powered workflow automation', 'Enterprise integration platforms'],
        technologies: ['React / Next.js', 'Python / FastAPI', 'PostgreSQL', 'AWS / Azure', 'Docker / Kubernetes'],
      },
    ],
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
    icon: <Cpu className="text-white" size={24} />,
    children: [
      {
        id: 'crm', title: 'CRM', slug: 'crm', href: '/services/products/crm',
        description: 'Intelligent customer relationship management with automated workflows, lead management, and AI-powered insights.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        overview: 'Our CRM solution goes beyond traditional contact management. Built with AI-native architecture, it automates follow-ups, predicts lead conversion, and provides intelligent insights into your customer relationships.',
        capabilities: ['AI-powered lead scoring and prioritization', 'Automated follow-up workflows and sequences', 'Conversational AI for database queries', 'Pipeline analytics and forecasting', 'Custom workflow automation', 'Integration with existing tools and platforms'],
        useCases: ['Sales team enablement and automation', 'Customer success management', 'Lead lifecycle tracking and nurturing', 'Revenue forecasting and pipeline management'],
        features: ['AI-driven lead scoring', 'Automated email sequences', 'Real-time dashboard analytics', 'Custom field and workflow builder', 'Multi-channel integration (email, phone, chat)', 'Role-based access controls'],
        technologies: ['React / Next.js', 'Node.js / Python', 'PostgreSQL', 'Redis', 'REST / GraphQL APIs'],
      },
      {
        id: 'erp', title: 'ERP', slug: 'erp', href: '/services/products/erp',
        description: 'Enterprise resource planning with intelligent inventory forecasting, data hubs, and workflow automation.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        overview: 'A comprehensive ERP platform engineered for modern enterprises. Integrate inventory management, financial tracking, and operational workflows into a unified system with AI-assisted decision making.',
        capabilities: ['Intelligent inventory forecasting', 'Unified data hub across departments', 'Workflow automation and orchestration', 'Real-time financial dashboards', 'Supply chain optimization', 'Multi-entity and multi-currency support'],
        useCases: ['Manufacturing and operations management', 'Supply chain optimization', 'Financial planning and reporting', 'Cross-departmental workflow orchestration'],
        features: ['AI-powered demand forecasting', 'Real-time inventory tracking', 'Financial reporting dashboards', 'Workflow automation engine', 'Multi-location management', 'API-first architecture for integrations'],
        technologies: ['Python / Django', 'PostgreSQL', 'React', 'REST APIs', 'Docker / Kubernetes'],
      },
      {
        id: 'digital-products', title: 'Digital Products', slug: 'digital-products', href: '/services/products/digital-products',
        description: 'Proprietary software products including AyuGPT and intelligent outreach tools built for specific use cases.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
        overview: 'A suite of purpose-built digital products that leverage AI to solve specific industry challenges. From Ayurvedic health guidance to intelligent email outreach.',
        capabilities: ['Conversational AI platforms', 'Intelligent outreach and engagement tools', 'Market intelligence and research automation', 'Domain-specific AI assistants', 'Email automation with personalization'],
        useCases: ['Healthcare and wellness AI assistants', 'Sales and marketing automation', 'Market research and competitive intelligence', 'Customer engagement automation'],
        features: ['Domain-specific AI training', 'Multi-channel engagement capabilities', 'Personalization engine', 'Analytics and performance tracking', 'API access for integrations'],
        technologies: ['React / Next.js', 'Node.js / Python', 'MongoDB / PostgreSQL', 'AWS / GCP', 'GraphQL'],
      },
      {
        id: 'voice-ai', title: 'Voice AI', slug: 'voice-ai', href: '/services/products/voice-ai',
        description: 'AI-powered voice calling agents for autonomous customer care, outbound lead generation, and voice-based workflows.',
        image: 'https://images.unsplash.com/photo-1531746790098-f17e5bf5d3c1?auto=format&fit=crop&q=80&w=800',
        overview: 'Voice AI products that enable autonomous calling — from inbound customer support to outbound lead qualification. Our voice agents understand context, handle complex conversations, and integrate with your existing systems.',
        capabilities: ['Autonomous inbound customer support', 'Outbound lead qualification and follow-up', 'Voice-based data collection and surveys', 'Appointment scheduling and reminders', 'Multi-language voice support', 'CRM and workflow integration'],
        useCases: ['Customer support automation', 'Lead qualification and outreach', 'Appointment scheduling', 'Customer feedback collection', 'Order status and support inquiries'],
        features: ['Natural conversational flow', 'Real-time transcription and analytics', 'CRM integration (Salesforce, HubSpot, Zoho)', 'Multi-language support', 'Call recording and compliance', 'Live agent handoff capability'],
        technologies: ['Python', 'OpenAI Whisper', 'ElevenLabs', 'Twilio / WebRTC', 'FastAPI'],
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
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    icon: <Briefcase className="text-white" size={24} />,
    children: [
      {
        id: 'ai', title: 'AI Consulting', slug: 'ai-consulting', href: '/services/consulting/ai',
        description: 'Strategic guidance for AI adoption — from readiness assessment through production deployment planning.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        overview: 'We help organizations understand where AI creates genuine value, build a practical adoption roadmap, and avoid the common pitfalls of AI initiatives.',
        capabilities: ['AI readiness and maturity assessment', 'Use case prioritization and ROI modeling', 'Technology stack and vendor evaluation', 'Data strategy and governance planning'],
        useCases: ['AI strategy for enterprise organizations', 'LLM integration planning', 'Data platform strategy', 'Responsible AI governance frameworks'],
        technologies: ['OpenAI / Anthropic / Google AI', 'LangChain', 'Python / R', 'Vector databases', 'MLOps platforms'],
        problem: "Organizations recognize AI's potential but struggle to identify the right use cases, choose appropriate technologies, and execute implementations that deliver real ROI.",
        howWeHelp: [
          'AI readiness assessment and opportunity mapping',
          'Technology stack evaluation and recommendation',
          'Implementation roadmap design',
          'Risk assessment and mitigation strategy',
          'Change management and team enablement',
        ],
        approach: [
          'Discovery: Assess current capabilities, data maturity, and business objectives',
          'Strategy: Map AI opportunities to business outcomes and prioritize use cases',
          'Architecture: Design technical architecture and technology selection',
          'Roadmap: Create phased implementation plan with clear milestones',
          'Governance: Establish monitoring, evaluation, and continuous improvement frameworks',
        ],
        engagementFormat: 'Typically 4-8 week engagement with ongoing advisory support available.',
      },
      {
        id: 'software-product', title: 'Software Product Consulting', slug: 'software-product-consulting', href: '/services/consulting/software-product',
        description: 'Architecture and strategy guidance for building, scaling, and evolving software products.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
        overview: 'Senior engineering perspectives on product architecture, technical debt, platform strategy, and engineering team structure.',
        capabilities: ['Product architecture review', 'Technical debt assessment and planning', 'Engineering team structure and process', 'Technology stack evaluation'],
        useCases: ['Platform architecture redesign', 'Technical due diligence', 'Engineering process improvement', 'Technology migration planning'],
        technologies: ['React / Next.js', 'Node.js / Python', 'Cloud platforms', 'Databases', 'API design'],
        problem: "Founders and product teams often have vision but lack the technical depth to validate feasibility, choose the right architecture, or navigate complex engineering decisions.",
        howWeHelp: [
          'Technical feasibility assessment',
          'Architecture and technology stack design',
          'Engineering process and team structure advisory',
          'Code quality and technical debt assessment',
          'Scalability and performance planning',
        ],
        approach: [
          'Product audit: Review current product, codebase, and architecture',
          'Technical strategy: Define architecture roadmap and technology decisions',
          'Process design: Establish engineering practices and team workflows',
          'Execution support: Hands-on guidance during implementation',
          'Continuous review: Regular architecture and quality checkpoints',
        ],
        engagementFormat: 'Flexible engagement — from one-time audits to ongoing fractional CTO relationships.',
      },
      {
        id: 'mvp-production', title: 'MVP to Production Consulting', slug: 'mvp-to-production', href: '/services/consulting/mvp-production',
        description: 'Bridging the gap between prototype and production-grade software with architecture, security, and scalability guidance.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
        overview: 'Bridge the gap between proof-of-concept and production. We help you refactor, rearchitect, and scale your MVP into a system that handles real users and real data.',
        capabilities: ['MVP architecture audit and redesign', 'Production readiness assessment', 'Security and compliance implementation', 'Performance optimization and scaling strategy', 'CI/CD and DevOps pipeline design'],
        useCases: ['MVP to production transition', 'Scale preparation for growth-stage products', 'Technical debt remediation', 'Production readiness assessment'],
        technologies: ['Cloud infrastructure', 'Container orchestration', 'CI/CD automation', 'Monitoring and observability', 'Database scaling'],
        problem: "Many products reach a prototype or MVP stage but struggle to scale to production — facing challenges with architecture, security, performance, and reliability.",
        howWeHelp: [
          'MVP architecture audit and redesign',
          'Production readiness assessment',
          'Security and compliance implementation',
          'Performance optimization and scaling strategy',
          'CI/CD and DevOps pipeline design',
        ],
        approach: [
          'Assessment: Comprehensive review of current architecture and technical debt',
          'Architecture: Redesign for production scale, security, and maintainability',
          'Implementation: Guided migration with minimal disruption',
          'Automation: CI/CD, testing, and monitoring infrastructure',
          'Handoff: Documentation, knowledge transfer, and ongoing support options',
        ],
        engagementFormat: 'Typically 6-12 week engagement with flexible extension options.',
      },
      {
        id: 'marketing', title: 'Marketing Consulting', slug: 'marketing-consulting', href: '/services/consulting/marketing',
        description: 'Technology-driven marketing strategy focusing on AI-powered outreach, growth automation, and digital presence.',
        image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f3ff?auto=format&fit=crop&q=80&w=800',
        overview: 'Strategic marketing guidance that leverages technology for measurable growth — combining digital marketing, marketing technology, and data-driven optimization.',
        capabilities: ['Digital marketing strategy and execution', 'Marketing technology stack design', 'Analytics and attribution modeling', 'Growth strategy and experimentation'],
        useCases: ['Go-to-market strategy', 'Marketing automation implementation', 'Analytics infrastructure', 'Brand positioning and messaging'],
        technologies: ['Google Analytics / GA4', 'Marketing automation platforms', 'SEO / SEM tools', 'CRM integrations', 'Data visualization'],
        problem: "Marketing teams often lack the technical capability to implement AI-driven campaigns, automate outreach, and leverage data for growth — missing opportunities in an increasingly digital landscape.",
        howWeHelp: [
          'AI-powered marketing strategy design',
          'Outreach automation implementation',
          'Growth analytics and attribution setup',
          'Content automation and personalization',
          'Digital presence optimization',
        ],
        approach: [
          'Audit: Review current marketing stack, channels, and performance',
          'Strategy: Design AI-enhanced marketing strategy aligned with business goals',
          'Implementation: Deploy automation tools and integration',
          'Optimization: Data-driven campaign optimization and A/B testing',
          'Scale: Expand successful campaigns and build marketing infrastructure',
        ],
        engagementFormat: 'Flexible engagement — strategy sprints or ongoing growth partnership.',
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
    icon: <MessageSquare className="text-white" size={24} />,
    children: [
      {
        id: 'trainer-on-demand', title: 'Trainer on Demand', slug: 'trainer-on-demand', href: '/services/training/trainer-on-demand',
        description: 'Expert-led training programs delivered by practitioners with real-world experience in AI, software engineering, and cloud technologies.',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
        overview: 'Access specialized trainers who bring real-world engineering experience into your organization. Our trainers are practitioners — engineers, architects, and technologists who have built and deployed the systems they teach.',
        capabilities: ['Custom curriculum development', 'Hands-on workshop delivery', 'Role-specific training paths', 'Progress assessment and certification'],
        useCases: ['Team upskilling programs', 'Technology onboarding', 'Certification preparation', 'Executive technology briefings'],
        technologies: ['Custom to client stack', 'Hands-on labs', 'Assessment frameworks', 'Learning management tools'],
        audience: [
          'Engineering teams seeking upskilling',
          'Technical leadership development',
          'New team onboarding programs',
          'Cross-team technology enablement',
          'Executive technology literacy programs',
        ],
        areas: [
          'Artificial Intelligence and Machine Learning',
          'Large Language Models and Prompt Engineering',
          'Full-Stack Web Development',
          'Cloud Architecture and DevOps',
          'Data Engineering and Analytics',
          'Cybersecurity fundamentals',
          'Agile and technical leadership',
        ],
        engagementOptions: [
          'Intensive bootcamp-style programs (1-4 weeks)',
          'Weekly ongoing mentorship sessions',
          'Workshop-style half or full-day sessions',
          'Self-paced with scheduled instructor Q&A',
          'Custom curriculum aligned to your tech stack',
        ],
      },
      {
        id: 'education-consulting', title: 'Education Consulting', slug: 'education-consulting', href: '/services/training/education-consulting',
        description: 'Strategic consulting for educational institutions and corporate learning programs — curriculum design, technology integration, and learning outcomes.',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?auto=format&fit=crop&q=80&w=800',
        overview: 'We help educational institutions and corporate learning organizations design, implement, and evaluate technology-forward education programs.',
        capabilities: ['Curriculum design and development', 'Learning path architecture', 'Training program evaluation', 'Technology education strategy'],
        useCases: ['Internal engineering academy setup', 'Technology curriculum design', 'Training program assessment', 'Workforce upskilling strategy'],
        technologies: ['LMS platforms', 'Curriculum frameworks', 'Assessment tools', 'Learning analytics'],
        audience: [
          'Universities and engineering colleges',
          'Corporate learning and development teams',
          'EdTech startups building learning platforms',
          'Vocational and technical training institutes',
          'Professional certification programs',
        ],
        areas: [
          'Curriculum design for AI and software engineering programs',
          'Learning technology stack evaluation and selection',
          'LMS implementation and integration',
          'Assessment and certification framework design',
          'Faculty training and enablement',
          'Industry-academia partnership programs',
        ],
        engagementOptions: [
          'Curriculum design and review',
          'Technology platform selection advisory',
          'Program implementation support',
          'Faculty training workshops',
          'Ongoing program evaluation and improvement',
        ],
      },
    ],
  },
];

/* ─── Helpers ─────────────────────────────────────────────────── */
export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find(c => c.id === slug || c.slug === slug);
}

export function getChildBySlug(categorySlug: string, childSlug: string): ServiceChild | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  return category.children.find(ch => ch.slug === childSlug || ch.id === childSlug);
}

export function findServiceByHref(href: string): { category: ServiceCategory; child?: ServiceChild } | undefined {
  for (const cat of serviceCategories) {
    if (cat.href === href) return { category: cat };
    const child = cat.children.find(c => c.href === href);
    if (child) return { category: cat, child };
  }
  return undefined;
}
