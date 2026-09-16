"use client";
import React, { useState } from "react";
import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Link from "next/link";
import { serviceCategories } from "@/data/nenoData";
import { FadeUp, StaggerContainer, StaggerItem, MotionGlassCard, MotionLinkWrapper } from "@/components/animation/FramerMotionSystem";

const category = serviceCategories.find(c => c.slug === 'training')!;

const curriculumModules = [
    {
        module: "Module 01",
        title: "Enterprise LLM Foundations & Prompt Engineering",
        duration: "Week 1 · 8 Hours Labs",
        focus: "Context windows, token economics, structured outputs & API integration",
        topics: [
            "Transformer architectures, attention mechanisms, and token budgeting",
            "Anthropic Claude 3.5 & OpenAI GPT-4o API mastery: tool-calling & structured JSON schema",
            "Advanced prompt patterns: Chain-of-Thought (CoT), ReAct, and dynamic few-shot injection",
            "System prompt security: prompt injection defenses and jailbreak mitigation"
        ],
        tools: ["Anthropic Claude", "OpenAI API", "Pydantic", "Instructor"]
    },
    {
        module: "Module 02",
        title: "Agentic Workflows & Multi-Agent Swarms",
        duration: "Week 2 · 10 Hours Labs",
        focus: "LangGraph, CrewAI, persistent memory, and deterministic state graphs",
        topics: [
            "Constructing cyclical execution graphs with branching and state checkpoints",
            "Deterministic tool-calling pipelines: external API schemas, validation, and recovery",
            "Agent memory architectures: short-term scratchpads vs. episodic long-term recall",
            "Human-in-the-loop approval gates and multi-agent consensus validation"
        ],
        tools: ["LangGraph", "CrewAI", "Temporal.io", "Python FastAPI"]
    },
    {
        module: "Module 03",
        title: "Production RAG & Vector Search at Scale",
        duration: "Week 3 · 8 Hours Labs",
        focus: "Hybrid retrieval, chunking strategies, pgvector, and reranking pipelines",
        topics: [
            "Document parsing (PDFs, spreadsheets, codebases) and semantic chunking",
            "Embedding model selection, vector indexing, and distance metric benchmarks",
            "Hybrid search combining BM25 keyword matching with dense vector embeddings",
            "Cross-encoder reranking (Cohere Rerank) and contextual compression for latency reduction"
        ],
        tools: ["pgvector", "Qdrant", "Cohere", "LlamaIndex"]
    },
    {
        module: "Module 04",
        title: "Model Evaluation, Evals & Quality Observability",
        duration: "Week 4 · 8 Hours Labs",
        focus: "Automated benchmark suites, hallucination detection, and cost tracking",
        topics: [
            "Building automated evaluation datasets from production telemetry",
            "LLM-as-a-judge evaluation frameworks and continuous regression testing",
            "Tracing inference latency, token expenditure, and error anomalies",
            "Establishing deterministic quality scorecards for enterprise sign-off"
        ],
        tools: ["LangSmith", "Arize Phoenix", "DeepEval", "OpenTelemetry"]
    },
    {
        module: "Module 05",
        title: "Enterprise AI Security, Governance & Deployment",
        duration: "Week 5 · 6 Hours Labs",
        focus: "OWASP LLM Top 10, private cloud VPCs, and compliance guardrails",
        topics: [
            "OWASP Top 10 for LLMs: mitigating data leakage, unauthorized tool access, and denial-of-service",
            "Deploying on private cloud VPCs (AWS Bedrock / Azure OpenAI) with zero data retention",
            "Deterministic input/output guardrails using NeMo Guardrails and Llama Guard",
            "Role-based access control (RBAC), audit logging, and SOC 2 compliance readiness"
        ],
        tools: ["AWS Bedrock", "NeMo Guardrails", "Docker", "Kubernetes"]
    }
];

const trainingTestimonials = [
    {
        quote: "The Corporate AI Training completely transformed our senior engineering team's approach. We went from basic OpenAI API calls to shipping our first autonomous multi-agent pipeline in less than three weeks.",
        author: "VP of Engineering",
        company: "Enterprise SaaS Platform",
        badge: "Verified Corporate Cohort",
        metric: "3-Week Deployment Time"
    },
    {
        quote: "Unlike generic academic courses, Neno’s practitioners taught directly from production code. The hands-on labs on vector indexing and agent memory were directly applicable to our core product roadmap.",
        author: "Lead Systems Architect",
        company: "Global FinTech Platform",
        badge: "Architecture Intensive",
        metric: "40+ Engineers Trained"
    },
    {
        quote: "Clear, rigorous, and completely focused on enterprise security. Our engineering squad now has a unified, deterministic framework for building with LLMs without risking sensitive data.",
        author: "Chief Technology Officer",
        company: "Healthcare Technology Group",
        badge: "Executive & Tech Program",
        metric: "100% Practical Labs"
    }
];

export default function TrainingPage() {
    const [openModule, setOpenModule] = useState<number | null>(0);

    const toggleModule = (idx: number) => {
        setOpenModule(openModule === idx ? null : idx);
    };

    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                <BreadCrumb title="Training & Education" breadCrumb="Services / Training" />

                <div className="services-details-area default-padding" style={{ paddingTop: "40px" }}>
                    <div className="container">
                        {/* ========================================================================= */}
                        {/* HERO OVERVIEW                                                             */}
                        {/* ========================================================================= */}
                        <FadeUp delay={0.06} duration={0.6} y={24}>
                            <div className="text-center mx-auto mb-5" style={{ maxWidth: "820px" }}>
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
                                    <i className="fas fa-graduation-cap" style={{ fontSize: "11px" }}></i>
                                    <span>PRACTITIONER-LED ENTERPRISE UPSKILLING</span>
                                </div>
                                <h1 className="fw-bold mb-3" style={{ fontSize: "clamp(2rem, 3.8vw, 2.9rem)", color: "#ffffff", letterSpacing: "-0.5px" }}>
                                    Enterprise AI & Engineering Training
                                </h1>
                                <p className="lead mb-0" style={{ color: "#94a3b8", fontSize: "1.12rem", lineHeight: "1.7" }}>
                                    Taught by forward-deployed engineers who ship production systems every day. Hands-on labs, real codebases, and custom curriculum designed for high-performing engineering squads.
                                </p>
                            </div>
                        </FadeUp>

                        {/* ========================================================================= */}
                        {/* SECTION 1: PROGRAMS & EDUCATION SERVICES (3 OFFERING CARDS)                */}
                        {/* ========================================================================= */}
                        <div className="mb-60">
                            <FadeUp delay={0.08} duration={0.6} y={20}>
                                <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
                                    <div>
                                        <h2 className="fw-bold mb-1" style={{ color: "#ffffff", fontSize: "1.6rem" }}>
                                            Training Programs & Offerings
                                        </h2>
                                        <p className="mb-0" style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
                                            Select an offering structure tailored to your organizational scale and technical goals.
                                        </p>
                                    </div>
                                    <span className="badge px-3 py-2" style={{ background: "rgba(56, 189, 248, 0.1)", color: "#38bdf8", border: "1px solid rgba(56, 189, 248, 0.3)", borderRadius: "9999px", fontWeight: 600 }}>
                                        3 Core Offerings
                                    </span>
                                </div>
                            </FadeUp>

                            <StaggerContainer className="row g-4">
                                {category.children.map((item, idx) => {
                                    const isCorporate = item.slug === "corporate-ai-training";
                                    return (
                                        <StaggerItem className="col-lg-4 col-md-6" key={item.slug}>
                                            <MotionGlassCard className="h-100 p-4 rounded-4 position-relative d-flex flex-column justify-content-between" style={{
                                                backgroundColor: isCorporate ? "rgba(56, 189, 248, 0.04)" : "rgba(255, 255, 255, 0.035)",
                                                border: isCorporate ? "1px solid rgba(56, 189, 248, 0.35)" : "1px solid rgba(255, 255, 255, 0.08)",
                                                backdropFilter: "blur(16px)",
                                                boxShadow: isCorporate ? "0 15px 35px rgba(56, 189, 248, 0.15)" : "0 10px 30px rgba(0, 0, 0, 0.3)"
                                            }}>
                                                <div>
                                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                                        <span style={{
                                                            fontSize: "11px",
                                                            fontWeight: 700,
                                                            color: isCorporate ? "#38bdf8" : "#818cf8",
                                                            background: isCorporate ? "rgba(56, 189, 248, 0.15)" : "rgba(129, 140, 248, 0.15)",
                                                            border: `1px solid ${isCorporate ? "rgba(56, 189, 248, 0.3)" : "rgba(129, 140, 248, 0.3)"}`,
                                                            padding: "3px 10px",
                                                            borderRadius: "6px",
                                                            textTransform: "uppercase",
                                                            letterSpacing: "0.5px"
                                                        }}>
                                                            {isCorporate ? "FLAGSHIP PROGRAM" : `OFFERING 0${idx + 1}`}
                                                        </span>
                                                        <div className="d-flex align-items-center justify-content-center rounded-3" style={{
                                                            width: "36px",
                                                            height: "36px",
                                                            backgroundColor: isCorporate ? "rgba(56, 189, 248, 0.15)" : "rgba(255, 255, 255, 0.05)",
                                                            color: isCorporate ? "#38bdf8" : "#94a3b8",
                                                            fontSize: "15px"
                                                        }}>
                                                            <i className={isCorporate ? "fas fa-brain" : idx === 1 ? "fas fa-chalkboard-teacher" : "fas fa-university"} />
                                                        </div>
                                                    </div>

                                                    <h3 className="fw-bold mb-2" style={{ color: "#ffffff", fontSize: "1.28rem" }}>
                                                        {item.title}
                                                    </h3>
                                                    <p style={{ color: "#cbd5e1", fontSize: "0.94rem", lineHeight: "1.65", marginBottom: "16px" }}>
                                                        {item.description}
                                                    </p>
                                                    <p className="small mb-3" style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: "1.6" }}>
                                                        {item.overview}
                                                    </p>

                                                    {/* Capabilities list */}
                                                    {item.capabilities && (
                                                        <div className="mt-3 pt-3 border-top" style={{ borderColor: "rgba(255, 255, 255, 0.07)" }}>
                                                            <div style={{ fontSize: "11px", color: "#64748b", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px" }}>
                                                                Key Focus Areas:
                                                            </div>
                                                            <ul className="p-0 m-0" style={{ listStyle: "none" }}>
                                                                {item.capabilities.map((cap, cIdx) => (
                                                                    <li key={cIdx} className="d-flex align-items-center gap-2 mb-1" style={{ color: "#94a3b8", fontSize: "12.5px" }}>
                                                                        <i className="fas fa-check" style={{ color: isCorporate ? "#38bdf8" : "#34d399", fontSize: "10px" }} />
                                                                        <span>{cap}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="mt-4 pt-3 border-top" style={{ borderColor: "rgba(255, 255, 255, 0.07)" }}>
                                                    <MotionLinkWrapper className="w-100">
                                                        <Link
                                                            href={`/contact-us?intent=${item.slug}`}
                                                            className="btn btn-style-one w-100 py-2 text-center"
                                                            style={{
                                                                background: isCorporate ? "linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)" : "rgba(255, 255, 255, 0.06)",
                                                                border: isCorporate ? "none" : "1px solid rgba(255, 255, 255, 0.15)",
                                                                color: "#ffffff",
                                                                borderRadius: "8px",
                                                                fontWeight: "600",
                                                                fontSize: "13.5px"
                                                            }}
                                                        >
                                                            Inquire About {item.title} <i className="fas fa-arrow-right ms-1" />
                                                        </Link>
                                                    </MotionLinkWrapper>
                                                </div>
                                            </MotionGlassCard>
                                        </StaggerItem>
                                    );
                                })}
                            </StaggerContainer>
                        </div>

                        {/* ========================================================================= */}
                        {/* SECTION 2: SAMPLE CURRICULUM ACCORDION                                    */}
                        {/* ========================================================================= */}
                        <div className="mb-60">
                            <FadeUp delay={0.08} duration={0.6} y={20}>
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
                                        <i className="fas fa-book-open" style={{ fontSize: "11px" }}></i>
                                        <span>ENTERPRISE SYLLABUS</span>
                                    </div>
                                    <h2 className="fw-bold mb-3" style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)" }}>
                                        Sample Corporate AI Curriculum
                                    </h2>
                                    <p style={{ color: "#94a3b8", fontSize: "1.08rem", lineHeight: "1.7" }}>
                                        A practical 5-module technical pathway designed for software engineers, tech leads, and product architects. Every module includes hands-on code labs in private sandbox environments.
                                    </p>
                                </div>
                            </FadeUp>

                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="d-flex flex-column gap-3">
                                        {curriculumModules.map((mod, mIdx) => {
                                            const isOpen = openModule === mIdx;
                                            return (
                                                <FadeUp delay={mIdx * 0.05} key={mIdx}>
                                                    <div
                                                        className="rounded-4 overflow-hidden"
                                                        style={{
                                                            backgroundColor: isOpen ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.025)",
                                                            border: isOpen ? "1px solid rgba(56, 189, 248, 0.35)" : "1px solid rgba(255, 255, 255, 0.07)",
                                                            transition: "all 0.25s ease"
                                                        }}
                                                    >
                                                        <button
                                                            type="button"
                                                            onClick={() => toggleModule(mIdx)}
                                                            className="w-100 text-start p-4 d-flex align-items-center justify-content-between gap-3 border-0"
                                                            style={{
                                                                background: "transparent",
                                                                color: "#ffffff",
                                                                cursor: "pointer"
                                                            }}
                                                            aria-expanded={isOpen}
                                                        >
                                                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                                                <span style={{
                                                                    fontSize: "11px",
                                                                    fontWeight: 800,
                                                                    color: isOpen ? "#38bdf8" : "#818cf8",
                                                                    background: isOpen ? "rgba(56, 189, 248, 0.15)" : "rgba(129, 140, 248, 0.15)",
                                                                    padding: "3px 10px",
                                                                    borderRadius: "6px",
                                                                    fontFamily: "monospace"
                                                                }}>
                                                                    {mod.module}
                                                                </span>
                                                                <span className="fw-bold" style={{ fontSize: "1.1rem", color: isOpen ? "#38bdf8" : "#ffffff" }}>
                                                                    {mod.title}
                                                                </span>
                                                                <span style={{ fontSize: "12px", color: "#64748b" }}>
                                                                    ({mod.duration})
                                                                </span>
                                                            </div>
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
                                                            <div className="px-4 pb-4" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)", paddingTop: "18px" }}>
                                                                <div className="mb-3" style={{ color: "#38bdf8", fontSize: "0.92rem", fontWeight: 600 }}>
                                                                    Core Focus: {mod.focus}
                                                                </div>
                                                                <div className="mb-3">
                                                                    <div style={{ fontSize: "11px", color: "#64748b", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px" }}>
                                                                        Detailed Lab Topics:
                                                                    </div>
                                                                    <ul className="p-0 m-0" style={{ listStyle: "none" }}>
                                                                        {mod.topics.map((t, tIdx) => (
                                                                            <li key={tIdx} className="d-flex align-items-start gap-2 mb-2" style={{ color: "#cbd5e1", fontSize: "0.92rem", lineHeight: "1.6" }}>
                                                                                <i className="fas fa-arrow-right mt-1" style={{ color: "#38bdf8", fontSize: "11px" }} />
                                                                                <span>{t}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                                <div className="d-flex align-items-center gap-2 flex-wrap pt-2">
                                                                    <span style={{ fontSize: "11px", color: "#64748b", fontWeight: 700, textTransform: "uppercase" }}>
                                                                        Hands-on Tools:
                                                                    </span>
                                                                    {mod.tools.map((tool, toolIdx) => (
                                                                        <span key={toolIdx} className="badge" style={{ background: "rgba(255, 255, 255, 0.05)", color: "#e2e8f0", border: "1px solid rgba(255, 255, 255, 0.1)", fontSize: "11.5px" }}>
                                                                            {tool}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </FadeUp>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ========================================================================= */}
                        {/* SECTION 3: PROOF & CORPORATE TESTIMONIALS                                 */}
                        {/* ========================================================================= */}
                        <div className="mb-60">
                            <FadeUp delay={0.08} duration={0.6} y={20}>
                                <div className="text-center mx-auto mb-5" style={{ maxWidth: "760px" }}>
                                    <div className="d-inline-flex align-items-center gap-2 mb-3" style={{
                                        background: "rgba(16, 185, 129, 0.1)",
                                        color: "#34d399",
                                        border: "1px solid rgba(16, 185, 129, 0.3)",
                                        padding: "6px 18px",
                                        borderRadius: "9999px",
                                        fontSize: "12px",
                                        fontWeight: 700,
                                        letterSpacing: "0.5px"
                                    }}>
                                        <i className="fas fa-check-circle" style={{ fontSize: "11px" }}></i>
                                        <span>PROVEN OUTCOMES</span>
                                    </div>
                                    <h2 className="fw-bold mb-3" style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)" }}>
                                        Client Proof & Testimonials
                                    </h2>
                                    <p style={{ color: "#94a3b8", fontSize: "1.08rem", lineHeight: "1.7" }}>
                                        Feedback from CTOs and engineering directors whose teams have leveled up through Neno Technology training programs.
                                    </p>
                                </div>
                            </FadeUp>

                            <StaggerContainer className="row g-4">
                                {trainingTestimonials.map((t, idx) => (
                                    <StaggerItem className="col-lg-4 col-md-6" key={idx}>
                                        <MotionGlassCard className="h-100 p-4 rounded-4 position-relative d-flex flex-column justify-content-between" style={{
                                            backgroundColor: "rgba(255, 255, 255, 0.03)",
                                            border: "1px solid rgba(255, 255, 255, 0.08)",
                                            backdropFilter: "blur(16px)"
                                        }}>
                                            <div>
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <span style={{
                                                        fontSize: "10.5px",
                                                        fontWeight: 700,
                                                        color: "#34d399",
                                                        background: "rgba(16, 185, 129, 0.12)",
                                                        border: "1px solid rgba(16, 185, 129, 0.3)",
                                                        padding: "3px 8px",
                                                        borderRadius: "4px",
                                                        textTransform: "uppercase"
                                                    }}>
                                                        {t.badge}
                                                    </span>
                                                    <span style={{ fontSize: "11px", color: "#38bdf8", fontWeight: 600 }}>
                                                        {t.metric}
                                                    </span>
                                                </div>

                                                <p className="fst-italic mb-4" style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: "1.7" }}>
                                                    &ldquo;{t.quote}&rdquo;
                                                </p>
                                            </div>

                                            <div className="pt-3 border-top" style={{ borderColor: "rgba(255, 255, 255, 0.07)" }}>
                                                <div className="fw-bold text-white mb-0" style={{ fontSize: "14.5px" }}>
                                                    {t.author}
                                                </div>
                                                <div style={{ fontSize: "12.5px", color: "#94a3b8" }}>
                                                    {t.company}
                                                </div>
                                            </div>
                                        </MotionGlassCard>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>

                        {/* ========================================================================= */}
                        {/* SECTION 4: CALL TO ACTION BANNER                                          */}
                        {/* ========================================================================= */}
                        <FadeUp delay={0.1} duration={0.65} y={30}>
                            <div
                                className="text-center p-5 rounded-4 position-relative overflow-hidden mb-60"
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
                                    UPSKILL YOUR SQUAD
                                </span>
                                <h2 className="fw-bold mb-3" style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)" }}>
                                    Ready to Build Production AI Capabilities In-House?
                                </h2>
                                <p className="mx-auto mb-4" style={{ color: "#94a3b8", maxWidth: "680px", fontSize: "1.1rem", lineHeight: "1.7" }}>
                                    We work directly with your engineering leadership to tailor curriculums around your actual architecture, repository standards, and roadmap priorities.
                                </p>
                                <div className="d-flex flex-wrap justify-content-center gap-3">
                                    <MotionLinkWrapper>
                                        <Link
                                            href="/contact-us?intent=corporate-training"
                                            className="btn btn-style-one px-4 py-3"
                                            style={{ background: "linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)", border: "none", color: "#ffffff", borderRadius: "12px", fontWeight: "600", padding: "14px 28px" }}
                                        >
                                            Inquire About Team Training <i className="fas fa-arrow-right ms-2" />
                                        </Link>
                                    </MotionLinkWrapper>
                                    <MotionLinkWrapper>
                                        <Link
                                            href="/hire-engineers"
                                            className="btn btn-style-two px-4 py-3"
                                            style={{ background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.2)", color: "#ffffff", borderRadius: "12px", fontWeight: "600", padding: "14px 28px" }}
                                        >
                                            Hire Engineers Instead <i className="fas fa-user-plus ms-2" />
                                        </Link>
                                    </MotionLinkWrapper>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </LayoutV1>
        </div>
    );
}
