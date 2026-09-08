"use client";

import { ReactNode, useState } from "react";
import { toast } from "react-toastify";

interface AppFormProps {
    children: ReactNode;
    className?: string;
    successMessage?: string;
    resetAfterSubmit?: boolean;
}

const AppForm = ({
    children,
    className = "",
    successMessage = "Success!",
    resetAfterSubmit = true,
}: AppFormProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        if (isSubmitting) return;
        setIsSubmitting(true);

        try {
            // Collect form data
            const formData = new FormData(form);
            const data: Record<string, string> = {};
            formData.forEach((value, key) => {
                data[key] = typeof value === "string" ? value : "";
            });

            // Send to Odoo API
            const response = await fetch("/api/odoo-lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                toast.success(result.message || successMessage);
                if (resetAfterSubmit) {
                    form.reset();
                }
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
        <form onSubmit={handleSubmit} className={className}>
            {children}
        </form>
    );
};

export default AppForm;
