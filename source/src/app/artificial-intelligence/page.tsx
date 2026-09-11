import AboutV6 from "@/components/about/AboutV6";
import BannerV7 from "@/components/banner/BannerV7";
import BlogV1 from "@/components/blog/BlogV1";
import PromotionalBrand from "@/components/brand/PromotionalBrand";
import FooterV1 from "@/components/footer/FooterV1";
import ProcessV3 from "@/components/process/ProcessV3";
import ServiceV7 from "@/components/services/ServiceV7";
import TeamV3 from "@/components/team/TeamV3";
import TestimonialV3 from "@/components/testimonial/TestimonialV3";

const ArtificialIntelligencePage = () => {
    return (
        <>
            <BannerV7 />
            <AboutV6 />
            <ServiceV7 sectionClass="default-padding" />
            <ProcessV3 />
            <PromotionalBrand />
            <TeamV3 />
            <TestimonialV3 />
            <BlogV1 />
            <FooterV1 sectionClass="bg-dark text-light" />
        </>
    );
};

export default ArtificialIntelligencePage;
