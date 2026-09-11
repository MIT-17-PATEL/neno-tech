"use client";
import React from "react";
import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem, MotionGlassCard, MotionLinkWrapper } from "@/components/animation/FramerMotionSystem";

export interface OverviewCard {
    title: string;
    description: string;
    href: string;
    icon?: string;          // Font Awesome class e.g. "fas fa-robot"
    badge?: string;         // Optional small label e.g. "AI-NATIVE"
}

export interface CategoryOverviewPageProps {
    /** Text shown in the pill badge above the hero title */
    pillBadge: string;
    /** BreadCrumb trail e.g. "Home / Hire Engineers" */
    breadCrumb: string;
    /** Main page H1 */
    heroTitle: string;
    /** 1–2 sentence description shown below the title */
    heroDescription: string;
    /** CTA label in the bottom banner */
    ctaLabel: string;
    /** CTA href */
    ctaHref: string;
    /** Second CTA label */
    ctaSecondaryLabel?: string;
    /** Second CTA href */
    ctaSecondaryHref?: string;
    /** Cards to render in the grid */
    cards: OverviewCard[];
    /** Number of columns on lg screens (default 3) */
    cols?: 2 | 3 | 4;
}

export default function CategoryOverviewPage({
    pillBadge,
    breadCrumb,
    heroTitle,
    heroDescription,
    ctaLabel,
    ctaHref,
    ctaSecondaryLabel,
    ctaSecondaryHref,
    cards,
    cols = 3,
}: CategoryOverviewPageProps) {
    const colClass = cols === 4 ? "col-lg-3 col-md-6" : cols === 2 ? "col-lg-6" : "col-lg-4 col-md-6";

    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                <BreadCrumb title={pillBadge} breadCrumb={breadCrumb} />

                {/* Page Hero */}
                <div className="container" style={{ paddingTop: "28px", paddingBottom: "16px" }}>
                    <FadeUp delay={0.08} duration={0.65} y={28}>
                        <div className="text-center mx-auto" style={{ maxWidth: "780px" }}>
                            <h1
                                className="fw-bold mb-3"
                                style={{ fontSize: "clamp(2rem, 4.2vw, 3.2rem)", color: "#ffffff", letterSpacing: "-0.5px", lineHeight: "1.15" }}
                            >
                                {heroTitle}
                            </h1>
                            <p className="mb-0" style={{ fontSize: "1.12rem", lineHeight: "1.7", color: "#94a3b8", maxWidth: "660px", margin: "0 auto" }}>
                                {heroDescription}
                            </p>
                        </div>
                    </FadeUp>
                </div>

                {/* Card Grid */}
                <div className="default-padding" style={{ paddingTop: "40px" }}>
                    <div className="container">
                        <StaggerContainer stagger={0.08} className="row g-4">
                            {cards.map((card, idx) => (
                                <StaggerItem className={colClass} key={idx}>
                                    <Link
                                        href={card.href}
                                        className="text-decoration-none d-block h-100"
                                        style={{ color: "inherit" }}
                                    >
                                        <MotionGlassCard className="h-100">
                                            <div
                                                className="h-100 p-4 d-flex flex-column"
                                                style={{
                                                    background: "rgba(255, 255, 255, 0.035)",
                                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                                    backdropFilter: "blur(16px)",
                                                    WebkitBackdropFilter: "blur(16px)",
                                                    borderRadius: "22px",
                                                    transition: "border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease",
                                                    cursor: "pointer",
                                                    boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.6)"
                                                }}
                                                onMouseEnter={(e) => {
                                                    const el = e.currentTarget;
                                                    el.style.background = "rgba(255, 255, 255, 0.055)";
                                                    el.style.boxShadow = "0 20px 40px -10px rgba(0, 0, 0, 0.8)";
                                                    el.style.borderColor = "rgba(255, 255, 255, 0.16)";
                                                }}
                                                onMouseLeave={(e) => {
                                                    const el = e.currentTarget;
                                                    el.style.background = "rgba(255, 255, 255, 0.035)";
                                                    el.style.boxShadow = "0 10px 30px -10px rgba(0, 0, 0, 0.6)";
                                                    el.style.borderColor = "rgba(255, 255, 255, 0.08)";
                                                }}
                                            >
                                                {/* Icon */}
                                                {card.icon && (
                                                    <div
                                                        className="mb-3 d-flex align-items-center justify-content-center"
                                                        style={{
                                                            width: "48px",
                                                            height: "48px",
                                                            borderRadius: "14px",
                                                            background: "rgba(99, 102, 241, 0.15)",
                                                            border: "1px solid rgba(99, 102, 241, 0.28)",
                                                            color: "#818cf8",
                                                            fontSize: "20px",
                                                            flexShrink: 0
                                                        }}
                                                    >
                                                        <i className={card.icon} />
                                                    </div>
                                                )}

                                                {/* Badge */}
                                                {card.badge && (
                                                    <span
                                                        className="badge mb-2 align-self-start"
                                                        style={{
                                                            background: "rgba(56, 189, 248, 0.1)",
                                                            color: "#38bdf8",
                                                            border: "1px solid rgba(56, 189, 248, 0.25)",
                                                            padding: "4px 10px",
                                                            borderRadius: "9999px",
                                                            fontSize: "11px",
                                                            fontWeight: "600",
                                                            letterSpacing: "0.5px"
                                                        }}
                                                    >
                                                        {card.badge}
                                                    </span>
                                                )}

                                                {/* Title */}
                                                <h4
                                                    className="fw-bold mb-2"
                                                    style={{ color: "#ffffff", fontSize: "18px", lineHeight: "1.35" }}
                                                >
                                                    {card.title}
                                                </h4>

                                                {/* Description */}
                                                <p
                                                    className="mb-0 flex-grow-1"
                                                    style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.65" }}
                                                >
                                                    {card.description}
                                                </p>

                                                {/* CTA Link */}
                                                <div
                                                    className="mt-3 pt-3 d-flex align-items-center"
                                                    style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}
                                                >
                                                    <span
                                                        className="fw-semibold"
                                                        style={{ fontSize: "14px", color: "#38bdf8" }}
                                                    >
                                                        Learn More
                                                    </span>
                                                    <i className="fas fa-arrow-right ms-2" style={{ fontSize: "12px", color: "#38bdf8" }} />
                                                </div>
                                            </div>
                                        </MotionGlassCard>
                                    </Link>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        {/* Bottom CTA Banner */}
                        <FadeUp delay={0.15} duration={0.65} y={35}>
                            <div
                                className="text-center p-5 rounded-4 mt-60 position-relative overflow-hidden"
                                style={{
                                    background: "linear-gradient(135deg, rgba(16, 22, 40, 0.95) 0%, rgba(10, 14, 28, 0.95) 100%)",
                                    border: "1px solid rgba(255, 255, 255, 0.12)",
                                    borderRadius: "24px",
                                    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7)"
                                }}
                            >
                                <span
                                    className="badge mb-3"
                                    style={{
                                        background: "rgba(56, 189, 248, 0.1)",
                                        border: "1px solid rgba(56, 189, 248, 0.3)",
                                        color: "#38bdf8",
                                        padding: "6px 18px",
                                        borderRadius: "9999px",
                                        fontWeight: "700",
                                        fontSize: "12px",
                                        letterSpacing: "0.5px"
                                    }}
                                >
                                    {pillBadge}
                                </span>
                                <h2 className="fw-bold mb-3" style={{ color: "#ffffff", fontSize: "clamp(1.6rem, 3vw, 2.3rem)" }}>
                                    Not Sure Where to Start?
                                </h2>
                                <p className="mx-auto mb-4" style={{ maxWidth: "580px", fontSize: "16px", lineHeight: "1.6", color: "#94a3b8" }}>
                                    Book a free 30-minute discovery call. Our team will help you identify the right fit and define a clear next step, with no commitment required.
                                </p>
                                <div className="d-flex flex-wrap justify-content-center gap-3">
                                    <MotionLinkWrapper>
                                        <Link
                                            href={ctaHref}
                                            className="btn btn-style-one px-4 py-3"
                                            style={{ background: "linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)", border: "none", color: "#ffffff", borderRadius: "10px", fontWeight: "600" }}
                                        >
                                            {ctaLabel} <i className="fas fa-arrow-right ms-2" />
                                        </Link>
                                    </MotionLinkWrapper>
                                    {ctaSecondaryLabel && ctaSecondaryHref && (
                                        <MotionLinkWrapper>
                                            <Link
                                                href={ctaSecondaryHref}
                                                className="btn px-4 py-3"
                                                style={{
                                                    background: "rgba(255, 255, 255, 0.06)",
                                                    border: "1px solid rgba(255, 255, 255, 0.15)",
                                                    color: "#ffffff",
                                                    borderRadius: "10px",
                                                    fontWeight: "600"
                                                }}
                                            >
                                                {ctaSecondaryLabel}
                                            </Link>
                                        </MotionLinkWrapper>
                                    )}
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>

                {/* bottom spacer */}
                <div style={{ paddingBottom: "60px" }} />
            </LayoutV1>
        </div>
    );
}
