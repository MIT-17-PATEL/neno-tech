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
  icon: React.ReactNode;
}

export const engineerTypes: EngineerType[] = [
  {
    slug: 'fda-engineer',
    title: 'FDA-Regulated Systems Engineer',
    shortTitle: 'FDA Engineer',
    description: 'Engineers with experience building software for FDA-regulated environments, understanding validation requirements, and designing compliant technical solutions.',
    overview: 'Software engineers with domain knowledge relevant to FDA-regulated environments — including medical devices, digital health, and life sciences software. They understand the intersection of software engineering, regulatory considerations, and production-grade system design.',
    capabilities: [
      'Software development for regulated environments',
      'Understanding of validation and compliance considerations',
      'System architecture for medical/health tech products',
      'Data integrity and audit trail implementation',
      'Quality management system integration',
      'Risk management in software design',
    ],
    useCases: [
      'Medical device software development',
      'Digital health platform engineering',
      'Clinical data management systems',
      'Regulatory documentation tooling',
      'Quality management software',
    ],
    engagementOptions: [
      'Full-time dedicated resource',
      'Part-time advisory role',
      'Project-based engagement',
      'Team augmentation',
    ],
    technologies: [
      'Python', 'Java', 'C#/.NET', 'Node.js',
      'PostgreSQL', 'MongoDB',
      'AWS/GCP/Azure', 'Docker', 'Kubernetes',
      'React', 'Vue.js', 'Angular',
    ],
    icon: null,
  },
  {
    slug: 'ai-engineer',
    title: 'AI Engineer',
    shortTitle: 'AI Engineer',
    description: 'Machine learning and AI engineers specializing in LLMs, NLP, computer vision, and production AI systems at enterprise scale.',
    overview: 'Deep technical expertise in artificial intelligence and machine learning. These engineers architect, train, and deploy intelligent systems — from large language models to computer vision pipelines — designed for production reliability.',
    capabilities: [
      'Large language model development and fine-tuning',
      'Natural language processing pipelines',
      'Computer vision and multimodal AI',
      'MLOps and model deployment infrastructure',
      'Data pipeline architecture and feature engineering',
      'AI agent and autonomous workflow design',
    ],
    useCases: [
      'Custom LLM development and fine-tuning',
      'Intelligent document processing systems',
      'Conversational AI and chatbots',
      'Predictive analytics platforms',
      'AI-powered automation workflows',
      'Computer vision applications',
    ],
    engagementOptions: [
      'Full-time dedicated resource',
      'Part-time advisory role',
      'Project-based engagement',
      'Team augmentation',
    ],
    technologies: [
      'Python', 'PyTorch', 'TensorFlow',
      'Hugging Face', 'LangChain', 'LlamaIndex',
      'OpenAI API', 'AWS SageMaker', 'Vertex AI',
      'Docker', 'Kubernetes', 'FastAPI',
    ],
    icon: null,
  },
  {
    slug: 'full-stack-engineer',
    title: 'Full-Stack Engineer',
    shortTitle: 'Full-Stack Engineer',
    description: 'Full-stack engineers capable of building complete web applications from database to frontend, with strong architecture and API design skills.',
    overview: 'Versatile engineers who own the full delivery lifecycle — from database schema and API architecture to responsive frontend interfaces. They build scalable, maintainable applications with clean architecture patterns.',
    capabilities: [
      'Full application lifecycle development',
      'RESTful and GraphQL API design',
      'Database schema design and optimization',
      'Responsive frontend implementation',
      'Authentication and authorization systems',
      'Performance optimization and caching strategies',
    ],
    useCases: [
      'Web application development',
      'SaaS product development',
      'Enterprise dashboard and admin panels',
      'E-commerce platforms',
      'Internal tooling and workflows',
      'API-first platform development',
    ],
    engagementOptions: [
      'Full-time dedicated resource',
      'Part-time advisory role',
      'Project-based engagement',
      'Team augmentation',
    ],
    technologies: [
      'React', 'Next.js', 'TypeScript', 'Node.js',
      'Python/Django', 'PostgreSQL', 'MongoDB',
      'GraphQL', 'REST APIs',
      'AWS', 'Docker', 'Redis',
    ],
    icon: null,
  },
  {
    slug: 'ui-ux',
    title: 'UI/UX Designer',
    shortTitle: 'UI/UX Designer',
    description: 'Designers who craft intuitive, research-driven digital experiences — translating complex requirements into elegant, usable interfaces.',
    overview: 'Human-centered design professionals who bridge the gap between complex technical requirements and elegant user experiences. They conduct research, create prototypes, and design interfaces that feel intuitive and look refined.',
    capabilities: [
      'User research and persona development',
      'Wireframing and interactive prototyping',
      'Visual design and design systems',
      'Usability testing and iteration',
      'Information architecture',
      'Accessibility-first design',
    ],
    useCases: [
      'SaaS dashboard design',
      'Mobile app UX/UI',
      'Design system creation',
      'AI product interface design',
      'Enterprise software UX',
      'Data visualization interfaces',
    ],
    engagementOptions: [
      'Full-time dedicated resource',
      'Part-time advisory role',
      'Project-based engagement',
      'Design sprint workshops',
    ],
    technologies: [
      'Figma', 'Adobe Creative Suite',
      'Framer', 'Principle',
      'Design Tokens', 'Storybook',
      'React / React Native',
    ],
    icon: null,
  },
  {
    slug: 'cloud-engineer',
    title: 'Cloud Engineer',
    shortTitle: 'Cloud Engineer',
    description: 'Cloud and DevOps engineers specializing in infrastructure automation, CI/CD pipelines, Kubernetes orchestration, and zero-downtime deployments.',
    overview: 'Infrastructure specialists who design, build, and maintain cloud environments optimized for reliability, scalability, and cost efficiency. They automate deployment pipelines and manage production infrastructure at scale.',
    capabilities: [
      'Cloud infrastructure design and architecture',
      'CI/CD pipeline automation',
      'Container orchestration with Kubernetes',
      'Infrastructure as Code (Terraform, Pulumi)',
      'Monitoring, logging, and observability',
      'Security and compliance in cloud environments',
    ],
    useCases: [
      'Cloud migration and architecture',
      'Kubernetes cluster management',
      'CI/CD pipeline design and automation',
      'Infrastructure cost optimization',
      'Disaster recovery and backup strategies',
      'Multi-cloud and hybrid cloud setups',
    ],
    engagementOptions: [
      'Full-time dedicated resource',
      'Part-time advisory role',
      'Project-based engagement',
      'Team augmentation',
      'Ongoing managed services',
    ],
    technologies: [
      'AWS', 'GCP', 'Azure',
      'Docker', 'Kubernetes', 'Helm',
      'Terraform', 'Pulumi',
      'GitHub Actions', 'GitLab CI',
      'Prometheus', 'Grafana', 'ELK Stack',
      'Terraform', 'Ansible',
    ],
    icon: null,
  },
];

export function getEngineerBySlug(slug: string): EngineerType | undefined {
  return engineerTypes.find((e) => e.slug === slug);
}
