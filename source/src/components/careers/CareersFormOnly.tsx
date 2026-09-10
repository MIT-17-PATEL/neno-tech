"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { FadeUp, MotionGlassCard } from "@/components/animation/FramerMotionSystem";
import InternationalPhoneInput from "../form/InternationalPhoneInput";
import { COUNTRIES, CountryOption } from "@/data/countriesData";
import { validateInternationalPhone } from "@/utils/phoneValidation";

interface CareerFormValues {
    name: string;
    email: string;
    phone: string;
    location: string;
    position: string;
    experience: string;
    portfolio: string;
    message: string;
}

type CareerFormErrors = Partial<Record<keyof CareerFormValues | "resume", string>>;
type CareerFormTouched = Partial<Record<keyof CareerFormValues | "resume", boolean>>;

const defaultCountry = COUNTRIES.find((c) => c.code === "IN") || COUNTRIES[0];

const initialValues: CareerFormValues = {
    name: "",
    email: "",
    phone: "",
    location: "",
    position: "",
    experience: "3 – 5 Years (Mid-Senior)",
    portfolio: "",
    message: "",
};

const experienceLevels = [
    "0 – 1 Year (Junior / Entry)",
    "1 – 3 Years",
    "3 – 5 Years (Mid-Senior)",
    "5 – 8 Years (Senior / Staff)",
    "8+ Years (Principal / Lead)",
];

const sanitizeInput = (val: string): string => {
    if (!val) return "";
    return val
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
        .replace(/<[^>]+>/g, "")
        .trim();
};

export const validateCareerField = (
    fieldName: keyof CareerFormValues,
    value: string,
    country: CountryOption = defaultCountry
): string => {
    const trimmed = (value || "").trim();

    switch (fieldName) {
        case "name":
            if (!trimmed) return "Please enter your full name.";
            if (trimmed.length < 2) return "Please enter a valid full name (at least 2 characters).";
            if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) {
                return "Please enter a valid full name (letters and spaces only).";
            }
            return "";

        case "email": {
            if (!trimmed) return "Please enter your email address.";
            if (/\s/.test(trimmed)) return "Email address cannot contain spaces.";
            if (/\.\./.test(trimmed)) return "Please enter a valid email address without consecutive dots.";
            const strictEmailRegex = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
            if (!strictEmailRegex.test(trimmed)) {
                return "Please enter a valid email address (e.g. name@domain.com).";
            }
            return "";
        }

        case "phone":
            return validateInternationalPhone(trimmed, country.code);

        case "location":
            if (!trimmed) return "Please enter your current location.";
            if (trimmed.length < 2) return "Location must be at least 2 characters.";
            if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) {
                return "Please enter a valid location (letters and spaces only).";
            }
            return "";

        case "position":
            if (!trimmed) return "Please enter the position / role you are applying for.";
            if (trimmed.length < 2) return "Position title must be at least 2 characters.";
            return "";

        case "experience":
            if (!trimmed) return "Please select your years of experience.";
            return "";

        case "portfolio":
            if (trimmed) {
                const urlRegex = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{2,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/i;
                if (!urlRegex.test(trimmed)) {
                    return "Please enter a valid URL (e.g. https://github.com/... or https://linkedin.com/in/...).";
                }
            }
            return "";

        default:
            return "";
    }
};

export default function CareersFormOnly() {
    const [values, setValues] = useState<CareerFormValues>(initialValues);
    const [selectedCountry, setSelectedCountry] = useState<CountryOption>(defaultCountry);
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [errors, setErrors] = useState<CareerFormErrors>({});
    const [touched, setTouched] = useState<CareerFormTouched>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const validateResume = (file: File | null): string => {
        if (!file || file.size === 0) {
            return "Please attach your Resume / CV.";
        }
        const allowedExtensions = [".pdf", ".doc", ".docx"];
        const fileName = file.name.toLowerCase();
        const hasValidExt = allowedExtensions.some((ext) => fileName.endsWith(ext));
        if (!hasValidExt) {
            return "Accepted file formats are PDF, DOC, and DOCX.";
        }
        if (file.size > 5 * 1024 * 1024) {
            return "Resume file must be under 5 MB.";
        }
        return "";
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        const fieldName = name as keyof CareerFormValues;

        setValues((prev) => ({ ...prev, [fieldName]: value }));

        if (touched[fieldName] || errors[fieldName]) {
            const err = validateCareerField(fieldName, value, selectedCountry);
            setErrors((prev) => ({ ...prev, [fieldName]: err }));
        }
    };

    const handlePhoneChange = (phone: string, country: CountryOption) => {
        setSelectedCountry(country);
        setValues((prev) => ({ ...prev, phone }));

        if (touched.phone || errors.phone) {
            const err = validateCareerField("phone", phone, country);
            setErrors((prev) => ({ ...prev, phone: err }));
        }
    };

    const handleBlur = (fieldName: keyof CareerFormValues) => {
        setTouched((prev) => ({ ...prev, [fieldName]: true }));
        const err = validateCareerField(fieldName, values[fieldName], selectedCountry);
        setErrors((prev) => ({ ...prev, [fieldName]: err }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0] ? e.target.files[0] : null;
        setResumeFile(file);
        setTouched((prev) => ({ ...prev, resume: true }));
        const err = validateResume(file);
        setErrors((prev) => ({ ...prev, resume: err }));
    };

    const validateAll = (): { isValid: boolean; newErrors: CareerFormErrors } => {
        const newErrors: CareerFormErrors = {};
        const fields: (keyof CareerFormValues)[] = [
            "name",
            "email",
            "phone",
            "location",
            "position",
            "experience",
            "portfolio",
        ];

        let isValid = true;
        for (const field of fields) {
            const err = validateCareerField(field, values[field], selectedCountry);
            if (err) {
                newErrors[field] = err;
                isValid = false;
            }
        }

        const resumeErr = validateResume(resumeFile);
        if (resumeErr) {
            newErrors.resume = resumeErr;
            isValid = false;
        }

        return { isValid, newErrors };
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setTouched({
            name: true,
            email: true,
            phone: true,
            location: true,
            position: true,
            experience: true,
            portfolio: true,
            resume: true,
        });

        const { isValid, newErrors } = validateAll();
        setErrors(newErrors);

        if (!isValid) {
            const firstErrorField = Object.keys(newErrors)[0];
            if (firstErrorField) {
                const element = document.getElementById(firstErrorField);
                if (element) {
                    element.focus();
                }
            }
            toast.error("Please fill in all required fields correctly.");
            return;
        }

        if (isSubmitting) return;
        setIsSubmitting(true);

        try {
            let resumeFileName = "";
            let resumeContent = "";

            if (resumeFile && resumeFile.size > 0) {
                resumeFileName = resumeFile.name;
                resumeContent = await new Promise<string>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        const base64 = (reader.result as string).split(",")[1];
                        resolve(base64);
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(resumeFile);
                });
            }

            const formattedPhone = values.phone.startsWith("+")
                ? values.phone.trim()
                : `${selectedCountry.dialCode} ${values.phone.trim()}`;

            const payload = {
                name: sanitizeInput(values.name),
                email: sanitizeInput(values.email),
                phone: sanitizeInput(formattedPhone),
                location: sanitizeInput(values.location),
                position: sanitizeInput(values.position),
                experience: values.experience || "",
                portfolio: sanitizeInput(values.portfolio),
                message: sanitizeInput(values.message),
                resumeFileName,
                resumeContent,
                countryCode: selectedCountry.code,
                dialCode: selectedCountry.dialCode,
            };

            const response = await fetch("/api/careers-apply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.success) {
                toast.success(result.message || "Application received — we'll be in touch within 5 business days.");
                setValues(initialValues);
                setResumeFile(null);
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
                setErrors({});
                setTouched({});
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
                            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                <div className="row g-4">
                                    {/* Full Name */}
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold mb-1" htmlFor="name" style={{ color: "#ffffff", fontSize: "0.92rem" }}>
                                            Full Name <span style={{ color: "#ef4444" }}>*</span>
                                        </label>
                                        <input
                                            className={`form-control ${touched.name && errors.name ? "is-invalid has-error" : ""}`}
                                            id="name"
                                            name="name"
                                            placeholder="e.g. Mit Patel"
                                            type="text"
                                            autoComplete="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={() => handleBlur("name")}
                                            aria-invalid={Boolean(touched.name && errors.name)}
                                            aria-describedby={touched.name && errors.name ? "name-error" : undefined}
                                            required
                                            style={{
                                                borderRadius: "10px",
                                                background: "rgba(255, 255, 255, 0.05)",
                                                padding: "11px 16px",
                                                fontSize: "0.95rem",
                                                color: "#ffffff"
                                            }}
                                        />
                                        {touched.name && errors.name && (
                                            <span id="name-error" className="neno-field-error">
                                                <i className="fas fa-exclamation-circle" /> {errors.name}
                                            </span>
                                        )}
                                    </div>

                                    {/* Email Address */}
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold mb-1" htmlFor="email" style={{ color: "#ffffff", fontSize: "0.92rem" }}>
                                            Email Address <span style={{ color: "#ef4444" }}>*</span>
                                        </label>
                                        <input
                                            className={`form-control ${touched.email && errors.email ? "is-invalid has-error" : ""}`}
                                            id="email"
                                            name="email"
                                            placeholder="example@email.com"
                                            type="email"
                                            autoComplete="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={() => handleBlur("email")}
                                            aria-invalid={Boolean(touched.email && errors.email)}
                                            aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                                            required
                                            style={{
                                                borderRadius: "10px",
                                                background: "rgba(255, 255, 255, 0.05)",
                                                padding: "11px 16px",
                                                fontSize: "0.95rem",
                                                color: "#ffffff"
                                            }}
                                        />
                                        {touched.email && errors.email && (
                                            <span id="email-error" className="neno-field-error">
                                                <i className="fas fa-exclamation-circle" /> {errors.email}
                                            </span>
                                        )}
                                    </div>

                                    {/* Phone Number (International with Country Code Selector) */}
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold mb-1" htmlFor="phone" style={{ color: "#ffffff", fontSize: "0.92rem" }}>
                                            Phone Number <span style={{ color: "#ef4444" }}>*</span>
                                        </label>
                                        <InternationalPhoneInput
                                            id="phone"
                                            name="phone"
                                            value={values.phone}
                                            selectedCountry={selectedCountry}
                                            onChange={handlePhoneChange}
                                            onBlur={() => handleBlur("phone")}
                                            hasError={Boolean(touched.phone && errors.phone)}
                                            placeholder="Phone Number *"
                                            required
                                        />
                                        {touched.phone && errors.phone && (
                                            <span id="phone-error" className="neno-field-error">
                                                <i className="fas fa-exclamation-circle" /> {errors.phone}
                                            </span>
                                        )}
                                    </div>

                                    {/* Current Location */}
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold mb-1" htmlFor="location" style={{ color: "#ffffff", fontSize: "0.92rem" }}>
                                            Current Location <span style={{ color: "#ef4444" }}>*</span>
                                        </label>
                                        <input
                                            className={`form-control ${touched.location && errors.location ? "is-invalid has-error" : ""}`}
                                            id="location"
                                            name="location"
                                            placeholder="e.g. Ahmedabad, Bangalore, Remote"
                                            type="text"
                                            autoComplete="address-level2"
                                            value={values.location}
                                            onChange={handleChange}
                                            onBlur={() => handleBlur("location")}
                                            aria-invalid={Boolean(touched.location && errors.location)}
                                            aria-describedby={touched.location && errors.location ? "location-error" : undefined}
                                            required
                                            style={{
                                                borderRadius: "10px",
                                                background: "rgba(255, 255, 255, 0.05)",
                                                padding: "11px 16px",
                                                fontSize: "0.95rem",
                                                color: "#ffffff"
                                            }}
                                        />
                                        {touched.location && errors.location && (
                                            <span id="location-error" className="neno-field-error">
                                                <i className="fas fa-exclamation-circle" /> {errors.location}
                                            </span>
                                        )}
                                    </div>

                                    {/* Applying For */}
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold mb-1" htmlFor="position" style={{ color: "#ffffff", fontSize: "0.92rem" }}>
                                            Applying For <span style={{ color: "#ef4444" }}>*</span>
                                        </label>
                                        <input
                                            className={`form-control ${touched.position && errors.position ? "is-invalid has-error" : ""}`}
                                            id="position"
                                            name="position"
                                            placeholder="e.g. Agentic AI Engineer (LLM & Swarms)"
                                            type="text"
                                            value={values.position}
                                            onChange={handleChange}
                                            onBlur={() => handleBlur("position")}
                                            aria-invalid={Boolean(touched.position && errors.position)}
                                            aria-describedby={touched.position && errors.position ? "position-error" : undefined}
                                            required
                                            style={{
                                                borderRadius: "10px",
                                                background: "rgba(255, 255, 255, 0.05)",
                                                padding: "11px 16px",
                                                fontSize: "0.95rem",
                                                color: "#ffffff"
                                            }}
                                        />
                                        {touched.position && errors.position && (
                                            <span id="position-error" className="neno-field-error">
                                                <i className="fas fa-exclamation-circle" /> {errors.position}
                                            </span>
                                        )}
                                    </div>

                                    {/* Years of Experience */}
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold mb-1" htmlFor="experience" style={{ color: "#ffffff", fontSize: "0.92rem" }}>
                                            Years of Relevant Experience <span style={{ color: "#ef4444" }}>*</span>
                                        </label>
                                        <select
                                            className="form-control form-select"
                                            id="experience"
                                            name="experience"
                                            value={values.experience}
                                            onChange={handleChange}
                                            onBlur={() => handleBlur("experience")}
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
                                        <label className="form-label fw-semibold mb-1" htmlFor="portfolio" style={{ color: "#ffffff", fontSize: "0.92rem" }}>
                                            LinkedIn / GitHub / Portfolio URL
                                        </label>
                                        <input
                                            className={`form-control ${touched.portfolio && errors.portfolio ? "is-invalid has-error" : ""}`}
                                            id="portfolio"
                                            name="portfolio"
                                            placeholder="https://github.com/ai-engineer or https://linkedin.com/in/ai-researcher"
                                            type="url"
                                            value={values.portfolio}
                                            onChange={handleChange}
                                            onBlur={() => handleBlur("portfolio")}
                                            aria-invalid={Boolean(touched.portfolio && errors.portfolio)}
                                            aria-describedby={touched.portfolio && errors.portfolio ? "portfolio-error" : undefined}
                                            style={{
                                                borderRadius: "10px",
                                                background: "rgba(255, 255, 255, 0.05)",
                                                padding: "11px 16px",
                                                fontSize: "0.95rem",
                                                color: "#ffffff"
                                            }}
                                        />
                                        {touched.portfolio && errors.portfolio && (
                                            <span id="portfolio-error" className="neno-field-error">
                                                <i className="fas fa-exclamation-circle" /> {errors.portfolio}
                                            </span>
                                        )}
                                    </div>

                                    {/* Attach Resume / CV */}
                                    <div className="col-12">
                                        <label className="form-label fw-semibold mb-1" htmlFor="resume" style={{ color: "#ffffff", fontSize: "0.92rem" }}>
                                            Attach Resume / CV <span style={{ color: "#ef4444" }}>*</span>
                                        </label>
                                        <input
                                            ref={fileInputRef}
                                            className={`form-control ${touched.resume && errors.resume ? "is-invalid has-error" : ""}`}
                                            id="resume"
                                            name="resume"
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                            aria-invalid={Boolean(touched.resume && errors.resume)}
                                            aria-describedby={touched.resume && errors.resume ? "resume-error" : undefined}
                                            required
                                            style={{
                                                borderRadius: "10px",
                                                background: "rgba(255, 255, 255, 0.05)",
                                                padding: "9px 14px",
                                                fontSize: "0.92rem",
                                                color: "#ffffff"
                                            }}
                                        />
                                        <small className="mt-1 d-block" style={{ fontSize: "0.82rem", color: "#94a3b8" }}>
                                            Supported formats: PDF, DOC, DOCX (Max 5MB)
                                        </small>
                                        {touched.resume && errors.resume && (
                                            <span id="resume-error" className="neno-field-error">
                                                <i className="fas fa-exclamation-circle" /> {errors.resume}
                                            </span>
                                        )}
                                    </div>

                                    {/* Why Neno Technology? (Optional) */}
                                    <div className="col-12">
                                        <label className="form-label fw-semibold mb-1" htmlFor="message" style={{ color: "#ffffff", fontSize: "0.92rem" }}>
                                            Why Neno Technology? (Optional)
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            rows={4}
                                            placeholder="Tell us about an interesting AI or distributed systems problem you solved recently..."
                                            value={values.message}
                                            onChange={handleChange}
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

                                    {/* Privacy Trust Reassurance & Submit Button */}
                                    <div className="col-12">
                                        <div className="neno-trust-reassurance">
                                            <i className="fas fa-shield-alt neno-trust-icon" />
                                            <span>Your data and application materials are kept strictly confidential.</span>
                                        </div>
                                    </div>

                                    <div className="col-12 text-center mt-3">
                                        <motion.button
                                            className="btn"
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                            transition={{ duration: 0.15 }}
                                            style={{
                                                backgroundColor: isSubmitting ? "#6366f1" : "#4F46E5",
                                                borderColor: "#4F46E5",
                                                color: "#ffffff",
                                                padding: "13px 34px",
                                                fontSize: "15px",
                                                fontWeight: 600,
                                                borderRadius: "10px",
                                                boxShadow: "0 4px 14px rgba(79, 70, 229, 0.35)",
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "8px",
                                                opacity: isSubmitting ? 0.8 : 1,
                                                cursor: isSubmitting ? "not-allowed" : "pointer"
                                            }}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    Submitting... <i className="fas fa-spinner fa-spin ms-2" />
                                                </>
                                            ) : (
                                                <>
                                                    Submit Application <i className="fas fa-arrow-right ms-2" />
                                                </>
                                            )}
                                        </motion.button>

                                        <p className="small mt-3 mb-0" style={{ fontSize: "0.92rem", color: "#94a3b8" }}>
                                            Prefer email? Send your resume directly to{" "}
                                            <a href="mailto:careers@nenotechnology.com" className="fw-semibold" style={{ color: "#38bdf8", textDecoration: "none" }}>
                                                careers@nenotechnology.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </form>
                            </MotionGlassCard>
                        </FadeUp>
                    </div>
                </div>
            </div>
        </div>
    );
}
