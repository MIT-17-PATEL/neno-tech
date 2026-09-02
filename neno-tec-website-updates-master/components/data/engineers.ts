export interface EngineerType {
  shortTitle: string;
  description: string;
  slug: string;
}

export interface EngineerOnDemand {
  title: string;
  subtitle: string;
  accentWord: string;
  benefits: string[];
  process: string[];
}

export const engineerTypes: EngineerType[] = [
  {
    shortTitle: 'FDA Engineer',
    description:
      'Specialized in regulated software development for medical devices, ensuring compliance with FDA guidelines and international standards.',
    slug: 'fda-engineer',
  },
  {
    shortTitle: 'AI Engineer',
    description:
      'Expert in machine learning, NLP, computer vision, and building production-ready AI systems that solve real business problems.',
    slug: 'ai-engineer',
  },
  {
    shortTitle: 'Full-Stack Engineer',
    description:
      'Proficient across front-end and back-end technologies, capable of architecting and delivering complete web and mobile applications.',
    slug: 'full-stack-engineer',
  },
  {
    shortTitle: 'UI/UX Designer',
    description:
      'Crafting intuitive, user-centered designs that balance aesthetics with functionality, backed by research and testing.',
    slug: 'ui-ux-designer',
  },
  {
    shortTitle: 'Cloud Engineer',
    description:
      'Designing and managing scalable cloud infrastructure on AWS, Azure, and GCP with focus on security, cost, and performance.',
    slug: 'cloud-engineer',
  },
];

export const engineerOnDemandData: EngineerOnDemand = {
  title: 'Pre-Vetted Talent,',
  subtitle:
    'Access senior-level engineers across specialized domains — ready to integrate with your team in days, not months.',
  accentWord: 'On Demand.',
  benefits: [
    'Pre-vetted, senior-level engineers with proven track records',
    'Rapid onboarding — integrate with your team within 48–72 hours',
    'Flexible engagement: part-time, full-time, or project-based',
    'Specialized expertise across AI, Cloud, FDA, Full-Stack, and UI/UX',
    'Seamless integration with your existing tools and workflows',
    'Transparent pricing with no hidden fees or long-term lock-ins',
  ],
  process: [
    'Submit your requirements through our brief form — outline your project needs, tech stack, and timeline.',
    'We match you with 3–5 pre-vetted engineers based on skills, availability, and domain expertise.',
    'Review profiles, conduct interviews, and select your ideal engineer within 48 hours.',
    'Onboard your chosen engineer with our streamlined integration process and dedicated support.',
  ],
};

export interface EngineerDetail {
  shortTitle: string;
  title: string;
  overview: string;
  capabilities: string[];
  useCases: string[];
  engagementOptions: string[];
  technologies: string[];
}

export const getEngineerBySlug = (slug: string): EngineerDetail | undefined => {
  const engineers: Record<string, EngineerDetail> = {
    'fda-engineer': {
      shortTitle: 'FDA Engineer',
      title: 'FDA-Regulated Software Engineer',
      overview:
        'Specialized engineers who understand the intersection of software development and regulatory compliance. We help you build, validate, and maintain software for FDA-regulated products.',
      capabilities: [
        'Software development per FDA 21 CFR Part 11 and IEC 62304 standards',
        'Design controls and verification/validation documentation',
        'Risk management integration throughout the SDLC',
        'Audit trail implementation and data integrity assurance',
        'Legacy system modernization while maintaining compliance',
        'GxP system validation and periodic review support',
      ],
      useCases: [
        'SaMD (Software as a Medical Device) development',
        'Medical device embedded software',
        'Electronic Health Record (EHR) integrations',
        'Clinical trial software systems',
        'Pharmaceutical manufacturing systems',
      ],
      engagementOptions: [
        'Full-Time Dedicated',
        'Part-Time Engagement',
        'Project-Based',
        'Staff Augmentation',
      ],
      technologies: [
        'C#/.NET',
        'Java',
        'Python',
        'C++',
        'React/Angular',
        'PostgreSQL',
        'Azure/AWS',
        'GxP Tools',
        'JIRA',
        'Enterprise Architect',
      ],
    },
    'ai-engineer': {
      shortTitle: 'AI Engineer',
      title: 'AI & Machine Learning Engineer',
      overview:
        'Engineers who design, build, and deploy production-grade AI systems — from NLP pipelines to computer vision models and LLM-powered applications.',
      capabilities: [
        'Natural Language Processing and text analytics pipelines',
        'Large Language Model (LLM) integration and fine-tuning',
        'Computer vision and image recognition systems',
        'Recommendation engines and personalization algorithms',
        'MLOps: model deployment, monitoring, and retraining pipelines',
        'AI solution architecture and feasibility assessment',
      ],
      useCases: [
        'Conversational AI and chatbots',
        'Document intelligence and OCR systems',
        'Predictive analytics dashboards',
        'Generative AI product features',
        'Anomaly detection in production systems',
      ],
      engagementOptions: [
        'Full-Time Dedicated',
        'Part-Time Engagement',
        'Project-Based',
        'Consulting & Strategy',
      ],
      technologies: [
        'Python',
        'TensorFlow/PyTorch',
        'LangChain',
        'OpenAI API',
        'Hugging Face',
        'scikit-learn',
        'PostgreSQL',
        'FastAPI',
        'Docker/Kubernetes',
        'Azure ML/AWS SageMaker',
      ],
    },
    'full-stack-engineer': {
      shortTitle: 'Full-Stack Engineer',
      title: 'Full-Stack Software Engineer',
      overview:
        'Versatile engineers capable of building complete applications from database to user interface — delivering end-to-end solutions with modern tooling.',
      capabilities: [
        'Front-end development with React, Next.js, and modern CSS frameworks',
        'Back-end API design with Node.js, Python, or Go',
        'Database design and optimization (SQL and NoSQL)',
        'Authentication, authorization, and security best practices',
        'CI/CD pipeline setup and DevOps fundamentals',
        'Performance optimization and scalable architecture design',
      ],
      useCases: [
        'Web application development',
        'Mobile app backends and APIs',
        'E-commerce platforms',
        'SaaS product development',
        'Internal tools and dashboards',
      ],
      engagementOptions: [
        'Full-Time Dedicated',
        'Part-Time Engagement',
        'Project-Based',
        'Staff Augmentation',
      ],
      technologies: [
        'React/Next.js',
        'Node.js',
        'TypeScript',
        'Python/Django',
        'PostgreSQL',
        'MongoDB',
        'GraphQL',
        'Docker',
        'AWS/Vercel',
        'Tailwind CSS',
      ],
    },
    'ui-ux-designer': {
      shortTitle: 'UI/UX Designer',
      title: 'UI/UX Design Engineer',
      overview:
        'Designers who blend research-driven UX strategy with pixel-perfect UI execution — creating experiences that users love and businesses rely on.',
      capabilities: [
        'User research, personas, and journey mapping',
        'Wireframing, prototyping, and interactive mockups',
        'Design system creation and maintenance',
        'Accessibility (WCAG) compliance and inclusive design',
        'Usability testing and iteration based on feedback',
        'Cross-platform design consistency (web, mobile, desktop)',
      ],
      useCases: [
        'SaaS product design and redesign',
        'Mobile app UX/UI',
        'Design system creation',
        'Enterprise dashboard design',
        'Customer-facing portal design',
      ],
      engagementOptions: [
        'Full-Time Dedicated',
        'Part-Time Engagement',
        'Project-Based',
        'Design Audit & Strategy',
      ],
      technologies: [
        'Figma',
        'Adobe XD',
        'Framer',
        'Principle',
        'Miro',
        'Notion',
        'Webflow',
        'Storybook',
        'Zeroheight',
      ],
    },
    'cloud-engineer': {
      shortTitle: 'Cloud Engineer',
      title: 'Cloud Infrastructure Engineer',
      overview:
        'Engineers who design, deploy, and manage cloud infrastructure — ensuring your applications are secure, scalable, and cost-efficient across major cloud platforms.',
      capabilities: [
        'Multi-cloud architecture design (AWS, Azure, GCP)',
        'Infrastructure as Code (Terraform, CloudFormation, Bicep)',
        'Container orchestration with Kubernetes and Docker',
        'CI/CD pipeline design and implementation',
        'Security hardening and compliance (SOC 2, ISO 27001)',
        'Cost optimization and FinOps practices',
      ],
      useCases: [
        'Cloud migration and modernization',
        'Microservices architecture design',
        'Disaster recovery and high availability setup',
        'Serverless application development',
        'Hybrid cloud infrastructure management',
      ],
      engagementOptions: [
        'Full-Time Dedicated',
        'Part-Time Engagement',
        'Project-Based',
        'Ongoing Managed Services',
      ],
      technologies: [
        'AWS',
        'Azure',
        'GCP',
        'Kubernetes',
        'Docker',
        'Terraform',
        'ArgoCD',
        'Prometheus/Grafana',
        'Python/Bash',
      ],
    },
  };

  return engineers[slug];
};
