import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../shared/PageHero';
import SectionHeader from '../../shared/SectionHeader';
import CTASection from '../../shared/CTASection';
import { motion } from 'framer-motion';
import { caseStudies } from '../../data/caseStudies';
import { CheckCircle2 } from 'lucide-react';

const CustomerSuccessPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        label="Case Studies"
        title="Customer Success Stories"
        subtitle="Verified outcomes and impact from our AI deployments and technology solutions."
      />

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Success"
            title="Outcomes That Matter"
            subtitle="Each engagement delivers measurable impact — here are some verified outcomes."
          />

          <div className="space-y-8">
            {caseStudies.map((cs, idx) => (
              <motion.div
                key={cs.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-950 rounded-3xl p-8 md:p-10 border border-white/5"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">{cs.industry}</span>
                    <h3 className="text-xl font-bold tracking-tight mt-2">{cs.customer}</h3>
                  </div>
                  <div className="lg:w-2/3 space-y-4">
                    <div>
                      <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest block mb-2">Challenge</span>
                      <p className="text-zinc-400 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest block mb-2">Outcome</span>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-white mt-1 shrink-0" />
                        <p className="text-zinc-400 text-sm leading-relaxed">{cs.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Create Your Success Story"
        subtitle="Let's discuss how we can help you achieve your goals."
        primaryLabel="Start a Project"
        primaryHref="/contact/request-project"
      />
    </div>
  );
};

export default CustomerSuccessPage;
