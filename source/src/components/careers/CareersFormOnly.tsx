"use client";
import React, { useState } from "react";
import AppForm from "../form/AppForm";
import { motion } from "framer-motion";
import { FadeUp, MotionGlassCard } from "@/components/animation/FramerMotionSystem";

export default function CareersFormOnly() {
    const [selectedExperience, setSelectedExperience] = useState("3 – 5 Years (Mid-Senior)");

    const experienceLevels = [
        "0 – 1 Year (Junior / Entry)",
        "1 – 3 Years",
        "3 – 5 Years (Mid-Senior)",
        "5 – 8 Years (Senior / Staff)",
        "8+ Years (Principal / Lead)"
    ];

    return (
        <div style={{ paddingTop: "140px", paddingBottom: "100px", backgroundColor: "transparent", minHeight: "85vh" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-xl-8">
                        {/* Header Area */}
                        <FadeUp>
                            <div className="text-center mb-4">
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
                                    <i className="fas fa-paper-plane" style={{ fontSize: "11px", color: "#38bdf8" }}></i>
                                    <span>Quick Application</span>
                                </div>

                                <h1 className="fw-bold mb-2" style={{
                                    fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
                                    color: "#ffffff",
                                    letterSpacing: "-0.5px"
                                }}>
                                    Submit Your Application
                                </h1>

                                <p style={{ color: "#94a3b8", fontSize: "1.05rem" }}>
                                    We review every application personally and respond within 3 to 5 business days.
                                </p>
                            </div>
                        </FadeUp>

                        {/* Form Card */}
                        <FadeUp delay={0.1}>
                            <MotionGlassCard className="p-4 p-md-5 rounded-4" style={{
                                backgroundColor: "rgba(255, 255, 255, 0.035)",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                backdropFilter: "blur(16px)",
                                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)"
                            }}>
                            <AppForm
                                className="contact-form"
                                actionUrl="/api/careers-apply"
                                successMessage="Thank you! Your application has been received. Our team will review your profile and reach out within 3-5 business days."
                            >
                                <div className="row g-4">
                                    {/* Full Name */}
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold mb-1" style={{ color: "#ffffff", fontSize: "0.92rem" }}>
                                            Full Name <span style={{ color: "#ef4444" }}>*</span>
                                        </label>
                                        <input
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="e.g. Mit Patel"
                                            type="text"
                                            required
                                            style={{
                                                borderRadius: "10px",
                                                border: "1px solid rgba(255, 255, 255, 0.12)",
                                                background: "rgba(255, 255, 255, 0.05)",
                                                padding: "11px 16px",
                                                fontSize: "0.95rem",
                                                color: "#ffffff"
                                            }}
                                        />
                                    </div>

                                    {/* Email Address */}
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold mb-1" style={{ color: "#ffffff", fontSize: "0.92rem" }}>
                                            Email Address <span style={{ color: "#ef4444" }}>*</span>
                                        </label>
                                        <input
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="example@email.com"
                                            type="email"
                                            required
                                            style={{
                                                borderRadius: "10px",
                                                border: "1px solid rgba(255, 255, 255, 0.12)",
                                                background: "rgba(255, 255, 255, 0.05)",
                                                padding: "11px 16px",
                                                fontSize: "0.95rem",
                                                color: "#ffffff"
                                            }}
                                        />
                                    </div>

                                    {/* Phone Number */}
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold mb-1" style={{ color: "#ffffff", fontSize: "0.92rem" }}>
                                            Phone Number <span style={{ color: "#ef4444" }}>*</span>
                                        </label>
                                        <input
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            placeholder="+91 98765 43210"
                                            type="tel"
                                            required
                                            style={{
                                                borderRadius: "10px",
                                                border: "1px solid rgba(255, 255, 255, 0.12)",
                                                background: "rgba(255, 255, 255, 0.05)",
                                                padding: "11px 16px",
                                                fontSize: "0.95rem",
                                                color: "#ffffff"
                                            }}
                                        />
                                    </div>

                                    {/* Current Location */}
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold mb-1" style={{ color: "#ffffff", fontSize: "0.92rem" }}>
                                            Current Location <span style={{ color: "#ef4444" }}>*</span>
                                        </label>
                                        <input
                                            className="form-control"
                                            id="location"
                                            name="location"
                                            placeholder="e.g. Ahmedabad, Bangalore, Remote"
                                            type="text"
                                            required
                                            style={{
                                                borderRadius: "10px",
                                                border: "1px solid rgba(255, 255, 255, 0.12)",
                                                background: "rgba(255, 255, 255, 0.05)",
                                                padding: "11px 16px",
                                                fontSize: "0.95rem",
                                                color: "#ffffff"
                                            }}
                                        />
                                    </div>

                                    {/* Applying For */}
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold mb-1" style={{ color: "#ffffff", fontSize: "0.92rem" }}>
                                            Applying For <span style={{ color: "#ef4444" }}>*</span>
                                        </label>
                                        <input
                                            className="form-control"
                                            id="position"
                                            name="position"
                                            placeholder="e.g. Agentic AI Engineer (LLM & Swarms)"
                                            type="text"
                                            required
                                            style={{
                                                borderRadius: "10px",
                                                border: "1px solid rgba(255, 255, 255, 0.12)",
                                                background: "rgba(255, 255, 255, 0.05)",
                                                padding: "11px 16px",
                                                fontSize: "0.95rem",
                                                color: "#ffffff"
                                            }}
                                        />
                                    </div>

                                    {/* Years of Experience */}
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold mb-1" style={{ color: "#ffffff", fontSize: "0.92rem" }}>
                                            Years of Relevant Experience <span style={{ color: "#ef4444" }}>*</span>
                                        </label>
                                        <select
                                            className="form-control form-select"
                                            id="experience"
                                            name="experience"
                                            value={selectedExperience}
                                            onChange={(e) => setSelectedExperience(e.target.value)}
                                            style={{
                                                borderRadius: "10px",
                                                border: "1px solid rgba(255, 255, 255, 0.12)",
                                                background: "#0f172a",
                                                padding: "11px 16px",
                                                fontSize: "0.95rem",
                                                color: "#ffffff"
                                            }}
                                        >
                                            {experienceLevels.map((exp) => (
                                                <option key={exp} value={exp}>{exp}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* LinkedIn / GitHub / Portfolio URL */}
                                    <div className="col-12">
                                        <label className="form-label fw-semibold mb-1" style={{ color: "#ffffff", fontSize: "0.92rem" }}>
                                            LinkedIn / GitHub / Portfolio URL
                                        </label>
                                        <input
                                            className="form-control"
                                            id="portfolio"
                                            name="portfolio"
                                            placeholder="https://github.com/ai-engineer or https://linkedin.com/in/ai-researcher"
                                            type="url"
                                            style={{
                                                borderRadius: "10px",
                                                border: "1px solid rgba(255, 255, 255, 0.12)",
                                                background: "rgba(255, 255, 255, 0.05)",
                                                padding: "11px 16px",
                                                fontSize: "0.95rem",
                                                color: "#ffffff"
                                            }}
                                        />
                                    </div>

                                    {/* Attach Resume / CV */}
                                    <div className="col-12">
                                        <label className="form-label fw-semibold mb-1" style={{ color: "#ffffff", fontSize: "0.92rem" }}>
                                            Attach Resume / CV <span style={{ color: "#ef4444" }}>*</span>
                                        </label>
                                        <input
                                            className="form-control"
                                            id="resume"
                                            name="resume"
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            required
                                            style={{
                                                borderRadius: "10px",
                                                border: "1px solid rgba(255, 255, 255, 0.12)",
                                                background: "rgba(255, 255, 255, 0.05)",
                                                padding: "9px 14px",
                                                fontSize: "0.92rem",
                                                color: "#ffffff"
                                            }}
                                        />
                                        <small className="mt-1 d-block" style={{ fontSize: "0.82rem", color: "#94a3b8" }}>
                                            Supported formats: PDF, DOC, DOCX (Max 5MB)
                                        </small>
                                    </div>

                                    {/* Why Neno Technology? (Optional) */}
                                    <div className="col-12">
                                        <label className="form-label fw-semibold mb-1" style={{ color: "#ffffff", fontSize: "0.92rem" }}>
                                            Why Neno Technology? (Optional)
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            rows={4}
                                            placeholder="Tell us about an interesting AI or distributed systems problem you solved recently..."
                                            style={{
                                                borderRadius: "10px",
                                                border: "1px solid rgba(255, 255, 255, 0.12)",
                                                background: "rgba(255, 255, 255, 0.05)",
                                                padding: "12px 16px",
                                                fontSize: "0.95rem",
                                                color: "#ffffff"
                                            }}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="col-12 text-center mt-3">
                                        <motion.button
                                            className="btn"
                                            type="submit"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            transition={{ duration: 0.15 }}
                                            style={{
                                                backgroundColor: "#4F46E5",
                                                borderColor: "#4F46E5",
                                                color: "#ffffff",
                                                padding: "13px 34px",
                                                fontSize: "15px",
                                                fontWeight: 600,
                                                borderRadius: "10px",
                                                boxShadow: "0 4px 14px rgba(79, 70, 229, 0.35)",
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "8px"
                                            }}
                                        >
                                            Submit Application <span>↗</span>
                                        </motion.button>

                                        <p className="small mt-3 mb-0" style={{ fontSize: "0.92rem", color: "#94a3b8" }}>
                                            Prefer email? Send your resume directly to{" "}
                                            <a href="mailto:careers@nenotechnology.com" className="fw-semibold" style={{ color: "#38bdf8", textDecoration: "none" }}>
                                                careers@nenotechnology.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </AppForm>
                            </MotionGlassCard>
                        </FadeUp>
                    </div>
                </div>
            </div>
        </div>
    );
}
