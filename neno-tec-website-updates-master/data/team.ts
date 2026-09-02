export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Tirth Patel',
    role: 'Co-founder',
    bio: 'Strategist and visionary leading the business development and strategic partnership growth at Nenotechnology.',
    image: '/image.png',
    linkedin: 'https://www.linkedin.com/in/tirth-patel-nenotechnology/',
  },
];

export function getLeadershipMembers(): TeamMember[] {
  return teamMembers;
}
