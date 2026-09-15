"use client";
import React from "react";
import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Link from "next/link";
import { ConsultingService, consultingServices } from "@/data/consultingData";
import { FadeUp, StaggerContainer, StaggerItem, MotionGlassCard, MotionLinkWrapper } from "@/components/animation/FramerMotionSystem";

interface ConsultingDetailPageProps {
    service: ConsultingService;
}

export default function ConsultingDetailPage({ service }: ConsultingDetailPageProps) {
    const otherServices = consultingServices.filter(s => s.slug !== service.slug);

    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                {/* Hero Badge Pill & Header using the clean light blue outlined pill badge style */}
                <BreadCrumb 
                    title={service.pillBadge} 
                    breadCrumb={`Home / Consulting / ${service.shortTitle}`} 
                />

                <div className="services-details-area default-padding" style={{ paddingTop: "40px" }}>
                    <div className="container">
                        <div className="row">
                            {/* Main Content Column */}
                            <div className="col-lg-8">
                                <div className="service-details-content">
                                    <FadeUp delay={0.06} duration={0.6} y={24}>
                                        <h1 
                                            className="title mb-3" 
                                            style={{ fontSize: "clamp(2.1rem, 3.5vw, 2.6rem)", fontWeight: "800", color: "#ffffff", letterSpacing: "-0.5px" }}
                                        >
                                            {service.title}
                                        </h1>
                                        <p className="lead mb-4" style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#94a3b8" }}>
                                            {service.description}
                                        </p>
                                    </FadeUp>

                                    {/* Overview Card */}
                                    <FadeUp delay={0.1} duration={0.6} y={25}>
                                        <MotionGlassCard className="mb-40">
                                            <div className="p-4 rounded-4" style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderRadius: "20px" }}>
                                                <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
                                                    <h4 className="fw-bold mb-0" style={{ color: "#ffffff" }}>Advisory Overview</h4>
                                                    <span 
                                                        className="badge p-2 px-3" 
                                                        style={{ background: "rgba(56, 189, 248, 0.1)", color: "#38bdf8", border: "1px solid rgba(56, 189, 248, 0.3)", borderRadius: "9999px", fontWeight: "600", fontSize: "12.5px" }}
                                                    >
                                                        <i className="far fa-clock me-1" /> Typical Engagement: {service.duration}
                                                    </span>
                                                </div>
                                                <p className="mb-0" style={{ lineHeight: "1.8", color: "#94a3b8", fontSize: "15px" }}>
                                                    {service.overview}
                                                </p>
                                            </div>
                                        </MotionGlassCard>
                                    </FadeUp>

                                    {/* Key Deliverables */}
                                    <FadeUp delay={0.08} duration={0.6} y={20}>
                                        <h3 className="mt-40 mb-20 fw-bold" style={{ color: "#ffffff", fontSize: "1.5rem", letterSpacing: "-0.3px" }}>
                                            Tangible Deliverables You Receive
                                        </h3>
                                        <ul className="check-list mb-40 p-0" style={{ listStyle: "none" }}>
                                            {service.deliverables.map((deliv, index) => (
                                                <li 
                                                    key={index} 
                                                    className="mb-3 d-flex align-items-center p-3 rounded-3"
                                                    style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "14px" }}
                                                >
                                                    <div 
                                                        className="me-3 d-flex align-items-center justify-content-center rounded-2 flex-shrink-0"
                                                        style={{ width: "36px", height: "36px", background: "rgba(99, 102, 241, 0.15)", color: "#818cf8", border: "1px solid rgba(99, 102, 241, 0.3)" }}
                                                    >
                                                        <i className="fas fa-cube" />
                                                    </div>
                                                    <span style={{ color: "#ffffff", fontWeight: "600", fontSize: "15px" }}>{deliv}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </FadeUp>

                                    {/* 4-Step Process */}
                                    <FadeUp delay={0.1} duration={0.6} y={25}>
                                        <MotionGlassCard className="mb-40">
                                            <div className="p-4 rounded-4" style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px" }}>
                                                <div className="d-flex align-items-center mb-3">
                                                    <span 
                                                        className="badge me-2" 
                                                        style={{ background: "rgba(56, 189, 248, 0.1)", border: "1px solid rgba(56, 189, 248, 0.3)", color: "#38bdf8", padding: "4px 10px", borderRadius: "9999px" }}
                                                    >
                                                        Framework
                                                    </span>
                                                    <h4 className="fw-bold mb-0" style={{ color: "#ffffff" }}>Our 4-Step Advisory Process</h4>
                                                </div>
                                                <p className="small mb-4" style={{ color: "#94a3b8" }}>
                                                    How our senior technology consultants guide your team from initial audit to production handover.
                                                </p>
                                                <div className="row g-3">
                                                    {service.process.map((step, index) => (
                                                        <div className="col-md-6" key={index}>
                                                            <div className="p-3 rounded-3 h-100" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "14px" }}>
                                                                <span 
                                                                    className="badge mb-2" 
                                                                    style={{ background: "#38bdf8", color: "#070913", fontSize: "11px", fontWeight: "700", padding: "4px 8px", borderRadius: "6px" }}
                                                                >
                                                                    Step {step.step}
                                                                </span>
                                                                <h6 className="fw-bold mb-2" style={{ color: "#ffffff" }}>{step.title}</h6>
                                                                <p className="small mb-0" style={{ color: "#94a3b8", lineHeight: "1.5" }}>{step.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </MotionGlassCard>
                                    </FadeUp>

                                    {/* Technologies & Tech Stack */}
                                    <FadeUp delay={0.08} duration={0.6} y={20}>
                                        <h3 className="mt-40 mb-20 fw-bold" style={{ color: "#ffffff" }}>
                                            Technologies & Supported Stacks
                                        </h3>
                                        <div className="d-flex flex-wrap gap-2 mb-40">
                                            {service.technologies.map((tech) => (
                                                <span 
                                                    className="badge px-3 py-2 fs-6 rounded-3" 
                                                    key={tech}
                                                    style={{ background: "rgba(255, 255, 255, 0.05)", color: "#e2e8f0", fontWeight: "500", border: "1px solid rgba(255, 255, 255, 0.1)" }}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </FadeUp>

                                    {/* Business Benefits & Use Cases */}
                                    <StaggerContainer stagger={0.1} className="row g-4 mb-40">
                                        <StaggerItem className="col-md-6">
                                            <MotionGlassCard className="h-100" enableGlowTrace={false}>
                                                <div className="p-4 rounded-4 h-100" style={{ background: "rgba(34, 197, 94, 0.06)", border: "1px solid rgba(34, 197, 94, 0.2)", borderRadius: "20px" }}>
                                                    <h5 className="fw-bold mb-3" style={{ color: "#4ade80" }}>
                                                        <i className="fas fa-check-double me-2" /> Business Impact
                                                    </h5>
                                                    <ul className="p-0 m-0" style={{ listStyle: "none" }}>
                                                        {service.benefits.map((b, idx) => (
                                                            <li key={idx} className="small mb-2 d-flex align-items-start" style={{ color: "#86efac" }}>
                                                                <i className="fas fa-check me-2 mt-1 flex-shrink-0" style={{ color: "#4ade80" }} />
                                                                <span>{b}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </MotionGlassCard>
                                        </StaggerItem>
                                        <StaggerItem className="col-md-6">
                                            <MotionGlassCard className="h-100" enableGlowTrace={false}>
                                                <div className="p-4 rounded-4 h-100" style={{ background: "rgba(56, 189, 248, 0.06)", border: "1px solid rgba(56, 189, 248, 0.2)", borderRadius: "20px" }}>
                                                    <h5 className="fw-bold mb-3" style={{ color: "#38bdf8" }}>
                                                        <i className="fas fa-lightbulb me-2" /> Common Scenarios
                                                    </h5>
                                                    <ul className="p-0 m-0" style={{ listStyle: "none" }}>
                                                        {service.useCases.map((u, idx) => (
                                                            <li key={idx} className="small mb-2 d-flex align-items-start" style={{ color: "#93c5fd" }}>
                                                                <i className="fas fa-arrow-right me-2 mt-1 flex-shrink-0" style={{ color: "#38bdf8" }} />
                                                                <span>{u}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </MotionGlassCard>
                                        </StaggerItem>
                                    </StaggerContainer>
                                </div>
                            </div>

                            {/* Sidebar Column */}
                            <div
                                className="col-lg-4 mt-md-50 mt-xs-40 sticky-sidebar-col sidebar-scroll-container"
                                style={{ position: "sticky", top: "110px", alignSelf: "start", zIndex: 10, maxHeight: "calc(100vh - 7rem)", overflowY: "auto", scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                <FadeUp delay={0.12} duration={0.65} y={25}>
                                    <div className="service-sidebar">
                                        {/* Strategy Session CTA Box */}
                                        <div 
                                            className="sidebar-widget p-4 mb-4" 
                                            style={{
                                                background: "linear-gradient(135deg, rgba(20, 26, 48, 0.95) 0%, rgba(13, 18, 34, 0.95) 100%)",
                                                border: "1px solid rgba(255, 255, 255, 0.12)",
                                                borderRadius: "22px",
                                                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.6)"
                                            }}
                                        >
                                            <span 
                                                className="badge mb-2" 
                                                style={{ background: "rgba(56, 189, 248, 0.1)", border: "1px solid rgba(56, 189, 248, 0.3)", color: "#38bdf8", padding: "4px 10px", borderRadius: "9999px", fontSize: "11.5px", fontWeight: "700" }}
                                            >
                                                DIRECT ADVISORY
                                            </span>
                                            <h4 className="fw-bold mb-2" style={{ color: "#ffffff" }}>Book Strategy Session</h4>
                                            <p className="small mb-3" style={{ lineHeight: "1.6", color: "#94a3b8" }}>
                                                Connect directly with our principal architects to scope your {service.shortTitle} initiative and evaluate technical feasibility.
                                            </p>
                                            <MotionLinkWrapper className="w-100">
                                                <Link 
                                                    href={`/contact-us?interest=${service.slug}`} 
                                                    className="btn btn-style-one sidebar-cta-btn w-100 py-3 d-flex align-items-center justify-content-center"
                                                    style={{ background: "linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)", border: "none", borderRadius: "10px", fontWeight: "600", color: "#ffffff" }}
                                                >
                                                    <span>Schedule 30-Min Call</span>
                                                    <i className="fas fa-arrow-right ms-2" />
                                                </Link>
                                            </MotionLinkWrapper>
                                        </div>

                                        {/* Other Consulting Practices Navigation Widget */}
                                        <div className="sidebar-widget p-4 mb-4" style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "22px" }}>
                                            <h5 className="fw-bold mb-3" style={{ color: "#ffffff", fontSize: "17px" }}>
                                                Consulting Practices
                                            </h5>
                                            <ul className="p-0 m-0" style={{ listStyle: "none" }}>
                                                {consultingServices.map((cs) => {
                                                    const isActive = cs.slug === service.slug;
                                                    return (
                                                        <li key={cs.slug} className="mb-2">
                                                            <Link 
                                                                href={cs.href} 
                                                                className="d-flex align-items-center justify-content-between p-2 px-3 rounded-3 text-decoration-none transition-all"
                                                                style={{
                                                                    background: isActive ? "rgba(99, 102, 241, 0.25)" : "rgba(255, 255, 255, 0.04)",
                                                                    color: isActive ? "#ffffff" : "#94a3b8",
                                                                    border: isActive ? "1px solid rgba(99, 102, 241, 0.5)" : "1px solid rgba(255, 255, 255, 0.06)",
                                                                    fontSize: "14px",
                                                                    transition: "all 0.2s ease"
                                                                }}
                                                            >
                                                                <span>{cs.title}</span>
                                                                <i className={`fas fa-chevron-right small ${isActive ? "text-white" : "text-muted"}`} />
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>

                                        {/* Need Custom Talent / Squads */}
                                        <div 
                                            className="sidebar-widget p-4 rounded-4" 
                                            style={{ background: "rgba(255, 255, 255, 0.035)", color: "#ffffff", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "22px" }}
                                        >
                                            <div className="d-flex align-items-center mb-3">
                                                <div 
                                                    className="rounded-circle d-flex align-items-center justify-content-center me-2"
                                                    style={{ width: "32px", height: "32px", background: "rgba(56, 189, 248, 0.15)", color: "#38bdf8" }}
                                                >
                                                    <i className="fas fa-users" />
                                                </div>
                                                <h5 className="fw-bold mb-0 text-white" style={{ fontSize: "16px" }}>Need Engineers?</h5>
                                            </div>
                                            <p className="small mb-3" style={{ color: "#94A3B8", lineHeight: "1.5" }}>
                                                Need hands-on engineers to implement the strategy? Hire forward-deployed engineers or dedicated AI pods within 48 hours.
                                            </p>
                                            <MotionLinkWrapper className="w-100">
                                                <Link 
                                                    href="/hire-engineers" 
                                                    className="btn btn-outline-light btn-sm w-100 py-2 d-flex align-items-center justify-content-center"
                                                    style={{ borderRadius: "8px", fontWeight: "600", borderColor: "rgba(255, 255, 255, 0.2)" }}
                                                >
                                                    <span>Hire Engineers On Demand</span>
                                                    <i className="fas fa-arrow-right ms-2" />
                                                </Link>
                                            </MotionLinkWrapper>
                                        </div>
                                    </div>
                                </FadeUp>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Banner */}
                <section className="consulting-cta-section mb-80" style={{ padding: "40px 0 60px 0" }}>
                    <div className="container">
                        <FadeUp delay={0.1} duration={0.65} y={30}>
                            <div 
                                className="bottom-cta-banner consulting-cta-box text-center p-5 rounded-4" 
                                style={{ 
                                    background: "linear-gradient(135deg, rgba(16, 22, 40, 0.95) 0%, rgba(10, 14, 28, 0.95) 100%)", 
                                    border: "1px solid rgba(255, 255, 255, 0.12)", 
                                    borderRadius: "24px", 
                                    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7)" 
                                }}
                            >
                                <span 
                                    className="badge mb-3" 
                                    style={{ border: "1px solid rgba(56, 189, 248, 0.35)", borderRadius: "9999px", background: "rgba(56, 189, 248, 0.08)", padding: "6px 18px", color: "#38bdf8", fontWeight: 700, fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}
                                >
                                    STRATEGIC ADVISORY
                                </span>
                                <h2 className="fw-bold mb-3" style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)" }}>
                                    Ready to Accelerate Your {service.shortTitle} Roadmap?
                                </h2>
                                <p className="mx-auto mb-4" style={{ color: "#94a3b8", maxWidth: "680px", fontSize: "1.1rem", lineHeight: "1.7" }}>
                                    Let’s discuss your current systems, evaluate bottlenecks, and formulate an actionable plan. No sales fluff, just senior engineering leadership.
                                </p>
                                <div className="d-flex flex-wrap justify-content-center gap-3">
                                    <MotionLinkWrapper>
                                        <Link 
                                            href={`/contact-us?interest=${service.slug}`} 
                                            className="btn btn-style-one px-4 py-3" 
                                            style={{ background: "linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)", border: "none", color: "#ffffff", borderRadius: "12px", fontWeight: "600", padding: "14px 28px" }}
                                        >
                                            Book a Consultation <i className="fas fa-arrow-right ms-2" />
                                        </Link>
                                    </MotionLinkWrapper>
                                    <MotionLinkWrapper>
                                        <Link 
                                            href="/consulting" 
                                            className="btn btn-style-two px-4 py-3" 
                                            style={{
                                                background: "rgba(255, 255, 255, 0.06)",
                                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                                color: "#ffffff",
                                                borderRadius: "12px",
                                                fontWeight: "600",
                                                padding: "14px 28px"
                                            }}
                                        >
                                            View All Consulting Practices <i className="fas fa-th-large ms-2" />
                                        </Link>
                                    </MotionLinkWrapper>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </section>
            </LayoutV1>
        </div>
    );
}
