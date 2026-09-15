"use client";
import React from "react";
import { FadeUp, StaggerContainer, StaggerItem, MotionGlassCard } from "@/components/animation/FramerMotionSystem";

interface TechItem {
    name: string;
    category: string;
    icon: string;
    accent: string;
}

const techStack: TechItem[] = [
    { name: "Anthropic Claude", category: "Foundation Models", icon: "fas fa-brain", accent: "#d97706" },
    { name: "OpenAI GPT-4o", category: "Foundation Models", icon: "fas fa-microchip", accent: "#10b981" },
    { name: "Google Gemini", category: "Foundation Models", icon: "fas fa-sparkles", accent: "#38bdf8" },
    { name: "DeepSeek R1", category: "Reasoning Models", icon: "fas fa-code-branch", accent: "#818cf8" },
    { name: "LangGraph", category: "Agentic Frameworks", icon: "fas fa-network-wired", accent: "#38bdf8" },
    { name: "LlamaIndex", category: "RAG & Data", icon: "fas fa-database", accent: "#a855f7" },
    { name: "CrewAI", category: "Multi-Agent Swarms", icon: "fas fa-users-gear", accent: "#ec4899" },
    { name: "Temporal.io", category: "Workflow Orchestration", icon: "fas fa-diagram-project", accent: "#f59e0b" },
    { name: "AWS Bedrock", category: "Cloud & VPC", icon: "fab fa-aws", accent: "#ff9900" },
    { name: "GCP Vertex AI", category: "Cloud & VPC", icon: "fab fa-google", accent: "#4285f4" },
    { name: "Docker & K8s", category: "DevOps & Containers", icon: "fab fa-docker", accent: "#2496ed" },
    { name: "PostgreSQL & pgvector", category: "Vector & Relational", icon: "fas fa-server", accent: "#336791" },
    { name: "Qdrant / Pinecone", category: "Vector Stores", icon: "fas fa-cubes", accent: "#06b6d4" },
    { name: "LangSmith / Arize", category: "Evaluation & Evals", icon: "fas fa-chart-line", accent: "#10b981" },
    { name: "Python / FastAPI", category: "Backend Engineering", icon: "fab fa-python", accent: "#fbbf24" },
    { name: "Next.js / TypeScript", category: "Frontend & Full Stack", icon: "fab fa-react", accent: "#61dafb" }
];

export default function ServicesTechStackStrip() {
    return (
        <section className="services-tech-stack-section mt-5 pt-4 mb-60">
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
                        <i className="fas fa-layer-group" style={{ fontSize: "11px" }}></i>
                        <span>SUPPORTED ENTERPRISE STACK</span>
                    </div>
                    <h2 className="fw-bold mb-3" style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)" }}>
                        Technologies & Frameworks We Ship With
                    </h2>
                    <p style={{ color: "#94a3b8", fontSize: "1.08rem", lineHeight: "1.7" }}>
                        From state-of-the-art reasoning models to hardened cloud infrastructure, we build using battle-tested enterprise technologies.
                    </p>
                </div>
            </FadeUp>

            {/* Grid of Technologies */}
            <StaggerContainer className="row g-3">
                {techStack.map((tech, idx) => (
                    <StaggerItem className="col-lg-3 col-md-4 col-sm-6" key={idx}>
                        <MotionGlassCard className="h-100 p-3 rounded-4 position-relative" style={{
                            backgroundColor: "rgba(255, 255, 255, 0.03)",
                            border: "1px solid rgba(255, 255, 255, 0.07)",
                            backdropFilter: "blur(14px)",
                            transition: "all 0.2s ease"
                        }}>
                            <div className="d-flex align-items-center gap-3">
                                <div className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0" style={{
                                    width: "42px",
                                    height: "42px",
                                    backgroundColor: `${tech.accent}15`,
                                    border: `1px solid ${tech.accent}35`,
                                    color: tech.accent,
                                    fontSize: "18px"
                                }}>
                                    <i className={tech.icon}></i>
                                </div>
                                <div>
                                    <div className="fw-bold text-white mb-0" style={{ fontSize: "0.95rem" }}>
                                        {tech.name}
                                    </div>
                                    <span style={{ fontSize: "11px", color: "#94a3b8", fontWeight: 500 }}>
                                        {tech.category}
                                    </span>
                                </div>
                            </div>
                        </MotionGlassCard>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </section>
    );
}
