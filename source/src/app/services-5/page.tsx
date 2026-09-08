import BrandV2 from "@/components/brand/BrandV2";
import FactV1 from "@/components/fact/FactV1";
import LayoutV1 from "@/components/layouts/LayoutV1";
import PriceV1 from "@/components/price/PriceV1";
import ServiceV7 from "@/components/services/ServiceV7";
import TeamV2 from "@/components/team/TeamV2";
import TestimonialV2 from "@/components/testimonial/TestimonialV2";

const Services5Page = () => {
    return (
        <>
            <LayoutV1>
                <ServiceV7 sectionClass="default-padding-bottom pt-220 pt-md-110 pt-xs-70" />
                <PriceV1 sectionClass="default-padding bg-gray" />
                <BrandV2 />
                <TestimonialV2 sectionClass="default-padding-top pb-240 pb-xs-70 blurry-shape-bottom" />
                <FactV1 />
                <TeamV2 sectionClass="default-padding" />
            </LayoutV1>
        </>
    );
};

export default Services5Page;
