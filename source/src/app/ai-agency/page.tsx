import AboutV1 from "@/components/about/AboutV1";
import BannerV1 from "@/components/banner/BannerV1";
import BlogV1 from "@/components/blog/BlogV1";
import FaqV1 from "@/components/faq/FaqV1";
import FooterV1 from "@/components/footer/FooterV1";
import ProcessV1 from "@/components/process/ProcessV1";
import ProjectV1 from "@/components/project/ProjectV1";
import ServiceV1 from "@/components/services/ServiceV1";
import TeamV1 from "@/components/team/TeamV1";
import TestimonialV1 from "@/components/testimonial/TestimonialV1";

const AiAgencyPage = () => {
    return (
        <>
            <BannerV1 />
            <AboutV1 />
            <ServiceV1 sectionClass="default-padding blurry-shape-half-right-bottom" darkIcon={true} />
            <ProcessV1 />
            <ProjectV1 sectionClass="default-padding" />
            <TeamV1 hasTitle={true} />
            <TestimonialV1 />
            <FaqV1 sectionClass="accordion-secondary blurry-shape-right-bottom bg-gray" />
            <BlogV1 />
            <FooterV1 sectionClass="bg-dark text-light" />
        </>
    );
};

export default AiAgencyPage;
