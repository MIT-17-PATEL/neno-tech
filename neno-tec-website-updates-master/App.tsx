import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import LayoutWrapper from './components/shared/LayoutWrapper';
import HomePage from './components/pages/HomePage';
import NotFoundPage from './components/pages/NotFoundPage';

// About pages
import AboutPage from './components/pages/about/AboutPage';
import CompanyPage from './components/pages/about/CompanyPage';
import VisionMissionPage from './components/pages/about/VisionMissionPage';
import LeadershipPage from './components/pages/about/LeadershipPage';
import WhyNenoPage from './components/pages/about/WhyNenoPage';

// Services pages
import ServicesPage from './components/pages/services/ServicesPage';
import EngineerOnDemandPage from './components/pages/services/EngineerOnDemandPage';
import EngineerDetailPage from './components/pages/services/EngineerDetailPage';
import ProjectsSolutionsPage from './components/pages/services/ProjectsSolutionsPage';
import ProductsPage from './components/pages/services/ProductsPage';
import ProductDetailPage from './components/pages/services/ProductDetailPage';
import ConsultingPage from './components/pages/services/ConsultingPage';
import ConsultingDetailPage from './components/pages/services/ConsultingDetailPage';
import TrainingPage from './components/pages/services/TrainingPage';
import TrainingDetailPage from './components/pages/services/TrainingDetailPage';

// About Us pages
import AboutUsPage from './components/pages/about/AboutUsPage';
import TechnologyPage from './components/pages/about/TechnologyPage';
import OurApproachPage from './components/pages/about/OurApproachPage';

// Case Studies pages
import CaseStudiesPage from './components/pages/case-studies/CaseStudiesPage';
import CaseStudyDetailPage from './components/pages/case-studies/CaseStudyDetailPage';
import CustomerSuccessPage from './components/pages/case-studies/CustomerSuccessPage';
import CustomerCaseStudiesPage from './components/pages/case-studies/CustomerCaseStudiesPage';
import CustomersPage from './components/pages/case-studies/CustomersPage';

// Contact pages
import ContactPage from './components/pages/contact/ContactPage';
import TalkToEngineerPage from './components/pages/contact/TalkToEngineerPage';
import RequestProjectPage from './components/pages/contact/RequestProjectPage';
import BusinessInquiryPage from './components/pages/contact/BusinessInquiryPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Directly reset DOM scroll — bypasses any smooth-scroll library interception
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Home page — self-contained with its own Navbar, Hero, Lenis, Cursor */}
        <Route path="/" element={<HomePage />} />

        {/* All other pages share LayoutWrapper (Navbar + Footer + Lenis + Cursor) */}
        <Route element={<LayoutWrapper />}>
          {/* About */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/company" element={<CompanyPage />} />
          <Route path="/about/vision-mission" element={<VisionMissionPage />} />
          <Route path="/about/leadership" element={<LeadershipPage />} />
          <Route path="/about/why-neno" element={<WhyNenoPage />} />

          {/* Services */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/engineer-on-demand" element={<EngineerOnDemandPage />} />
          <Route path="/services/engineer-on-demand/:engineerSlug" element={<EngineerDetailPage />} />
          <Route path="/services/on-demand-projects" element={<ProjectsSolutionsPage />} />
          <Route path="/services/on-demand-projects/customized-solutions" element={<ProjectsSolutionsPage />} />
          <Route path="/services/products" element={<ProductsPage />} />
          <Route path="/services/products/crm" element={<ProductDetailPage productSlug="crm" />} />
          <Route path="/services/products/erp" element={<ProductDetailPage productSlug="erp" />} />
          <Route path="/services/products/digital-products" element={<ProductDetailPage productSlug="digital-products" />} />
          <Route path="/services/products/voice-ai" element={<ProductDetailPage productSlug="voice-ai" />} />
          <Route path="/services/consulting" element={<ConsultingPage />} />
          <Route path="/services/consulting/ai" element={<ConsultingDetailPage consultingSlug="ai" />} />
          <Route path="/services/consulting/ai-consulting" element={<ConsultingDetailPage consultingSlug="ai" />} />
          <Route path="/services/consulting/software-product" element={<ConsultingDetailPage consultingSlug="software-product" />} />
          <Route path="/services/consulting/software-product-consulting" element={<ConsultingDetailPage consultingSlug="software-product" />} />
          <Route path="/services/consulting/mvp-production" element={<ConsultingDetailPage consultingSlug="mvp-production" />} />
          <Route path="/services/consulting/mvp-to-production" element={<ConsultingDetailPage consultingSlug="mvp-production" />} />
          <Route path="/services/consulting/marketing" element={<ConsultingDetailPage consultingSlug="marketing" />} />
          <Route path="/services/consulting/marketing-consulting" element={<ConsultingDetailPage consultingSlug="marketing" />} />
          <Route path="/services/training" element={<TrainingPage />} />
          <Route path="/services/training/trainer-on-demand" element={<TrainingDetailPage programSlug="trainer-on-demand" />} />
          <Route path="/services/training/education-consulting" element={<TrainingDetailPage programSlug="education-consulting" />} />

          {/* Case Studies */}
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/customer-success" element={<CustomerSuccessPage />} />
          <Route path="/case-studies/customer-case-studies" element={<CustomerCaseStudiesPage />} />
          <Route path="/case-studies/:caseStudySlug" element={<CaseStudyDetailPage />} />
          <Route path="/customers" element={<CustomersPage />} />

          {/* About Us */}
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/about-us/technology" element={<TechnologyPage />} />
          <Route path="/about-us/our-approach" element={<OurApproachPage />} />
          <Route path="/about-us/leadership" element={<LeadershipPage />} />

          {/* Contact */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact/talk-to-engineer" element={<TalkToEngineerPage />} />
          <Route path="/contact/request-project" element={<RequestProjectPage />} />
          <Route path="/contact/business-inquiry" element={<BusinessInquiryPage />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* Legacy hash routes — preserved for Talent and Careers */}
        <Route path="#/talent" element={<HomePage />} />
        <Route path="#/careers" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
