import { TrainingInfo } from './services';

export const trainingPrograms: TrainingInfo[] = [
  {
    slug: 'trainer-on-demand',
    title: 'Trainer on Demand',
    description: 'Expert-led training programs delivered by practitioners with real-world experience in AI, software engineering, and cloud technologies.',
    overview: 'Access specialized trainers who bring real-world engineering experience into your organization. Our trainers are practitioners — engineers, architects, and technologists who have built and deployed the systems they teach.',
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
    href: '/services/training/trainer-on-demand',
  },
  {
    slug: 'education-consulting',
    title: 'Education Consulting',
    description: 'Strategic consulting for educational institutions and corporate learning programs — curriculum design, technology integration, and learning outcomes.',
    overview: 'We help educational institutions and corporate learning organizations design, implement, and evaluate technology-forward education programs. From curriculum design to LMS integration, we ensure learning outcomes are measurable and relevant.',
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
    href: '/services/training/education-consulting',
  },
];
