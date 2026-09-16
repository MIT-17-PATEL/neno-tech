"use client";
import React from "react";
import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Link from "next/link";
import { ProductItem, productItems } from "@/data/productsData";
import { FadeUp, StaggerContainer, StaggerItem, MotionGlassCard, MotionLinkWrapper } from "@/components/animation/FramerMotionSystem";

interface ProductDetailPageProps {
    product: ProductItem;
}

export default function ProductDetailPage({ product }: ProductDetailPageProps) {
    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                <BreadCrumb
                    title={product.pillBadge}
                    breadCrumb={`Home / Products / ${product.shortTitle}`}
                />

                <div className="services-details-area default-padding" style={{ paddingTop: "40px" }}>
                    <div className="container">
                        <div className="row">
                            {/* Main Content Column */}
                            <div className="col-lg-8">
                                <div className="service-details-content">
                                    <FadeUp delay={0.06} duration={0.6} y={24}>
                                        {/* Category badge + title */}
                                        <span
                                            className="badge mb-3"
                                            style={{ background: "rgba(56, 189, 248, 0.1)", color: "#38bdf8", border: "1px solid rgba(56, 189, 248, 0.3)", padding: "5px 16px", borderRadius: "9999px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.5px" }}
                                        >
                                            {product.category}
                                        </span>
                                        <h1
                                            className="title mb-2"
                                            style={{ fontSize: "2.6rem", fontWeight: "800", color: "#ffffff", letterSpacing: "-0.5px" }}
                                        >
                                            {product.title}
                                        </h1>
                                        <p
                                            className="mb-2 fw-semibold"
                                            style={{ fontSize: "1.15rem", color: "#38bdf8" }}
                                        >
                                            {product.tagline}
                                        </p>
                                        <p className="lead mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#94a3b8" }}>
                                            {product.description}
                                        </p>
                                    </FadeUp>

                                    {/* Highlights / Key Stats Bar */}
                                    <FadeUp delay={0.1} duration={0.6} y={20}>
                                        <div
                                            className="row g-3 mb-40"
                                            style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderRadius: "20px", padding: "22px 12px", margin: "0" }}
                                        >
                                            {product.highlights.map((h, idx) => (
                                                <div className="col-6 col-md-3 text-center" key={idx}>
                                                    <div
                                                        className="d-inline-flex align-items-center justify-content-center mb-2"
                                                        style={{ width: "42px", height: "42px", borderRadius: "12px", background: "rgba(99, 102, 241, 0.15)", border: "1px solid rgba(99, 102, 241, 0.3)", color: "#818cf8" }}
                                                    >
                                                        <i className={h.icon} style={{ fontSize: "16px" }} />
                                                    </div>
                                                    <div className="fw-bold" style={{ fontSize: "22px", color: "#ffffff", lineHeight: "1.2" }}>{h.value}</div>
                                                    <div style={{ fontSize: "12px", color: "#94a3b8", fontWeight: "500", textTransform: "uppercase", letterSpacing: "0.5px" }}>{h.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </FadeUp>

                                    {/* Overview */}
                                    <FadeUp delay={0.1} duration={0.6} y={25}>
                                        <MotionGlassCard className="mb-40">
                                            <div className="p-4 rounded-4" style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderRadius: "20px" }}>
                                                <h4 className="fw-bold mb-3" style={{ color: "#ffffff" }}>Product Overview</h4>
                                                <p className="mb-0" style={{ lineHeight: "1.8", color: "#94a3b8" }}>
                                                    {product.overview}
                                                </p>
                                            </div>
                                        </MotionGlassCard>
                                    </FadeUp>

                                    {/* Features */}
                                    <FadeUp delay={0.08} duration={0.5} y={20}>
                                        <h3 className="mt-40 mb-20 fw-bold" style={{ color: "#ffffff" }}>
                                            Key Features
                                        </h3>
                                    </FadeUp>
                                    <StaggerContainer stagger={0.06} className="row g-3 mb-40">
                                        {product.features.map((feat, index) => (
                                            <StaggerItem className="col-md-6" key={index}>
                                                <MotionGlassCard className="h-100" enableGlowTrace={false}>
                                                    <div
                                                        className="p-3 h-100 d-flex align-items-start"
                                                        style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "14px", backdropFilter: "blur(12px)" }}
                                                    >
                                                        <i className="fas fa-check-circle mt-1 me-2 flex-shrink-0" style={{ color: "#38bdf8" }} />
                                                        <span style={{ color: "#e2e8f0", fontSize: "14.5px", fontWeight: "500" }}>{feat}</span>
                                                    </div>
                                                </MotionGlassCard>
                                            </StaggerItem>
                                        ))}
                                    </StaggerContainer>

                                    {/* Setup / Go-Live Process */}
                                    <FadeUp delay={0.08} duration={0.5} y={20}>
                                        <h3 className="mt-40 mb-20 fw-bold" style={{ color: "#ffffff" }}>
                                            Getting Started
                                        </h3>
                                    </FadeUp>
                                    <StaggerContainer stagger={0.08} className="row g-3 mb-40">
                                        {product.process.map((step, index) => (
                                            <StaggerItem className="col-md-6" key={index}>
                                                <MotionGlassCard className="h-100">
                                                    <div
                                                        className="p-4 h-100"
                                                        style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "16px" }}
                                                    >
                                                        <div className="mb-2 fw-bold" style={{ color: "#38bdf8", fontSize: "12px", letterSpacing: "1px" }}>
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
                                                <div className="p-4 rounded-4 h-100" style={{ background: "rgba(34, 197, 94, 0.06)", border: "1px solid rgba(34, 197, 94, 0.2)", borderRadius: "20px" }}>
                                                    <h5 className="fw-bold mb-3" style={{ color: "#4ade80" }}>
                                                        <i className="fas fa-check-double me-2" /> Key Benefits
                                                    </h5>
                                                    <ul className="p-0 m-0" style={{ listStyle: "none" }}>
                                                        {product.benefits.map((b, idx) => (
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
                                                        <i className="fas fa-lightbulb me-2" /> Ideal For
                                                    </h5>
                                                    <ul className="p-0 m-0" style={{ listStyle: "none" }}>
                                                        {product.useCases.map((u, idx) => (
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

                                    {/* Integrations */}
                                    <FadeUp delay={0.08} duration={0.6} y={20}>
                                        <h3 className="mt-40 mb-20 fw-bold" style={{ color: "#ffffff" }}>
                                            Integrations
                                        </h3>
                                        <div className="d-flex flex-wrap gap-2 mb-40">
                                            {product.integrations.map((integ, index) => (
                                                <span
                                                    key={index}
                                                    className="badge"
                                                    style={{
                                                        background: "rgba(255, 255, 255, 0.05)",
                                                        color: "#e2e8f0",
                                                        border: "1px solid rgba(255, 255, 255, 0.1)",
                                                        padding: "8px 14px",
                                                        borderRadius: "8px",
                                                        fontSize: "13px",
                                                        fontWeight: "500"
                                                    }}
                                                >
                                                    {integ}
                                                </span>
                                            ))}
                                        </div>
                                    </FadeUp>
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
                                                REQUEST DEMO
                                            </span>
                                            <h4 className="fw-bold mb-2" style={{ color: "#ffffff" }}>See {product.shortTitle} in Action</h4>
                                            <p className="small mb-3" style={{ lineHeight: "1.6", color: "#94a3b8" }}>
                                                Book a personalised demo with our product team and see how {product.shortTitle} fits your workflows.
                                            </p>
                                            <MotionLinkWrapper className="w-100">
                                                <Link
                                                    href={`/contact-us?interest=${product.slug}`}
                                                    className="btn btn-style-one sidebar-cta-btn w-100 py-3 d-flex align-items-center justify-content-center"
                                                    style={{ background: "linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)", border: "none", borderRadius: "10px", fontWeight: "600", color: "#ffffff" }}
                                                >
                                                    <span>Book a Demo</span>
                                                    <i className="fas fa-arrow-right ms-2" />
                                                </Link>
                                            </MotionLinkWrapper>
                                        </div>

                                        {/* All Products Navigation */}
                                        <div className="sidebar-widget p-4 mb-4" style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "22px" }}>
                                            <h5 className="fw-bold mb-3" style={{ color: "#ffffff", fontSize: "17px" }}>
                                                Neno Products
                                            </h5>
                                            <ul className="p-0 m-0" style={{ listStyle: "none" }}>
                                                {productItems.map((p) => {
                                                    const isActive = p.slug === product.slug;
                                                    return (
                                                        <li key={p.slug} className="mb-2">
                                                            <Link
                                                                href={p.href}
                                                                className="d-flex align-items-center justify-content-between p-2 px-3 rounded-3 text-decoration-none"
                                                                style={{
                                                                    background: isActive ? "rgba(99, 102, 241, 0.25)" : "rgba(255, 255, 255, 0.04)",
                                                                    color: isActive ? "#ffffff" : "#94a3b8",
                                                                    border: isActive ? "1px solid rgba(99, 102, 241, 0.5)" : "1px solid rgba(255, 255, 255, 0.06)",
                                                                    fontSize: "14px",
                                                                    transition: "all 0.2s ease"
                                                                }}
                                                            >
                                                                <span>{p.title}</span>
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
                                            style={{ background: "rgba(255, 255, 255, 0.035)", color: "#ffffff", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "22px" }}
                                        >
                                            <div className="d-flex align-items-center mb-3">
                                                <div
                                                    className="rounded-circle d-flex align-items-center justify-content-center me-2"
                                                    style={{ width: "32px", height: "32px", background: "rgba(56, 189, 248, 0.15)", color: "#38bdf8" }}
                                                >
                                                    <i className="fas fa-code" />
                                                </div>
                                                <h5 className="fw-bold mb-0 text-white" style={{ fontSize: "16px" }}>Need Custom Development?</h5>
                                            </div>
                                            <p className="small mb-3" style={{ color: "#94a3b8", lineHeight: "1.5" }}>
                                                Need custom integrations or bespoke features? Our engineers can extend any Neno product for your specific use case.
                                            </p>
                                            <MotionLinkWrapper className="w-100">
                                                <Link
                                                    href="/hire-engineers"
                                                    className="btn btn-outline-light btn-sm w-100 py-2 d-flex align-items-center justify-content-center"
                                                    style={{ borderRadius: "8px", fontWeight: "600", borderColor: "rgba(255, 255, 255, 0.2)" }}
                                                >
                                                    <span>Hire Engineers</span>
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
                                    style={{ background: "rgba(56, 189, 248, 0.1)", border: "1px solid rgba(56, 189, 248, 0.3)", color: "#38bdf8", padding: "6px 16px", borderRadius: "9999px", fontWeight: "700" }}
                                >
                                    NENO PRODUCTS
                                </span>
                                <h2 className="fw-bold mb-3" style={{ color: "#ffffff", fontSize: "32px" }}>
                                    Ready to Get Started with {product.shortTitle}?
                                </h2>
                                <p className="mx-auto mb-4" style={{ maxWidth: "620px", fontSize: "16px", lineHeight: "1.6", color: "#94a3b8" }}>
                                    Book a personalised demo and see exactly how {product.shortTitle}{" "}will fit your team&apos;s workflow, with zero commitment required.
                                </p>
                                <div className="d-flex flex-wrap justify-content-center gap-3">
                                    <MotionLinkWrapper>
                                        <Link
                                            href={`/contact-us?interest=${product.slug}`}
                                            className="btn btn-style-one px-4 py-3"
                                            style={{ background: "linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)", border: "none", color: "#ffffff", borderRadius: "10px", fontWeight: "600" }}
                                        >
                                            Book a Demo <i className="fas fa-arrow-right ms-2" />
                                        </Link>
                                    </MotionLinkWrapper>
                                    <MotionLinkWrapper>
                                        <Link
                                            href="/products"
                                            className="btn btn-style-two px-4 py-3"
                                            style={{
                                                background: "rgba(255, 255, 255, 0.06)",
                                                border: "1px solid rgba(255, 255, 255, 0.15)",
                                                color: "#ffffff",
                                                borderRadius: "10px",
                                                fontWeight: "600"
                                            }}
                                        >
                                            View All Products <i className="fas fa-th-large ms-2" />
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
