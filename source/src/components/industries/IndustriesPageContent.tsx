"use client";
import React from "react";
import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Link from "next/link";
import { industriesData } from "@/data/industriesData";
import {
    FadeUp,
    StaggerContainer,
    StaggerItem,
    MotionGlassCard,
    MotionLinkWrapper
} from "@/components/animation/FramerMotionSystem";


export default function IndustriesPageContent() {
    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                <BreadCrumb title="Industries" breadCrumb="Company / Industries" />

                {/* Hero Section */}
                <FadeUp>
                    <section style={{ paddingTop: "24px", paddingBottom: "48px", backgroundColor: "transparent" }}>
                        <div className="container">
                            <div className="text-center mx-auto" style={{ maxWidth: "840px" }}>
                                <span
                                    className="badge mb-3"
                                    style={{
                                        background: "rgba(56, 189, 248, 0.08)",
                                        color: "#38bdf8",
                                        border: "1px solid rgba(56, 189, 248, 0.35)",
                                        padding: "6px 20px",
                                        borderRadius: "9999px",
                                        fontSize: "12px",
                                        fontWeight: "700",
                                        letterSpacing: "0.5px"
                                    }}
                                >
                                    INDUSTRIES
                                </span>
                                <h1
                                    className="fw-bold mb-3"
                                    style={{
                                        fontSize: "clamp(2rem, 4vw, 3.1rem)",
                                        color: "#ffffff",
                                        letterSpacing: "-0.5px",
                                        lineHeight: "1.15"
                                    }}
                                >
                                    AI solutions designed around the way your industry works.
                                </h1>
                                <p
                                    className="lead mb-4"
                                    style={{
                                        fontSize: "1.125rem",
                                        lineHeight: "1.75",
                                        color: "#94a3b8",
                                        maxWidth: "700px",
                                        margin: "0 auto"
                                    }}
                                >
                                    Neno Technology builds practical AI systems, automation, intelligent workflows, and software solutions tailored to industry-specific workflows, compliance standards, and operational challenges.
                                </p>

                                <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                                    <MotionLinkWrapper>
                                        <Link
                                            href="/contact-us"
                                            className="btn btn-style-one px-4 py-3"
                                            style={{
                                                background: "#4F46E5",
                                                border: "1px solid #4F46E5",
                                                color: "#ffffff",
                                                borderRadius: "10px",
                                                fontWeight: "600",
                                                fontSize: "14px"
                                            }}
                                        >
                                            Talk to Our Team <i className="fas fa-arrow-right ms-2" />
                                        </Link>
                                    </MotionLinkWrapper>
                                    <MotionLinkWrapper>
                                        <Link
                                            href="/company/case-studies"
                                            className="btn btn-style-two px-4 py-3"
                                            style={{
                                                background: "rgba(255, 255, 255, 0.06)",
                                                border: "1px solid rgba(255, 255, 255, 0.15)",
                                                color: "#ffffff",
                                                borderRadius: "10px",
                                                fontWeight: "600",
                                                fontSize: "14px"
                                            }}
                                        >
                                            View Case Studies
                                        </Link>
                                    </MotionLinkWrapper>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeUp>

                {/* Industry Cards Grid */}
                <section
                    style={{
                        padding: "60px 0 90px 0",
                        backgroundColor: "transparent",
                        borderTop: "1px solid rgba(255, 255, 255, 0.06)"
                    }}
                >
                    <div className="container">
                        <StaggerContainer className="row g-4">
                            {industriesData.map((item, idx) => {
                                const isFifth = idx === 4;
                                return (
                                    <StaggerItem
                                        key={item.id}
                                        className={isFifth ? "col-12" : "col-lg-6 col-md-12"}
                                    >
                                        <MotionGlassCard
                                            className="h-100 p-4 p-md-5 rounded-4 d-flex flex-column justify-content-between"
                                            style={{
                                                backgroundColor: "rgba(255, 255, 255, 0.035)",
                                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                                backdropFilter: "blur(16px)",
                                                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)"
                                            }}
                                        >
                                            <div>
                                                {/* Header: Icon + Badge + Title */}
                                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div
                                                            className="d-flex align-items-center justify-content-center"
                                                            style={{
                                                                width: "50px",
                                                                height: "50px",
                                                                borderRadius: "12px",
                                                                background: "rgba(56, 189, 248, 0.12)",
                                                                border: "1px solid rgba(56, 189, 248, 0.25)",
                                                                color: "#38bdf8",
                                                                fontSize: "22px",
                                                                flexShrink: 0
                                                            }}
                                                        >
                                                            <i className={item.icon} />
                                                        </div>
                                                        <div>
                                                            <span
                                                                className="badge"
                                                                style={{
                                                                    background: "rgba(56, 189, 248, 0.1)",
                                                                    color: "#38bdf8",
                                                                    border: "1px solid rgba(56, 189, 248, 0.25)",
                                                                    fontSize: "11px",
                                                                    fontWeight: "700",
                                                                    letterSpacing: "0.5px",
                                                                    padding: "3px 10px",
                                                                    borderRadius: "6px"
                                                                }}
                                                            >
                                                                {item.badge}
                                                            </span>
                                                            <h2
                                                                className="fw-bold mb-0 mt-1"
                                                                style={{ color: "#ffffff", fontSize: "22px", lineHeight: "1.3" }}
                                                            >
                                                                {item.title}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Summary / Challenge Description */}
                                                <p
                                                    style={{
                                                        color: "#94a3b8",
                                                        fontSize: "15px",
                                                        lineHeight: "1.65",
                                                        marginTop: "12px",
                                                        marginBottom: "16px"
                                                    }}
                                                >
                                                    {item.summary}
                                                </p>

                                                {/* Problems / Challenges Box */}
                                                <div
                                                    className="p-3 rounded-3 mb-4"
                                                    style={{
                                                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                                                        border: "1px solid rgba(255, 255, 255, 0.07)"
                                                    }}
                                                >
                                                    <div
                                                        className="fw-bold mb-1 d-flex align-items-center gap-2"
                                                        style={{ color: "#f87171", fontSize: "12.5px", textTransform: "uppercase", letterSpacing: "0.5px" }}
                                                    >
                                                        <i className="fas fa-exclamation-triangle" style={{ fontSize: "11px" }} />
                                                        <span>Industry Challenges We Solve</span>
                                                    </div>
                                                    <p className="mb-0 small" style={{ color: "#94a3b8", lineHeight: "1.55", fontSize: "13.5px" }}>
                                                        {item.challengeText}
                                                    </p>
                                                </div>

                                                {/* What We Build Section */}
                                                <div className="mb-4">
                                                    <h3
                                                        className="fw-bold mb-3 d-flex align-items-center gap-2"
                                                        style={{ color: "#ffffff", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.5px" }}
                                                    >
                                                        <i className="fas fa-check-circle" style={{ color: "#34d399" }} />
                                                        <span>{item.whatWeBuildTitle}</span>
                                                    </h3>
                                                    <ul
                                                        className="list-unstyled mb-0 d-flex flex-column gap-2"
                                                        style={{ paddingLeft: 0 }}
                                                    >
                                                        {item.whatWeBuild.map((point, pIdx) => (
                                                            <li
                                                                key={pIdx}
                                                                className="d-flex align-items-start gap-2"
                                                                style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: "1.5" }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        color: "#38bdf8",
                                                                        fontSize: "12px",
                                                                        marginTop: "4px",
                                                                        flexShrink: 0
                                                                    }}
                                                                >
                                                                    •
                                                                </span>
                                                                <span>{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Capability Tags */}
                                                <div className="d-flex flex-wrap gap-2 mb-4">
                                                    {item.capabilities.map((cap, cIdx) => (
                                                        <span
                                                            key={cIdx}
                                                            style={{
                                                                backgroundColor: "rgba(255, 255, 255, 0.04)",
                                                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                                                color: "#cbd5e1",
                                                                fontSize: "11.5px",
                                                                fontWeight: 600,
                                                                padding: "3px 10px",
                                                                borderRadius: "6px"
                                                            }}
                                                        >
                                                            {cap}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* CTA Button / Link */}
                                            <div
                                                className="pt-3 d-flex align-items-center justify-content-between"
                                                style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}
                                            >
                                                <Link
                                                    href={item.ctaHref}
                                                    className="d-inline-flex align-items-center fw-bold text-decoration-none"
                                                    style={{
                                                        color: "#38bdf8",
                                                        fontSize: "14.5px",
                                                        transition: "all 0.2s ease"
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.color = "#7dd3fc";
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.color = "#38bdf8";
                                                    }}
                                                >
                                                    <span>{item.ctaText}</span>
                                                    <i className="fas fa-arrow-right ms-2" style={{ fontSize: "12px" }} />
                                                </Link>
                                            </div>
                                        </MotionGlassCard>
                                    </StaggerItem>
                                );
                            })}
                        </StaggerContainer>

                        {/* Bottom Banner */}
                        <FadeUp>
                            <div
                                className="text-center p-5 rounded-4 mt-5"
                                style={{
                                    background: "linear-gradient(135deg, rgba(30, 27, 75, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)",
                                    border: "1px solid rgba(99, 102, 241, 0.3)",
                                    backdropFilter: "blur(20px)",
                                    boxShadow: "0 16px 36px rgba(0, 0, 0, 0.4)"
                                }}
                            >
                                <span
                                    className="badge mb-3"
                                    style={{
                                        background: "rgba(56, 189, 248, 0.12)",
                                        border: "1px solid rgba(56, 189, 248, 0.35)",
                                        color: "#38bdf8",
                                        padding: "6px 16px",
                                        borderRadius: "9999px",
                                        fontWeight: "700",
                                        fontSize: "12px"
                                    }}
                                >
                                    CUSTOM INDUSTRY DEPLOYMENT
                                </span>
                                <h2
                                    className="fw-bold mb-3"
                                    style={{ color: "#ffffff", fontSize: "clamp(1.6rem, 3vw, 2.3rem)" }}
                                >
                                    Ready to Deploy AI Built for Your Industry?
                                </h2>
                                <p
                                    className="mx-auto mb-4"
                                    style={{ color: "#cbd5e1", maxWidth: "620px", fontSize: "16px", lineHeight: "1.65" }}
                                >
                                    Book a confidential discovery call with our engineering and AI architecture leadership. We will evaluate your workflow, outline high-ROI opportunities, and design a production deployment roadmap.
                                </p>
                                <div className="d-flex flex-wrap justify-content-center gap-3">
                                    <MotionLinkWrapper>
                                        <Link
                                            href="/contact-us"
                                            className="btn btn-style-one px-4 py-3"
                                            style={{
                                                background: "#4F46E5",
                                                border: "1px solid #4F46E5",
                                                color: "#ffffff",
                                                borderRadius: "10px",
                                                fontWeight: "600"
                                            }}
                                        >
                                            Start Your Build <i className="fas fa-arrow-right ms-2" />
                                        </Link>
                                    </MotionLinkWrapper>
                                    <MotionLinkWrapper>
                                        <Link
                                            href="/company/case-studies"
                                            className="btn btn-style-two px-4 py-3"
                                            style={{
                                                background: "rgba(255, 255, 255, 0.06)",
                                                border: "1px solid rgba(255, 255, 255, 0.15)",
                                                color: "#ffffff",
                                                borderRadius: "10px",
                                                fontWeight: "600"
                                            }}
                                        >
                                            View Verified Case Studies
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
