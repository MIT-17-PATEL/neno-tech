"use client";
import React from "react";
import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Link from "next/link";
import Image from "next/image";
import {
    FadeUp,
    StaggerContainer,
    StaggerItem,
    MotionGlassCard,
    MotionLinkWrapper
} from "@/components/animation/FramerMotionSystem";


interface LeadershipMember {
    name: string;
    role: string;
    image: string;
    bio: string;
    focus: string;
    tags: string[];
    linkedIn: string;
    email: string;
}

const leadershipTeam: LeadershipMember[] = [
    {
        name: "Aarav Patel",
        role: "Chief Executive Officer & Founder",
        image: "/assets/img/team/5.jpg",
        focus: "Enterprise AI Strategy, Global Expansion & Autonomous Systems",
        bio: "Pioneering the vision for autonomous enterprise operations. With over 15 years steering distributed technology initiatives and enterprise software scale-ups, Aarav leads Neno Technology's global mission to make autonomous AI dependable and transformative for enterprises worldwide.",
        tags: ["Autonomous AI", "Enterprise Scale", "Strategic Vision"],
        linkedIn: "https://www.linkedin.com",
        email: "mailto:aarav@nenotechnology.com"
    },
    {
        name: "Dr. Vikram Mehta",
        role: "Chief Technology Officer & Head of AI",
        image: "/assets/img/team/6.jpg",
        focus: "LLM Orchestration, Multi-Agent Systems & Neural Models",
        bio: "Directs research and core architecture for Neno's agentic frameworks, specialized model fine-tuning pipelines, and high-concurrency neural processing. Passionate about deterministic multi-agent swarms and zero-data-leakage enterprise architectures.",
        tags: ["LLM Architectures", "Multi-Agent Swarms", "RAG Systems"],
        linkedIn: "https://www.linkedin.com",
        email: "mailto:vikram@nenotechnology.com"
    },
    {
        name: "Rohan Sharma",
        role: "VP of Engineering & Forward Deployment",
        image: "/assets/img/team/7.jpg",
        focus: "Forward-Deployed Squads, Cloud Infrastructure & Production Scale",
        bio: "Spearheads Neno's elite engineering squads and production deployment velocity. Rohan specializes in embedded client engineering, ultra-low-latency distributed infrastructure, and carrier-grade system resilience.",
        tags: ["Distributed Systems", "Cloud Scale", "Forward Deployed"],
        linkedIn: "https://www.linkedin.com",
        email: "mailto:rohan@nenotechnology.com"
    },
    {
        name: "Ananya Iyer",
        role: "Head of Product & AI Go-To-Market",
        image: "/assets/img/team/8.jpg",
        focus: "Neno Voice, AI Dialers, ERP & Enterprise Solutions",
        bio: "Leads the product roadmap for Neno's proprietary AI product suite including Neno Voice, Neno Dialer, and automated CRM integrations. Ananya ensures every product delivers concrete operational ROI and effortless adoption for enterprise teams.",
        tags: ["Voice AI", "Product Strategy", "Enterprise GTM"],
        linkedIn: "https://www.linkedin.com",
        email: "mailto:ananya@nenotechnology.com"
    }
];

const storyPillars = [
    {
        icon: "fas fa-brain",
        title: "Autonomous Intelligence",
        description: "Moving beyond basic chatbots to multi-agent swarms and autonomous workflows that independently plan, execute, and verify complex business operations."
    },
    {
        icon: "fas fa-users-cog",
        title: "Forward-Deployed Agility",
        description: "Our elite engineers embed directly inside partner engineering roadmaps, translating strategic enterprise AI goals into production-grade systems in record time."
    },
    {
        icon: "fas fa-shield-alt",
        title: "Enterprise Trust & Security",
        description: "Architected for mission-critical reliability with SOC 2 compliance, zero-data-retention options, private cloud VPCs, and impenetrable governance standards."
    },
    {
        icon: "fas fa-chart-line",
        title: "Measurable Economic ROI",
        description: "Every solution we deliver is measured against tangible business outcomes—reducing manual overhead by up to 60%, delivering 99.8% accuracy, and unlocking 24/7 scale."
    }
];

const metrics = [
    { value: "50+", label: "Enterprise Deployments", sub: "Globally delivered" },
    { value: "99.8%", label: "System Accuracy", sub: "In production calls & tasks" },
    { value: "10x", label: "Faster Deployment", sub: "From prototype to live" },
    { value: "24/7", label: "Autonomous Uptime", sub: "Global enterprise support" }
];

const facilityFeatures = [
    { icon: "fas fa-laptop-code", title: "AI Innovation Lab", desc: "Dedicated R&D facility for model fine-tuning and agent simulation" },
    { icon: "fas fa-shield-virus", title: "SOC 2 & Biometric Security", desc: "Enterprise-grade isolated infrastructure with 24/7 physical access control" },
    { icon: "fas fa-plane-departure", title: "Global Airport Connectivity", desc: "20 minutes from Sardar Vallabhbhai Patel International Airport (AMD)" },
    { icon: "fas fa-network-wired", title: "Dual-Redundant Fiber", desc: "Ultra-low-latency dedicated bandwidth and uninterruptible power grid" }
];

export default function AboutUsContent() {
    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                {/* Clean Inner-Page Header Layout: Light blue outlined pill badge for titles */}
                <BreadCrumb title="About Us" breadCrumb="Company / About Us" />

                {/* Hero Introduction */}
                <FadeUp>
                    <section style={{ paddingTop: "20px", paddingBottom: "50px", backgroundColor: "transparent" }}>
                        <div className="container">
                            <div className="text-center mx-auto" style={{ maxWidth: "850px" }}>
                                <div className="d-inline-flex align-items-center gap-2 mb-3" style={{
                                    background: "rgba(56, 189, 248, 0.08)",
                                    color: "#38bdf8",
                                    border: "1px solid rgba(56, 189, 248, 0.35)",
                                    padding: "6px 20px",
                                    borderRadius: "9999px",
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    letterSpacing: "0.5px"
                                }}>
                                    <i className="fas fa-sparkles" style={{ fontSize: "11px", color: "#38bdf8" }}></i>
                                    <span>PIONEERING AUTONOMOUS AI & FORWARD DEPLOYMENT</span>
                                </div>

                                <h1 className="fw-bold mb-3" style={{
                                    fontSize: "clamp(2.1rem, 4vw, 3.2rem)",
                                    color: "#ffffff",
                                    letterSpacing: "-0.5px",
                                    lineHeight: "1.15"
                                }}>
                                    Architecting the Next Era of Enterprise Intelligence
                                </h1>

                                <p className="lead mb-0" style={{
                                    fontSize: "1.18rem",
                                    lineHeight: "1.8",
                                    color: "#94a3b8"
                                }}>
                                    Headquartered at GIFT City, Gujarat, Neno Technology designs autonomous AI agents, proprietary enterprise platforms, and embeds forward-deployed engineering squads to solve high-stakes challenges for global enterprises.
                                </p>
                            </div>
                        </div>
                    </section>
                </FadeUp>

                {/* ========================================================================= */}
                {/* SECTION 1: OUR STORY                                                      */}
                {/* ========================================================================= */}
                <section id="our-story" style={{ padding: "80px 0", backgroundColor: "transparent", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
                    <div className="container">
                        {/* Section Header */}
                        <FadeUp>
                            <div className="text-center mx-auto mb-5" style={{ maxWidth: "750px" }}>
                                <div className="d-inline-flex align-items-center gap-2 mb-3" style={{
                                    background: "rgba(56, 189, 248, 0.08)",
                                    color: "#38bdf8",
                                    border: "1px solid rgba(56, 189, 248, 0.35)",
                                    padding: "6px 20px",
                                    borderRadius: "9999px",
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    letterSpacing: "0.5px",
                                    textTransform: "uppercase"
                                }}>
                                    <i className="fas fa-history" style={{ fontSize: "11px", color: "#38bdf8" }}></i>
                                    <span>Our Story</span>
                                </div>
                                <h2 className="fw-bold mb-3" style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)", color: "#ffffff", letterSpacing: "-0.5px" }}>
                                    From Bold Ambition to Global Autonomous AI Leader
                                </h2>
                                <p style={{ color: "#94a3b8", fontSize: "1.1rem", lineHeight: "1.7" }}>
                                    How a relentless focus on real-world utility and engineering rigor shaped our trajectory.
                                </p>
                            </div>
                        </FadeUp>

                        {/* Story Narrative Cards (2-Column) */}
                        <StaggerContainer className="row g-4 mb-5">
                            {/* Card 1: Origins */}
                            <StaggerItem className="col-lg-6">
                                <MotionGlassCard className="h-100 p-4 p-md-5 rounded-4" style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.035)",
                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                    backdropFilter: "blur(16px)",
                                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)"
                                }}>
                                    <div className="d-flex align-items-center gap-3 mb-4">
                                        <div className="d-flex align-items-center justify-content-center rounded-3" style={{
                                            width: "52px",
                                            height: "52px",
                                            background: "rgba(56, 189, 248, 0.12)",
                                            border: "1px solid rgba(56, 189, 248, 0.3)",
                                            color: "#38bdf8",
                                            fontSize: "22px"
                                        }}>
                                            <i className="fas fa-seedling"></i>
                                        </div>
                                        <div>
                                            <span style={{ fontSize: "12px", fontWeight: 700, color: "#38bdf8", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                                Genesis & Background
                                            </span>
                                            <h3 className="h4 fw-bold mb-0" style={{ color: "#ffffff" }}>Our Origins</h3>
                                        </div>
                                    </div>
                                    <p style={{ color: "#94a3b8", lineHeight: "1.8", fontSize: "1.05rem" }}>
                                        Neno Technology was born out of a stark realization: while generative AI models were rapidly evolving in research labs, real-world enterprises were stuck grappling with rigid workflows, brittle integrations, and repetitive operational bottlenecks.
                                    </p>
                                    <p className="mb-0" style={{ color: "#94a3b8", lineHeight: "1.8", fontSize: "1.05rem" }}>
                                        We set out with a clear purpose: to bridge the vast chasm between theoretical machine learning and production-grade enterprise software. Starting with deterministic conversational AI and custom LLM workflows, we engineered systems that do not merely generate text—they reason, execute transactions, and deliver reliable business outcomes.
                                    </p>
                                </MotionGlassCard>
                            </StaggerItem>

                            {/* Card 2: Vision & Evolution */}
                            <StaggerItem className="col-lg-6">
                                <MotionGlassCard className="h-100 p-4 p-md-5 rounded-4" style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.035)",
                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                    backdropFilter: "blur(16px)",
                                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)"
                                }}>
                                    <div className="d-flex align-items-center gap-3 mb-4">
                                        <div className="d-flex align-items-center justify-content-center rounded-3" style={{
                                            width: "52px",
                                            height: "52px",
                                            background: "rgba(99, 102, 241, 0.15)",
                                            border: "1px solid rgba(99, 102, 241, 0.3)",
                                            color: "#818cf8",
                                            fontSize: "22px"
                                        }}>
                                            <i className="fas fa-rocket"></i>
                                        </div>
                                        <div>
                                            <span style={{ fontSize: "12px", fontWeight: 700, color: "#818cf8", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                                Evolution & Mission
                                            </span>
                                            <h3 className="h4 fw-bold mb-0" style={{ color: "#ffffff" }}>Our Vision for the Future</h3>
                                        </div>
                                    </div>
                                    <p style={{ color: "#94a3b8", lineHeight: "1.8", fontSize: "1.05rem" }}>
                                        Today, Neno Technology operates as a full-spectrum AI enterprise powerhouse. We develop proprietary industry platforms—such as Neno Voice (sub-400ms conversational voice agents), Neno Dialer, and AI-native ERP/CRM solutions—while deploying Forward Deployed Engineers directly into enterprise roadmaps.
                                    </p>
                                    <p className="mb-0" style={{ color: "#94a3b8", lineHeight: "1.8", fontSize: "1.05rem" }}>
                                        Our long-term vision is an enterprise ecosystem where autonomous AI squads seamlessly shoulder operational load, enabling human leaders to focus on strategic creativity, high-value client relationships, and unprecedented innovation.
                                    </p>
                                </MotionGlassCard>
                            </StaggerItem>
                        </StaggerContainer>

                        {/* 4 Core Pillars Grid */}
                        <div className="mb-5">
                            <FadeUp>
                                <h4 className="fw-bold text-center mb-4" style={{ color: "#ffffff", letterSpacing: "-0.3px" }}>
                                    The Core Pillars Driving Our Work
                                </h4>
                            </FadeUp>
                            <StaggerContainer className="row g-4">
                                {storyPillars.map((pillar, idx) => (
                                    <StaggerItem className="col-lg-3 col-md-6" key={idx}>
                                        <MotionGlassCard className="h-100 p-4 rounded-4" style={{
                                            backgroundColor: "rgba(255, 255, 255, 0.035)",
                                            border: "1px solid rgba(255, 255, 255, 0.08)",
                                            backdropFilter: "blur(16px)"
                                        }}>
                                            <div className="d-flex align-items-center justify-content-center rounded-3 mb-3" style={{
                                                width: "48px",
                                                height: "48px",
                                                backgroundColor: "rgba(56, 189, 248, 0.12)",
                                                border: "1px solid rgba(56, 189, 248, 0.25)",
                                                color: "#38bdf8",
                                                fontSize: "20px"
                                            }}>
                                                <i className={pillar.icon}></i>
                                            </div>
                                            <h5 className="fw-bold mb-2" style={{ color: "#ffffff", fontSize: "1.1rem" }}>
                                                {pillar.title}
                                            </h5>
                                            <p className="mb-0" style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: "1.6" }}>
                                                {pillar.description}
                                            </p>
                                        </MotionGlassCard>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>

                        {/* Impact Metrics Strip */}
                        <FadeUp>
                            <div className="p-4 p-md-5 rounded-4" style={{
                                background: "linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 27, 75, 0.8) 100%)",
                                border: "1px solid rgba(99, 102, 241, 0.25)",
                                backdropFilter: "blur(20px)",
                                boxShadow: "0 16px 36px rgba(0, 0, 0, 0.35)",
                                color: "#ffffff"
                            }}>
                                <div className="row g-4 text-center">
                                    {metrics.map((m, idx) => (
                                        <div className="col-6 col-lg-3" key={idx}>
                                            <div className="fw-bolder" style={{
                                                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                                                color: "#38bdf8",
                                                lineHeight: "1.1"
                                            }}>
                                                {m.value}
                                            </div>
                                            <div className="fw-bold mt-1 text-white" style={{ fontSize: "1rem" }}>
                                                {m.label}
                                            </div>
                                            <div style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                                                {m.sub}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* SECTION 2: LEADERSHIP BOARD                                               */}
                {/* ========================================================================= */}
                <section id="leadership" style={{ padding: "80px 0", backgroundColor: "transparent", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
                    <div className="container">
                        {/* Section Header */}
                        <FadeUp>
                            <div className="text-center mx-auto mb-5" style={{ maxWidth: "750px" }}>
                                <div className="d-inline-flex align-items-center gap-2 mb-3" style={{
                                    background: "rgba(56, 189, 248, 0.08)",
                                    color: "#38bdf8",
                                    border: "1px solid rgba(56, 189, 248, 0.35)",
                                    padding: "6px 20px",
                                    borderRadius: "9999px",
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    letterSpacing: "0.5px",
                                    textTransform: "uppercase"
                                }}>
                                    <i className="fas fa-users" style={{ fontSize: "11px", color: "#38bdf8" }}></i>
                                    <span>Leadership Board</span>
                                </div>
                                <h2 className="fw-bold mb-3" style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)", color: "#ffffff", letterSpacing: "-0.5px" }}>
                                    The Minds Guiding Neno Technology
                                </h2>
                                <p style={{ color: "#94a3b8", fontSize: "1.1rem", lineHeight: "1.7" }}>
                                    A dedicated team of AI systems architects, machine learning researchers, and enterprise engineering veterans shaping autonomous technology.
                                </p>
                            </div>
                        </FadeUp>

                        {/* Leadership Cards Grid */}
                        <StaggerContainer className="row g-4">
                            {leadershipTeam.map((member, idx) => (
                                <StaggerItem className="col-lg-6" key={idx}>
                                    <MotionGlassCard className="h-100 p-4 p-sm-5 rounded-4 d-flex flex-column flex-sm-row gap-4 align-items-start" style={{
                                        backgroundColor: "rgba(255, 255, 255, 0.035)",
                                        border: "1px solid rgba(255, 255, 255, 0.08)",
                                        backdropFilter: "blur(16px)",
                                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)"
                                    }}>
                                        {/* Avatar Column */}
                                        <div className="flex-shrink-0 text-center mx-auto mx-sm-0">
                                            <div style={{
                                                position: "relative",
                                                width: "140px",
                                                height: "155px",
                                                borderRadius: "16px",
                                                overflow: "hidden",
                                                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
                                                border: "2px solid rgba(56, 189, 248, 0.35)"
                                            }}>
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    fill
                                                    style={{ objectFit: "cover" }}
                                                />
                                            </div>
                                            {/* Social Links */}
                                            <div className="d-flex justify-content-center gap-2 mt-3">
                                                <a
                                                    href={member.linkedIn}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`${member.name} LinkedIn`}
                                                    className="d-flex align-items-center justify-content-center rounded-circle text-decoration-none"
                                                    style={{
                                                        width: "32px",
                                                        height: "32px",
                                                        backgroundColor: "rgba(56, 189, 248, 0.12)",
                                                        color: "#38bdf8",
                                                        border: "1px solid rgba(56, 189, 248, 0.25)",
                                                        fontSize: "13px",
                                                        transition: "all 0.2s ease"
                                                    }}
                                                >
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                                <a
                                                    href={member.email}
                                                    aria-label={`Email ${member.name}`}
                                                    className="d-flex align-items-center justify-content-center rounded-circle text-decoration-none"
                                                    style={{
                                                        width: "32px",
                                                        height: "32px",
                                                        backgroundColor: "rgba(255, 255, 255, 0.06)",
                                                        color: "#94a3b8",
                                                        border: "1px solid rgba(255, 255, 255, 0.1)",
                                                        fontSize: "13px",
                                                        transition: "all 0.2s ease"
                                                    }}
                                                >
                                                    <i className="fas fa-envelope"></i>
                                                </a>
                                            </div>
                                        </div>

                                        {/* Details Column */}
                                        <div className="flex-grow-1">
                                            <div className="mb-2">
                                                <span style={{
                                                    background: "rgba(56, 189, 248, 0.1)",
                                                    color: "#38bdf8",
                                                    border: "1px solid rgba(56, 189, 248, 0.25)",
                                                    fontSize: "11px",
                                                    fontWeight: 700,
                                                    padding: "4px 10px",
                                                    borderRadius: "6px",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.5px"
                                                }}>
                                                    {member.role}
                                                </span>
                                            </div>
                                            <h3 className="h4 fw-bold mb-1" style={{ color: "#ffffff" }}>
                                                {member.name}
                                            </h3>
                                            <p className="fw-semibold mb-2" style={{ color: "#818cf8", fontSize: "0.92rem" }}>
                                                {member.focus}
                                            </p>
                                            <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: "1.65" }} className="mb-3">
                                                {member.bio}
                                            </p>

                                            {/* Skill / Focus Tags */}
                                            <div className="d-flex flex-wrap gap-2">
                                                {member.tags.map((tag, tagIdx) => (
                                                    <span key={tagIdx} style={{
                                                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                                                        border: "1px solid rgba(255, 255, 255, 0.08)",
                                                        color: "#cbd5e1",
                                                        fontSize: "11px",
                                                        fontWeight: 600,
                                                        padding: "3px 8px",
                                                        borderRadius: "6px"
                                                    }}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </MotionGlassCard>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        {/* Team Engagement Callout */}
                        <FadeUp>
                            <div className="mt-5 p-4 rounded-4 text-center" style={{
                                backgroundColor: "rgba(255, 255, 255, 0.03)",
                                border: "1px dashed rgba(56, 189, 248, 0.35)",
                                backdropFilter: "blur(12px)"
                            }}>
                                <p className="mb-3 fw-semibold" style={{ color: "#ffffff" }}>
                                    Want to work directly with our engineering and leadership team?
                                </p>
                                <div className="d-flex justify-content-center gap-3 flex-wrap">
                                    <MotionLinkWrapper>
                                        <Link href="/contact-us" className="btn btn-style-one btn-sm" style={{
                                            backgroundColor: "#4F46E5",
                                            borderColor: "#4F46E5",
                                            color: "#ffffff",
                                            padding: "8px 24px"
                                        }}>
                                            Schedule Executive Briefing <i className="fas fa-arrow-right ms-2" />
                                        </Link>
                                    </MotionLinkWrapper>
                                    <MotionLinkWrapper>
                                        <Link href="/hire-engineers" className="btn btn-style-one btn-border btn-sm" style={{
                                            borderColor: "rgba(255, 255, 255, 0.25)",
                                            color: "#ffffff",
                                            padding: "8px 24px"
                                        }}>
                                            Explore Forward Deployed Teams
                                        </Link>
                                    </MotionLinkWrapper>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* SECTION 3: LOCATION — GIFT CITY                                           */}
                {/* ========================================================================= */}
                <section id="location" style={{ padding: "80px 0", backgroundColor: "transparent", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
                    <div className="container">
                        {/* Section Header */}
                        <FadeUp>
                            <div className="text-center mx-auto mb-5" style={{ maxWidth: "750px" }}>
                                <div className="d-inline-flex align-items-center gap-2 mb-3" style={{
                                    background: "rgba(56, 189, 248, 0.08)",
                                    color: "#38bdf8",
                                    border: "1px solid rgba(56, 189, 248, 0.35)",
                                    padding: "6px 20px",
                                    borderRadius: "9999px",
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    letterSpacing: "0.5px",
                                    textTransform: "uppercase"
                                }}>
                                    <i className="fas fa-map-marker-alt" style={{ fontSize: "11px", color: "#38bdf8" }}></i>
                                    <span>Location — GIFT City</span>
                                </div>
                                <h2 className="fw-bold mb-3" style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)", color: "#ffffff", letterSpacing: "-0.5px" }}>
                                    Headquartered at India&apos;s Premier Smart Tech Hub
                                </h2>
                                <p style={{ color: "#94a3b8", fontSize: "1.1rem", lineHeight: "1.7" }}>
                                    Stationed at Gujarat International Finance Tec-City (GIFT City)—India’s flagship international financial services and high-technology center.
                                </p>
                            </div>
                        </FadeUp>

                        {/* Location Main Grid */}
                        <StaggerContainer className="row g-4 mb-5">
                            {/* Left Column: Office Details & GIFT City Ecosystem */}
                            <StaggerItem className="col-lg-6">
                                <MotionGlassCard className="h-100 p-4 p-md-5 rounded-4 d-flex flex-column justify-content-between" style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.035)",
                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                    backdropFilter: "blur(16px)",
                                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)"
                                }}>
                                    <div>
                                        {/* Facility Header Badge */}
                                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4 pb-3 border-bottom" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="d-flex align-items-center justify-content-center rounded-3" style={{
                                                    width: "48px",
                                                    height: "48px",
                                                    backgroundColor: "rgba(56, 189, 248, 0.12)",
                                                    border: "1px solid rgba(56, 189, 248, 0.25)",
                                                    color: "#38bdf8",
                                                    fontSize: "20px"
                                                }}>
                                                    <i className="fas fa-building"></i>
                                                </div>
                                                <div>
                                                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#38bdf8", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                                        Global Headquarters
                                                    </span>
                                                    <h3 className="h4 fw-bold mb-0" style={{ color: "#ffffff" }}>
                                                        GIFT City Tower One
                                                    </h3>
                                                </div>
                                            </div>
                                            <span style={{
                                                background: "rgba(16, 185, 129, 0.12)",
                                                color: "#34d399",
                                                border: "1px solid rgba(16, 185, 129, 0.3)",
                                                borderRadius: "9999px",
                                                fontSize: "12px",
                                                fontWeight: 700,
                                                padding: "4px 12px"
                                            }}>
                                                ● Operational 24/7
                                            </span>
                                        </div>

                                        {/* Full Address Block */}
                                        <div className="p-3 rounded-3 mb-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.07)" }}>
                                            <div className="d-flex align-items-start gap-3">
                                                <i className="fas fa-location-arrow mt-1" style={{ color: "#38bdf8", fontSize: "16px" }}></i>
                                                <div>
                                                    <div className="fw-bold" style={{ color: "#ffffff" }}>Office Address:</div>
                                                    <div style={{ color: "#94a3b8", lineHeight: "1.6" }}>
                                                        GIFT City Tower One, 13th Floor,<br />
                                                        AI Excellence Centre,<br />
                                                        Gandhinagar, Gujarat 382355, India
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Why GIFT City Highlights */}
                                        <div className="mb-4">
                                            <h4 className="h6 fw-bold mb-3" style={{ color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                                Why GIFT City?
                                            </h4>
                                            <ul className="list-unstyled d-flex flex-column gap-3 mb-0" style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
                                                <li className="d-flex align-items-start gap-2">
                                                    <i className="fas fa-check-circle mt-1" style={{ color: "#38bdf8" }}></i>
                                                    <span><strong style={{ color: "#ffffff" }}>India&apos;s First IFSC Hub:</strong> Strategic proximity to global banking leaders, multinational fintechs, and international technology syndicates.</span>
                                                </li>
                                                <li className="d-flex align-items-start gap-2">
                                                    <i className="fas fa-check-circle mt-1" style={{ color: "#38bdf8" }}></i>
                                                    <span><strong style={{ color: "#ffffff" }}>Next-Gen Infrastructure:</strong> Uninterrupted utility tunnels, dedicated green energy grids, and carrier-neutral fiber networks.</span>
                                                </li>
                                                <li className="d-flex align-items-start gap-2">
                                                    <i className="fas fa-check-circle mt-1" style={{ color: "#38bdf8" }}></i>
                                                    <span><strong style={{ color: "#ffffff" }}>Global Reach & Access:</strong> Perfectly placed for 24/7 client servicing across North America, Europe, the Middle East, and Asia-Pacific.</span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Direct Contact Info */}
                                        <div className="row g-3 pt-3 border-top mb-4" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
                                            <div className="col-sm-6">
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-phone-alt" style={{ color: "#38bdf8" }}></i>
                                                    <div>
                                                        <div style={{ fontSize: "11px", color: "#64748b", fontWeight: 600 }}>DIRECT PHONE</div>
                                                        <a href="tel:+919106915561" className="fw-semibold text-decoration-none" style={{ color: "#38bdf8", fontSize: "0.95rem" }}>
                                                            +91 91069 15561
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-envelope" style={{ color: "#38bdf8" }}></i>
                                                    <div>
                                                        <div style={{ fontSize: "11px", color: "#64748b", fontWeight: 600 }}>OFFICIAL EMAIL</div>
                                                        <a href="mailto:sales@nenotechnology.com" className="fw-semibold text-decoration-none" style={{ color: "#38bdf8", fontSize: "0.95rem" }}>
                                                            sales@nenotechnology.com
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="d-flex gap-3 flex-wrap">
                                        <MotionLinkWrapper>
                                            <a
                                                href="https://maps.google.com/maps?q=GIFT+One+Tower,+GIFT+City,+Gujarat,+India"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-style-one btn-sm"
                                                style={{
                                                    backgroundColor: "#4F46E5",
                                                    borderColor: "#4F46E5",
                                                    color: "#ffffff",
                                                    padding: "10px 22px"
                                                }}
                                            >
                                                <i className="fas fa-directions me-2" /> Get Directions
                                            </a>
                                        </MotionLinkWrapper>
                                        <MotionLinkWrapper>
                                            <Link
                                                href="/contact-us"
                                                className="btn btn-style-one btn-border btn-sm"
                                                style={{
                                                    borderColor: "rgba(255, 255, 255, 0.25)",
                                                    color: "#ffffff",
                                                    padding: "10px 22px"
                                                }}
                                            >
                                                <i className="fas fa-calendar-check me-2" /> Schedule Office Visit
                                            </Link>
                                        </MotionLinkWrapper>
                                    </div>
                                </MotionGlassCard>
                            </StaggerItem>

                            {/* Right Column: Interactive Map & Facility Amenities */}
                            <StaggerItem className="col-lg-6">
                                <MotionGlassCard className="h-100 p-4 p-md-5 rounded-4 d-flex flex-column justify-content-between" style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.035)",
                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                    backdropFilter: "blur(16px)",
                                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)"
                                }}>
                                    {/* Embedded Google Map */}
                                    <div className="mb-4">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <h4 className="h6 fw-bold mb-0" style={{ color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                                Interactive Campus Map
                                            </h4>
                                            <span style={{ fontSize: "12px", color: "#94a3b8" }}>
                                                <i className="fas fa-globe-americas me-1 text-primary"></i> Gandhinagar, Gujarat
                                            </span>
                                        </div>
                                        <div style={{
                                            position: "relative",
                                            width: "100%",
                                            height: "290px",
                                            borderRadius: "14px",
                                            overflow: "hidden",
                                            border: "1px solid rgba(255, 255, 255, 0.1)",
                                            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)"
                                        }}>
                                            <iframe
                                                title="Neno Technology GIFT City Headquarters Map"
                                                src="https://maps.google.com/maps?q=GIFT+One+Tower,+GIFT+City,+Gujarat,+India&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                                style={{ border: 0, width: "100%", height: "100%" }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                        </div>
                                    </div>

                                    {/* Facility Highlights Cards */}
                                    <div>
                                        <h4 className="h6 fw-bold mb-3" style={{ color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                            Headquarters & Facility Highlights
                                        </h4>
                                        <div className="row g-2">
                                            {facilityFeatures.map((feat, fIdx) => (
                                                <div className="col-sm-6" key={fIdx}>
                                                    <div className="p-3 rounded-3 h-100" style={{
                                                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                                                        border: "1px solid rgba(255, 255, 255, 0.07)"
                                                    }}>
                                                        <div className="d-flex align-items-center gap-2 mb-1">
                                                            <i className={feat.icon} style={{ color: "#38bdf8", fontSize: "14px" }}></i>
                                                            <span className="fw-bold" style={{ color: "#ffffff", fontSize: "0.9rem" }}>
                                                                {feat.title}
                                                            </span>
                                                        </div>
                                                        <p className="mb-0" style={{ color: "#94a3b8", fontSize: "0.82rem", lineHeight: "1.5" }}>
                                                            {feat.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </MotionGlassCard>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* CLOSING CTA BANNER                                                        */}
                {/* ========================================================================= */}
                <section style={{ padding: "60px 0 100px 0", backgroundColor: "transparent" }}>
                    <div className="container">
                        <FadeUp>
                            <div className="rounded-4 p-5 text-center text-md-start position-relative overflow-hidden" style={{
                                background: "linear-gradient(135deg, rgba(30, 27, 75, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)",
                                border: "1px solid rgba(99, 102, 241, 0.3)",
                                backdropFilter: "blur(20px)",
                                boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.5)"
                            }}>
                                <div className="row align-items-center g-4 position-relative" style={{ zIndex: 2 }}>
                                    <div className="col-lg-8">
                                        <span style={{
                                            background: "rgba(56, 189, 248, 0.12)",
                                            color: "#38bdf8",
                                            border: "1px solid rgba(56, 189, 248, 0.35)",
                                            padding: "6px 18px",
                                            borderRadius: "9999px",
                                            fontSize: "12px",
                                            fontWeight: 700,
                                            letterSpacing: "0.5px",
                                            display: "inline-block",
                                            marginBottom: "16px"
                                        }}>
                                            PARTNER WITH NENO TECHNOLOGY
                                        </span>
                                        <h2 className="fw-bold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", letterSpacing: "-0.5px" }}>
                                            Ready to Build the Future of Autonomous Business?
                                        </h2>
                                        <p className="mb-0" style={{ color: "#cbd5e1", fontSize: "1.1rem", maxWidth: "680px", lineHeight: "1.7" }}>
                                            Whether you need autonomous AI calling agents, custom enterprise workflow automation, or elite forward-deployed engineers, our GIFT City team is ready to deliver.
                                        </p>
                                    </div>
                                    <div className="col-lg-4 text-center text-lg-end">
                                        <div className="d-flex flex-column flex-sm-row justify-content-lg-end gap-3">
                                            <MotionLinkWrapper>
                                                <Link
                                                    href="/contact-us"
                                                    className="btn btn-style-one"
                                                    style={{
                                                        backgroundColor: "#4F46E5",
                                                        borderColor: "#4F46E5",
                                                        color: "#ffffff",
                                                        padding: "14px 30px",
                                                        fontSize: "15px",
                                                        fontWeight: 600
                                                    }}
                                                >
                                                    Get in Touch <i className="fas fa-arrow-right ms-2" />
                                                </Link>
                                            </MotionLinkWrapper>
                                            <MotionLinkWrapper>
                                                <Link
                                                    href="/services"
                                                    className="btn btn-style-one btn-border"
                                                    style={{
                                                        borderColor: "rgba(255,255,255,0.25)",
                                                        color: "#ffffff",
                                                        padding: "14px 26px",
                                                        fontSize: "15px",
                                                        fontWeight: 600
                                                    }}
                                                >
                                                    Explore Services
                                                </Link>
                                            </MotionLinkWrapper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </section>
            </LayoutV1>
        </div>
    );
}
