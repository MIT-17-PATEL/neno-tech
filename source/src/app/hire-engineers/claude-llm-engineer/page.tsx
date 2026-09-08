import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEngineerRoleBySlug } from "@/data/hireEngineersData";
import HireEngineerDetailPage from "@/components/hire-engineers/HireEngineerDetailPage";

export const metadata: Metadata = {
    title: "Claude & LLM Engineer | Neno Technology",
    description: "Hire Claude and LLM engineers for production AI applications.",
};

export default function Page() {
    const role = getEngineerRoleBySlug("claude-llm-engineer");
    if (!role) { notFound(); }
    return <HireEngineerDetailPage role={role} />;
}
