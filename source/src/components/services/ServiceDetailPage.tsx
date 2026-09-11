"use client";
import React from "react";
import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Link from "next/link";
import { ServiceItem, serviceItems } from "@/data/servicesData";
import { FadeUp, StaggerContainer, StaggerItem, MotionGlassCard, MotionLinkWrapper } from "@/components/animation/FramerMotionSystem";

interface ServiceDetailPageProps {
    service: ServiceItem;
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                <BreadCrumb
                    title={service.pillBadge}
                    breadCrumb={`Home / Services / ${service.shortTitle}`}
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
                                            style={{ fontSize: "2.5rem", fontWeight: "800", color: "#ffffff", letterSpacing: "-0.5px" }}
                                        >
                                            {service.title}
                                        </h1>
                                        <p className="lead mb-4" style={{ color: "#94a3b8", fontSize: "1.15rem", lineHeight: "1.7" }}>
                                            {service.description}
                                        </p>
                                    </FadeUp>

                                    {/* Overview Card */}
                                    <FadeUp delay={0.1} duration={0.6} y={25}>
                                        <MotionGlassCard className="mb-40">
                                            <div className="p-4 rounded-4" style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(16px)" }}>
                                                <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
                                                    <h4 className="fw-bold mb-0" style={{ color: "#ffffff" }}>Service Overview</h4>
                                                    <span
                                                        className="badge p-2 px-3"
                                                        style={{ background: "rgba(56, 189, 248, 0.1)", color: "#38bdf8", border: "1px solid rgba(56, 189, 248, 0.25)", borderRadius: "9999px", fontWeight: "600" }}
                                                    >
                                                        <i className="far fa-clock me-1" /> Typical: {service.duration}
                                                    </span>
                                                </div>
                                                <p className="mb-0" style={{ lineHeight: "1.8", color: "#94a3b8" }}>
                                                    {service.overview}
                                                </p>
                                            </div>
                                        </MotionGlassCard>
                                    </FadeUp>

                                    {/* Core Capabilities */}
                                    <FadeUp delay={0.08} duration={0.5} y={20}>
                                        <h3 className="mt-40 mb-20 fw-bold" style={{ color: "#ffffff" }}>
                                            Core Capabilities & Scope
                                        </h3>
                                    </FadeUp>
                                    <StaggerContainer stagger={0.06} className="row g-3 mb-40">
                                        {service.capabilities.map((cap, index) => (
                                            <StaggerItem className="col-md-6" key={index}>
                                                <MotionGlassCard
                                                    className="h-100"
                                                    enableGlowTrace={false}
                                                >
                                                    <div
                                                        className="p-3 rounded-3 h-100 d-flex align-items-start"
                                                        style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.07)" }}
                                                    >
                                                        <i className="fas fa-check-circle mt-1 me-2 flex-shrink-0" style={{ color: "#38bdf8" }} />
                                                        <span style={{ color: "#cbd5e1", fontSize: "14.5px", fontWeight: "500" }}>{cap}</span>
                                                    </div>
                                                </MotionGlassCard>
                                            </StaggerItem>
                                        ))}
                                    </StaggerContainer>

                                    {/* Deliverables */}
                                    <FadeUp delay={0.08} duration={0.6} y={20}>
                                        <h3 className="mt-40 mb-20 fw-bold" style={{ color: "#ffffff" }}>
                                            Tangible Deliverables You Receive
                                        </h3>
                                        <ul className="check-list mb-40 p-0" style={{ listStyle: "none" }}>
                                            {service.deliverables.map((deliv, index) => (
                                                <li
                                                    key={index}
                                                    className="d-flex align-items-start mb-3"
                                                    style={{ color: "#cbd5e1", fontSize: "15px" }}
                                                >
                                                    <i className="fas fa-arrow-right me-3 mt-1 flex-shrink-0" style={{ color: "#38bdf8" }} />
                                                    <span>{deliv}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </FadeUp>

                                    {/* Technology Stack */}
                                    <FadeUp delay={0.08} duration={0.6} y={20}>
                                        <h3 className="mt-40 mb-20 fw-bold" style={{ color: "#ffffff" }}>
                                            Technology Stack
                                        </h3>
                                        <div className="d-flex flex-wrap gap-2 mb-40">
                                            {service.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="badge"
                                                    style={{
                                                        background: "rgba(255, 255, 255, 0.04)",
                                                        color: "#cbd5e1",
                                                        border: "1px solid rgba(255, 255, 255, 0.08)",
                                                        padding: "8px 14px",
                                                        borderRadius: "8px",
                                                        fontSize: "13px",
                                                        fontWeight: "500"
                                                    }}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </FadeUp>

                                    {/* Engagement Process */}
                                    <FadeUp delay={0.08} duration={0.5} y={20}>
                                        <h3 className="mt-40 mb-20 fw-bold" style={{ color: "#ffffff" }}>
                                            How We Deliver
                                        </h3>
                                    </FadeUp>
                                    <StaggerContainer stagger={0.08} className="row g-3 mb-40">
                                        {service.process.map((step, index) => (
                                            <StaggerItem className="col-md-6" key={index}>
                                                <MotionGlassCard className="h-100">
                                                    <div
                                                        className="p-4 rounded-3 h-100"
                                                        style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(16px)" }}
                                                    >
                                                        <div
                                                            className="mb-2 fw-bold"
                                                            style={{ color: "#38bdf8", fontSize: "13px", letterSpacing: "1px" }}
                                                        >
                                                            STEP {step.step}
                                                        </div>
                                                        <h5 className="fw-bold mb-2" style={{ color: "#ffffff", fontSize: "16px" }}>{step.title}</h5>
                                                        <p className="mb-0 small" style={{ color: "#94a3b8", lineHeight: "1.6" }}>{step.desc}</p>
                                                    </div>
                                                </MotionGlassCard>
                                            </StaggerItem>
                                        ))}
                                    </StaggerContainer>

                                    {/* Benefits & Use Cases */}
                                    <StaggerContainer stagger={0.1} className="row g-4 mb-40">
                                        <StaggerItem className="col-md-6">
                                            <MotionGlassCard className="h-100" enableGlowTrace={false}>
                                                <div className="p-4 rounded-4 h-100" style={{ background: "rgba(16, 185, 129, 0.06)", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                                                    <h5 className="fw-bold mb-3" style={{ color: "#34d399" }}>
                                                        <i className="fas fa-check-double me-2" /> Business Impact
                                                    </h5>
                                                    <ul className="p-0 m-0" style={{ listStyle: "none" }}>
                                                        {service.benefits.map((b, idx) => (
                                                            <li key={idx} className="small mb-2 d-flex align-items-start" style={{ color: "#a7f3d0" }}>
                                                                <i className="fas fa-check me-2 mt-1 flex-shrink-0" style={{ color: "#34d399" }} />
                                                                <span>{b}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </MotionGlassCard>
                                        </StaggerItem>
                                        <StaggerItem className="col-md-6">
                                            <MotionGlassCard className="h-100" enableGlowTrace={false}>
                                                <div className="p-4 rounded-4 h-100" style={{ background: "rgba(56, 189, 248, 0.06)", border: "1px solid rgba(56, 189, 248, 0.2)" }}>
                                                    <h5 className="fw-bold mb-3" style={{ color: "#38bdf8" }}>
                                                        <i className="fas fa-lightbulb me-2" /> Common Scenarios
                                                    </h5>
                                                    <ul className="p-0 m-0" style={{ listStyle: "none" }}>
                                                        {service.useCases.map((u, idx) => (
                                                            <li key={idx} className="small mb-2 d-flex align-items-start" style={{ color: "#bae6fd" }}>
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
                                        {/* CTA Box */}
                                        <div
                                            className="sidebar-widget p-4 rounded-4 mb-4"
                                            style={{ background: "linear-gradient(135deg, rgba(30, 27, 75, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)", border: "1px solid rgba(99, 102, 241, 0.3)", backdropFilter: "blur(20px)" }}
                                        >
                                            <span
                                                className="badge mb-2"
                                                style={{ background: "rgba(56, 189, 248, 0.12)", border: "1px solid rgba(56, 189, 248, 0.35)", color: "#38bdf8", padding: "4px 12px", borderRadius: "9999px", fontSize: "11.5px", fontWeight: "700" }}
                                            >
                                                GET STARTED
                                            </span>
                                            <h4 className="fw-bold mb-2 text-white">Start Your {service.shortTitle} Project</h4>
                                            <p className="small mb-3" style={{ color: "#94a3b8", lineHeight: "1.6" }}>
                                                Connect with our engineers to scope your {service.shortTitle} initiative and get a delivery roadmap.
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

                                        {/* All Services Navigation */}
                                        <div className="sidebar-widget p-4 rounded-4 mb-4" style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(16px)" }}>
                                            <h5 className="fw-bold mb-3" style={{ color: "#ffffff", fontSize: "17px" }}>
                                                All Services
                                            </h5>
                                            <ul className="p-0 m-0" style={{ listStyle: "none" }}>
                                                {serviceItems.map((s) => {
                                                    const isActive = s.slug === service.slug;
                                                    return (
                                                        <li key={s.slug} className="mb-2">
                                                            <Link
                                                                href={s.href}
                                                                className="d-flex align-items-center justify-content-between p-2 px-3 rounded-3 text-decoration-none"
                                                                style={{
                                                                    background: isActive ? "#4F46E5" : "rgba(255, 255, 255, 0.03)",
                                                                    color: isActive ? "#ffffff" : "#cbd5e1",
                                                                    border: isActive ? "1px solid #4F46E5" : "1px solid rgba(255, 255, 255, 0.07)",
                                                                    fontSize: "14px",
                                                                    transition: "all 0.2s ease"
                                                                }}
                                                            >
                                                                <span>{s.title}</span>
                                                                <i className={`fas fa-chevron-right small ${isActive ? "text-white" : "text-muted"}`} />
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>

                                        {/* Hire Engineers CTA */}
                                        <div
                                            className="sidebar-widget p-4 rounded-4"
                                            style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(16px)" }}
                                        >
                                            <div className="d-flex align-items-center mb-3">
                                                <div
                                                    className="rounded-circle d-flex align-items-center justify-content-center me-2"
                                                    style={{ width: "32px", height: "32px", background: "rgba(56, 189, 248, 0.12)", color: "#38bdf8" }}
                                                >
                                                    <i className="fas fa-users" />
                                                </div>
                                                <h5 className="fw-bold mb-0 text-white" style={{ fontSize: "16px" }}>Need Engineers?</h5>
                                            </div>
                                            <p className="small mb-3" style={{ color: "#94a3b8", lineHeight: "1.5" }}>
                                                Need hands-on engineers to implement this? Hire forward-deployed engineers or dedicated AI pods within 48 hours.
                                            </p>
                                            <MotionLinkWrapper className="w-100">
                                                <Link
                                                    href="/hire-engineers"
                                                    className="btn btn-outline-light btn-sm w-100 py-2 d-flex align-items-center justify-content-center"
                                                    style={{ borderRadius: "8px", fontWeight: "600", borderColor: "rgba(255, 255, 255, 0.25)" }}
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
                                className="consulting-cta-box text-center p-5 rounded-4"
                                style={{ background: "linear-gradient(135deg, rgba(30, 27, 75, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)", border: "1px solid rgba(99, 102, 241, 0.3)", backdropFilter: "blur(20px)", boxShadow: "0 16px 36px rgba(0, 0, 0, 0.4)" }}
                            >
                                <span
                                    className="badge mb-3"
                                    style={{ background: "rgba(56, 189, 248, 0.12)", border: "1px solid rgba(56, 189, 248, 0.35)", color: "#38bdf8", padding: "6px 16px", borderRadius: "9999px", fontWeight: "700" }}
                                >
                                    ENGINEERING SERVICES
                                </span>
                                <h2 className="fw-bold mb-3" style={{ color: "#ffffff", fontSize: "32px" }}>
                                    Ready to Start Your {service.shortTitle} Project?
                                </h2>
                                <p className="mx-auto mb-4" style={{ color: "#cbd5e1", maxWidth: "620px", fontSize: "16px", lineHeight: "1.6" }}>
                                    Let&apos;s discuss your requirements and define a clear delivery plan. No fluff — just senior engineers and measurable outcomes.
                                </p>
                                <div className="d-flex flex-wrap justify-content-center gap-3">
                                    <MotionLinkWrapper>
                                        <Link
                                            href={`/contact-us?interest=${service.slug}`}
                                            className="btn btn-style-one px-4 py-3"
                                            style={{ background: "linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)", border: "none", color: "#ffffff", borderRadius: "10px", fontWeight: "600" }}
                                        >
                                            Book a Discovery Call <i className="fas fa-arrow-right ms-2" />
                                        </Link>
                                    </MotionLinkWrapper>
                                    <MotionLinkWrapper>
                                        <Link
                                            href="/services"
                                            className="btn btn-style-two px-4 py-3"
                                            style={{ background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.15)", color: "#ffffff", borderRadius: "10px", fontWeight: "600" }}
                                        >
                                            View All Services <i className="fas fa-th-large ms-2" />
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
