"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem, MotionGlassCard, MotionLinkWrapper } from "@/components/animation/FramerMotionSystem";

const engagementFormats = [
    {
        title: "Executive Workshop",
        badge: "Fastest Kickoff",
        badgeColor: "#38bdf8",
        duration: "1 to 2 Days Intensive",
        price: "$3,500 / ₹2.5L",
        priceSub: "Fixed All-Inclusive Investment",
        icon: "fas fa-chalkboard-teacher",
        bestFor: "Leadership alignment, feasibility scoring, and high-level architecture roadmap before committing team resources.",
        deliverables: [
            "Technical AI readiness audit & maturity score",
            "High-ROI use-case feasibility matrix",
            "Target-state architecture & model selection blueprint",
            "Inference compute & token cost forecast model"
        ],
        ctaText: "Book an Executive Workshop",
        ctaHref: "/contact-us?intent=consulting-workshop"
    },
    {
        title: "Architecture & Delivery Sprint",
        badge: "Most Popular",
        badgeColor: "#818cf8",
        duration: "2 to 4 Weeks Dedicated",
        price: "$9,500 / ₹7.5L",
        priceSub: "Fixed Milestone Investment",
        icon: "fas fa-laptop-code",
        bestFor: "In-depth system design, code repository audits, LLM eval benchmark harnesses, or unblocking complex roadmap features.",
        deliverables: [
            "Formal Architectural Decision Records (ADRs)",
            "Hands-on codebase & security vulnerability review",
            "Evaluation benchmark harness for LLM accuracy/latency",
            "Sprint-ready backlog with engineering specifications"
        ],
        ctaText: "Start an Architecture Sprint",
        ctaHref: "/contact-us?intent=consulting-sprint"
    },
    {
        title: "Strategic Advisory Retainer",
        badge: "Ongoing Leadership",
        badgeColor: "#34d399",
        duration: "Monthly Retainer",
        price: "$5,000 / month",
        priceSub: "Or ₹4L / month (Flexible Commitment)",
        icon: "fas fa-chess-knight",
        bestFor: "Fractional Head of AI or CTO advisory, continuous architecture reviews, vendor evaluations, and board technical oversight.",
        deliverables: [
            "Weekly executive technical strategy sessions",
            "Asynchronous architecture & PR code review support",
            "Vendor due-diligence & AI build-vs-buy analysis",
            "Priority incident and architectural escalation access"
        ],
        ctaText: "Secure an Advisory Retainer",
        ctaHref: "/contact-us?intent=consulting-retainer"
    }
];

export default function ConsultingSharedExtras() {
    return (
        <div className="consulting-shared-extras mt-5 pt-4">
            {/* ========================================================================= */}
            {/* SECTION 1: ENGAGEMENT FORMATS & PRICING                                   */}
            {/* ========================================================================= */}
            <section className="engagement-formats-section mb-60">
                <FadeUp>
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: "780px" }}>
                        <div className="d-inline-flex align-items-center gap-2 mb-3" style={{
                            background: "rgba(56, 189, 248, 0.08)",
                            color: "#38bdf8",
                            border: "1px solid rgba(56, 189, 248, 0.3)",
                            padding: "6px 18px",
                            borderRadius: "9999px",
                            fontSize: "12px",
                            fontWeight: 700,
                            letterSpacing: "0.5px"
                        }}>
                            <i className="fas fa-handshake" style={{ fontSize: "11px" }}></i>
                            <span>TRANSPARENT ENGAGEMENT FORMATS</span>
                        </div>
                        <h2 className="fw-bold mb-3" style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)" }}>
                            Engagement Formats & Pricing
                        </h2>
                        <p style={{ color: "#94a3b8", fontSize: "1.08rem", lineHeight: "1.7" }}>
                            Choose the advisory structure that matches your current momentum. Fixed scopes, transparent pricing, and zero open-ended billing meters.
                        </p>
                    </div>
                </FadeUp>

                <StaggerContainer className="row g-4">
                    {engagementFormats.map((format, idx) => (
                        <StaggerItem className="col-lg-4 col-md-6" key={idx}>
                            <MotionGlassCard className="h-100 p-4 p-lg-5 rounded-4 position-relative d-flex flex-column justify-content-between" style={{
                                backgroundColor: "rgba(255, 255, 255, 0.035)",
                                border: `1px solid ${format.badgeColor}35`,
                                backdropFilter: "blur(16px)",
                                borderRadius: "22px",
                                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)"
                            }}>
                                <div>
                                    {/* Badge & Duration */}
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <span style={{
                                            fontSize: "11px",
                                            fontWeight: 700,
                                            color: format.badgeColor,
                                            background: `${format.badgeColor}15`,
                                            border: `1px solid ${format.badgeColor}35`,
                                            padding: "4px 10px",
                                            borderRadius: "6px",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.5px"
                                        }}>
                                            {format.badge}
                                        </span>
                                        <span style={{ fontSize: "12px", color: "#94a3b8", fontWeight: 600 }}>
                                            <i className="far fa-clock me-1"></i> {format.duration}
                                        </span>
                                    </div>

                                    {/* Icon & Title */}
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="d-flex align-items-center justify-content-center rounded-3" style={{
                                            width: "44px",
                                            height: "44px",
                                            backgroundColor: `${format.badgeColor}15`,
                                            border: `1px solid ${format.badgeColor}35`,
                                            color: format.badgeColor,
                                            fontSize: "18px"
                                        }}>
                                            <i className={format.icon}></i>
                                        </div>
                                        <h3 className="fw-bold mb-0 text-white" style={{ fontSize: "1.25rem" }}>
                                            {format.title}
                                        </h3>
                                    </div>

                                    {/* Pricing Box */}
                                    <div className="p-3 rounded-3 mb-4" style={{
                                        backgroundColor: "rgba(255, 255, 255, 0.025)",
                                        border: "1px solid rgba(255, 255, 255, 0.07)"
                                    }}>
                                        <div className="fw-bold text-white mb-0" style={{ fontSize: "1.55rem", letterSpacing: "-0.5px" }}>
                                            {format.price}
                                        </div>
                                        <div style={{ fontSize: "12px", color: format.badgeColor, fontWeight: 600 }}>
                                            {format.priceSub}
                                        </div>
                                    </div>

                                    {/* Best For */}
                                    <p className="mb-4" style={{ color: "#cbd5e1", fontSize: "0.92rem", lineHeight: "1.65" }}>
                                        {format.bestFor}
                                    </p>

                                    {/* Deliverables List */}
                                    <div className="mb-4">
                                        <div style={{ fontSize: "12px", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "10px" }}>
                                            Core Deliverables:
                                        </div>
                                        <ul className="p-0 m-0" style={{ listStyle: "none" }}>
                                            {format.deliverables.map((item, dIdx) => (
                                                <li key={dIdx} className="d-flex align-items-start gap-2 mb-2" style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: "1.5" }}>
                                                    <i className="fas fa-check-circle mt-1" style={{ color: format.badgeColor, fontSize: "12px" }}></i>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Action CTA */}
                                <div className="pt-3 border-top" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
                                    <MotionLinkWrapper className="w-100">
                                        <Link
                                            href={format.ctaHref}
                                            className="btn btn-style-one w-100 py-3 text-center"
                                            style={{
                                                background: `linear-gradient(135deg, ${format.badgeColor} 0%, #4f46e5 100%)`,
                                                border: "none",
                                                borderRadius: "10px",
                                                fontWeight: "600",
                                                color: "#ffffff",
                                                fontSize: "14px"
                                            }}
                                        >
                                            {format.ctaText} <i className="fas fa-arrow-right ms-1"></i>
                                        </Link>
                                    </MotionLinkWrapper>
                                </div>
                            </MotionGlassCard>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </section>

            {/* ========================================================================= */}
            {/* SECTION 2: ADVISOR PROFILE                                                */}
            {/* ========================================================================= */}
            <section className="advisor-profile-section mb-60">
                <FadeUp>
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: "780px" }}>
                        <div className="d-inline-flex align-items-center gap-2 mb-3" style={{
                            background: "rgba(56, 189, 248, 0.08)",
                            color: "#38bdf8",
                            border: "1px solid rgba(56, 189, 248, 0.3)",
                            padding: "6px 18px",
                            borderRadius: "9999px",
                            fontSize: "12px",
                            fontWeight: 700,
                            letterSpacing: "0.5px"
                        }}>
                            <i className="fas fa-user-tie" style={{ fontSize: "11px" }}></i>
                            <span>LEAD ADVISORY PRACTITIONER</span>
                        </div>
                        <h2 className="fw-bold mb-3" style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)" }}>
                            Advisor Profile
                        </h2>
                        <p style={{ color: "#94a3b8", fontSize: "1.08rem", lineHeight: "1.7" }}>
                            Direct strategic leadership from engineers who have shipped autonomous systems to production under stringent enterprise SLAs.
                        </p>
                    </div>
                </FadeUp>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <FadeUp delay={0.1}>
                            <div className="p-4 p-md-5 rounded-4 position-relative" style={{
                                backgroundColor: "rgba(255, 255, 255, 0.035)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(18px)",
                                borderRadius: "24px",
                                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)"
                            }}>
                                <div className="row align-items-center g-4 g-lg-5">
                                    {/* Left: Founder Photo */}
                                    <div className="col-md-4">
                                        <div className="position-relative overflow-hidden rounded-4 mx-auto" style={{
                                            borderRadius: "18px",
                                            border: "1px solid rgba(255, 255, 255, 0.12)",
                                            boxShadow: "0 12px 30px rgba(0, 0, 0, 0.4)",
                                            aspectRatio: "4/5",
                                            maxHeight: "360px"
                                        }}>
                                            <Image
                                                src="/assets/img/team/tirth-patel.jpg"
                                                alt="Tirth Patel - Founder & CEO, Lead Advisory Practitioner"
                                                fill
                                                sizes="(max-width: 768px) 100vw, 360px"
                                                style={{ objectFit: "cover", objectPosition: "center top" }}
                                            />
                                        </div>
                                    </div>

                                    {/* Right: Advisor Bio & Accreditations */}
                                    <div className="col-md-8">
                                        <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                                            <span style={{
                                                background: "rgba(56, 189, 248, 0.12)",
                                                border: "1px solid rgba(56, 189, 248, 0.3)",
                                                color: "#38bdf8",
                                                borderRadius: "9999px",
                                                fontSize: "11.5px",
                                                fontWeight: 700,
                                                padding: "4px 12px",
                                                letterSpacing: "0.5px",
                                                textTransform: "uppercase"
                                            }}>
                                                HEAD OF PRACTICE & FOUNDER
                                            </span>
                                            <span style={{
                                                background: "rgba(16, 185, 129, 0.12)",
                                                border: "1px solid rgba(16, 185, 129, 0.3)",
                                                color: "#34d399",
                                                borderRadius: "9999px",
                                                fontSize: "11.5px",
                                                fontWeight: 700,
                                                padding: "4px 12px"
                                            }}>
                                                DPIIT & Startup India Recognized
                                            </span>
                                        </div>

                                        <h3 className="fw-bold mb-1 text-white" style={{ fontSize: "1.9rem", letterSpacing: "-0.5px" }}>
                                            Tirth Patel
                                        </h3>
                                        <div className="fw-semibold mb-3" style={{ color: "#818cf8", fontSize: "1.05rem" }}>
                                            Founder & CEO, Neno Technology · Co-Founder, Gujarat AI Society & Agentic Bharat
                                        </div>

                                        <p className="mb-3" style={{ color: "#cbd5e1", fontSize: "0.98rem", lineHeight: "1.75" }}>
                                            Leading enterprise AI strategy, system architecture, and autonomous platform development at Neno Technology. Over a decade of deep technical experience engineering high-scale distributed backends, low-latency telephony infrastructure (&lt;200ms), and multi-agent production swarms.
                                        </p>

                                        {/* Quote Box */}
                                        <div className="p-3 rounded-3 mb-4" style={{
                                            backgroundColor: "rgba(56, 189, 248, 0.05)",
                                            borderLeft: "3px solid #38bdf8",
                                            borderRadius: "4px 10px 10px 4px"
                                        }}>
                                            <p className="fst-italic mb-0" style={{ color: "#e2e8f0", fontSize: "0.92rem", lineHeight: "1.6" }}>
                                                &ldquo;We advise from active production codebases, not theoretical slide decks. Every recommendation we give is grounded in architectures we have personally shipped, hardened, and benchmarked under live enterprise traffic.&rdquo;
                                            </p>
                                        </div>

                                        {/* Key Credentials Row */}
                                        <div className="row g-2 mb-4">
                                            <div className="col-sm-6">
                                                <div className="d-flex align-items-center gap-2" style={{ color: "#94a3b8", fontSize: "13px" }}>
                                                    <i className="fas fa-check-circle text-info"></i>
                                                    <span>Agentic & Multi-Agent Swarms</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="d-flex align-items-center gap-2" style={{ color: "#94a3b8", fontSize: "13px" }}>
                                                    <i className="fas fa-check-circle text-info"></i>
                                                    <span>Real-Time Voice AI Pipelines</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="d-flex align-items-center gap-2" style={{ color: "#94a3b8", fontSize: "13px" }}>
                                                    <i className="fas fa-check-circle text-info"></i>
                                                    <span>SOC 2, Privacy & Guardrails</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="d-flex align-items-center gap-2" style={{ color: "#94a3b8", fontSize: "13px" }}>
                                                    <i className="fas fa-check-circle text-info"></i>
                                                    <span>Token & Compute Optimization</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Social Links */}
                                        <div className="d-flex align-items-center gap-3">
                                            <a
                                                href="https://www.linkedin.com/in/tirth-patel-nenotechnology/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="neno-social-btn"
                                                style={{ width: "40px", height: "40px", fontSize: "15px" }}
                                                aria-label="Tirth Patel LinkedIn"
                                            >
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                            <a
                                                href="mailto:sales@nenotechnology.com"
                                                className="neno-social-btn"
                                                style={{ width: "40px", height: "40px", fontSize: "15px" }}
                                                aria-label="Direct Email"
                                            >
                                                <i className="fas fa-envelope"></i>
                                            </a>
                                            <Link
                                                href="/contact-us?intent=consulting-advisory"
                                                className="btn btn-style-one btn-sm ms-2"
                                                style={{
                                                    background: "#4f46e5",
                                                    borderColor: "#4f46e5",
                                                    color: "#ffffff",
                                                    padding: "8px 20px",
                                                    fontSize: "13.5px"
                                                }}
                                            >
                                                Schedule Strategic Briefing <i className="fas fa-arrow-right ms-1"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>
        </div>
    );
}
