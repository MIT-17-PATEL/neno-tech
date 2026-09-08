"use client";
import React, { useState } from "react";
import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Link from "next/link";

interface CaseStudy {
    id: number;
    title: string;
    client: string;
    industry: string;
    badge: string;
    overview: string;
    challenge: string;
    solution: string;
    metrics: { label: string; value: string }[];
    technologies: string[];
}

const caseStudiesList: CaseStudy[] = [
    {
        id: 1,
        title: "Autonomous Voice AI Agents for Real-Time FinTech Underwriting",
        client: "Global FinTech & Lending Platform",
        industry: "Financial Services",
        badge: "NENO VOICE DEPLOYMENT",
        overview: "Deployed autonomous voice agents powered by sub-400ms streaming LLM pipelines to conduct borrower pre-qualifications and real-time document verification.",
        challenge: "Manual call centers faced 45% drop-off during peak lending seasons and high operational costs ($4.20 per qualification call).",
        solution: "Built a customized voice pipeline with Neno Voice, carrier-grade SIP routing, and deterministic guardrails ensuring 100% regulatory compliance.",
        metrics: [
            { label: "Cost Reduction", value: "68%" },
            { label: "Call Qualification", value: "4.2x Faster" },
            { label: "Accuracy Rate", value: "99.4%" }
        ],
        technologies: ["Neno Voice", "Sub-400ms Audio Pipeline", "Claude 3.5 Sonnet", "Twilio SIP", "PostgreSQL"]
    },
    {
        id: 2,
        title: "Multi-Agent Swarms for Automated Healthcare Claims Adjudication",
        client: "Tier-1 Healthcare Network",
        industry: "Healthcare & Insurance",
        badge: "AGENTIC AI SYSTEMS",
        overview: "Engineered multi-agent swarms that autonomously review medical claims, parse unstructured EHR notes, cross-reference policy guidelines, and flag fraud.",
        challenge: "Over 20,000 weekly claims resulted in an 18-day processing backlog and significant billing discrepancy disputes.",
        solution: "Implemented deterministic multi-agent architectures running inside HIPAA-compliant private cloud VPCs with continuous human-in-the-loop oversight.",
        metrics: [
            { label: "Processing Speed", value: "10x Faster" },
            { label: "Annual Overhead Saved", value: "$1.4M" },
            { label: "Adjudication Precision", value: "99.8%" }
        ],
        technologies: ["Multi-Agent Swarms", "Private RAG", "HIPAA Compliant VPC", "Python / FastAPI", "Vector Search"]
    },
    {
        id: 3,
        title: "Forward-Deployed Squad: Modernizing Legacy Logistics ERP with AI",
        client: "Global Freight & Supply Chain Operator",
        industry: "Logistics & Supply Chain",
        badge: "FORWARD DEPLOYED SQUAD",
        overview: "Embedded a 5-engineer Neno squad to modernize a legacy on-premises ERP into a real-time, predictive dispatch and tracking platform.",
        challenge: "Legacy architecture suffered from siloed database tables, zero mobile observability, and 12-hour delayed cargo route recalculations.",
        solution: "Redesigned data pipelines with modern Next.js frontends, Kafka real-time event streaming, and predictive route optimization models.",
        metrics: [
            { label: "Time to Production", value: "14 Days" },
            { label: "Fuel Overhead", value: "-22%" },
            { label: "Fleet Visibility", value: "100% Real-Time" }
        ],
        technologies: ["Next.js", "TypeScript", "Apache Kafka", "Kubernetes", "Fine-Tuned Llama 3"]
    },
    {
        id: 4,
        title: "Autonomous Dialer & Unified CRM for Enterprise SaaS Sales",
        client: "High-Growth B2B Cloud Platform",
        industry: "Enterprise SaaS",
        badge: "NENO DIALER & CRM",
        overview: "Deployed Neno Dialer with bidirectional CRM synchronization to automate outbound follow-ups, qualification notes, and calendar scheduling.",
        challenge: "Sales reps spent over 3 hours daily manually logging notes, dialing unanswered calls, and juggling disconnected spreadsheets.",
        solution: "Integrated Neno Dialer directly with Salesforce and HubSpot, enabling automatic call transcription, sentiment analysis, and instant meeting booking.",
        metrics: [
            { label: "Connect Rate", value: "+34%" },
            { label: "Rep Hours Saved", value: "15 hrs/wk" },
            { label: "Pipeline Generated", value: "2.8x" }
        ],
        technologies: ["Neno Dialer", "Neno CRM", "Salesforce API", "HubSpot Sync", "Voice Sentiment AI"]
    }
];

export default function CaseStudiesContent() {
    const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

    const industries = ["All", "Financial Services", "Healthcare & Insurance", "Logistics & Supply Chain", "Enterprise SaaS"];

    const filtered = selectedIndustry === "All"
        ? caseStudiesList
        : caseStudiesList.filter(c => c.industry === selectedIndustry);

    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                {/* Clean Inner-Page Header Layout: Light blue outlined pill badge for titles */}
                <BreadCrumb title="Case Studies" breadCrumb="Company / Case Studies" />

                {/* Hero Introduction */}
                <section style={{ paddingTop: "20px", paddingBottom: "50px", backgroundColor: "#ffffff" }}>
                    <div className="container">
                        <div className="text-center mx-auto" style={{ maxWidth: "850px" }}>
                            <div className="d-inline-flex align-items-center gap-2 mb-3" style={{
                                background: "#EEF2FF",
                                color: "#4F46E5",
                                border: "1px solid #C0D8FF",
                                padding: "6px 18px",
                                borderRadius: "9999px",
                                fontSize: "13px",
                                fontWeight: 700,
                                letterSpacing: "0.5px"
                            }}>
                                <i className="fas fa-chart-line text-primary" style={{ fontSize: "12px" }}></i>
                                <span>PROVEN ENTERPRISE IMPACT & ROI</span>
                            </div>

                            <h1 className="fw-bold mb-3" style={{
                                fontSize: "clamp(2.1rem, 4vw, 3.2rem)",
                                color: "#0f172a",
                                letterSpacing: "-0.5px",
                                lineHeight: "1.15"
                            }}>
                                Real-World AI Deployments. Measurable Outcomes.
                            </h1>

                            <p className="lead mb-0" style={{
                                fontSize: "1.18rem",
                                lineHeight: "1.8",
                                color: "#475569"
                            }}>
                                Discover how Neno Technology delivers transformative enterprise value—from autonomous voice AI agents to embedded forward-deployed engineering squads.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Case Studies Grid */}
                <section style={{ padding: "60px 0 100px 0", backgroundColor: "#F8FAFC", borderTop: "1px solid #e2e8f0" }}>
                    <div className="container">
                        {/* Industry Filters */}
                        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
                            {industries.map((ind) => (
                                <button
                                    key={ind}
                                    type="button"
                                    onClick={() => setSelectedIndustry(ind)}
                                    style={{
                                        backgroundColor: selectedIndustry === ind ? "#4F46E5" : "#ffffff",
                                        color: selectedIndustry === ind ? "#ffffff" : "#475569",
                                        border: selectedIndustry === ind ? "1px solid #4F46E5" : "1px solid #E2E8F0",
                                        borderRadius: "9999px",
                                        padding: "8px 20px",
                                        fontSize: "13px",
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        transition: "all 0.2s ease"
                                    }}
                                >
                                    {ind}
                                </button>
                            ))}
                        </div>

                        {/* Cards List */}
                        <div className="d-flex flex-column gap-4">
                            {filtered.map((study) => (
                                <div
                                    key={study.id}
                                    className="p-4 p-md-5 rounded-4"
                                    style={{
                                        backgroundColor: "#ffffff",
                                        border: "1px solid #e2e8f0",
                                        boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
                                        transition: "all 0.3s ease"
                                    }}
                                >
                                    <div className="row g-4 align-items-center">
                                        <div className="col-lg-8">
                                            <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
                                                <span style={{
                                                    background: "#EEF2FF",
                                                    color: "#4F46E5",
                                                    border: "1px solid #C0D8FF",
                                                    fontSize: "11px",
                                                    fontWeight: 700,
                                                    padding: "4px 10px",
                                                    borderRadius: "6px",
                                                    letterSpacing: "0.5px"
                                                }}>
                                                    {study.badge}
                                                </span>
                                                <span style={{
                                                    background: "#F8FAFC",
                                                    color: "#475569",
                                                    border: "1px solid #E2E8F0",
                                                    fontSize: "11px",
                                                    fontWeight: 600,
                                                    padding: "4px 10px",
                                                    borderRadius: "6px"
                                                }}>
                                                    {study.industry}
                                                </span>
                                            </div>

                                            <h2 className="h3 fw-bold mb-3" style={{ color: "#0f172a" }}>
                                                {study.title}
                                            </h2>

                                            <p style={{ color: "#475569", lineHeight: "1.7", fontSize: "1.05rem" }} className="mb-4">
                                                {study.overview}
                                            </p>

                                            <div className="row g-3 mb-4">
                                                <div className="col-md-6">
                                                    <div className="p-3 rounded-3 h-100" style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                                                        <div className="fw-bold mb-1" style={{ color: "#dc2626", fontSize: "0.88rem" }}>
                                                            <i className="fas fa-exclamation-circle me-1" /> THE CHALLENGE
                                                        </div>
                                                        <p className="mb-0 small text-muted" style={{ lineHeight: "1.6" }}>
                                                            {study.challenge}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="p-3 rounded-3 h-100" style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                                                        <div className="fw-bold mb-1" style={{ color: "#059669", fontSize: "0.88rem" }}>
                                                            <i className="fas fa-check-circle me-1" /> THE NENO SOLUTION
                                                        </div>
                                                        <p className="mb-0 small text-muted" style={{ lineHeight: "1.6" }}>
                                                            {study.solution}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Tech stack tags */}
                                            <div className="d-flex flex-wrap gap-2">
                                                {study.technologies.map((tech, tIdx) => (
                                                    <span key={tIdx} style={{
                                                        backgroundColor: "#F1F5F9",
                                                        border: "1px solid #E2E8F0",
                                                        color: "#475569",
                                                        fontSize: "11px",
                                                        fontWeight: 600,
                                                        padding: "3px 8px",
                                                        borderRadius: "6px"
                                                    }}>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Metrics Column */}
                                        <div className="col-lg-4">
                                            <div className="p-4 rounded-4" style={{
                                                background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
                                                color: "#ffffff"
                                            }}>
                                                <h3 className="h6 fw-bold mb-3 text-uppercase" style={{ color: "#70A5FF", letterSpacing: "1px" }}>
                                                    Verified Results
                                                </h3>
                                                <div className="d-flex flex-column gap-3">
                                                    {study.metrics.map((metric, mIdx) => (
                                                        <div key={mIdx} className="border-bottom pb-2 border-secondary border-opacity-25">
                                                            <div className="fw-bolder" style={{ fontSize: "1.8rem", color: "#ffffff", lineHeight: "1.1" }}>
                                                                {metric.value}
                                                            </div>
                                                            <div className="small" style={{ color: "#94a3b8" }}>
                                                                {metric.label}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <Link
                                                    href="/contact-us"
                                                    className="btn btn-style-one w-100 mt-4"
                                                    style={{
                                                        backgroundColor: "#4F46E5",
                                                        borderColor: "#4F46E5",
                                                        color: "#ffffff",
                                                        padding: "10px 20px",
                                                        fontSize: "13px"
                                                    }}
                                                >
                                                    Discuss Similar Project <i className="fas fa-arrow-right ms-2" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-5 p-5 rounded-4 text-center" style={{
                            backgroundColor: "#ffffff",
                            border: "1px solid #e2e8f0",
                            boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.05)"
                        }}>
                            <h3 className="fw-bold mb-2" style={{ color: "#0f172a" }}>
                                Have an Enterprise Challenge You&apos;d Like to Solve?
                            </h3>
                            <p style={{ color: "#64748b", maxWidth: "600px", margin: "0 auto 24px auto", lineHeight: "1.7" }}>
                                Our forward-deployed engineers and AI architects can assess your architecture and deliver a working proof-of-concept in under two weeks.
                            </p>
                            <Link href="/contact-us" className="btn btn-style-one" style={{
                                backgroundColor: "#4F46E5",
                                borderColor: "#4F46E5",
                                color: "#ffffff",
                                padding: "12px 32px"
                            }}>
                                Schedule Architecture Review <i className="fas fa-arrow-right ms-2" />
                            </Link>
                        </div>
                    </div>
                </section>
            </LayoutV1>
        </div>
    );
}
