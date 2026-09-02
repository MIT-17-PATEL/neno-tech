import React from 'react';
import PageHero from '../../shared/PageHero';
import SectionHeader from '../../shared/SectionHeader';
import CTASection from '../../shared/CTASection';
import { motion } from 'framer-motion';

const CompanyPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        label="About"
        title="Company"
        subtitle="NENOTECHNOLOGY is your partner in building the future of business through intelligent automation."
      />

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Who We Are"
            title="Engineering the Future"
            subtitle="We specialize in custom AI solution building, proprietary AI products, and autonomous calling agents. Our mission is to bridge the gap between traditional enterprise systems and the next era of artificial intelligence."
          />

          <div className="grid lg:grid-cols-2 gap-12 md:gap-24">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-zinc-400 text-lg md:text-xl leading-relaxed"
            >
              NENOTECHNOLOGY is your partner in building the future of business through intelligent automation.
              We specialize in custom AI solution building, proprietary AI products, and autonomous calling agents.
              Our mission is to bridge the gap between traditional enterprise systems and the next era of
              artificial intelligence, delivering scalable ERP and CRM solutions that think for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-zinc-950 rounded-3xl p-8 border border-white/5">
                <h3 className="text-lg font-bold tracking-tight mb-4">What We Do</h3>
                <ul className="space-y-3">
                  {[
                    'Custom AI solutions and LLM development',
                    'AI-powered CRM and ERP systems',
                    'Autonomous calling agents and voice AI',
                    'Full-stack software engineering',
                    'Cloud infrastructure and DevOps',
                    'Technology consulting and strategy',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Build Together"
        subtitle="Ready to transform your business with intelligent technology?"
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
      />
    </div>
  );
};

export default CompanyPage;
