export interface Product {
  title: string;
  description: string;
  slug: string;
  href: string;
  overview: string;
  capabilities: string[];
  useCases: string[];
  features: string[];
}

export interface ProductsData {
  label: string;
  title: string;
  subtitle: string;
  accentWord: string;
}

export const productsData: ProductsData = {
  label: 'Products',
  title: 'Proprietary Software',
  subtitle: 'Purpose-built technology products designed to solve industry-specific challenges with measurable impact.',
  accentWord: 'Products.',
};

export const products: Product[] = [
  {
    title: 'CRM',
    description:
      'A full-featured CRM platform tailored for customer relationship management, lead tracking, and sales pipeline automation.',
    slug: 'crm',
    href: '/services/products/crm',
    overview:
      'Our CRM platform helps businesses manage customer relationships, automate sales workflows, and gain actionable insights through powerful analytics and reporting.',
    capabilities: [
      'Lead and contact management with intelligent scoring',
      'Sales pipeline visualization and forecasting',
      'Automated email campaigns and follow-up sequences',
      'Customer support ticketing and resolution tracking',
      'Custom dashboards and real-time reporting',
      'Third-party integrations (email, calendar, ERP)',
    ],
    useCases: [
      'Sales team productivity and pipeline management',
      'Customer retention and loyalty programs',
      'Marketing automation and lead nurturing',
      'Customer support operations at scale',
    ],
    features: [
      'Drag-and-drop pipeline builder',
      'AI-powered lead scoring',
      'Email integration with tracking',
      'Custom workflow automation',
      'Mobile-responsive design',
      'Role-based access control',
      'Advanced analytics and reporting',
      'API-first architecture',
    ],
  },
  {
    title: 'ERP',
    description:
      'Enterprise Resource Planning solution unifying finance, inventory, HR, and operations into one integrated platform.',
    slug: 'erp',
    href: '/services/products/erp',
    overview:
      'Our ERP solution streamlines core business operations by integrating finance, supply chain, human resources, and manufacturing into a single, cohesive system.',
    capabilities: [
      'Financial management with automated accounting',
      'Inventory and supply chain optimization',
      'Human resources and payroll management',
      'Manufacturing and production planning',
      'Business intelligence and cross-module reporting',
      'Multi-entity and multi-currency support',
    ],
    useCases: [
      'Manufacturing operations optimization',
      'Financial consolidation across entities',
      'Inventory management and demand forecasting',
      'HR and payroll process automation',
    ],
    features: [
      'Real-time financial dashboards',
      'Automated inventory tracking',
      'Multi-language and multi-currency',
      'Role-based security and audit trails',
      'Custom report builder',
      'API integrations with third-party tools',
      'Cloud-native architecture',
      'Mobile access for field operations',
    ],
  },
  {
    title: 'Digital Products',
    description:
      'Custom digital products including web applications, mobile apps, and platforms built with modern technology stacks.',
    slug: 'digital-products',
    href: '/services/products/digital-products',
    overview:
      'We design and build custom digital products that solve real business problems — from customer-facing platforms to internal tools that transform how teams work.',
    capabilities: [
      'Custom web application development',
      'Cross-platform mobile app development',
      'Progressive Web Apps (PWA)',
      'API design and microservices architecture',
      'Third-party system integrations',
      'Performance optimization and scalability engineering',
    ],
    useCases: [
      'Customer-facing web platforms',
      'Internal business tools and dashboards',
      'Marketplace and e-commerce platforms',
      'SaaS product development',
    ],
    features: [
      'Modern tech stack (React, Node.js, etc.)',
      'Responsive and accessible design',
      'CI/CD with automated testing',
      'Cloud-native deployment',
      'Real-time data synchronization',
      'Analytics and monitoring built-in',
      'API-first architecture',
      'Security by design',
    ],
  },
  {
    title: 'Voice AI',
    description:
      'Intelligent voice AI solutions for automated customer support, call analytics, and conversational experiences.',
    slug: 'voice-ai',
    href: '/services/products/voice-ai',
    overview:
      'Our Voice AI platform enables businesses to automate voice interactions, gain insights from call data, and deliver exceptional conversational experiences at scale.',
    capabilities: [
      'Natural language understanding for voice interactions',
      'Automated inbound and outbound calling workflows',
      'Real-time call transcription and sentiment analysis',
      'Multi-language voice support',
      'CRM and helpdesk integration for context-aware responses',
      'Analytics dashboard for call performance metrics',
    ],
    useCases: [
      'Automated customer support and IVR replacement',
      'Appointment scheduling and reminders',
      'Lead qualification and outbound campaigns',
      'Voice-enabled internal tools',
    ],
    features: [
      'Natural language processing engine',
      'Real-time transcription',
      'Sentiment and intent detection',
      'Multi-language support (10+)',
      'CRM and ERP integrations',
      'Analytics and reporting dashboard',
      'Custom voice personas',
      'Compliance and data privacy controls',
    ],
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};
