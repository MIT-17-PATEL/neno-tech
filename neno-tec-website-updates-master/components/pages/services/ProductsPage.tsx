import React from 'react';
import PageHero from '../../shared/PageHero';
import Breadcrumb from '../../shared/Breadcrumb';
import SectionHeader from '../../shared/SectionHeader';
import VisualServiceCard from '../../shared/VisualServiceCard';
import FeatureCard from '../../shared/FeatureCard';
import CTASection from '../../shared/CTASection';
import { getCategoryBySlug } from '../../data/services';

const ProductsPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const category = getCategoryBySlug('products');
  if (!category) return null;

  return (
    <div className="min-h-screen bg-black text-white">
      <Breadcrumb />
      <PageHero
        label={category.title}
        title="Proprietary Products"
        subtitle={category.overview}
        accentWord="Products"
      />

      {/* Product Cards */}
      <section id="products" className="pt-6 pb-16 md:pt-10 md:pb-24 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Our Products"
            title="Purpose-Built Software"
            subtitle="Production-ready products engineered for specific enterprise challenges — not generic off-the-shelf tools. Click any product to explore details."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {category.children.map((child, idx) => (
              <div id={`product-${child.slug}`} key={child.slug} className="scroll-mt-36">
                <VisualServiceCard
                  title={child.title}
                  description={child.description}
                  href={child.href}
                  image={child.image}
                  index={idx}
                  category={child.title}
                  subItems={
                    child.technologies
                      ? child.technologies.slice(0, 4).map(t => ({ title: t, href: child.href, slug: child.slug }))
                      : child.features
                      ? child.features.slice(0, 4).map(f => ({ title: f, href: child.href, slug: child.slug }))
                      : undefined
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-zinc-950/30">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Why It Works"
            title="Built for Real Operations"
            subtitle="Products that integrate with your workflows from day one."
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
            title="How We Onboard You"
            subtitle="From requirements to go-live in a structured, low-friction process."
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
        title="Ready to Explore?"
        subtitle="Learn how our products can be configured for your specific workflows."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />
    </div>
  );
};

export default ProductsPage;
