import { Metadata } from "next";
import ContactUsPage from "@/app/contact-us/page";

export const metadata: Metadata = {
    title: "Contact Us | Neno Technology - GIFT City Headquarters",
    description: "Get in touch with Neno Technology at GIFT City Tower One, Gandhinagar, Gujarat. Contact our sales and engineering leadership.",
};

export default function ContactRoutePage() {
    return <ContactUsPage />;
}
