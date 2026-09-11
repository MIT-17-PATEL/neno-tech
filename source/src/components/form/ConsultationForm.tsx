"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import CustomSelect from "./CustomSelect";
import InternationalPhoneInput from "./InternationalPhoneInput";
import {
    CATEGORY_OFFERINGS,
    CATEGORY_OPTIONS,
    resolveOfferingFromParam,
} from "@/data/offeringsData";
import { CountryOption } from "@/data/countriesData";
import {
    defaultCountry,
    sanitizeInput,
    validateName,
    validateEmail,
    validateCity,
    validatePhone,
} from "@/utils/formValidation";

interface FormValues {
    name: string;
    email: string;
    phone: string;
    city: string;
    company: string;
    designation: string;
    category: string;
    offering: string;
    requirements: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;
type FormTouched = Partial<Record<keyof FormValues, boolean>>;

const initialValues: FormValues = {
    name: "",
    email: "",
    phone: "",
    city: "",
    company: "",
    designation: "",
    category: "General Inquiry",
    offering: "",
    requirements: "",
};

/**
 * Validates a single form field with strict international-grade rules
 */
export const validateFormField = (
    fieldName: keyof FormValues,
    value: string,
    country: CountryOption = defaultCountry,
    currentCategory = "General Inquiry"
): string => {
    const trimmed = (value || "").trim();

    switch (fieldName) {
        case "name":
            return validateName(trimmed, "full name");

        case "email":
            return validateEmail(trimmed);

        case "phone":
            return validatePhone(trimmed, country);

        case "city":
            return validateCity(trimmed, "city name");

        case "company":
            if (!trimmed) return "Please enter your company name.";
            if (trimmed.length < 2) return "Company name must be at least 2 characters.";
            if (!/^[a-zA-Z0-9\s&.,'\-()#/]+$/.test(trimmed)) {
                return "Please enter a valid company name.";
            }
            return "";

        case "designation":
            if (!trimmed) return "Please enter your designation / role.";
            if (trimmed.length < 2) return "Designation must be at least 2 characters.";
            if (!/^[a-zA-Z0-9\s&.,'\-()#/]+$/.test(trimmed)) {
                return "Please enter a valid designation.";
            }
            return "";

        case "category":
            if (!trimmed || trimmed === "Select Category...") {
                return "Please select what you are looking for.";
            }
            return "";

        case "offering":
            if (currentCategory && currentCategory !== "General Inquiry") {
                if (!trimmed || trimmed.startsWith("Select ")) {
                    return "Please select a specific role or service.";
                }
            }
            return "";

        case "requirements":
            if (!trimmed) return "Please describe your requirements.";
            if (trimmed.length < 10) {
                return "Please enter at least 10 characters describing your requirements.";
            }
            return "";

        default:
            return "";
    }
};

const ConsultationFormContent = () => {
    const searchParams = useSearchParams();
    const [values, setValues] = useState<FormValues>(initialValues);
    const [selectedCountry, setSelectedCountry] = useState<CountryOption>(defaultCountry);
    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<FormTouched>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    // Read and parse URL query parameters on load
    useEffect(() => {
        const queryParam =
            searchParams.get("interest") ||
            searchParams.get("role") ||
            searchParams.get("service") ||
            searchParams.get("product") ||
            searchParams.get("consulting") ||
            searchParams.get("position") ||
            "";

        if (queryParam) {
            const resolved = resolveOfferingFromParam(queryParam);
            setValues((prev) => ({
                ...prev,
                category: resolved.category,
                offering: resolved.offering || prev.offering,
            }));
        }
    }, [searchParams]);

    // Handle category change
    const handleCategoryChange = (newCategory: string) => {
        let newOffering = "";
        if (newCategory !== "General Inquiry") {
            const group = CATEGORY_OFFERINGS.find((g) => g.categoryLabel === newCategory);
            if (group && group.options.length > 0) {
                newOffering = group.options[0].value;
            }
        }

        setValues((prev) => ({
            ...prev,
            category: newCategory,
            offering: newOffering,
        }));

        // Clear category errors immediately if valid
        const categoryError = validateFormField("category", newCategory, selectedCountry, newCategory);
        const offeringError = validateFormField("offering", newOffering, selectedCountry, newCategory);
        setErrors((prev) => ({
            ...prev,
            category: categoryError,
            offering: offeringError,
        }));
    };

    // Handle standard field change
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        const fieldName = name as keyof FormValues;

        setValues((prev) => ({ ...prev, [fieldName]: value }));

        // Validate immediately if field was previously touched or has an active error
        if (touched[fieldName] || errors[fieldName]) {
            const err = validateFormField(fieldName, value, selectedCountry, values.category);
            setErrors((prev) => ({
                ...prev,
                [fieldName]: err,
            }));
        }
    };

    // Handle phone change
    const handlePhoneChange = (phone: string, country: CountryOption) => {
        setSelectedCountry(country);
        setValues((prev) => ({ ...prev, phone }));

        if (touched.phone || errors.phone) {
            const err = validateFormField("phone", phone, country, values.category);
            setErrors((prev) => ({ ...prev, phone: err }));
        }
    };

    // Handle field blur
    const handleBlur = (fieldName: keyof FormValues) => {
        setTouched((prev) => ({ ...prev, [fieldName]: true }));
        const err = validateFormField(fieldName, values[fieldName], selectedCountry, values.category);
        setErrors((prev) => ({
            ...prev,
            [fieldName]: err,
        }));
    };

    // Active category group
    const activeGroup = CATEGORY_OFFERINGS.find((g) => g.categoryLabel === values.category);
    const isGeneralInquiry = values.category === "General Inquiry";

    // Validate entire form
    const validateAll = (): { isValid: boolean; newErrors: FormErrors } => {
        const newErrors: FormErrors = {};
        const fields: (keyof FormValues)[] = [
            "name",
            "email",
            "phone",
            "city",
            "company",
            "designation",
            "category",
            "offering",
            "requirements",
        ];

        let isValid = true;
        for (const field of fields) {
            const err = validateFormField(field, values[field], selectedCountry, values.category);
            if (err) {
                newErrors[field] = err;
                isValid = false;
            }
        }

        return { isValid, newErrors };
    };

    // Form submission handler
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Mark all fields as touched
        setTouched({
            name: true,
            email: true,
            phone: true,
            city: true,
            company: true,
            designation: true,
            category: true,
            offering: true,
            requirements: true,
        });

        const { isValid, newErrors } = validateAll();
        setErrors(newErrors);

        if (!isValid) {
            // Find the first field with an error and focus it
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
            // Full sanitized payload with international dial code format
            const formattedPhone = values.phone.startsWith("+")
                ? values.phone.trim()
                : `${selectedCountry.dialCode} ${values.phone.trim()}`;

            const payload = {
                name: sanitizeInput(values.name),
                email: sanitizeInput(values.email),
                phone: sanitizeInput(formattedPhone),
                city: sanitizeInput(values.city),
                company: sanitizeInput(values.company),
                designation: sanitizeInput(values.designation),
                category: sanitizeInput(values.category),
                role: sanitizeInput(values.offering),
                interest: sanitizeInput(values.offering),
                requirements: sanitizeInput(values.requirements),
                countryCode: selectedCountry.code,
                dialCode: selectedCountry.dialCode,
            };

            const response = await fetch("/api/contact-lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.success) {
                toast.success(result.message || "Thanks for contacting us! We'll get back to you shortly.");
                setValues(initialValues);
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
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
            {/* Full Name */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <input
                            className={`form-control ${touched.name && errors.name ? "is-invalid has-error" : ""}`}
                            id="name"
                            name="name"
                            placeholder="Full Name *"
                            type="text"
                            autoComplete="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={() => handleBlur("name")}
                            aria-invalid={Boolean(touched.name && errors.name)}
                            aria-describedby={touched.name && errors.name ? "name-error" : undefined}
                            required
                        />
                        {touched.name && errors.name && (
                            <span id="name-error" className="neno-field-error">
                                <i className="fas fa-exclamation-circle" /> {errors.name}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Email (Full width row) */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <input
                            className={`form-control ${touched.email && errors.email ? "is-invalid has-error" : ""}`}
                            id="email"
                            name="email"
                            placeholder="Email *"
                            type="email"
                            autoComplete="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={() => handleBlur("email")}
                            aria-invalid={Boolean(touched.email && errors.email)}
                            aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                            required
                        />
                        {touched.email && errors.email && (
                            <span id="email-error" className="neno-field-error">
                                <i className="fas fa-exclamation-circle" /> {errors.email}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* International Phone (Full width row) */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
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
                </div>
            </div>

            {/* City & Company */}
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <input
                            className={`form-control ${touched.city && errors.city ? "is-invalid has-error" : ""}`}
                            id="city"
                            name="city"
                            placeholder="City *"
                            type="text"
                            autoComplete="address-level2"
                            value={values.city}
                            onChange={handleChange}
                            onBlur={() => handleBlur("city")}
                            aria-invalid={Boolean(touched.city && errors.city)}
                            aria-describedby={touched.city && errors.city ? "city-error" : undefined}
                            required
                        />
                        {touched.city && errors.city && (
                            <span id="city-error" className="neno-field-error">
                                <i className="fas fa-exclamation-circle" /> {errors.city}
                            </span>
                        )}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <input
                            className={`form-control ${touched.company && errors.company ? "is-invalid has-error" : ""}`}
                            id="company"
                            name="company"
                            placeholder="Company *"
                            type="text"
                            autoComplete="organization"
                            value={values.company}
                            onChange={handleChange}
                            onBlur={() => handleBlur("company")}
                            aria-invalid={Boolean(touched.company && errors.company)}
                            aria-describedby={touched.company && errors.company ? "company-error" : undefined}
                            required
                        />
                        {touched.company && errors.company && (
                            <span id="company-error" className="neno-field-error">
                                <i className="fas fa-exclamation-circle" /> {errors.company}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Designation */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <input
                            className={`form-control ${touched.designation && errors.designation ? "is-invalid has-error" : ""}`}
                            id="designation"
                            name="designation"
                            placeholder="Designation *"
                            type="text"
                            autoComplete="organization-title"
                            value={values.designation}
                            onChange={handleChange}
                            onBlur={() => handleBlur("designation")}
                            aria-invalid={Boolean(touched.designation && errors.designation)}
                            aria-describedby={touched.designation && errors.designation ? "designation-error" : undefined}
                            required
                        />
                        {touched.designation && errors.designation && (
                            <span id="designation-error" className="neno-field-error">
                                <i className="fas fa-exclamation-circle" /> {errors.designation}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Side-by-side Connected Dropdowns Row */}
            <div className="row neno-offerings-row">
                {/* Left Dropdown: Category */}
                <div className={isGeneralInquiry ? "col-lg-12" : "col-lg-6"}>
                    <div className="form-group">
                        <label className="form-label neno-form-label" htmlFor="category">
                            What are you looking for? *
                        </label>
                        <CustomSelect
                            id="category"
                            name="category"
                            value={values.category}
                            options={CATEGORY_OPTIONS}
                            placeholder="Select Category..."
                            onChange={handleCategoryChange}
                            onBlur={() => handleBlur("category")}
                            hasError={Boolean(touched.category && errors.category)}
                            required
                        />
                        {touched.category && errors.category && (
                            <span id="category-error" className="neno-field-error">
                                <i className="fas fa-exclamation-circle" /> {errors.category}
                            </span>
                        )}
                    </div>
                </div>

                {/* Right Dropdown: Specific Offering (Cascading) */}
                {!isGeneralInquiry && activeGroup && (
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="form-label neno-form-label" htmlFor="interest">
                                {activeGroup.categoryLabel === "Hire Engineers" && "Select Role *"}
                                {activeGroup.categoryLabel === "Services" && "Select Service *"}
                                {activeGroup.categoryLabel === "Products" && "Select Product *"}
                                {activeGroup.categoryLabel === "Consulting" && "Select Consulting Type *"}
                            </label>
                            <CustomSelect
                                id="interest"
                                name="role"
                                value={values.offering}
                                options={
                                    activeGroup.options.map((opt) => ({
                                        label: opt.label,
                                        value: opt.value,
                                    }))
                                }
                                placeholder={activeGroup ? `Select ${activeGroup.categoryLabel === "Hire Engineers" ? "Role" : activeGroup.categoryLabel === "Services" ? "Service" : activeGroup.categoryLabel === "Products" ? "Product" : "Consulting Type"}...` : "Select Option..."}
                                onChange={(val) => {
                                    setValues((prev) => ({ ...prev, offering: val }));
                                    if (touched.offering || errors.offering) {
                                        const err = validateFormField("offering", val, selectedCountry, values.category);
                                        setErrors((prev) => ({ ...prev, offering: err }));
                                    }
                                }}
                                onBlur={() => handleBlur("offering")}
                                hasError={Boolean(touched.offering && errors.offering)}
                                required
                            />
                            {/* Hidden duplicate field for interest param compatibility */}
                            <input type="hidden" name="interest" value={values.offering} />
                            {touched.offering && errors.offering && (
                                <span id="offering-error" className="neno-field-error">
                                    <i className="fas fa-exclamation-circle" /> {errors.offering}
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Requirements */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group comments">
                        <textarea
                            className={`form-control ${touched.requirements && errors.requirements ? "is-invalid has-error" : ""}`}
                            id="requirements"
                            name="requirements"
                            placeholder="Requirements *"
                            rows={5}
                            value={values.requirements}
                            onChange={handleChange}
                            onBlur={() => handleBlur("requirements")}
                            aria-invalid={Boolean(touched.requirements && errors.requirements)}
                            aria-describedby={touched.requirements && errors.requirements ? "requirements-error" : undefined}
                            required
                        />
                        {touched.requirements && errors.requirements && (
                            <span id="requirements-error" className="neno-field-error">
                                <i className="fas fa-exclamation-circle" /> {errors.requirements}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Privacy Reassurance Note & Submit Button */}
            <div className="row align-items-center mt-2">
                <div className="col-lg-12">
                    <div className="neno-trust-reassurance">
                        <i className="fas fa-shield-alt neno-trust-icon" />
                        <span>Your information is kept confidential and never shared with third parties.</span>
                    </div>
                </div>
                <div className="col-lg-12 mt-3">
                    <button
                        className="btn btn-style-one w-100 w-md-auto"
                        type="submit"
                        name="submit"
                        id="submit"
                        disabled={isSubmitting}
                        style={{ opacity: isSubmitting ? 0.75 : 1, cursor: isSubmitting ? "not-allowed" : "pointer" }}
                    >
                        {isSubmitting ? (
                            <>
                                Submitting... <i className="fas fa-spinner fa-spin ms-2" />
                            </>
                        ) : (
                            <>
                                Get In Touch <i className="fas fa-arrow-right ms-2" />
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Alert Message Container for accessibility */}
            <div className="col-lg-12 alert-notification">
                <div id="message" className="alert-msg" />
            </div>
        </form>
    );
};

const ConsultationForm = () => {
    return (
        <Suspense fallback={<div className="text-muted small py-3">Loading contact form...</div>}>
            <ConsultationFormContent />
        </Suspense>
    );
};

export default ConsultationForm;
