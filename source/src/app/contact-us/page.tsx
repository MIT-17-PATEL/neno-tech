import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import ContactMap from "@/components/contact/ContactMap";
import ContactPageContent from "@/components/contact/ContactPageContent";
import LayoutV1 from "@/components/layouts/LayoutV1";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Neno Technology - GIFT City Headquarters",
    description: "Get in touch with Neno Technology at GIFT City Tower One, Gandhinagar, Gujarat. Contact our sales and engineering leadership.",
};

const ContactUsPage = () => {
    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                <BreadCrumb title="Get In Touch" breadCrumb="contact-us" />
                <ContactPageContent />
                <ContactMap />
            </LayoutV1>
        </div>
    );
};

export default ContactUsPage;
