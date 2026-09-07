import CareersApplicationForm from "@/components/careers/CareersApplicationForm";
import LayoutV1 from "@/components/layouts/LayoutV1";

const CareersPage = () => {
    return (
        <>
            <div className="include-breadcrumb">
                <LayoutV1>
                    <CareersApplicationForm />
                </LayoutV1>
            </div>
        </>
    );
};

export default CareersPage;
