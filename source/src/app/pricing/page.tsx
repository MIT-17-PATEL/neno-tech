import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import PriceV2 from "@/components/price/PriceV2";

const PricingPage = () => {
    return (
        <>
            <div className="include-breadcrumb">
                <LayoutV1>
                    <BreadCrumb title="Pricing Plan" breadCrumb="pricing" />
                    <PriceV2 sectionClass="default-padding" />
                </LayoutV1>
            </div>
        </>
    );
};

export default PricingPage;