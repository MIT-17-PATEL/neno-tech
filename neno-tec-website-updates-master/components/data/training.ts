export interface TrainingProgram {
  title: string;
  description: string;
  slug: string;
  href: string;
  overview: string;
  audience: string[];
  areas: string[];
  engagementOptions: string[];
}

export interface TrainingData {
  label: string;
  title: string;
  subtitle: string;
  accentWord: string;
}

export const trainingData: TrainingData = {
  label: 'Training',
  title: 'Learn From the',
  subtitle:
    'Industry-expert training programs designed to upskill your team in AI, software engineering, and modern technology practices.',
  accentWord: 'Best.',
};

export const trainingPrograms: TrainingProgram[] = [
  {
    title: 'Trainer on Demand',
    description:
      'Access experienced trainers and mentors on-demand to upskill your team in AI, software engineering, and emerging technologies.',
    slug: 'trainer-on-demand',
    href: '/services/training/trainer-on-demand',
    overview:
      'Our Trainer on Demand service provides your team with direct access to seasoned trainers and mentors who can guide them through structured learning paths, code reviews, and real-world project support.',
    audience: [
      'Engineering teams looking to upskill in AI/ML or modern frameworks',
      'Teams transitioning to new technologies or methodologies',
      'Developers seeking 1-on-1 mentorship from senior practitioners',
      'Organizations building internal technical capabilities',
    ],
    areas: [
      'AI Engineering & Prompt Engineering',
      'Full-Stack Development (React, Next.js, Node.js)',
      'Cloud Architecture & DevOps',
      'Software Architecture & Design Patterns',
      'Code Quality, Testing & Best Practices',
      'Engineering Leadership & Code Review',
    ],
    engagementOptions: [
      'Dedicated Full-Time Mentor',
      'Part-Time Engagement',
      'Project-Based Mentorship',
      'Team-Wide Program',
    ],
  },
  {
    title: 'Education Consulting',
    description:
      'Strategic consulting for educational institutions and training organizations looking to design or modernize their technology curricula.',
    slug: 'education-consulting',
    href: '/services/training/education-consulting',
    overview:
      'We partner with educational institutions, training organizations, and corporate L&D teams to design modern curricula, train instructors, and build effective learning programs that prepare students for industry demands.',
    audience: [
      'Universities and colleges updating technical curricula',
      'Bootcamps and training institutes',
      'Corporate Learning & Development teams',
      'Government workforce development programs',
    ],
    areas: [
      'Curriculum Design & Modernization',
      'AI & Data Science Programs',
      'Software Engineering Tracks',
      'Instructor Training & Enablement',
      'Assessment Design & Outcome Measurement',
      'Industry Partnership Programs',
    ],
    engagementOptions: [
      'Curriculum Review & Redesign',
      'Train-the-Trainer Programs',
      'Outcome Assessment Setup',
      'Strategic Partnership',
    ],
  },
];
