export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Het Suthar',
    role: 'Founder & CEO',
    bio: 'Visionary technology leader with 10+ years of experience in AI, software engineering, and building high-impact teams. Passionate about using technology to solve meaningful problems.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Priya Sharma',
    role: 'Chief Technology Officer',
    bio: 'Technology strategist specializing in AI/ML, cloud architecture, and scalable systems. Leads engineering excellence and innovation across all client engagements.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Rahul Mehta',
    role: 'VP of Engineering',
    bio: 'Engineering leader focused on building high-performing teams, modern DevOps practices, and delivering complex projects on time and within scope.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Anjali Patel',
    role: 'Head of AI Research',
    bio: 'AI researcher and practitioner with deep expertise in NLP, computer vision, and applied ML. Drives our AI thought leadership and client engagements.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Vikram Singh',
    role: 'Head of Product & Design',
    bio: 'Product strategist and design leader with a track record of launching successful B2B SaaS products. Champions user-centered design across the organization.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Sneha Desai',
    role: 'Director of Client Success',
    bio: 'Client success leader ensuring every engagement delivers measurable outcomes. Trusted advisor to our enterprise and growth-stage clients.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
  },
];
