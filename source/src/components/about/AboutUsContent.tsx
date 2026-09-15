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

interface LeaderMember {
    name: string;
    role: string;
    badge: string;
    image: string;
    bio: string;
    social: {
        linkedin?: string;
        instagram?: string;
        facebook?: string;
    };
}

// Leadership team - structured for reusability so future members can be added seamlessly
const leadershipTeam: LeaderMember[] = [
    {
        name: "Tirth Patel",
        role: "Founder & CEO",
        badge: "Leadership",
        image: "/assets/img/team/tirth-patel.jpg",
        bio: "Leading the vision and engineering execution at Neno Technology. Specialized in architecting enterprise agentic AI systems, voice platforms, and deploying forward-deployed engineering squads for high-growth enterprises.",
        social: {
            linkedin: "https://www.linkedin.com/in/tirth-patel-nenotechnology/",
            instagram: "https://www.instagram.com/tirthpatel00/",
            facebook: "https://www.facebook.com/tirth.patel.152216/"
        }
    }
];

// Founding timeline milestones
const foundingMilestones = [
    {
        phase: "Phase 1",
        year: "Foundation",
        title: "GIFT City Inception",
        desc: "Founded in GIFT City, Gandhinagar as a focused AI engineering team dedicated to bridging the gap between theoretical models and mission-critical production software."
    },
    {
        phase: "Phase 2",
        year: "Accreditation",
        title: "DPIIT & Startup India Recognition",
        desc: "Officially recognized by the Department for Promotion of Industry and Internal Trade (DPIIT), Government of India, validating our commitment to technological innovation."
    },
    {
        phase: "Phase 3",
        year: "Scale",
        title: "Expansion into Four Practices",
        desc: "Unified operations across four connected practices: Hire (Engineers on demand), Build (Turnkey AI systems), Products (Voice AI, Dialer, CRM, ERP), and Advise (Consulting & Corporate Training)."
    },
    {
        phase: "Phase 4",
        year: "Ecosystem",
        title: "Ecosystem Leadership & Global Delivery",
        desc: "Co-founded Gujarat AI Society and Agentic Bharat to build the national autonomous AI talent pipeline, while delivering production systems to clients across India, US, UK, UAE, and Australia."
    }
];

// Core Story Pillars
const storyPillars = [
    {
        icon: "fas fa-brain",
        title: "Autonomous Intelligence",
        description: "Moving beyond basic wrappers to multi-agent swarms that autonomously plan, execute, and verify complex business operations."
    },
    {
        icon: "fas fa-users-cog",
        title: "Forward-Deployed Agility",
        description: "Our elite engineers embed directly inside partner engineering roadmaps, translating enterprise AI goals into production code in record time."
    },
    {
        icon: "fas fa-shield-alt",
        title: "Enterprise Trust & Security",
        description: "Architected for mission-critical reliability with SOC 2 compliance, zero-data-retention options, private cloud VPCs, and impenetrable governance standards."
    },
    {
        icon: "fas fa-chart-line",
        title: "Measurable Economic ROI",
        description: "Every solution we deliver is measured against tangible business outcomes, reducing manual overhead by up to 60% with continuous 24/7 reliability."
    }
];

// Credentials list
const credentials = [
    {
        type: "National Accreditation",
        title: "DPIIT Recognized",
        org: "Govt. of India",
        desc: "Recognized by the Department for Promotion of Industry and Internal Trade under the Ministry of Commerce and Industry.",
        icon: "fas fa-award",
        highlight: "#38bdf8"
    },
    {
        type: "Flagship Initiative",
        title: "Startup India",
        org: "Govt. of India",
        desc: "Certified Startup India enterprise acknowledged for deep-tech innovation, research, and intellectual property development.",
        imageBadge: "/assets/img/badges/startup-india.png",
        highlight: "#fb923c"
    },
    {
        type: "Ecosystem Co-Founder",
        title: "Gujarat AI Society",
        org: "Founding Member",
        desc: "Pioneering regional AI excellence, advancing tech enablement, and connecting enterprise leaders with state-of-the-art AI research.",
        icon: "fas fa-brain",
        highlight: "#818cf8"
    },
    {
        type: "National Initiative",
        title: "Agentic Bharat",
        org: "Co-Founder",
        desc: "Catalyzing India's agentic engineering revolution by setting industry standards for deterministic, multi-agent enterprise deployments.",
        icon: "fas fa-microchip",
        highlight: "#34d399"
    }
];

// Offices list
const offices = [
    {
        label: "Global Headquarters",
        city: "Gandhinagar (HQ)",
        address: "13th Floor, GIFT Tower One, GIFT City, Gandhinagar, Gujarat 382355, India",
        badge: "Operational 24/7",
        icon: "fas fa-building",
        accent: "#38bdf8",
        directionsUrl: "https://maps.google.com/maps?q=GIFT+One+Tower,+GIFT+City,+Gujarat,+India"
    },
    {
        label: "Commercial & Regional Hub",
        city: "Mumbai",
        address: "Mathuradas Mill Compound, Peninsula Spenta, 1, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013",
        badge: "Client Hub",
        icon: "fas fa-city",
        accent: "#818cf8",
        directionsUrl: "https://maps.google.com/maps?q=Peninsula+Spenta+Mathuradas+Mill+Compound+Lower+Parel+Mumbai"
    },
    {
        label: "Operations & Delivery Centre",
        city: "Ahmedabad",
        address: "Opp. The National Higher Secondary School, Bhuyangdev, Sola Rd, Nr. Parshwanath Jain Mandir, Vardhmannagar Society, C.P. Nagar-1, Ahmedabad, Gujarat 380063",
        badge: "Delivery Lab",
        icon: "fas fa-laptop-code",
        accent: "#34d399",
        directionsUrl: "https://maps.google.com/maps?q=Bhuyangdev+Sola+Road+Ahmedabad+Gujarat"
    }
];

const facilityFeatures = [
    { icon: "fas fa-laptop-code", title: "AI Innovation Lab", desc: "Dedicated R&D facility for model fine-tuning, evals, and multi-agent simulation" },
    { icon: "fas fa-shield-virus", title: "SOC 2 & Biometric Security", desc: "Enterprise-grade isolated infrastructure with 24/7 physical access control" },
    { icon: "fas fa-plane-departure", title: "Global Airport Connectivity", desc: "20 minutes from Sardar Vallabhbhai Patel International Airport (AMD)" },
    { icon: "fas fa-network-wired", title: "Dual-Redundant Fiber", desc: "Ultra-low-latency dedicated bandwidth and uninterruptible power grid" }
];

export default function AboutUsContent() {
    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                {/* Breadcrumb Header */}
                <BreadCrumb title="About Us" breadCrumb="Company / About Us" />

                {/* ========================================================================= */}
                {/* HERO INTRODUCTION (Unchanged)                                             */}
                {/* ========================================================================= */}
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
                            <div className="text-center mx-auto mb-5" style={{ maxWidth: "780px" }}>
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

                        {/* Story Narrative Box */}
                        <FadeUp>
                            <div className="p-4 p-md-5 rounded-4 mb-5 position-relative" style={{
                                backgroundColor: "rgba(255, 255, 255, 0.035)",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                borderLeft: "3px solid #38bdf8",
                                backdropFilter: "blur(16px)",
                                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)"
                            }}>
                                <div className="row g-4 align-items-center">
                                    <div className="col-lg-12">
                                        {/* Subtle Accent Dash above opening statement */}
                                        <div style={{
                                            width: "38px",
                                            height: "3px",
                                            background: "linear-gradient(90deg, #38bdf8, #818cf8)",
                                            borderRadius: "2px",
                                            marginBottom: "20px"
                                        }} />

                                        {/* Lead Statement: Differentiated opening (10-15% larger, semibold, high-contrast) */}
                                        <p style={{
                                            color: "#ffffff",
                                            fontSize: "clamp(1.22rem, 1.8vw, 1.34rem)",
                                            lineHeight: "1.75",
                                            fontWeight: 600,
                                            letterSpacing: "-0.2px"
                                        }} className="mb-0">
                                            Neno Technology was built on a simple observation: every company wants AI in production, and almost none of them have the engineers to get it there.
                                        </p>

                                        {/* Subtle Divider between Lead Statement and Supporting Detail */}
                                        <div style={{
                                            height: "1px",
                                            backgroundColor: "rgba(255, 255, 255, 0.08)",
                                            margin: "24px 0 28px 0"
                                        }} />

                                        {/* Supporting Detail: Paragraph 1 */}
                                        <p style={{
                                            color: "#94a3b8",
                                            fontSize: "1.06rem",
                                            lineHeight: "1.85",
                                            marginBottom: "24px"
                                        }}>
                                            We started as an AI engineering team in GIFT City, Gujarat, and grew into four connected practices, placing engineers, building AI systems, shipping our own products, and advising the leaders who have to make the call. AI Neno Innovation Private Limited is DPIIT-recognized under Startup India.
                                        </p>

                                        {/* Supporting Detail: Paragraph 2 */}
                                        <p style={{
                                            color: "#cbd5e1",
                                            fontSize: "1.06rem",
                                            lineHeight: "1.85"
                                        }} className="mb-0">
                                            What ties it together is the same thing throughout: engineers who have actually shipped AI to production, working directly with the people who need it.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>

                        {/* Founding Timeline */}
                        <div className="mb-5">
                            <FadeUp>
                                <div className="text-center mb-4">
                                    <span style={{ fontSize: "12px", fontWeight: 700, color: "#38bdf8", textTransform: "uppercase", letterSpacing: "1px" }}>
                                        Key Milestones
                                    </span>
                                    <h3 className="h4 fw-bold mt-1 mb-0" style={{ color: "#ffffff" }}>
                                        Our Founding Timeline
                                    </h3>
                                </div>
                            </FadeUp>

                            <StaggerContainer className="row g-4">
                                {foundingMilestones.map((milestone, idx) => (
                                    <StaggerItem className="col-lg-3 col-md-6" key={idx}>
                                        <MotionGlassCard className="h-100 p-4 rounded-4 position-relative" style={{
                                            backgroundColor: "rgba(255, 255, 255, 0.03)",
                                            border: "1px solid rgba(255, 255, 255, 0.08)",
                                            backdropFilter: "blur(14px)"
                                        }}>
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <span style={{
                                                    fontSize: "11px",
                                                    fontWeight: 700,
                                                    color: "#38bdf8",
                                                    background: "rgba(56, 189, 248, 0.12)",
                                                    border: "1px solid rgba(56, 189, 248, 0.25)",
                                                    padding: "3px 10px",
                                                    borderRadius: "6px",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.5px"
                                                }}>
                                                    {milestone.phase}
                                                </span>
                                                <span style={{ fontSize: "12px", color: "#64748b", fontWeight: 600 }}>
                                                    {milestone.year}
                                                </span>
                                            </div>
                                            <h4 className="fw-bold mb-2" style={{ color: "#ffffff", fontSize: "1.08rem" }}>
                                                {milestone.title}
                                            </h4>
                                            <p className="mb-0" style={{ color: "#94a3b8", fontSize: "0.92rem", lineHeight: "1.65" }}>
                                                {milestone.desc}
                                            </p>
                                        </MotionGlassCard>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>

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
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* SECTION 2: MEET OUR FOUNDER / LEADERSHIP                                  */}
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
                                    <i className="fas fa-user-tie" style={{ fontSize: "11px", color: "#38bdf8" }}></i>
                                    <span>Leadership</span>
                                </div>
                                <h2 className="fw-bold mb-3" style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)", color: "#ffffff", letterSpacing: "-0.5px" }}>
                                    Meet our founder
                                </h2>
                                <p style={{ color: "#94a3b8", fontSize: "1.1rem", lineHeight: "1.7" }}>
                                    The visionary engineering leadership powering Neno Technology&apos;s enterprise AI platforms and autonomous agentic systems.
                                </p>
                            </div>
                        </FadeUp>

                        {/* Founder / Leadership Card(s) */}
                        <div className="row justify-content-center g-4">
                            {leadershipTeam.map((leader, index) => (
                                <div key={index} className="col-lg-10 col-xl-9">
                                    <FadeUp delay={index * 0.1}>
                                        <div 
                                            className="p-4 p-md-5 rounded-4 position-relative overflow-hidden"
                                            style={{
                                                background: "rgba(255, 255, 255, 0.035)",
                                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                                backdropFilter: "blur(16px)",
                                                WebkitBackdropFilter: "blur(16px)",
                                                borderRadius: "24px",
                                                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35)",
                                            }}
                                        >
                                            <div className="row align-items-center g-4 g-lg-5">
                                                {/* Left Half: Founder Photo */}
                                                <div className="col-md-5">
                                                    <div 
                                                        className="position-relative overflow-hidden rounded-4 mx-auto"
                                                        style={{
                                                            borderRadius: "18px",
                                                            border: "1px solid rgba(255, 255, 255, 0.1)",
                                                            boxShadow: "0 12px 30px rgba(0, 0, 0, 0.35)",
                                                            aspectRatio: "4/5",
                                                            maxHeight: "420px",
                                                        }}
                                                    >
                                                        <Image
                                                            src={leader.image}
                                                            alt={`${leader.name} - ${leader.role}`}
                                                            fill
                                                            sizes="(max-width: 768px) 100vw, 400px"
                                                            style={{ objectFit: "cover", objectPosition: "center top" }}
                                                            priority
                                                        />
                                                    </div>
                                                </div>

                                                {/* Right Half: Info & Bio */}
                                                <div className="col-md-7 text-start">
                                                    <div className="d-flex flex-column justify-content-center h-100">
                                                        <span 
                                                            className="badge d-inline-block align-self-start mb-2 px-3 py-2"
                                                            style={{
                                                                background: "rgba(56, 189, 248, 0.12)",
                                                                border: "1px solid rgba(56, 189, 248, 0.3)",
                                                                color: "#38bdf8",
                                                                borderRadius: "9999px",
                                                                fontSize: "12px",
                                                                fontWeight: "700",
                                                                letterSpacing: "0.5px",
                                                                textTransform: "uppercase",
                                                            }}
                                                        >
                                                            {leader.badge}
                                                        </span>

                                                        <h3 className="fw-bold mb-1" style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 3vw, 2.3rem)", letterSpacing: "-0.5px" }}>
                                                            {leader.name}
                                                        </h3>
                                                        <div className="fw-semibold mb-3" style={{ color: "#818cf8", fontSize: "1.05rem" }}>
                                                            {leader.role}
                                                        </div>

                                                        <p className="mb-4" style={{ color: "#94a3b8", fontSize: "1.02rem", lineHeight: "1.75" }}>
                                                            {leader.bio}
                                                        </p>

                                                        {/* Social Links */}
                                                        <div className="d-flex align-items-center gap-3 pt-2">
                                                            {leader.social.linkedin && (
                                                                <a
                                                                    href={leader.social.linkedin}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    aria-label={`${leader.name} LinkedIn`}
                                                                    className="neno-social-btn"
                                                                    style={{ width: "42px", height: "42px", fontSize: "16px" }}
                                                                >
                                                                    <i className="fab fa-linkedin-in" />
                                                                </a>
                                                            )}
                                                            {leader.social.instagram && (
                                                                <a
                                                                    href={leader.social.instagram}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    aria-label={`${leader.name} Instagram`}
                                                                    className="neno-social-btn"
                                                                    style={{ width: "42px", height: "42px", fontSize: "16px" }}
                                                                >
                                                                    <i className="fab fa-instagram" />
                                                                </a>
                                                            )}
                                                            {leader.social.facebook && (
                                                                <a
                                                                    href={leader.social.facebook}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    aria-label={`${leader.name} Facebook`}
                                                                    className="neno-social-btn"
                                                                    style={{ width: "42px", height: "42px", fontSize: "16px" }}
                                                                >
                                                                    <i className="fab fa-facebook-f" />
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </FadeUp>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* SECTION 3: CREDENTIALS (NEW)                                              */}
                {/* ========================================================================= */}
                <section id="credentials" style={{ padding: "80px 0", backgroundColor: "transparent", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
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
                                    <i className="fas fa-certificate" style={{ fontSize: "11px", color: "#38bdf8" }}></i>
                                    <span>Credentials & Recognition</span>
                                </div>
                                <h2 className="fw-bold mb-3" style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)", color: "#ffffff", letterSpacing: "-0.5px" }}>
                                    Recognized & Verified Enterprise Credentials
                                </h2>
                                <p style={{ color: "#94a3b8", fontSize: "1.1rem", lineHeight: "1.7" }}>
                                    Accredited by national government initiatives and ecosystem foundations driving production AI.
                                </p>
                            </div>
                        </FadeUp>

                        {/* Credentials Grid */}
                        <StaggerContainer className="row g-4">
                            {credentials.map((cred, cIdx) => (
                                <StaggerItem className="col-lg-3 col-md-6" key={cIdx}>
                                    <MotionGlassCard className="h-100 p-4 rounded-4 d-flex flex-column justify-content-between" style={{
                                        backgroundColor: "rgba(255, 255, 255, 0.035)",
                                        border: "1px solid rgba(255, 255, 255, 0.08)",
                                        backdropFilter: "blur(16px)"
                                    }}>
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <span style={{
                                                    fontSize: "11px",
                                                    fontWeight: 700,
                                                    color: cred.highlight,
                                                    background: "rgba(255, 255, 255, 0.04)",
                                                    border: `1px solid ${cred.highlight}40`,
                                                    padding: "3px 8px",
                                                    borderRadius: "6px",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.5px"
                                                }}>
                                                    {cred.type}
                                                </span>
                                                <span style={{ fontSize: "11px", color: "#64748b", fontWeight: 600 }}>
                                                    {cred.org}
                                                </span>
                                            </div>

                                            {/* Badge or Icon */}
                                            {cred.imageBadge ? (
                                                <div className="mb-3 py-2 d-flex align-items-center" style={{ height: "48px" }}>
                                                    <Image
                                                        src={cred.imageBadge}
                                                        alt={cred.title}
                                                        width={140}
                                                        height={36}
                                                        style={{ objectFit: "contain", height: "32px", width: "auto" }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="d-flex align-items-center justify-content-center rounded-3 mb-3" style={{
                                                    width: "48px",
                                                    height: "48px",
                                                    backgroundColor: `${cred.highlight}18`,
                                                    border: `1px solid ${cred.highlight}40`,
                                                    color: cred.highlight,
                                                    fontSize: "20px"
                                                }}>
                                                    <i className={cred.icon}></i>
                                                </div>
                                            )}

                                            <h4 className="fw-bold mb-2" style={{ color: "#ffffff", fontSize: "1.12rem" }}>
                                                {cred.title}
                                            </h4>
                                            <p className="mb-0" style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: "1.6" }}>
                                                {cred.desc}
                                            </p>
                                        </div>

                                        <div className="mt-3 pt-3 border-top" style={{ borderColor: "rgba(255, 255, 255, 0.06)" }}>
                                            <span style={{ fontSize: "11px", color: "#34d399", fontWeight: 600 }}>
                                                <i className="fas fa-check-circle me-1"></i> Verified Accreditation
                                            </span>
                                        </div>
                                    </MotionGlassCard>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* SECTION 4: OFFICE & LOCATION                                              */}
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
                                    <span>Office & Location</span>
                                </div>
                                <h2 className="fw-bold mb-3" style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)", color: "#ffffff", letterSpacing: "-0.5px" }}>
                                    Headquarters & Strategic Presence
                                </h2>
                                <p style={{ color: "#94a3b8", fontSize: "1.1rem", lineHeight: "1.7" }}>
                                    Headquartered at GIFT City with operational delivery presence across key economic hubs.
                                </p>
                            </div>
                        </FadeUp>

                        {/* Location Main Grid */}
                        <StaggerContainer className="row g-4 mb-5">
                            {/* Left Column: All Three Real Office Addresses */}
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
                                                        Corporate Entity
                                                    </span>
                                                    <h3 className="h4 fw-bold mb-0" style={{ color: "#ffffff" }}>
                                                        AI Neno Innovation Pvt. Ltd.
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
                                                ● Active Multi-City
                                            </span>
                                        </div>

                                        {/* Three Real Office Addresses */}
                                        <div className="d-flex flex-column gap-3 mb-4">
                                            {offices.map((office, oIdx) => (
                                                <div key={oIdx} className="p-3 rounded-3" style={{
                                                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                                                    border: "1px solid rgba(255, 255, 255, 0.07)"
                                                }}>
                                                    <div className="d-flex align-items-start gap-3">
                                                        <i className={`${office.icon} mt-1`} style={{ color: office.accent, fontSize: "16px" }}></i>
                                                        <div className="flex-grow-1">
                                                            <div className="d-flex align-items-center justify-content-between mb-1">
                                                                <div className="fw-bold" style={{ color: "#ffffff", fontSize: "14.5px" }}>
                                                                    {office.city}
                                                                </div>
                                                                <span style={{
                                                                    fontSize: "10.5px",
                                                                    color: office.accent,
                                                                    fontWeight: 600,
                                                                    background: `${office.accent}15`,
                                                                    padding: "2px 8px",
                                                                    borderRadius: "4px"
                                                                }}>
                                                                    {office.label}
                                                                </span>
                                                            </div>
                                                            <div style={{ color: "#94a3b8", lineHeight: "1.6", fontSize: "13px" }}>
                                                                {office.address}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Visiting Information */}
                                        <div className="row g-3 pt-3 border-top mb-4" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
                                            <div className="col-sm-6">
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-phone-alt" style={{ color: "#38bdf8" }}></i>
                                                    <div>
                                                        <div style={{ fontSize: "11px", color: "#64748b", fontWeight: 600 }}>VISITING / INQUIRIES</div>
                                                        <a href="tel:+919106915561" className="fw-semibold text-decoration-none" style={{ color: "#38bdf8", fontSize: "0.92rem" }}>
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
                                                        <a href="mailto:sales@nenotechnology.com" className="fw-semibold text-decoration-none" style={{ color: "#38bdf8", fontSize: "0.92rem" }}>
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
                                                <i className="fas fa-directions me-2" /> HQ Directions
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
                                                <i className="fas fa-calendar-check me-2" /> Schedule Visit
                                            </Link>
                                        </MotionLinkWrapper>
                                    </div>
                                </MotionGlassCard>
                            </StaggerItem>

                            {/* Right Column: Embedded Google Map & Office Photo Placeholder */}
                            <StaggerItem className="col-lg-6">
                                <MotionGlassCard className="h-100 p-4 p-md-5 rounded-4 d-flex flex-column justify-content-between" style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.035)",
                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                    backdropFilter: "blur(16px)",
                                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)"
                                }}>
                                    {/* Embedded Google Map for Gandhinagar HQ */}
                                    <div className="mb-4">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <h4 className="h6 fw-bold mb-0" style={{ color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                                Gandhinagar HQ Map (GIFT City)
                                            </h4>
                                            <span style={{ fontSize: "12px", color: "#94a3b8" }}>
                                                <i className="fas fa-globe-americas me-1 text-primary"></i> GIFT Tower One, 13th Floor
                                            </span>
                                        </div>
                                        <div style={{
                                            position: "relative",
                                            width: "100%",
                                            height: "260px",
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

                                    {/* Office Photo Gallery / Clearly Marked Placeholder */}
                                    <div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h4 className="h6 fw-bold mb-0" style={{ color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                                Office Environment
                                            </h4>
                                            <span style={{ fontSize: "11px", color: "#38bdf8", fontWeight: 600 }}>
                                                GIFT City AI Lab
                                            </span>
                                        </div>
                                        {/* Marked Placeholder Banner */}
                                        <div className="p-3 rounded-3 text-center mb-3" style={{
                                            backgroundColor: "rgba(255, 255, 255, 0.02)",
                                            border: "1px dashed rgba(56, 189, 248, 0.3)",
                                            borderRadius: "12px"
                                        }}>
                                            <div className="d-flex align-items-center justify-content-center gap-2 mb-1">
                                                <i className="fas fa-camera" style={{ color: "#38bdf8", fontSize: "14px" }}></i>
                                                <span style={{ color: "#e2e8f0", fontSize: "0.88rem", fontWeight: 600 }}>
                                                    GIFT City Tower One Campus Photos
                                                </span>
                                            </div>
                                            <p className="mb-0" style={{ color: "#64748b", fontSize: "0.82rem" }}>
                                                [Office Photo Placeholder: High-resolution photos of our AI Excellence Lab, war rooms, and executive briefing suites to be added]
                                            </p>
                                        </div>

                                        {/* Facility Amenities */}
                                        <div className="row g-2">
                                            {facilityFeatures.map((feat, fIdx) => (
                                                <div className="col-sm-6" key={fIdx}>
                                                    <div className="p-2 px-3 rounded-3 h-100" style={{
                                                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                                                        border: "1px solid rgba(255, 255, 255, 0.06)"
                                                    }}>
                                                        <div className="d-flex align-items-center gap-2 mb-1">
                                                            <i className={feat.icon} style={{ color: "#38bdf8", fontSize: "13px" }}></i>
                                                            <span className="fw-bold" style={{ color: "#ffffff", fontSize: "0.85rem" }}>
                                                                {feat.title}
                                                            </span>
                                                        </div>
                                                        <p className="mb-0" style={{ color: "#94a3b8", fontSize: "0.78rem", lineHeight: "1.4" }}>
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
                {/* SECTION 5: CLOSING CTA SECTION                                            */}
                {/* ========================================================================= */}
                <section id="cta" style={{ padding: "60px 0 100px 0", backgroundColor: "transparent" }}>
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
                                            BUILT IN GIFT CITY. DEPLOYED WORLDWIDE.
                                        </span>
                                        <h2 className="fw-bold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", letterSpacing: "-0.5px" }}>
                                            Ready to Put Production AI to Work?
                                        </h2>
                                        <p className="mb-0" style={{ color: "#cbd5e1", fontSize: "1.1rem", maxWidth: "680px", lineHeight: "1.7" }}>
                                            Whether you need senior forward-deployed engineers, end-to-end autonomous agent builds, or strategic AI consulting, our GIFT City team is ready.
                                        </p>
                                    </div>
                                    <div className="col-lg-4 text-center text-lg-end">
                                        <div className="d-flex flex-column flex-sm-row justify-content-lg-end gap-3">
                                            {/* Primary Button: Work with us */}
                                            <MotionLinkWrapper>
                                                <Link
                                                    href="/hire-engineers"
                                                    className="btn btn-style-one"
                                                    style={{
                                                        backgroundColor: "#4F46E5",
                                                        borderColor: "#4F46E5",
                                                        color: "#ffffff",
                                                        padding: "14px 28px",
                                                        fontSize: "15px",
                                                        fontWeight: 600
                                                    }}
                                                >
                                                    Work with us <i className="fas fa-arrow-right ms-2" />
                                                </Link>
                                            </MotionLinkWrapper>
                                            {/* Secondary Button: Join us */}
                                            <MotionLinkWrapper>
                                                <Link
                                                    href="/careers"
                                                    className="btn btn-style-one btn-border"
                                                    style={{
                                                        borderColor: "rgba(255,255,255,0.25)",
                                                        color: "#ffffff",
                                                        padding: "14px 26px",
                                                        fontSize: "15px",
                                                        fontWeight: 600
                                                    }}
                                                >
                                                    Join us <i className="fas fa-user-plus ms-2" />
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
