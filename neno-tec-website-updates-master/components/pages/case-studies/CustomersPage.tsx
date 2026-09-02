import React from 'react';
import PageHero from '../../shared/PageHero';
import SectionHeader from '../../shared/SectionHeader';
import CTASection from '../../shared/CTASection';
import { Building2, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const CustomersPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        label="Customers"
        title="Our Customers"
        subtitle="Organizations we've partnered with to build intelligent technology solutions."
      />

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Partnerships"
            title="Trusted By"
            subtitle="We work with enterprises, startups, and organizations across industries."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { type: 'Enterprise', desc: 'Fortune 500 companies leveraging AI for operational transformation.', icon: <Building2 size={24} className="text-white" /> },
              { type: 'Startups', desc: 'Early-stage companies building AI-native products and platforms.', icon: <Users size={24} className="text-white" /> },
              { type: 'Global Reach', desc: 'Clients across India, USA, UAE, Europe, and APAC regions.', icon: <Globe size={24} className="text-white" /> },
            ].map((item, idx) => (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-950 rounded-3xl p-8 md:p-10 border border-white/5"
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-3">{item.type}</h3>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-zinc-950/50 rounded-3xl p-8 md:p-12 border border-white/5 border-dashed">
            <p className="text-zinc-600 text-center text-sm">
              Add verified customer logos and names here. Customer information available upon request.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Client List"
        subtitle="Let's discuss how we can help your organization."
        primaryLabel="Get in Touch"
        primaryHref="/contact/business-inquiry"
      />
    </div>
  );
};

export default CustomersPage;
