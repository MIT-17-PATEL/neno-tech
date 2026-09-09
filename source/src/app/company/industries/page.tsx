import { Metadata } from "next";
import IndustriesPageContent from "@/components/industries/IndustriesPageContent";

export const metadata: Metadata = {
    title: "Industries | AI Solutions Tailored for Enterprise | Neno Technology",
    description: "Discover how Neno Technology builds specialized AI solutions, autonomous workflows, and intelligent software tailored for Manufacturing, BFSI & Fintech, Healthcare, Retail & D2C, and IT Services.",
};

export default function CompanyIndustriesPage() {
    return <IndustriesPageContent />;
}
