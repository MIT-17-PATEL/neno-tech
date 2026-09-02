import React from 'react';
import PageHero from '../../shared/PageHero';
import SectionHeader from '../../shared/SectionHeader';
import CTASection from '../../shared/CTASection';
import { motion } from 'framer-motion';
import { teamMembers } from '../../data/team';

const LeadershipPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        label="About"
        title="Leadership"
        subtitle="The people driving innovation at Neno Technology."
      />

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Team"
            title="Our Leadership"
            subtitle="Meet the team behind Neno Technology."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-950 rounded-3xl p-8 border border-white/5"
              >
                <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-1">{member.name}</h3>
                <p className="text-zinc-500 text-xs font-medium uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-zinc-400 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Work With Our Team"
        subtitle="Ready to start a conversation with our leadership?"
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </div>
  );
};

export default LeadershipPage;
