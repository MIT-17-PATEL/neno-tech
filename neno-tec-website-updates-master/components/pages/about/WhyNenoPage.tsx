import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../../shared/PageHero';
import SectionHeader from '../../shared/SectionHeader';
import FeatureCard from '../../shared/FeatureCard';
import CTASection from '../../shared/CTASection';
import { Target, Zap, Users, Code } from 'lucide-react';

const WhyNenoPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const differentiators = [
    {
      title: 'Deep Technical Expertise',
      description: 'Our team brings years of hands-on experience in AI, software engineering, cloud architecture, and enterprise systems — not just theory, but real production experience.',
      stat: '4+',
      statLabel: 'Years of Practice',
    },
    {
      title: 'Flexible Engagement Models',
      description: 'From dedicated engineers to complete project delivery — adapt your engagement as your needs evolve. No rigid contracts, no lock-in.',
      stat: 'Flexible',
      statLabel: 'Engagement',
    },
    {
      title: 'AI-First Approach',
      description: 'We don\'t bolt AI onto existing solutions — we architect intelligent systems from the ground up, leveraging modern frameworks and production-grade infrastructure.',
      stat: 'AI-Native',
      statLabel: 'Architecture',
    },
    {
      title: 'End-to-End Delivery',
      description: 'From strategy and design through development, testing, and deployment — we own the complete lifecycle so you can focus on your business.',
      stat: 'Full',
      statLabel: 'Lifecycle',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        label="Why Neno Technology"
        title="Why Choose"
        accentWord="Neno Technology"
        subtitle="Engineering excellence, flexible engagement, and AI-native architecture — built for businesses that move fast."
      />

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Differentiators"
            title="What Sets Us Apart"
            subtitle="Not just another tech vendor — a genuine engineering partner invested in your success."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {differentiators.map((item, idx) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
                stat={item.stat}
                statLabel={item.statLabel}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-zinc-950/30">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Technology Focus"
            title="Our Technical Stack"
            subtitle="Modern, proven technologies selected for performance, scalability, and maintainability."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Zap size={24} className="text-white" />, title: 'AI & Machine Learning', techs: ['Python', 'PyTorch', 'TensorFlow', 'LangChain', 'OpenAI API', 'Hugging Face'] },
              { icon: <Code size={24} className="text-white" />, title: 'Software Engineering', techs: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'] },
              { icon: <Target size={24} className="text-white" />, title: 'Cloud & DevOps', techs: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'] },
              { icon: <Users size={24} className="text-white" />, title: 'Product & Design', techs: ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Accessibility'] },
            ].map((group, idx) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-900/50 rounded-3xl p-8 border border-white/5"
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6">
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.techs.map((tech) => (
                    <span key={tech} className="text-xs text-zinc-500 bg-zinc-900 px-3 py-1.5 rounded-full border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Work Together"
        subtitle="Whether you need talent, a project, or strategic guidance — we're ready."
        primaryLabel="Get Started"
        primaryHref="/contact"
      />
    </div>
  );
};

export default WhyNenoPage;
