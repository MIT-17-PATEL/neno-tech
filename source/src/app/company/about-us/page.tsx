import { Metadata } from "next";
import AboutUsContent from "@/components/about/AboutUsContent";

export const metadata: Metadata = {
    title: "About Us | Neno Technology - GIFT City AI Leaders",
    description: "Learn about Neno Technology's story, visionary leadership board, and our state-of-the-art AI Excellence Centre at GIFT City Tower One, Gandhinagar.",
};

export default function CompanyAboutUsPage() {
    return <AboutUsContent />;
}
