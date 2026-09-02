import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../shared/PageHero';
import SectionHeader from '../../shared/SectionHeader';
import CTASection from '../../shared/CTASection';
import { motion } from 'framer-motion';
import { caseStudies } from '../../data/caseStudies';

const CustomerCaseStudiesPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        label="Case Studies"
        title="Customer Case Studies"
        subtitle="Detailed breakdowns of how we solved real-world challenges for our clients."
      />

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Deep Dives"
            title="Full Case Studies"
          />

          <div className="space-y-8">
            {caseStudies.map((cs, idx) => (
              <Link
                key={cs.slug}
                to={`/case-studies/${cs.slug}`}
                className="group block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-zinc-950 rounded-3xl p-8 md:p-10 border border-white/5 hover:border-white/15 transition-all duration-500"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/4">
                      <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">{cs.industry}</span>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight mt-2 group-hover:text-zinc-300 transition-colors">
                        {cs.customer}
                      </h3>
                      <span className="text-zinc-700 text-xs mt-1 block">{cs.status}</span>
                    </div>
                    <div className="lg:w-3/4 space-y-4">
                      <div>
                        <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest block mb-2">Challenge</span>
                        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">{cs.challenge}</p>
                      </div>
                      <div>
                        <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest block mb-2">Solution</span>
                        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">{cs.solution}</p>
                      </div>
                      <span className="text-white font-bold text-xs uppercase tracking-widest group-hover:underline underline-offset-4">
                        Read Full Case Study →
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for Your Case Study?"
        subtitle="Let's build something worth writing about."
        primaryLabel="Start a Project"
        primaryHref="/contact/request-project"
      />
    </div>
  );
};

export default CustomerCaseStudiesPage;
