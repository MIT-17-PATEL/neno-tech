import AboutV1 from "@/components/about/AboutV1";
import BannerV1 from "@/components/banner/BannerV1";
import BlogV1 from "@/components/blog/BlogV1";
import FaqV1 from "@/components/faq/FaqV1";
import FooterV1 from "@/components/footer/FooterV1";
import HeaderSwitcher from "@/components/header/HeaderSwitcher";
import ProcessV1 from "@/components/process/ProcessV1";
import ProjectV1 from "@/components/project/ProjectV1";
import ServiceV1 from "@/components/services/ServiceV1";
import TeamV1 from "@/components/team/TeamV1";
import TestimonialV1 from "@/components/testimonial/TestimonialV1";

const AiAgencyDark = () => {
    return (
        <>
            <div className="smooth-scroll-yes bg-dark">
                <HeaderSwitcher headerStyle={7} isHomePill={true} />
                <BannerV1 />
                <AboutV1 sectionClass="blurry-shape-top-full" />
                <ServiceV1 sectionClass="default-padding blurry-shape-half-right-bottom" />
                <ProcessV1 />
                <ProjectV1 sectionClass="blurry-shape-half-right-bottom default-padding" />
                <TeamV1 hasTitle={true} />
                <TestimonialV1 />
                <FaqV1 sectionClass="accordion-secondary blurry-shape-right-bottom bg-gray" />
                <BlogV1 />
                <FooterV1 sectionClass="bg-dark text-light" />
            </div>
        </>
    );
};

export default AiAgencyDark;
