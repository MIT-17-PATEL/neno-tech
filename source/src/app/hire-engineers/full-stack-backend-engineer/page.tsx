import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEngineerRoleBySlug } from "@/data/hireEngineersData";
import HireEngineerDetailPage from "@/components/hire-engineers/HireEngineerDetailPage";

export const metadata: Metadata = {
    title: "Full Stack / Backend Engineer | Neno Technology",
    description: "Hire senior full stack and backend engineers.",
};

export default function Page() {
    const role = getEngineerRoleBySlug("full-stack-backend-engineer");
    if (!role) { notFound(); }
    return <HireEngineerDetailPage role={role} />;
}
