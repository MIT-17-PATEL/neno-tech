import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import TermsContent from "@/components/legal/TermsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Neno Technology",
    description: "Read the Terms of Service governing Neno Technology's website, AI engineering, and consulting services.",
};

const TermsPage = () => {
    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                <BreadCrumb title="Terms of Service" breadCrumb="Legal" />
                <TermsContent />
            </LayoutV1>
        </div>
    );
};

export default TermsPage;
