import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../../shared/PageHero';
import Breadcrumb from '../../shared/Breadcrumb';
import SectionHeader from '../../shared/SectionHeader';
import FeatureCard from '../../shared/FeatureCard';
import ContactSection from '../../shared/ContactSection';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { getChildBySlug } from '../../data/services';

interface ProductDetailProps {
  productSlug: string;
}

const ProductDetailPage: React.FC<ProductDetailProps> = ({ productSlug }) => {
  const product = getChildBySlug('products', productSlug);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-arapey italic mb-4">Product Not Found</h1>
          <Link to="/services/products" className="text-white underline underline-offset-8">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Breadcrumb />
      <PageHero
        label={product.title}
        title={product.title}
        subtitle={product.overview || product.description}
      />

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-24">
            <SectionHeader
              label="Core Capabilities"
              title="What It Does"
            />

            <div className="space-y-6">
              {(product.capabilities || []).map((cap, idx) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-start gap-4 bg-zinc-950 rounded-2xl p-6 border border-white/5"
                >
                  <CheckCircle2 size={20} className="text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-lg">{cap}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-zinc-950/30">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Use Cases"
            title="Business Applications"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {(product.useCases || []).map((useCase, idx) => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-900/50 rounded-3xl p-8 border border-white/5"
              >
                <span className="text-zinc-600 text-xs font-black uppercase tracking-widest">
                  Use Case {String(idx + 1).padStart(2, '0')}
                </span>
                <p className="text-white text-lg mt-2 font-medium">{useCase}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {(product.features && product.features.length > 0) && (
        <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
          <div className="max-w-[1920px] mx-auto">
            <SectionHeader
              label="Key Features"
              title="Built-In Capabilities"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {product.features.map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-center gap-4 bg-zinc-950 rounded-2xl p-6 border border-white/5"
                >
                  <span className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-black shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-zinc-300 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection
        title="Get Started"
        subtitle="Contact us to learn more about this product and how it can be deployed for your organization."
      />
    </div>
  );
};

export default ProductDetailPage;
