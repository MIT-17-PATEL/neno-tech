import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEngineerRoleBySlug } from "@/data/hireEngineersData";
import HireEngineerDetailPage from "@/components/hire-engineers/HireEngineerDetailPage";

export const metadata: Metadata = {
    title: "Security Engineer | Neno Technology",
    description: "Hire security engineers to harden your application and cloud infrastructure.",
};

export default function Page() {
    const role = getEngineerRoleBySlug("security-engineer");
    if (!role) { notFound(); }
    return <HireEngineerDetailPage role={role} />;
}
