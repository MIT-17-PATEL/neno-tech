"use client";

import { useRef, useState } from "react";
import { toast } from "react-toastify";

const CareersApplicationForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [selectedPosition, setSelectedPosition] = useState("Open Application");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const positions = [
        "Open Application",
        "Forward Deployed Engineer",
        "Agentic AI Engineer",
        "Claude & LLM Engineer",
        "Full Stack Engineer",
        "AI Product Designer",
        "AI GTM Lead",
    ];

    const readFileAsBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                // result is "data:application/pdf;base64,JVBERi0x..."
                // We only want the Base64 part after the comma
                const result = reader.result as string;
                const base64 = result.split(",")[1];
                resolve(base64);
            };
            reader.onerror = () => reject(new Error("Failed to read file"));
            reader.readAsDataURL(file);
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isSubmitting) return;

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Collect text fields
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const location = formData.get("location") as string;
        const position = formData.get("position") as string;
        const experience = formData.get("experience") as string;
        const linkedin = formData.get("linkedin") as string;
        const cover_letter = formData.get("cover_letter") as string;

        // Collect file
        const resumeFile = formData.get("resume") as File | null;

        if (!name || !email) {
            toast.error("Full Name and Email are required.");
            return;
        }

        setIsSubmitting(true);

        try {
            // Convert resume file to Base64
            let resumeContent = "";
            let resumeFileName = "";

            if (resumeFile && resumeFile.size > 0) {
                if (resumeFile.size > 5 * 1024 * 1024) {
                    toast.error("Resume file must be under 5 MB.");
                    setIsSubmitting(false);
                    return;
                }
                resumeContent = await readFileAsBase64(resumeFile);
                resumeFileName = resumeFile.name;
            }

            const payload = {
                name: name.trim(),
                email: email.trim(),
                phone: phone ? phone.trim() : "",
                location: location ? location.trim() : "",
                position: position || "Open Application",
                experience: experience || "",
                portfolio: linkedin ? linkedin.trim() : "",
                message: cover_letter ? cover_letter.trim() : "",
                resumeFileName,
                resumeContent,
            };

            const response = await fetch("/api/careers-apply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.success) {
                toast.success(result.message || "Application received — we'll be in touch within 5 business days.");
                form.reset();
                setSelectedPosition("Open Application");
            } else {
                toast.error(result.message || "Something went wrong. Please try again.");
            }
        } catch {
            toast.error("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                            <form ref={formRef} className="contact-form wow fadeInUp" onSubmit={handleSubmit}>
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
                                        <button
                                            className="btn btn-style-one btn-dark"
                                            type="submit"
                                            name="submit"
                                            id="submit"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Submitting..." : <>Submit Application <i className="fas fa-arrow-right" /></>}
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-12 alert-notification">
                                    <div id="message" className="alert-msg" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareersApplicationForm;
