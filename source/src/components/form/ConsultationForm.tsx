"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import AppForm from "./AppForm";
import CustomSelect from "./CustomSelect";
import {
    CATEGORY_OFFERINGS,
    CATEGORY_OPTIONS,
    resolveOfferingFromParam,
} from "@/data/offeringsData";

const ConsultationFormContent = () => {
    const searchParams = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState<string>("General Inquiry");
    const [selectedOffering, setSelectedOffering] = useState<string>("");

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
            setSelectedCategory(resolved.category);
            if (resolved.offering) {
                setSelectedOffering(resolved.offering);
            }
        }
    }, [searchParams]);

    // Handle category change
    const handleCategoryChange = (newCategory: string) => {
        setSelectedCategory(newCategory);
        if (newCategory === "General Inquiry") {
            setSelectedOffering("");
        } else {
            const group = CATEGORY_OFFERINGS.find((g) => g.categoryLabel === newCategory);
            if (group && group.options.length > 0) {
                setSelectedOffering(group.options[0].value);
            } else {
                setSelectedOffering("");
            }
        }
    };

    // Active category group
    const activeGroup = CATEGORY_OFFERINGS.find((g) => g.categoryLabel === selectedCategory);
    const isGeneralInquiry = selectedCategory === "General Inquiry";

    return (
        <AppForm className="contact-form" successMessage="Thanks for contacting us! We'll get back to you shortly." actionUrl="/api/contact-lead">
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
                        <input className="form-control" id="city" name="city" placeholder="City *" type="text" autoComplete="off" required />
                        <span className="alert-error" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <input className="form-control" id="company" name="company" placeholder="Company *" type="text" autoComplete="off" required />
                        <span className="alert-error" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <input className="form-control" id="designation" name="designation" placeholder="Designation *" type="text" autoComplete="off" required />
                        <span className="alert-error" />
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
                            value={selectedCategory}
                            options={CATEGORY_OPTIONS}
                            placeholder="Select Category..."
                            onChange={handleCategoryChange}
                            required
                        />
                        <span className="alert-error" />
                    </div>
                </div>

                {/* Right Dropdown: Specific Offering (Cascading) */}
                {!isGeneralInquiry && activeGroup && (
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="form-label neno-form-label" htmlFor="interest">
                                {activeGroup.categoryLabel === "Hire Engineers" && "Select Role"}
                                {activeGroup.categoryLabel === "Services" && "Select Service"}
                                {activeGroup.categoryLabel === "Products" && "Select Product"}
                                {activeGroup.categoryLabel === "Consulting" && "Select Consulting Type"}
                            </label>
                            <CustomSelect
                                id="interest"
                                name="role"
                                value={selectedOffering}
                                options={
                                    activeGroup.options.map((opt) => ({
                                        label: opt.label,
                                        value: opt.value,
                                    }))
                                }
                                placeholder={activeGroup ? `Select ${activeGroup.categoryLabel === "Hire Engineers" ? "Role" : activeGroup.categoryLabel === "Services" ? "Service" : activeGroup.categoryLabel === "Products" ? "Product" : "Consulting Type"}...` : "Select Option..."}
                                onChange={(val) => setSelectedOffering(val)}
                                required
                            />
                            {/* Hidden duplicate field for interest param compatibility */}
                            <input type="hidden" name="interest" value={selectedOffering} />
                            <span className="alert-error" />
                        </div>
                    </div>
                )}
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group comments">
                        <textarea className="form-control" id="requirements" name="requirements" placeholder="Requirements *" rows={5} autoComplete="off" required />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <button className="btn btn-style-one" type="submit" name="submit" id="submit">
                        Get in Touch <i className="fas fa-arrow-right" />
                    </button>
                </div>
            </div>

            {/* Alert Message */}
            <div className="col-lg-12 alert-notification">
                <div id="message" className="alert-msg" />
            </div>
        </AppForm>
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
