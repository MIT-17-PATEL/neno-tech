"use client";

import React, { useState, useEffect } from "react";

const AgenticWorkflowVisual: React.FC = () => {
    // Rotating activity logs simulating live agentic execution
    const [activeStepIndex, setActiveStepIndex] = useState(0);

    const agentSteps = [
        {
            role: "Supervisor Agent",
            badge: "Decomposition",
            badgeColor: "#a855f7",
            text: "Decomposing enterprise specification into DAG tasks & assigning agent roles...",
            latency: "14ms",
        },
        {
            role: "Agent A: Neural Architect",
            badge: "Synthesis",
            badgeColor: "#38bdf8",
            text: "Generating production TypeScript schemas & distributed agent protocols...",
            latency: "38ms",
        },
        {
            role: "Supervisor Core",
            badge: "Execution",
            badgeColor: "#c084fc",
            text: "Executing sandboxed tool calls, vector retrieval & API validations...",
            latency: "26ms",
        },
        {
            role: "Agent B: QA & Verifier",
            badge: "Self-Reflection",
            badgeColor: "#34d399",
            text: "Running autonomous critique loop: 0 hallucination, 100% tests passed.",
            latency: "19ms",
        },
        {
            role: "Production Deployer",
            badge: "Delivery",
            badgeColor: "#f472b6",
            text: "Deploying multi-agent microservice mesh to edge clusters with SLA.",
            latency: "42ms",
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStepIndex((prev) => (prev + 1) % agentSteps.length);
        }, 3200);
        return () => clearInterval(interval);
    }, [agentSteps.length]);

    const currentStep = agentSteps[activeStepIndex];

    return (
        <div className="agentic-visual-wrapper">
            {/* Background Ambient Glows */}
            <div className="agentic-ambient-orb agentic-orb-1" />
            <div className="agentic-ambient-orb agentic-orb-2" />

            {/* Glassmorphic Container Frame */}
            <div className="agentic-glass-card">
                {/* Frame Header Bar */}
                <div className="agentic-card-header">
                    <div className="agentic-window-dots">
                        <span className="dot dot-red" />
                        <span className="dot dot-amber" />
                        <span className="dot dot-green" />
                    </div>
                    <div className="agentic-header-title">
                        <span className="header-icon">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="3" />
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                            </svg>
                        </span>
                        AGENTIC WORKFLOW MESH
                    </div>
                    <div className="agentic-status-badge">
                        <span className="live-pulse-dot" />
                        <span className="live-status-text">ONLINE</span>
                    </div>
                </div>

                {/* Workflow Graph Viewport Area (3-Column Center-Aligned Flow) */}
                <div className="agentic-graph-viewport">
                    <div className="graph-flow-container">
                        {/* 1. Left Column: Input Specification */}
                        <div className="graph-col col-input">
                            <div className="graph-node-card node-input">
                                <div className="node-icon-wrapper input-icon">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 17l6-6-6-6" />
                                        <path d="M12 19h8" />
                                    </svg>
                                </div>
                                <div className="node-details">
                                    <span className="node-pill">INPUT</span>
                                    <h5 className="node-title">Enterprise Spec</h5>
                                    <span className="node-meta">Autonomous Trigger</span>
                                </div>
                                {/* Right connection port dot */}
                                <span className="node-port-dot port-right port-indigo" />
                            </div>
                        </div>

                        {/* 2. Left Connector: SVG Pathways between Input and Middle Column */}
                        <div className="graph-connectors-col">
                            <svg viewBox="0 0 100 202" preserveAspectRatio="none" className="flow-svg-line" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="leftGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#818cf8" stopOpacity="0.85" />
                                        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.95" />
                                    </linearGradient>
                                    <linearGradient id="leftGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#818cf8" stopOpacity="0.85" />
                                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0.95" />
                                    </linearGradient>
                                    <linearGradient id="leftGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#818cf8" stopOpacity="0.85" />
                                        <stop offset="100%" stopColor="#34d399" stopOpacity="0.95" />
                                    </linearGradient>
                                </defs>

                                {/* Base Guide Dashed Lines */}
                                <path d="M 0 101 C 50 101, 50 29, 100 29" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="3 3" />
                                <path d="M 0 101 L 100 101" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="3 3" />
                                <path d="M 0 101 C 50 101, 50 173, 100 173" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="3 3" />

                                {/* Animated Flowing Streams */}
                                <path d="M 0 101 C 50 101, 50 29, 100 29" stroke="url(#leftGrad1)" strokeWidth="2" className="flowing-edge-stream edge-stream-1" />
                                <path d="M 0 101 L 100 101" stroke="url(#leftGrad2)" strokeWidth="2" className="flowing-edge-stream edge-stream-2" />
                                <path d="M 0 101 C 50 101, 50 173, 100 173" stroke="url(#leftGrad3)" strokeWidth="2" className="flowing-edge-stream edge-stream-3" />

                                {/* Flowing Glowing Traveling Pulses */}
                                <circle r="3.5" fill="#38bdf8" className="traveling-packet">
                                    <animateMotion path="M 0 101 C 50 101, 50 29, 100 29" dur="2.4s" repeatCount="indefinite" />
                                </circle>
                                <circle r="3.5" fill="#a855f7" className="traveling-packet">
                                    <animateMotion path="M 0 101 L 100 101" dur="1.8s" repeatCount="indefinite" />
                                </circle>
                                <circle r="3.5" fill="#34d399" className="traveling-packet">
                                    <animateMotion path="M 0 101 C 50 101, 50 173, 100 173" dur="2.6s" repeatCount="indefinite" />
                                </circle>
                            </svg>
                        </div>

                        {/* 3. Middle Column: Vertically Centered Agent Stack (Agent A, Supervisor, Agent B) */}
                        <div className="graph-col col-squad">
                            {/* Card 1: Agent A */}
                            <div className={`graph-node-card node-agent agent-top ${activeStepIndex === 1 ? 'is-active-node' : ''}`}>
                                <span className="node-port-dot port-left port-cyan" />
                                <div className="node-icon-wrapper agent-icon-1">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z" />
                                        <path d="M6 10v2a6 6 0 0 0 12 0v-2" />
                                        <path d="M12 18v4" />
                                    </svg>
                                </div>
                                <div className="node-details">
                                    <div className="node-badge-row">
                                        <span className="node-pill pill-cyan">AGENT A</span>
                                        <span className="node-status-dot green" />
                                    </div>
                                    <h5 className="node-title">Neural Architect</h5>
                                    <span className="node-meta">Code & Logic Gen</span>
                                </div>
                                <span className="node-port-dot port-right port-cyan" />
                            </div>

                            {/* Card 2: Supervisor */}
                            <div className={`graph-node-card node-agent agent-center ${activeStepIndex === 0 || activeStepIndex === 2 ? 'is-active-node' : ''}`}>
                                <span className="node-port-dot port-left port-purple" />
                                <div className="node-icon-wrapper agent-icon-2">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                        <polyline points="2 17 12 22 22 17" />
                                        <polyline points="2 12 12 17 22 12" />
                                    </svg>
                                </div>
                                <div className="node-details">
                                    <div className="node-badge-row">
                                        <span className="node-pill pill-purple">SUPERVISOR</span>
                                        <span className="node-status-dot purple" />
                                    </div>
                                    <h5 className="node-title">Tool Execution</h5>
                                    <span className="node-meta">Sandbox & Vector RAG</span>
                                </div>
                                <span className="node-port-dot port-right port-purple" />
                            </div>

                            {/* Card 3: Agent B (Typo Fixed: AGENT B) */}
                            <div className={`graph-node-card node-agent agent-bottom ${activeStepIndex === 3 ? 'is-active-node' : ''}`}>
                                <span className="node-port-dot port-left port-emerald" />
                                <div className="node-icon-wrapper agent-icon-3">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                </div>
                                <div className="node-details">
                                    <div className="node-badge-row">
                                        <span className="node-pill pill-emerald">AGENT B</span>
                                        <span className="node-status-dot emerald" />
                                    </div>
                                    <h5 className="node-title">QA & Verifier</h5>
                                    <span className="node-meta">Self-Reflection Loop</span>
                                </div>
                                <span className="node-port-dot port-right port-emerald" />
                            </div>
                        </div>

                        {/* 4. Right Connector: SVG Pathways between Middle Column and Output */}
                        <div className="graph-connectors-col">
                            <svg viewBox="0 0 100 202" preserveAspectRatio="none" className="flow-svg-line" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="rightGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
                                        <stop offset="100%" stopColor="#f472b6" stopOpacity="0.95" />
                                    </linearGradient>
                                    <linearGradient id="rightGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.85" />
                                        <stop offset="100%" stopColor="#f472b6" stopOpacity="0.95" />
                                    </linearGradient>
                                    <linearGradient id="rightGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#34d399" stopOpacity="0.85" />
                                        <stop offset="100%" stopColor="#f472b6" stopOpacity="0.95" />
                                    </linearGradient>
                                </defs>

                                {/* Base Guide Dashed Lines */}
                                <path d="M 0 29 C 50 29, 50 101, 100 101" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="3 3" />
                                <path d="M 0 101 L 100 101" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="3 3" />
                                <path d="M 0 173 C 50 173, 50 101, 100 101" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="3 3" />

                                {/* Animated Flowing Streams */}
                                <path d="M 0 29 C 50 29, 50 101, 100 101" stroke="url(#rightGrad1)" strokeWidth="2" className="flowing-edge-stream edge-stream-4" />
                                <path d="M 0 101 L 100 101" stroke="url(#rightGrad2)" strokeWidth="2" className="flowing-edge-stream edge-stream-5" />
                                <path d="M 0 173 C 50 173, 50 101, 100 101" stroke="url(#rightGrad3)" strokeWidth="2" className="flowing-edge-stream edge-stream-6" />

                                {/* Flowing Glowing Traveling Pulses */}
                                <circle r="3.5" fill="#f472b6" className="traveling-packet">
                                    <animateMotion path="M 0 29 C 50 29, 50 101, 100 101" dur="2.2s" repeatCount="indefinite" />
                                </circle>
                                <circle r="3.5" fill="#f472b6" className="traveling-packet">
                                    <animateMotion path="M 0 101 L 100 101" dur="1.7s" repeatCount="indefinite" />
                                </circle>
                                <circle r="3.5" fill="#f472b6" className="traveling-packet">
                                    <animateMotion path="M 0 173 C 50 173, 50 101, 100 101" dur="2.5s" repeatCount="indefinite" />
                                </circle>
                            </svg>
                        </div>

                        {/* 5. Right Column: Deployed Production Build */}
                        <div className="graph-col col-output">
                            <div className={`graph-node-card node-output ${activeStepIndex === 4 ? 'is-active-node' : ''}`}>
                                <span className="node-port-dot port-left port-pink" />
                                <div className="node-icon-wrapper output-icon">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                                        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                                        <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-1.5 5-1.5" />
                                        <path d="M15 15v5s3.03-.55 4.5-2c1.63-1.62 1.5-5 1.5-5" />
                                    </svg>
                                </div>
                                <div className="node-details">
                                    <span className="node-pill pill-emerald">DEPLOYED</span>
                                    <h5 className="node-title">Production Build</h5>
                                    <span className="node-meta">Live Continuous Delivery</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Real-time Telemetry & Execution Stream Footer */}
                <div className="agentic-telemetry-strip">
                    <div className="telemetry-log-row">
                        <span className="telemetry-prompt-symbol">›</span>
                        <div className="telemetry-log-content">
                            <span className="telemetry-role-tag" style={{ color: currentStep.badgeColor }}>
                                [{currentStep.role}]
                            </span>
                            <span className="telemetry-log-text">{currentStep.text}</span>
                        </div>
                        <span className="telemetry-cursor" />
                    </div>

                    <div className="telemetry-stats-bar">
                        <div className="stat-pill">
                            <span className="stat-label">LATENCY</span>
                            <span className="stat-value">{currentStep.latency}</span>
                        </div>
                        <div className="stat-pill">
                            <span className="stat-label">ACCURACY</span>
                            <span className="stat-value text-emerald">99.8%</span>
                        </div>
                        <div className="stat-pill d-none d-sm-flex">
                            <span className="stat-label">CONSENSUS</span>
                            <span className="stat-value text-purple">100% DAG</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgenticWorkflowVisual;
