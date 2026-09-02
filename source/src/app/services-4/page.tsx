import BrandV2 from "@/components/brand/BrandV2";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import FactV1 from "@/components/fact/FactV1";
import LayoutV1 from "@/components/layouts/LayoutV1";
import PriceV1 from "@/components/price/PriceV1";
import ServiceV6 from "@/components/services/ServiceV6";
import TeamV2 from "@/components/team/TeamV2";
import TestimonialV2 from "@/components/testimonial/TestimonialV2";

const Services4Page = () => {
    return (
        <>
            <div className="include-breadcrumb">
                <LayoutV1>
                    <BreadCrumb title="Our Services" breadCrumb="services-4" />
                    <ServiceV6 />
                    <PriceV1 sectionClass="default-padding bg-gray" />
                    <BrandV2 />
                    <TestimonialV2 sectionClass="default-padding-top pb-240 pb-xs-70 blurry-shape-bottom" />
                    <FactV1 />
                    <TeamV2 sectionClass="default-padding" />
                </LayoutV1>
            </div>
        </>
    );
};

export default Services4Page;