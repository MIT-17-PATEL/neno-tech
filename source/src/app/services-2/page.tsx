import FaqV1 from "@/components/faq/FaqV1";
import LayoutV1 from "@/components/layouts/LayoutV1";
import PriceV2 from "@/components/price/PriceV2";
import ServiceV2 from "@/components/services/ServiceV2";
import TeamV2 from "@/components/team/TeamV2";
import TestimonialV1 from "@/components/testimonial/TestimonialV1";

const Services2Page = () => {
    return (
        <>
            <LayoutV1>
                <ServiceV2 sectionClass="default-padding-bottom pt-200 pt-md-110 pt-xs-70" />
                <PriceV2 sectionClass="default-padding" />
                <TestimonialV1 />
                <TeamV2 sectionClass="default-padding" />
                <FaqV1 sectionClass="accordion-secondary blurry-shape-right-bottom bg-gray" />
            </LayoutV1>
        </>
    );
};

export default Services2Page;