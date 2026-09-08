import { Metadata } from "next";
import CaseStudiesContent from "@/components/case-studies/CaseStudiesContent";

export const metadata: Metadata = {
    title: "Case Studies | Neno Technology - Enterprise AI in Action",
    description: "Explore real-world case studies of Neno Technology's autonomous voice agents, multi-agent swarms, and forward-deployed squads.",
};

export default function CompanyCaseStudiesPage() {
    return <CaseStudiesContent />;
}
