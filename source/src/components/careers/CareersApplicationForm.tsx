"use client";

import { useEffect, useRef, useState } from "react";
import AppForm from "../form/AppForm";

const CareersApplicationForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [selectedPosition, setSelectedPosition] = useState("Open Application");

    const positions = [
        "Open Application",
        "Forward Deployed Engineer",
        "Agentic AI Engineer",
        "Claude & LLM Engineer",
        "Full Stack Engineer",
        "AI Product Designer",
        "AI GTM Lead",
    ];

    return (
        <div className="careers-apply-area default-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="text-center mb-50">
                            <h4 className="sub-title">Apply Now</h4>
                            <h2 className="title">We&apos;d love to hear from you.</h2>
                            <p className="mt-20">Send us your application and we&apos;ll get back to you within 5 business days.</p>
                        </div>

                        <div className="careers-apply-form-card contact-form-card"
                            style={{ backgroundImage: "url(/assets/img/shape/3.png)" }}>
                            <AppForm className="contact-form wow fadeInUp" successMessage="Application received — we'll be in touch within 5 business days.">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input className="form-control" id="name" name="name" placeholder="Full Name *" type="text" autoComplete="off" required />
                                            <span className="alert-error" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control" id="email" name="email" placeholder="Email *" type="email" autoComplete="off" required />
                                            <span className="alert-error" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control" id="phone" name="phone" placeholder="Phone Number *" type="tel" autoComplete="off" required />
                                            <span className="alert-error" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control" id="location" name="location" placeholder="Current Location *" type="text" autoComplete="off" required />
                                            <span className="alert-error" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <select className="form-control" id="position" name="position" value={selectedPosition} onChange={(e) => setSelectedPosition(e.target.value)}>
                                                {positions.map((p) => (
                                                    <option key={p} value={p}>{p}</option>
                                                ))}
                                            </select>
                                            <span className="alert-error" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <select className="form-control" id="experience" name="experience" defaultValue="3-5">
                                                <option value="" disabled>Years of Experience *</option>
                                                <option value="0-1">Less than 1 year</option>
                                                <option value="1-3">1 – 3 years</option>
                                                <option value="3-5">3 – 5 years</option>
                                                <option value="5-10">5 – 10 years</option>
                                                <option value="10+">10+ years</option>
                                            </select>
                                            <span className="alert-error" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control" id="linkedin" name="linkedin" placeholder="LinkedIn / Portfolio URL" type="url" autoComplete="off" />
                                            <span className="alert-error" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input className="form-control" id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" required />
                                            <span className="alert-error" />
                                            <small className="form-text">Accepted: PDF, DOC, DOCX (max 5 MB)</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group comments">
                                            <textarea className="form-control" id="cover_letter" name="cover_letter" placeholder="Cover Letter (optional)" rows={4} autoComplete="off" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <button className="btn btn-style-one btn-dark" type="submit" name="submit" id="submit">
                                            Submit Application <i className="fas fa-arrow-right" />
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-12 alert-notification">
                                    <div id="message" className="alert-msg" />
                                </div>
                            </AppForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareersApplicationForm;
