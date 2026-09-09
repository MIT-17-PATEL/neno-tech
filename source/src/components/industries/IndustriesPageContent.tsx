"use client";
import React from "react";
import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Link from "next/link";
import { industriesData } from "@/data/industriesData";

export default function IndustriesPageContent() {
    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                <BreadCrumb title="Industries" breadCrumb="Company / Industries" />

                {/* Hero Section */}
                <section style={{ paddingTop: "24px", paddingBottom: "48px", backgroundColor: "#ffffff" }}>
                    <div className="container">
                        <div className="text-center mx-auto" style={{ maxWidth: "840px" }}>
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
                                INDUSTRIES
                            </span>
                            <h1
                                className="fw-bold mb-3"
                                style={{
                                    fontSize: "clamp(2rem, 4vw, 3.1rem)",
                                    color: "#0f172a",
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
                                    color: "#475569",
                                    maxWidth: "700px",
                                    margin: "0 auto"
                                }}
                            >
                                Neno Technology builds practical AI systems, automation, intelligent workflows, and software solutions tailored to industry-specific workflows, compliance standards, and operational challenges.
                            </p>

                            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
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
                                <Link
                                    href="/company/case-studies"
                                    className="btn btn-style-two px-4 py-3"
                                    style={{
                                        background: "#ffffff",
                                        border: "1px solid #E2E8F0",
                                        color: "#0f172a",
                                        borderRadius: "10px",
                                        fontWeight: "600",
                                        fontSize: "14px"
                                    }}
                                >
                                    View Case Studies
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industry Cards Grid */}
                <section
                    style={{
                        padding: "60px 0 90px 0",
                        backgroundColor: "#F8FAFC",
                        borderTop: "1px solid #e2e8f0"
                    }}
                >
                    <div className="container">
                        <div className="row g-4">
                            {industriesData.map((item, idx) => {
                                const isFifth = idx === 4;
                                return (
                                    <div
                                        key={item.id}
                                        className={isFifth ? "col-12" : "col-lg-6 col-md-12"}
                                    >
                                        <div
                                            className="h-100 p-4 p-md-5 rounded-4 d-flex flex-column justify-content-between"
                                            style={{
                                                backgroundColor: "#ffffff",
                                                border: "1px solid #E2E8F0",
                                                boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.04)",
                                                transition: "all 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
                                                position: "relative"
                                            }}
                                            onMouseEnter={(e) => {
                                                const el = e.currentTarget;
                                                el.style.transform = "translateY(-4px)";
                                                el.style.borderColor = "#70A5FF";
                                                el.style.boxShadow = "0 16px 36px -8px rgba(79, 70, 229, 0.12), 0 0 0 1px #70A5FF";
                                            }}
                                            onMouseLeave={(e) => {
                                                const el = e.currentTarget;
                                                el.style.transform = "translateY(0)";
                                                el.style.borderColor = "#E2E8F0";
                                                el.style.boxShadow = "0 4px 20px -2px rgba(0, 0, 0, 0.04)";
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
                                                                background: "#EEF2FF",
                                                                color: "#4F46E5",
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
                                                                    background: "#F0F6FF",
                                                                    color: "#4F46E5",
                                                                    border: "1px solid #C0D8FF",
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
                                                                style={{ color: "#0f172a", fontSize: "22px", lineHeight: "1.3" }}
                                                            >
                                                                {item.title}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Summary / Challenge Description */}
                                                <p
                                                    style={{
                                                        color: "#475569",
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
                                                        backgroundColor: "#F8FAFC",
                                                        border: "1px solid #EDF2F7"
                                                    }}
                                                >
                                                    <div
                                                        className="fw-bold mb-1 d-flex align-items-center gap-2"
                                                        style={{ color: "#b91c1c", fontSize: "12.5px", textTransform: "uppercase", letterSpacing: "0.5px" }}
                                                    >
                                                        <i className="fas fa-exclamation-triangle" style={{ fontSize: "11px" }} />
                                                        <span>Industry Challenges We Solve</span>
                                                    </div>
                                                    <p className="mb-0 small text-muted" style={{ lineHeight: "1.55", fontSize: "13.5px" }}>
                                                        {item.challengeText}
                                                    </p>
                                                </div>

                                                {/* What We Build Section */}
                                                <div className="mb-4">
                                                    <h3
                                                        className="fw-bold mb-3 d-flex align-items-center gap-2"
                                                        style={{ color: "#0f172a", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.5px" }}
                                                    >
                                                        <i className="fas fa-check-circle" style={{ color: "#059669" }} />
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
                                                                style={{ fontSize: "14px", color: "#334155", lineHeight: "1.5" }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        color: "#4F46E5",
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
                                                                backgroundColor: "#F1F5F9",
                                                                border: "1px solid #E2E8F0",
                                                                color: "#475569",
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
                                                style={{ borderTop: "1px solid #F1F5F9" }}
                                            >
                                                <Link
                                                    href={item.ctaHref}
                                                    className="d-inline-flex align-items-center fw-bold text-decoration-none"
                                                    style={{
                                                        color: "#4F46E5",
                                                        fontSize: "14.5px",
                                                        transition: "all 0.2s ease"
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.color = "#3730A3";
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.color = "#4F46E5";
                                                    }}
                                                >
                                                    <span>{item.ctaText}</span>
                                                    <i className="fas fa-arrow-right ms-2" style={{ fontSize: "12px" }} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Bottom Banner */}
                        <div
                            className="text-center p-5 rounded-4 mt-5"
                            style={{
                                background: "linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 100%)",
                                border: "1px solid #C0D8FF",
                                boxShadow: "0 10px 30px -5px rgba(79, 70, 229, 0.08)"
                            }}
                        >
                            <span
                                className="badge mb-3"
                                style={{
                                    background: "#F0F6FF",
                                    border: "1px solid #C0D8FF",
                                    color: "#4F46E5",
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
                                style={{ color: "#0f172a", fontSize: "clamp(1.6rem, 3vw, 2.3rem)" }}
                            >
                                Ready to Deploy AI Built for Your Industry?
                            </h2>
                            <p
                                className="text-muted mx-auto mb-4"
                                style={{ maxWidth: "620px", fontSize: "16px", lineHeight: "1.65" }}
                            >
                                Book a confidential discovery call with our engineering and AI architecture leadership. We will evaluate your workflow, outline high-ROI opportunities, and design a production deployment roadmap.
                            </p>
                            <div className="d-flex flex-wrap justify-content-center gap-3">
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
                                <Link
                                    href="/company/case-studies"
                                    className="btn btn-style-two px-4 py-3"
                                    style={{
                                        background: "#ffffff",
                                        border: "1px solid #E2E8F0",
                                        color: "#0f172a",
                                        borderRadius: "10px",
                                        fontWeight: "600"
                                    }}
                                >
                                    View Verified Case Studies
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutV1>
        </div>
    );
}
