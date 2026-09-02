import FaqV1 from "@/components/faq/FaqV1";
import LayoutV1 from "@/components/layouts/LayoutV1";
import PriceV1 from "@/components/price/PriceV1";
import ProcessV1 from "@/components/process/ProcessV1";
import ServiceV3 from "@/components/services/ServiceV3";
import TeamV2 from "@/components/team/TeamV2";
import TestimonialV1 from "@/components/testimonial/TestimonialV1";

const Services3Page = () => {
    return (
        <>
            <LayoutV1>
                <ServiceV3 sectionClass="pt-200 pt-md-110 pt-xs-70" />
                <ProcessV1 />
                <PriceV1 sectionClass="default-padding" />
                <TestimonialV1 />
                <TeamV2 sectionClass="default-padding" />
                <FaqV1 sectionClass="accordion-secondary blurry-shape-right-bottom bg-gray" />
            </LayoutV1>
        </>
    );
};

export default Services3Page;