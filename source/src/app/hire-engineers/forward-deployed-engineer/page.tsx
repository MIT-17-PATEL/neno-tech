import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEngineerRoleBySlug } from "@/data/hireEngineersData";
import HireEngineerDetailPage from "@/components/hire-engineers/HireEngineerDetailPage";

export const metadata: Metadata = {
    title: "Forward Deployed Engineer (FDE) | Neno Technology",
    description: "Embed a senior Forward Deployed Engineer directly inside your team.",
};

export default function Page() {
    const role = getEngineerRoleBySlug("forward-deployed-engineer");
    if (!role) { notFound(); }
    return <HireEngineerDetailPage role={role} />;
}
