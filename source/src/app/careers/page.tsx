import LayoutV1 from "@/components/layouts/LayoutV1";
import CareersFormOnly from "@/components/careers/CareersFormOnly";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers | Neno Technology - Submit Your Application",
    description: "Submit your application to Neno Technology. We review every application personally and respond within 3 to 5 business days.",
};

const CareersPage = () => {
    return (
        <LayoutV1>
            <CareersFormOnly />
        </LayoutV1>
    );
};

export default CareersPage;
