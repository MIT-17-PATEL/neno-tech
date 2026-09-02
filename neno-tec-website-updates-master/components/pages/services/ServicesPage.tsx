
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import VisualServiceCard, { SubItemType } from '../../shared/VisualServiceCard';
import SectionHeader from '../../shared/SectionHeader';
import CTASection from '../../shared/CTASection';
import EngineerQuickViewModal from '../../shared/EngineerQuickViewModal';
import { serviceCategories, ServiceChild, getChildBySlug } from '../../data/services';

const ServicesPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<ServiceChild | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelectSubItem = (categorySlug: string, item: SubItemType) => {
    // Find matching child in category or across categories
    const child = getChildBySlug(categorySlug, item.slug || '') || 
                  serviceCategories.flatMap(c => c.children).find(c => c.title === item.title || c.href === item.href);
    if (child) {
      setSelectedRole(child);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-20 md:py-32 px-4 md:px-12 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            label="Services"
            title="What We Deliver"
            subtitle="End-to-end technology services engineered for scale — from specialized talent to complete product delivery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {serviceCategories.map((service, idx) => (
              <VisualServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                href={service.href}
                image={service.image}
                index={idx}
                category={service.shortLabel}
                subItems={service.children?.map(c => ({ title: c.title, href: c.href, slug: c.slug }))}
                onSelectSubItem={(item) => handleSelectSubItem(service.slug, item)}
              />
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

      <CTASection
        title="Ready to Start?"
        subtitle="Tell us about your requirements and we'll curate the right solution."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="View Our Work"
        secondaryHref="/case-studies"
      />
    </div>
  );
};

export default ServicesPage;
