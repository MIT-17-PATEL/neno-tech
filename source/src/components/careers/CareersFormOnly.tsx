"use client";
import React, { useState } from "react";
import AppForm from "../form/AppForm";

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
        <div style={{ paddingTop: "140px", paddingBottom: "100px", backgroundColor: "#F8FAFC", minHeight: "85vh" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-xl-8">
                        {/* Header Area from Image */}
                        <div className="text-center mb-4">
                            <div className="d-inline-flex align-items-center gap-2 mb-3" style={{
                                background: "#EEF2FF",
                                color: "#4F46E5",
                                border: "1px solid #C0D8FF",
                                padding: "6px 18px",
                                borderRadius: "9999px",
                                fontSize: "12px",
                                fontWeight: 700,
                                letterSpacing: "0.5px",
                                textTransform: "uppercase"
                            }}>
                                <i className="fas fa-paper-plane" style={{ fontSize: "11px" }}></i>
                                <span>Quick Application</span>
                            </div>

                            <h1 className="fw-bold mb-2" style={{
                                fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
                                color: "#0f172a",
                                letterSpacing: "-0.5px"
                            }}>
                                Submit Your Application
                            </h1>

                            <p style={{ color: "#64748b", fontSize: "1.05rem" }}>
                                We review every application personally and respond within 3 to 5 business days.
                            </p>
                        </div>

                        {/* Form Card from Image */}
                        <div className="p-4 p-md-5 rounded-4" style={{
                            backgroundColor: "#ffffff",
                            border: "1px solid #e2e8f0",
                            boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.05)"
                        }}>
                            <AppForm className="contact-form" successMessage="Thank you! Your application has been received. Our team will review your profile and reach out within 3-5 business days.">
                                <div className="row g-4">
                                    {/* Full Name */}
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold mb-1" style={{ color: "#0f172a", fontSize: "0.92rem" }}>
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
                                                borderRadius: "8px",
                                                border: "1px solid #cbd5e1",
                                                padding: "11px 16px",
                                                fontSize: "0.95rem",
                                                color: "#1e293b"
                                            }}
                                        />
                                    </div>

                                    {/* Email Address */}
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold mb-1" style={{ color: "#0f172a", fontSize: "0.92rem" }}>
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
                                                borderRadius: "8px",
                                                border: "1px solid #cbd5e1",
                                                padding: "11px 16px",
                                                fontSize: "0.95rem",
                                                color: "#1e293b"
                                            }}
                                        />
                                    </div>

                                    {/* Phone Number */}
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold mb-1" style={{ color: "#0f172a", fontSize: "0.92rem" }}>
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
                                                borderRadius: "8px",
                                                border: "1px solid #cbd5e1",
                                                padding: "11px 16px",
                                                fontSize: "0.95rem",
                                                color: "#1e293b"
                                            }}
                                        />
                                    </div>

                                    {/* Current Location */}
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold mb-1" style={{ color: "#0f172a", fontSize: "0.92rem" }}>
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
                                                borderRadius: "8px",
                                                border: "1px solid #cbd5e1",
                                                padding: "11px 16px",
                                                fontSize: "0.95rem",
                                                color: "#1e293b"
                                            }}
                                        />
                                    </div>

                                    {/* Applying For */}
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold mb-1" style={{ color: "#0f172a", fontSize: "0.92rem" }}>
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
                                                borderRadius: "8px",
                                                border: "1px solid #cbd5e1",
                                                padding: "11px 16px",
                                                fontSize: "0.95rem",
                                                color: "#1e293b"
                                            }}
                                        />
                                    </div>

                                    {/* Years of Experience */}
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold mb-1" style={{ color: "#0f172a", fontSize: "0.92rem" }}>
                                            Years of Relevant Experience <span style={{ color: "#ef4444" }}>*</span>
                                        </label>
                                        <select
                                            className="form-control form-select"
                                            id="experience"
                                            name="experience"
                                            value={selectedExperience}
                                            onChange={(e) => setSelectedExperience(e.target.value)}
                                            style={{
                                                borderRadius: "8px",
                                                border: "1px solid #cbd5e1",
                                                padding: "11px 16px",
                                                fontSize: "0.95rem",
                                                color: "#1e293b"
                                            }}
                                        >
                                            {experienceLevels.map((exp) => (
                                                <option key={exp} value={exp}>{exp}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* LinkedIn / GitHub / Portfolio URL */}
                                    <div className="col-12">
                                        <label className="form-label fw-semibold mb-1" style={{ color: "#0f172a", fontSize: "0.92rem" }}>
                                            LinkedIn / GitHub / Portfolio URL
                                        </label>
                                        <input
                                            className="form-control"
                                            id="portfolio"
                                            name="portfolio"
                                            placeholder="https://github.com/ai-engineer or https://linkedin.com/in/ai-researcher"
                                            type="url"
                                            style={{
                                                borderRadius: "8px",
                                                border: "1px solid #cbd5e1",
                                                padding: "11px 16px",
                                                fontSize: "0.95rem",
                                                color: "#1e293b"
                                            }}
                                        />
                                    </div>

                                    {/* Attach Resume / CV */}
                                    <div className="col-12">
                                        <label className="form-label fw-semibold mb-1" style={{ color: "#0f172a", fontSize: "0.92rem" }}>
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
                                                borderRadius: "8px",
                                                border: "1px solid #cbd5e1",
                                                padding: "9px 14px",
                                                fontSize: "0.92rem",
                                                color: "#1e293b"
                                            }}
                                        />
                                        <small className="text-muted mt-1 d-block" style={{ fontSize: "0.82rem" }}>
                                            Supported formats: PDF, DOC, DOCX (Max 5MB)
                                        </small>
                                    </div>

                                    {/* Why Neno Technology? (Optional) */}
                                    <div className="col-12">
                                        <label className="form-label fw-semibold mb-1" style={{ color: "#0f172a", fontSize: "0.92rem" }}>
                                            Why Neno Technology? (Optional)
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            rows={4}
                                            placeholder="Tell us about an interesting AI or distributed systems problem you solved recently..."
                                            style={{
                                                borderRadius: "8px",
                                                border: "1px solid #cbd5e1",
                                                padding: "12px 16px",
                                                fontSize: "0.95rem",
                                                color: "#1e293b"
                                            }}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="col-12 text-center mt-3">
                                        <button
                                            className="btn"
                                            type="submit"
                                            style={{
                                                backgroundColor: "#4F46E5",
                                                borderColor: "#4F46E5",
                                                color: "#ffffff",
                                                padding: "13px 34px",
                                                fontSize: "15px",
                                                fontWeight: 600,
                                                borderRadius: "8px",
                                                boxShadow: "0 4px 14px rgba(79, 70, 229, 0.35)",
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "8px"
                                            }}
                                        >
                                            Submit Application <span>↗</span>
                                        </button>

                                        <p className="small text-muted mt-3 mb-0" style={{ fontSize: "0.92rem" }}>
                                            Prefer email? Send your resume directly to{" "}
                                            <a href="mailto:careers@nenotechnology.com" className="fw-semibold" style={{ color: "#2563EB", textDecoration: "none" }}>
                                                careers@nenotechnology.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </AppForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
