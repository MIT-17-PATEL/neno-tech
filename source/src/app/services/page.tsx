import BrandV2 from "@/components/brand/BrandV2";
import FactV1 from "@/components/fact/FactV1";
import LayoutV1 from "@/components/layouts/LayoutV1";
import PriceV1 from "@/components/price/PriceV1";
import ServiceV1 from "@/components/services/ServiceV1";
import TeamV2 from "@/components/team/TeamV2";
import TestimonialV2 from "@/components/testimonial/TestimonialV2";

const ServicesPage = () => {
    return (
        <LayoutV1>
            <ServiceV1 sectionClass="default-padding-bottom pt-200 pt-md-110 pt-xs-70" darkIcon={true} />
            <PriceV1 sectionClass="bg-gray default-padding" />
            <BrandV2 />
            <TestimonialV2 sectionClass="default-padding-top pb-240 pb-xs-70 blurry-shape-bottom" />
            <FactV1 />
            <TeamV2 sectionClass="default-padding" />
        </LayoutV1>
    );
};

export default ServicesPage;