import React from 'react';
import PageHero from '../../shared/PageHero';
import Breadcrumb from '../../shared/Breadcrumb';
import SectionHeader from '../../shared/SectionHeader';
import VisualServiceCard from '../../shared/VisualServiceCard';
import FeatureCard from '../../shared/FeatureCard';
import CTASection from '../../shared/CTASection';
import { getCategoryBySlug } from '../../data/services';

const ProjectsSolutionsPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const category = getCategoryBySlug('on-demand-projects');
  if (!category) return null;

  return (
    <div className="min-h-screen bg-black text-white">
      <Breadcrumb />
      <PageHero
        label={category.title}
        title="Projects & Solutions"
        subtitle={category.overview}
        accentWord="Solutions"
      />

      {/* Solution Cards */}
      <section id="solutions" className="pt-6 pb-16 md:pt-10 md:pb-24 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="What We Build"
            title="Customized Technology Solutions"
            subtitle="End-to-end technology delivery — from discovery and architecture through production deployment. Click any solution to explore details."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {category.children.map((child, idx) => (
              <div id={`solution-${child.slug}`} key={child.slug} className="scroll-mt-36">
                <VisualServiceCard
                  title={child.title}
                  description={child.description}
                  href={child.href}
                  image={child.image}
                  index={idx}
                  category="Projects & Solutions"
                  subItems={
                    child.technologies
                      ? child.technologies.slice(0, 4).map(t => ({ title: t, href: child.href, slug: child.slug }))
                      : child.capabilities
                      ? child.capabilities.slice(0, 4).map(c => ({ title: c, href: child.href, slug: child.slug }))
                      : undefined
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-zinc-950/30">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Capabilities"
            title="Full-Spectrum Delivery"
            subtitle="A dedicated engineering team that owns your project from brief to production."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {category.capabilities.map((cap, idx) => (
              <FeatureCard
                key={cap}
                title=""
                description={cap}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Why Us"
            title="Built for Quality and Predictability"
            subtitle="Transparent milestones, production-grade architecture, zero ambiguity."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-zinc-950/30">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Process"
            title="Our Delivery Approach"
            subtitle="A structured methodology designed for predictability and quality."
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
        title="Start Your Project"
        subtitle="Share your vision and we'll architect the right solution."
        primaryLabel="Request a Project"
        primaryHref="/contact/request-project"
        secondaryLabel="View Case Studies"
        secondaryHref="/case-studies"
      />
    </div>
  );
};

export default ProjectsSolutionsPage;
