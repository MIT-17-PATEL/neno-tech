"use client";
import React from "react";
import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Link from "next/link";

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
                <div className="container" style={{ paddingTop: "48px", paddingBottom: "16px" }}>
                    <div className="text-center mx-auto" style={{ maxWidth: "720px" }}>
                        <span
                            className="badge mb-3"
                            style={{
                                background: "#EEF2FF",
                                color: "#4F46E5",
                                border: "1px solid #C0D8FF",
                                padding: "6px 18px",
                                borderRadius: "9999px",
                                fontSize: "12px",
                                fontWeight: "700",
                                letterSpacing: "0.5px"
                            }}
                        >
                            {pillBadge}
                        </span>
                        <h1
                            className="fw-bold mb-3"
                            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0f172a", letterSpacing: "-0.5px", lineHeight: "1.1" }}
                        >
                            {heroTitle}
                        </h1>
                        <p className="text-muted mb-0" style={{ fontSize: "1.1rem", lineHeight: "1.7", maxWidth: "620px", margin: "0 auto" }}>
                            {heroDescription}
                        </p>
                    </div>
                </div>

                {/* Card Grid */}
                <div className="default-padding" style={{ paddingTop: "40px" }}>
                    <div className="container">
                        <div className="row g-4">
                            {cards.map((card, idx) => (
                                <div className={colClass} key={idx}>
                                    <Link
                                        href={card.href}
                                        className="text-decoration-none d-block h-100"
                                        style={{ color: "inherit" }}
                                    >
                                        <div
                                            className="h-100 rounded-4 p-4 d-flex flex-column"
                                            style={{
                                                background: "#ffffff",
                                                border: "1px solid #E2E8F0",
                                                transition: "transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease",
                                                cursor: "pointer",
                                            }}
                                            onMouseEnter={(e) => {
                                                const el = e.currentTarget;
                                                el.style.transform = "translateY(-4px)";
                                                el.style.boxShadow = "0 12px 32px rgba(79,70,229,0.10)";
                                                el.style.borderColor = "#C0D8FF";
                                            }}
                                            onMouseLeave={(e) => {
                                                const el = e.currentTarget;
                                                el.style.transform = "translateY(0)";
                                                el.style.boxShadow = "none";
                                                el.style.borderColor = "#E2E8F0";
                                            }}
                                        >
                                            {/* Icon */}
                                            {card.icon && (
                                                <div
                                                    className="mb-3 d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: "48px",
                                                        height: "48px",
                                                        borderRadius: "12px",
                                                        background: "#EEF2FF",
                                                        color: "#4F46E5",
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
                                                        background: "#F0F6FF",
                                                        color: "#4F46E5",
                                                        border: "1px solid #C0D8FF",
                                                        padding: "3px 10px",
                                                        borderRadius: "9999px",
                                                        fontSize: "10.5px",
                                                        fontWeight: "700"
                                                    }}
                                                >
                                                    {card.badge}
                                                </span>
                                            )}

                                            {/* Title */}
                                            <h4
                                                className="fw-bold mb-2"
                                                style={{ color: "#0f172a", fontSize: "17px", lineHeight: "1.35" }}
                                            >
                                                {card.title}
                                            </h4>

                                            {/* Description */}
                                            <p
                                                className="mb-0 flex-grow-1"
                                                style={{ color: "#64748B", fontSize: "14px", lineHeight: "1.65" }}
                                            >
                                                {card.description}
                                            </p>

                                            {/* CTA Link */}
                                            <div
                                                className="mt-3 pt-3 d-flex align-items-center"
                                                style={{ borderTop: "1px solid #F1F5F9" }}
                                            >
                                                <span
                                                    className="fw-semibold"
                                                    style={{ fontSize: "14px", color: "#4F46E5" }}
                                                >
                                                    Learn More
                                                </span>
                                                <i className="fas fa-arrow-right ms-2" style={{ fontSize: "12px", color: "#4F46E5" }} />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* Bottom CTA Banner */}
                        <div
                            className="text-center p-5 rounded-4 mt-60"
                            style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 100%)", border: "1px solid #C0D8FF" }}
                        >
                            <span
                                className="badge mb-3"
                                style={{ background: "#F0F6FF", border: "1px solid #C0D8FF", color: "#4F46E5", padding: "6px 16px", borderRadius: "9999px", fontWeight: "700" }}
                            >
                                {pillBadge}
                            </span>
                            <h2 className="fw-bold mb-3" style={{ color: "#0f172a", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                                Not Sure Where to Start?
                            </h2>
                            <p className="text-muted mx-auto mb-4" style={{ maxWidth: "580px", fontSize: "16px", lineHeight: "1.6" }}>
                                Book a free 30-minute discovery call. Our team will help you identify the right fit and define a clear next step — no commitment required.
                            </p>
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                <Link
                                    href={ctaHref}
                                    className="btn btn-style-one px-4 py-3"
                                    style={{ background: "#4F46E5", border: "1px solid #4F46E5", color: "#ffffff", borderRadius: "10px", fontWeight: "600" }}
                                >
                                    {ctaLabel} <i className="fas fa-arrow-right ms-2" />
                                </Link>
                                {ctaSecondaryLabel && ctaSecondaryHref && (
                                    <Link
                                        href={ctaSecondaryHref}
                                        className="btn btn-style-two px-4 py-3"
                                        style={{ background: "#ffffff", border: "1px solid #E2E8F0", color: "#0f172a", borderRadius: "10px", fontWeight: "600" }}
                                    >
                                        {ctaSecondaryLabel}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* bottom spacer */}
                <div style={{ paddingBottom: "60px" }} />
            </LayoutV1>
        </div>
    );
}
