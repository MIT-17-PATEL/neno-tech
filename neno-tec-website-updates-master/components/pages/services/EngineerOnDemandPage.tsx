import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../../shared/PageHero';
import SectionHeader from '../../shared/SectionHeader';
import FeatureCard from '../../shared/FeatureCard';
import CTASection from '../../shared/CTASection';
import { CheckCircle2, ArrowRight, ArrowUpRight, Shield, Zap, Monitor, Users, Cloud } from 'lucide-react';
import Breadcrumb from '../../shared/Breadcrumb';
import VisualServiceCard from '../../shared/VisualServiceCard';
import EngineerQuickViewModal from '../../shared/EngineerQuickViewModal';
import { getCategoryBySlug, ServiceChild } from '../../data/services';

const iconMap: Record<string, React.ReactNode> = {
  'FDA Engineer': <Shield size={32} className="text-white" />,
  'AI Engineer': <Zap size={32} className="text-white" />,
  'Full-Stack Engineer': <Monitor size={32} className="text-white" />,
  'UI/UX Designer': <Users size={32} className="text-white" />,
  'Cloud Engineer': <Cloud size={32} className="text-white" />,
};

const EngineerOnDemandPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<ServiceChild | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const category = getCategoryBySlug('engineer-on-demand');
  if (!category) return null;

  const handleOpenRoleModal = (role: ServiceChild) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Breadcrumb />
      <PageHero
        label={category.title}
        title="Precision Engineering Talent"
        subtitle={category.overview}
        accentWord="On Demand"
      />


      {/* Available Engineering Specializations */}
      <section id="specializations" className="pt-6 pb-16 md:pt-10 md:pb-24 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Expertise Areas"
            title="Available Engineering Specializations"
            subtitle="Choose from our pre-vetted domain specialists ready for immediate deployment. Click any role to view details."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {category.children.map((child, idx) => (
              <div id={`role-${child.slug}`} key={child.slug} className="scroll-mt-36">
                <VisualServiceCard
                  title={child.title}
                  description={child.description}
                  href={child.href}
                  image={child.image}
                  index={idx}
                  category={child.title}
                  subItems={child.technologies ? child.technologies.slice(0, 4).map(t => ({ title: t, href: child.href, slug: child.slug })) : undefined}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Details Quick View Modal */}
      <EngineerQuickViewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        roleData={selectedRole}
      />

      {/* Benefits */}
      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-zinc-950/30">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Why It Works"
            title="Built for Speed and Quality"
            subtitle="Access pre-vetted engineers without the lengthy hiring process."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {category.benefits.map((benefit, idx) => (
              <FeatureCard
                key={benefit}
                title=""
                description={benefit}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Process"
            title="How It Works"
            subtitle="From brief to deployment in days."
          />

          <div className="flex flex-col">
            {category.process.map((step, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-16 px-4 md:px-12 lg:px-24 border-t border-white/10 md:hover:bg-zinc-900/40 transition-all duration-700"
              >
                <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-24">
                  <span className="text-zinc-800 text-3xl md:text-5xl font-black font-urbanist md:group-hover:text-white transition-colors duration-500">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <p className="text-zinc-400 text-sm md:text-xl leading-relaxed max-w-2xl">{step}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Build Your Team"
        subtitle="Submit your requirements and receive a curated shortlist of precision-fit engineers within 48 hours."
        primaryLabel="Submit Your Brief"
        primaryHref="/contact/request-project"
      />
    </div>
  );
};

export default EngineerOnDemandPage;
