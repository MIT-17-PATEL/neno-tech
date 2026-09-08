import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEngineerRoleBySlug } from "@/data/hireEngineersData";
import HireEngineerDetailPage from "@/components/hire-engineers/HireEngineerDetailPage";

export const metadata: Metadata = {
    title: "Application Support Team | Neno Technology",
    description: "Deploy a dedicated application support team.",
};

export default function Page() {
    const role = getEngineerRoleBySlug("application-support-team");
    if (!role) { notFound(); }
    return <HireEngineerDetailPage role={role} />;
}
