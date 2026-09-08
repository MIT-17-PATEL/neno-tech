import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Strategic Consulting | Neno Technology",
    description: "Enterprise AI Strategy, Software Product Consulting, MVP to Production, and Marketing & GTM Consulting.",
};

interface ConsultingOffering {
    id: string;
    title: string;
    badge: string;
    icon: string;
    iconBg: string;
    iconColor: string;
    description: string;
    deliverables: string[];
    learnMoreLink: string;
}

const consultingOfferings: ConsultingOffering[] = [
    {
        id: "ai-strategy",
        title: "AI Strategy Consulting",
        badge: "AI & Advisory",
        icon: "fas fa-brain",
        iconBg: "#EEF2FF",
        iconColor: "#4F46E5",
        description: "Define your enterprise AI roadmap, evaluate foundation models, and prioritize high-ROI use cases with clear technical feasibility.",
        deliverables: [
            "AI Readiness & Maturity Assessment",
            "LLM & Foundation Model Evaluation",
            "Use-Case Prioritization & ROI Modeling",
            "Data Governance & Responsible AI Frameworks"
        ],
        learnMoreLink: "/contact-us?subject=AI+Strategy+Consulting"
    },
    {
        id: "software-product",
        title: "Software Product Consulting",
        badge: "Architecture & Systems",
        icon: "fas fa-laptop-code",
        iconBg: "#F5F3FF",
        iconColor: "#7C3AED",
        description: "Senior architectural guidance on distributed systems, tech debt mitigation, modern cloud frameworks, and high-velocity engineering practices.",
        deliverables: [
            "System Architecture & Scalability Audits",
            "Technical Debt Remediation Roadmaps",
            "Microservices & Cloud-Native Engineering",
            "Engineering Velocity & Team Scaling Practices"
        ],
        learnMoreLink: "/contact-us?subject=Software+Product+Consulting"
    },
    {
        id: "mvp-production",
        title: "MVP → Production Consulting",
        badge: "Scale & Reliability",
        icon: "fas fa-rocket",
        iconBg: "#EFF6FF",
        iconColor: "#2563EB",
        description: "Bridge the gap between proof-of-concept and enterprise scale. We harden security, optimize performance, and scale infrastructure for real workloads.",
        deliverables: [
            "Production Readiness & Architecture Audits",
            "Distributed Load & Database Performance Optimization",
            "Automated CI/CD & Enterprise Observability",
            "Security Hardening & SOC2 Compliance Preparation"
        ],
        learnMoreLink: "/contact-us?subject=MVP+to+Production+Consulting"
    },
    {
        id: "marketing-gtm",
        title: "Marketing & GTM Consulting",
        badge: "Growth & GTM",
        icon: "fas fa-chart-line",
        iconBg: "#F0FDF4",
        iconColor: "#16A34A",
        description: "Technology-driven go-to-market strategies that align product capabilities with market demand, automated growth funnels, and data-backed attribution.",
        deliverables: [
            "GTM Tech Stack & Automation Architecture",
            "Full-Funnel Analytics & Conversion Attribution",
            "Product-Led Positioning & Messaging Frameworks",
            "Customer Acquisition Channel Optimization"
        ],
        learnMoreLink: "/contact-us?subject=Marketing+and+GTM+Consulting"
    }
];

const consultingProcess = [
    {
        step: "01",
        title: "Discovery & Technical Audit",
        desc: "Deep-dive analysis of your current systems, data pipelines, technical debt, and business goals."
    },
    {
        step: "02",
        title: "Architecture & Strategy Roadmap",
        desc: "Actionable roadmap prioritizing high-impact milestones, technology stack selection, and resource estimates."
    },
    {
        step: "03",
        title: "Guided Execution & Oversight",
        desc: "Hands-on architectural guidance and sprint reviews to ensure adherence to best practices and velocity."
    },
    {
        step: "04",
        title: "Production Scale & Handover",
        desc: "Deployment hardening, observability instrumentation, knowledge transfer, and operational playbooks."
    }
];

export default function ConsultingPage() {
    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                <BreadCrumb title="Strategic Consulting" breadCrumb="Services / Consulting" />
                <div className="neno-consulting-page">
                    {/* Hero Header Section - Clean Style Without Purple Background */}
                    <section className="consulting-hero-section">
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-xl-9 col-lg-10">
                                    <h1 className="consulting-hero-title">
                                        Strategic Guidance for <span className="consulting-gradient-text">AI & High-Scale Systems</span>
                                    </h1>
                                    <p className="consulting-hero-subtitle">
                                        Senior engineering advisors, AI architects, and GTM specialists helping ambitious teams evaluate opportunities, modernize architecture, and transition from prototype to high-velocity production.
                                    </p>
                                    <div className="consulting-hero-actions mt-4 d-flex flex-wrap justify-content-center gap-3">
                                        <a href="#consulting-offerings" className="btn btn-style-one consulting-primary-btn">
                                            Explore Consulting Areas <i className="fas fa-arrow-down ms-2" />
                                        </a>
                                        <Link href="/contact-us" className="btn btn-style-two consulting-secondary-btn">
                                            Book a Strategy Call <i className="fas fa-calendar-alt ms-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 4 Core Consulting Offerings Section */}
                    <section id="consulting-offerings" className="consulting-services-section">
                        <div className="container">
                            <div className="section-header text-center mb-5">
                                <div className="consulting-sub-badge mb-2">Core Advisory Practices</div>
                                <h2 className="consulting-section-title">Comprehensive Consulting Offerings</h2>
                                <p className="consulting-section-desc">
                                    Targeted advisory engagements engineered to solve complex architectural bottlenecks and accelerate time-to-value.
                                </p>
                            </div>

                            <div className="row g-4">
                                {consultingOfferings.map((offering) => (
                                    <div className="col-lg-6 col-md-12" key={offering.id} id={offering.id}>
                                        <div className="consulting-card h-100">
                                            {/* Card Header with Icon & Pill Badge */}
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <div 
                                                    className="consulting-icon-wrap" 
                                                    style={{ backgroundColor: offering.iconBg, color: offering.iconColor }}
                                                >
                                                    <i className={offering.icon} />
                                                </div>
                                                <span className="consulting-card-pill">
                                                    {offering.badge}
                                                </span>
                                            </div>

                                            {/* Title & 1-2 sentence description */}
                                            <h3 className="consulting-card-title">{offering.title}</h3>
                                            <p className="consulting-card-desc">{offering.description}</p>

                                            {/* Deliverables / Scope list */}
                                            <div className="consulting-deliverables-wrap mb-4">
                                                <span className="consulting-deliverables-heading">Key Focus Areas:</span>
                                                <ul className="consulting-deliverables-list mt-2">
                                                    {offering.deliverables.map((item, idx) => (
                                                        <li key={idx}>
                                                            <i className="fas fa-check-circle me-2" style={{ color: offering.iconColor }} />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Learn More link with arrow indicator */}
                                            <div className="consulting-card-footer mt-auto pt-3">
                                                <Link href={offering.learnMoreLink} className="consulting-learn-more-link">
                                                    <span>Learn More & Inquire</span>
                                                    <i className="fas fa-arrow-right consulting-arrow-icon ms-2" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Consulting Process / How We Advise */}
                    <section className="consulting-process-section">
                        <div className="container">
                            <div className="section-header text-center mb-5">
                                <div className="consulting-sub-badge mb-2">Our Advisory Framework</div>
                                <h2 className="consulting-section-title">How We Partner with Your Team</h2>
                                <p className="consulting-section-desc">
                                    We avoid generic slide decks. Every consulting engagement delivers code-level blueprints, realistic timelines, and tangible production outcomes.
                                </p>
                            </div>

                            <div className="row g-4">
                                {consultingProcess.map((item, idx) => (
                                    <div className="col-lg-3 col-md-6" key={idx}>
                                        <div className="consulting-step-card h-100">
                                            <div className="consulting-step-number">{item.step}</div>
                                            <h4 className="consulting-step-title">{item.title}</h4>
                                            <p className="consulting-step-desc">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Bottom CTA Banner */}
                    <section className="consulting-cta-section mb-80">
                        <div className="container">
                            <div className="consulting-cta-box text-center">
                                <div className="consulting-pill-badge mb-3">
                                    Ready to Take Action?
                                </div>
                                <h2 className="consulting-cta-title">
                                    Have a Specific Architecture or AI Challenge?
                                </h2>
                                <p className="consulting-cta-desc">
                                    Schedule a 30-minute confidential consultation with our principal technology architects to evaluate your architecture, discuss use-case feasibility, and scope a tailored engagement.
                                </p>
                                <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                                    <Link href="/contact-us" className="btn btn-style-one consulting-primary-btn">
                                        Schedule Strategy Call <i className="fas fa-arrow-right ms-2" />
                                    </Link>
                                    <Link href="/engineer-on-demand" className="btn btn-style-two consulting-secondary-btn">
                                        Need Dedicated Engineers? <i className="fas fa-user-plus ms-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </LayoutV1>
        </div>
    );
}

