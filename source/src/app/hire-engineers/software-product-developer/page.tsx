import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEngineerRoleBySlug } from "@/data/hireEngineersData";
import HireEngineerDetailPage from "@/components/hire-engineers/HireEngineerDetailPage";

export const metadata: Metadata = {
    title: "Software Product Developer | Neno Technology",
    description: "Hire product-minded software developers.",
};

export default function Page() {
    const role = getEngineerRoleBySlug("software-product-developer");
    if (!role) { notFound(); }
    return <HireEngineerDetailPage role={role} />;
}
