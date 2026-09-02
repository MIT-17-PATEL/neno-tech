"use client";

import { ReactNode } from "react";
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
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        if (resetAfterSubmit) {
            form.reset();
        }

        toast.success(successMessage);
    };

    return (
        <form onSubmit={handleSubmit} className={className}>
            {children}
        </form>
    );
};

export default AppForm;