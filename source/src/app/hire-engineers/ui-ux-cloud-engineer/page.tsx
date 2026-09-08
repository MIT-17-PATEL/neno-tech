import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEngineerRoleBySlug } from "@/data/hireEngineersData";
import HireEngineerDetailPage from "@/components/hire-engineers/HireEngineerDetailPage";

export const metadata: Metadata = {
    title: "UI/UX & Cloud Engineer | Neno Technology",
    description: "Hire UI/UX and cloud engineers.",
};

export default function Page() {
    const role = getEngineerRoleBySlug("ui-ux-cloud-engineer");
    if (!role) { notFound(); }
    return <HireEngineerDetailPage role={role} />;
}
