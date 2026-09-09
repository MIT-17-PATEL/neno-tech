import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Neno Technology",
    description: "Learn how Neno Technology collects, uses, and safeguards your personal information and data.",
};

const PrivacyPolicyPage = () => {
    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                <BreadCrumb title="Privacy Policy" breadCrumb="Legal" />
                <PrivacyPolicyContent />
            </LayoutV1>
        </div>
    );
};

export default PrivacyPolicyPage;
