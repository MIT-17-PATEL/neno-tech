export interface ConsultingService {
  title: string;
  description: string;
  slug: string;
  href: string;
  problem: string;
  howWeHelp: string[];
  engagementFormat: string;
  approach: string[];
}

export interface ConsultingData {
  label: string;
  title: string;
  subtitle: string;
  accentWord: string;
}

export const consultingData: ConsultingData = {
  label: 'Consulting',
  title: 'Expert Guidance for',
  subtitle:
    'Strategic consulting services to help you make the right technology decisions and accelerate your digital transformation.',
  accentWord: 'Every Stage.',
};

export const consultingServices: ConsultingService[] = [
  {
    title: 'AI Consulting',
    description:
      'Strategic guidance on AI adoption, from feasibility assessment to implementation roadmaps that deliver measurable business value.',
    slug: 'ai-consulting',
    href: '/services/consulting/ai-consulting',
    problem:
      'Organizations struggle to identify where AI can create genuine value, navigate the complexity of available tools, and build internal capability to sustain AI initiatives.',
    howWeHelp: [
      'Assess AI readiness and identify high-impact use cases aligned with business objectives',
      'Design AI architecture and technology stack recommendations',
      'Build proof-of-concept and MVP to validate approaches before full investment',
      'Develop AI governance frameworks and responsible AI practices',
      'Train internal teams on AI tools, workflows, and best practices',
    ],
    engagementFormat:
      'Typically 4–12 weeks, with options for ongoing advisory and implementation support.',
    approach: [
      'Discovery workshop to understand business context and objectives',
      'AI opportunity mapping and prioritization',
      'Technology landscape assessment and recommendations',
      'Proof-of-concept development and validation',
      'Implementation roadmap and team enablement',
    ],
  },
  {
    title: 'Software Product Consulting',
    description:
      'End-to-end product strategy and technical consulting to help you build, scale, and evolve your software products successfully.',
    slug: 'software-product-consulting',
    href: '/services/consulting/software-product-consulting',
    problem:
      'Product teams face challenges in defining the right features, choosing the right architecture, and balancing speed with quality — leading to technical debt and missed market opportunities.',
    howWeHelp: [
      'Product strategy and roadmap development aligned with market needs',
      'Technical architecture review and modernization recommendations',
      'Engineering process optimization (Agile, CI/CD, code quality)',
      'Technology stack assessment and migration planning',
      'Team structure and capability building guidance',
    ],
    engagementFormat:
      'Typically 6–16 weeks, with flexible engagement models from assessment to ongoing advisory.',
    approach: [
      'Product and technical audit across architecture, process, and team',
      'Stakeholder interviews and competitive analysis',
      'Prioritized recommendation framework',
      'Implementation support for high-priority initiatives',
      'Knowledge transfer and team enablement sessions',
    ],
  },
  {
    title: 'MVP to Production Consulting',
    description:
      'Bridge the gap between a working MVP and a production-ready, scalable product — from architecture review to launch preparation.',
    slug: 'mvp-to-production',
    href: '/services/consulting/mvp-to-production',
    problem:
      'Many MVPs are built quickly without production considerations — leading to performance issues, security vulnerabilities, and massive refactoring costs when scaling.',
    howWeHelp: [
      'Comprehensive MVP audit covering architecture, code quality, and scalability',
      'Security assessment and hardening recommendations',
      'Performance optimization and load testing strategy',
      'Production deployment architecture and CI/CD pipeline design',
      'Monitoring, observability, and incident response setup',
    ],
    engagementFormat:
      'Typically 4–8 weeks for audit and roadmap, with optional implementation support.',
    approach: [
      'Technical audit of existing MVP codebase and infrastructure',
      'Security and performance gap analysis',
      'Prioritized refactoring and enhancement roadmap',
      'Production readiness checklist and action plan',
      'Hands-on support for critical improvements',
    ],
  },
  {
    title: 'Marketing Consulting',
    description:
      'Data-driven marketing strategy and execution to help technology companies reach the right audience and accelerate growth.',
    slug: 'marketing-consulting',
    href: '/services/consulting/marketing-consulting',
    problem:
      'Technology companies often have great products but struggle with positioning, messaging, and reaching their target audience effectively in crowded markets.',
    howWeHelp: [
      'Brand positioning and messaging development for technical audiences',
      'Content strategy and SEO optimization for B2B tech markets',
      'Go-to-market strategy for new product launches',
      'Marketing automation and lead generation system design',
      'Analytics setup and conversion optimization',
    ],
    engagementFormat:
      'Typically 4–12 weeks, with options for ongoing marketing support and execution.',
    approach: [
      'Marketing audit and competitive positioning analysis',
      'Target audience and buyer persona development',
      'Messaging and content strategy framework',
      'Channel strategy and campaign planning',
      'Implementation support and performance tracking',
    ],
  },
];
