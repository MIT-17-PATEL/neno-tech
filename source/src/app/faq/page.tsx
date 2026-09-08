import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import FaqV1 from "@/components/faq/FaqV1";
import LayoutV1 from "@/components/layouts/LayoutV1";

const FaqPage = () => {
    return (
        <>
            <div className="include-breadcrumb">
                <LayoutV1>
                    <BreadCrumb title="Important Faq" breadCrumb="faq" />
                    <FaqV1 sectionClass="accordion-secondary blurry-shape-right-bottom bg-gray" />
                </LayoutV1>
            </div>
        </>
    );
};

export default FaqPage;
