"use client";
import React, { useState } from "react";
import { FadeUp, StaggerContainer, StaggerItem, MotionGlassCard } from "@/components/animation/FramerMotionSystem";

const vettingStages = [
    {
        step: "01",
        title: "Screening",
        subtitle: "Profile & History",
        description: "Profile, stack depth, and real project history verification. We examine GitHub contributions, production repos, and past architectures.",
        icon: "fas fa-id-badge",
        accent: "#38bdf8"
    },
    {
        step: "02",
        title: "Technical Assessment",
        subtitle: "Live Coding & AI",
        description: "Live pair-coding and practical AI/LLM evaluations. Candidates build agentic workflows, API handlers, and solve algorithmic edge cases.",
        icon: "fas fa-terminal",
        accent: "#818cf8"
    },
    {
        step: "03",
        title: "System Design",
        subtitle: "Scale & Architecture",
        description: "Architecture design, trade-offs, scalability thinking, database schemas, and multi-tenant cloud orchestration under pressure.",
        icon: "fas fa-project-diagram",
        accent: "#a855f7"
    },
    {
        step: "04",
        title: "Communication Round",
        subtitle: "Fluency & Client-Readiness",
        description: "Professional English fluency, asynchronous collaboration, remote team agility, and proactive engineering problem communication.",
        icon: "fas fa-comments",
        accent: "#ec4899"
    },
    {
        step: "05",
        title: "Trial Task",
        subtitle: "Production Deliverable",
        description: "A scoped, realistic client-style deliverable built in a sandbox before we ever propose the engineer to your team.",
        icon: "fas fa-check-double",
        accent: "#34d399"
    }
];

const faqs = [
    {
        q: "How fast can an engineer start?",
        a: "Typically within 48 to 72 hours from an agreed brief, subject to bench availability. For niche or custom enterprise squad compositions, kickoff is usually within 5 to 7 business days."
    },
    {
        q: "Who manages the engineer?",
        a: "You do, day to day. They embed directly into your Slack, Jira, GitHub, and daily standups as a natural extension of your team. We handle all legal contracts, payroll, compliance, HR, and technical backup cover."
    },
    {
        q: "What if the fit isn't right?",
        a: "We offer a 14-day zero-risk trial. If an engineer is not an ideal technical or cultural fit, we replace them immediately at zero additional replacement fee."
    },
    {
        q: "Do they work in our time zone?",
        a: "Yes. We staff for a guaranteed minimum 4 to 6-hour working day overlap with your time zone (US Eastern/Pacific, UK/Europe, Middle East, or APAC)."
    },
    {
        q: "Can they sign our NDA and IP agreements?",
        a: "Yes, 100%. All engineers work under comprehensive bilateral NDAs, and 100% of the intellectual property and code created is immediately and exclusively assigned to your company."
    },
    {
        q: "Do you support existing/legacy applications?",
        a: "Yes, that is a dedicated offering. Our Application Support Team provides 24/7 L1–L3 monitoring, bug fixes, performance tuning, and legacy modernization with documented SLAs."
    }
];

export default function HireEngineersIndexExtras() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (idx: number) => {
        setOpenFaq(openFaq === idx ? null : idx);
    };

    return (
        <div className="hire-engineers-extras-wrapper mt-5 pt-4">
            {/* ========================================================================= */}
            {/* SECTION 1: 5-STAGE VETTING FUNNEL                                         */}
            {/* ========================================================================= */}
            <section className="vetting-funnel-section mb-60">
                <FadeUp>
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: "760px" }}>
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
                            <i className="fas fa-filter" style={{ fontSize: "11px" }}></i>
                            <span>TOP 2% ACCEPTANCE RATE</span>
                        </div>
                        <h2 className="fw-bold mb-3" style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)" }}>
                            Our 5-Stage Vetting Funnel
                        </h2>
                        <p style={{ color: "#94a3b8", fontSize: "1.08rem", lineHeight: "1.7" }}>
                            We test for production engineering reality, not abstract LeetCode puzzles. Only senior engineers who can deliver clean code from day one make it through.
                        </p>
                    </div>
                </FadeUp>

                <StaggerContainer className="row g-4">
                    {vettingStages.map((stage, idx) => (
                        <StaggerItem className="col-lg col-md-6" key={idx}>
                            <MotionGlassCard className="h-100 p-4 rounded-4 position-relative d-flex flex-column justify-content-between" style={{
                                backgroundColor: "rgba(255, 255, 255, 0.03)",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                backdropFilter: "blur(16px)",
                                minHeight: "260px"
                            }}>
                                <div>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <span style={{
                                            fontSize: "1.4rem",
                                            fontWeight: 800,
                                            color: stage.accent,
                                            fontFamily: "monospace",
                                            letterSpacing: "-1px"
                                        }}>
                                            {stage.step}
                                        </span>
                                        <div className="d-flex align-items-center justify-content-center rounded-3" style={{
                                            width: "40px",
                                            height: "40px",
                                            backgroundColor: `${stage.accent}15`,
                                            border: `1px solid ${stage.accent}35`,
                                            color: stage.accent,
                                            fontSize: "16px"
                                        }}>
                                            <i className={stage.icon}></i>
                                        </div>
                                    </div>
                                    <h3 className="fw-bold mb-1" style={{ color: "#ffffff", fontSize: "1.1rem" }}>
                                        {stage.title}
                                    </h3>
                                    <div className="mb-2" style={{ color: stage.accent, fontSize: "0.82rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                        {stage.subtitle}
                                    </div>
                                    <p className="mb-0" style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: "1.6" }}>
                                        {stage.description}
                                    </p>
                                </div>
                                <div className="mt-3 pt-3 border-top" style={{ borderColor: "rgba(255, 255, 255, 0.06)" }}>
                                    <span style={{ fontSize: "11px", color: "#64748b", fontWeight: 600 }}>
                                        Stage {stage.step} of 05
                                    </span>
                                </div>
                            </MotionGlassCard>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </section>

            {/* ========================================================================= */}
            {/* SECTION 2: ENGAGEMENT MODELS COMPARISON TABLE                             */}
            {/* ========================================================================= */}
            <section className="engagement-models-section mb-60">
                <FadeUp>
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: "760px" }}>
                        <div className="d-inline-flex align-items-center gap-2 mb-3" style={{
                            background: "rgba(99, 102, 241, 0.1)",
                            color: "#818cf8",
                            border: "1px solid rgba(99, 102, 241, 0.3)",
                            padding: "6px 18px",
                            borderRadius: "9999px",
                            fontSize: "12px",
                            fontWeight: 700,
                            letterSpacing: "0.5px"
                        }}>
                            <i className="fas fa-handshake" style={{ fontSize: "11px" }}></i>
                            <span>FLEXIBLE ENGAGEMENT FORMATS</span>
                        </div>
                        <h2 className="fw-bold mb-3" style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)" }}>
                            Compare Engagement Models
                        </h2>
                        <p style={{ color: "#94a3b8", fontSize: "1.08rem", lineHeight: "1.7" }}>
                            Choose the hiring model that fits your product roadmap and engineering velocity. Scale up or down with complete flexibility.
                        </p>
                    </div>
                </FadeUp>

                <FadeUp delay={0.1}>
                    <div className="table-responsive rounded-4 overflow-hidden" style={{
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        backdropFilter: "blur(16px)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
                    }}>
                        <table className="table table-dark table-borderless mb-0 align-middle" style={{ backgroundColor: "transparent" }}>
                            <thead>
                                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.12)", background: "rgba(255, 255, 255, 0.02)" }}>
                                    <th scope="col" style={{ padding: "20px 24px", color: "#94a3b8", fontSize: "14px", fontWeight: 600, width: "22%" }}>MODEL ATTRIBUTE</th>
                                    <th scope="col" style={{ padding: "20px 24px", color: "#38bdf8", fontSize: "16px", fontWeight: 700, width: "26%" }}>
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="fas fa-user-check"></i>
                                            <span>Dedicated Engineer</span>
                                        </div>
                                    </th>
                                    <th scope="col" style={{ padding: "20px 24px", color: "#818cf8", fontSize: "16px", fontWeight: 700, width: "26%" }}>
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="fas fa-users-gear"></i>
                                            <span>Engineering Squad</span>
                                        </div>
                                    </th>
                                    <th scope="col" style={{ padding: "20px 24px", color: "#34d399", fontSize: "16px", fontWeight: 700, width: "26%" }}>
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="fas fa-user-plus"></i>
                                            <span>Contract-to-Hire</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                                    <td style={{ padding: "18px 24px", color: "#cbd5e1", fontWeight: 600, fontSize: "14px" }}>Best for</td>
                                    <td style={{ padding: "18px 24px", color: "#ffffff", fontSize: "14px" }}>One clear skill gap or fast sprint acceleration</td>
                                    <td style={{ padding: "18px 24px", color: "#ffffff", fontSize: "14px" }}>A complete feature workstream or turnkey product track</td>
                                    <td style={{ padding: "18px 24px", color: "#ffffff", fontSize: "14px" }}>Evaluating before building a permanent in-house team</td>
                                </tr>
                                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                                    <td style={{ padding: "18px 24px", color: "#cbd5e1", fontWeight: 600, fontSize: "14px" }}>Team size</td>
                                    <td style={{ padding: "18px 24px", color: "#94a3b8", fontSize: "14px" }}>1–2 senior engineers</td>
                                    <td style={{ padding: "18px 24px", color: "#94a3b8", fontSize: "14px" }}>3–8 engineers + tech lead / PM</td>
                                    <td style={{ padding: "18px 24px", color: "#94a3b8", fontSize: "14px" }}>1+ engineers (customizable)</td>
                                </tr>
                                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                                    <td style={{ padding: "18px 24px", color: "#cbd5e1", fontWeight: 600, fontSize: "14px" }}>Commitment</td>
                                    <td style={{ padding: "18px 24px", color: "#94a3b8", fontSize: "14px" }}>Monthly rolling agreement</td>
                                    <td style={{ padding: "18px 24px", color: "#94a3b8", fontSize: "14px" }}>Monthly or milestone-based sprints</td>
                                    <td style={{ padding: "18px 24px", color: "#94a3b8", fontSize: "14px" }}>3–6 months, then seamless direct convert</td>
                                </tr>
                                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                                    <td style={{ padding: "18px 24px", color: "#cbd5e1", fontWeight: 600, fontSize: "14px" }}>What&apos;s Included</td>
                                    <td style={{ padding: "18px 24px", color: "#94a3b8", fontSize: "14px" }}>Dedicated engineer working 100% in your tools & process</td>
                                    <td style={{ padding: "18px 24px", color: "#94a3b8", fontSize: "14px" }}>Cross-functional engineers, lead architect & sprint oversight</td>
                                    <td style={{ padding: "18px 24px", color: "#94a3b8", fontSize: "14px" }}>Senior engineer with structured permanent transfer pathway</td>
                                </tr>
                                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                                    <td style={{ padding: "18px 24px", color: "#cbd5e1", fontWeight: 600, fontSize: "14px" }}>Notice Period</td>
                                    <td style={{ padding: "18px 24px", color: "#94a3b8", fontSize: "14px" }}>14 days notice</td>
                                    <td style={{ padding: "18px 24px", color: "#94a3b8", fontSize: "14px" }}>30 days notice</td>
                                    <td style={{ padding: "18px 24px", color: "#94a3b8", fontSize: "14px" }}>Per mutual conversion agreement</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "20px 24px", color: "#cbd5e1", fontWeight: 600, fontSize: "14px" }}>Billing & Terms</td>
                                    <td style={{ padding: "20px 24px", color: "#38bdf8", fontWeight: 600, fontSize: "14px" }}>
                                        Predictable monthly flat rate
                                        <div style={{ fontSize: "12px", color: "#64748b", fontWeight: 400 }}>No hidden overhead</div>
                                    </td>
                                    <td style={{ padding: "20px 24px", color: "#818cf8", fontWeight: 600, fontSize: "14px" }}>
                                        Transparent squad package
                                        <div style={{ fontSize: "12px", color: "#64748b", fontWeight: 400 }}>Volume squad discounts</div>
                                    </td>
                                    <td style={{ padding: "20px 24px", color: "#34d399", fontWeight: 600, fontSize: "14px" }}>
                                        Monthly rate + conversion credit
                                        <div style={{ fontSize: "12px", color: "#64748b", fontWeight: 400 }}>Zero recruiter lock-in</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </FadeUp>
            </section>

            {/* ========================================================================= */}
            {/* SECTION 3: FAQ ACCORDION                                                  */}
            {/* ========================================================================= */}
            <section className="faq-accordion-section mb-60">
                <FadeUp>
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: "760px" }}>
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
                            <i className="fas fa-question-circle" style={{ fontSize: "11px" }}></i>
                            <span>FREQUENTLY ASKED QUESTIONS</span>
                        </div>
                        <h2 className="fw-bold mb-3" style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)" }}>
                            Frequently Asked Questions
                        </h2>
                        <p style={{ color: "#94a3b8", fontSize: "1.08rem", lineHeight: "1.7" }}>
                            Clear answers to everything you need to know about hiring, onboarding, IP protection, and trial terms.
                        </p>
                    </div>
                </FadeUp>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="d-flex flex-column gap-3">
                            {faqs.map((faq, fIdx) => {
                                const isOpen = openFaq === fIdx;
                                return (
                                    <FadeUp delay={fIdx * 0.05} key={fIdx}>
                                        <div
                                            className="rounded-4 overflow-hidden"
                                            style={{
                                                backgroundColor: isOpen ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.025)",
                                                border: isOpen ? "1px solid rgba(56, 189, 248, 0.3)" : "1px solid rgba(255, 255, 255, 0.07)",
                                                transition: "all 0.25s ease"
                                            }}
                                        >
                                            <button
                                                type="button"
                                                onClick={() => toggleFaq(fIdx)}
                                                className="w-100 text-start p-4 d-flex align-items-center justify-content-between gap-3 border-0"
                                                style={{
                                                    background: "transparent",
                                                    color: "#ffffff",
                                                    cursor: "pointer"
                                                }}
                                                aria-expanded={isOpen}
                                            >
                                                <span className="fw-bold" style={{ fontSize: "1.05rem", color: isOpen ? "#38bdf8" : "#ffffff" }}>
                                                    {faq.q}
                                                </span>
                                                <div
                                                    className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                                                    style={{
                                                        width: "32px",
                                                        height: "32px",
                                                        backgroundColor: isOpen ? "rgba(56, 189, 248, 0.2)" : "rgba(255, 255, 255, 0.06)",
                                                        color: isOpen ? "#38bdf8" : "#94a3b8",
                                                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                                        transition: "transform 0.25s ease"
                                                    }}
                                                >
                                                    <i className="fas fa-chevron-down" style={{ fontSize: "12px" }}></i>
                                                </div>
                                            </button>
                                            {isOpen && (
                                                <div className="px-4 pb-4" style={{ color: "#94a3b8", fontSize: "0.96rem", lineHeight: "1.75", borderTop: "1px solid rgba(255, 255, 255, 0.05)", paddingTop: "16px" }}>
                                                    {faq.a}
                                                </div>
                                            )}
                                        </div>
                                    </FadeUp>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
