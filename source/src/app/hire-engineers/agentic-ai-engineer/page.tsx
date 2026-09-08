import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEngineerRoleBySlug } from "@/data/hireEngineersData";
import HireEngineerDetailPage from "@/components/hire-engineers/HireEngineerDetailPage";

export const metadata: Metadata = {
    title: "AI / Agentic AI Engineer | Neno Technology",
    description: "Hire Agentic AI engineers who build autonomous agent systems and LLM-powered workflows.",
};

export default function Page() {
    const role = getEngineerRoleBySlug("agentic-ai-engineer");
    if (!role) { notFound(); }
    return <HireEngineerDetailPage role={role} />;
}
