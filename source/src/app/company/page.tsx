import { Metadata } from "next";
import AboutUsContent from "@/components/about/AboutUsContent";

export const metadata: Metadata = {
    title: "Company | Neno Technology - GIFT City AI Leaders",
    description: "Discover Neno Technology: our story, executive leadership, and global headquarters at GIFT City Tower One, Gandhinagar, Gujarat.",
};

export default function CompanyPage() {
    return <AboutUsContent />;
}
