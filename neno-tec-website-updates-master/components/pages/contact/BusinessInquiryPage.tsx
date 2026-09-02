import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../shared/PageHero';
import SectionHeader from '../../shared/SectionHeader';
import CTASection from '../../shared/CTASection';
import { Briefcase, Building2, Handshake } from 'lucide-react';

const BusinessInquiryPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        label="Contact"
        title="Business Inquiry"
        subtitle="Partnerships, enterprise sales, and strategic collaboration opportunities."
      />

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Enterprise"
            title="How We Work with Partners"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-zinc-950 rounded-3xl p-8 md:p-10 border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6">
                <Briefcase size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3">Enterprise Partnerships</h3>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                Strategic technology partnerships for enterprise clients seeking AI transformation and custom engineering solutions.
              </p>
            </div>

            <div className="bg-zinc-950 rounded-3xl p-8 md:p-10 border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6">
                <Building2 size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3">Channel Partners</h3>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                Reseller and referral partnerships for our CRM, ERP, and AI products. Grow your revenue with our technology.
              </p>
            </div>

            <div className="bg-zinc-950 rounded-3xl p-8 md:p-10 border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6">
                <Handshake size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3">Strategic Alliances</h3>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                Co-development and go-to-market alliances with technology companies building complementary solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Discuss Partnership"
        subtitle="Tell us about your business goals and how we can collaborate."
        primaryLabel="Contact Sales"
        primaryHref="mailto:sales@nenotechnology.com"
        secondaryLabel="Other Contact Options"
        secondaryHref="/contact"
      />
    </div>
  );
};

export default BusinessInquiryPage;
