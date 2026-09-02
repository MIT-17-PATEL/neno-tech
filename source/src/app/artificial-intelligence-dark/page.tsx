import AboutV6 from "@/components/about/AboutV6";
import BannerV7 from "@/components/banner/BannerV7";
import BlogV1 from "@/components/blog/BlogV1";
import PromotionalBrand from "@/components/brand/PromotionalBrand";
import FooterV1 from "@/components/footer/FooterV1";
import HeaderSwitcher from "@/components/header/HeaderSwitcher";
import ProcessV3 from "@/components/process/ProcessV3";
import ServiceV7 from "@/components/services/ServiceV7";
import TeamV3 from "@/components/team/TeamV3";
import TestimonialV3 from "@/components/testimonial/TestimonialV3";

const ArtificialIntelligenceDark = () => {
    return (
        <>
            <div className="smooth-scroll-yes bg-dark">
                <HeaderSwitcher headerStyle={4} />
                <BannerV7 />
                <AboutV6 />
                <ServiceV7 sectionClass="default-padding" />
                <ProcessV3 />
                <PromotionalBrand />
                <TeamV3 />
                <TestimonialV3 />
                <BlogV1 />
                <FooterV1 sectionClass="bg-dark text-light" />
            </div>
        </>
    );
};

export default ArtificialIntelligenceDark;