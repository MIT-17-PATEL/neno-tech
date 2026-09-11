import AboutV5 from "@/components/about/AboutV5";
import AwardV1 from "@/components/awards/AwardV1";
import BannerV6 from "@/components/banner/BannerV6";
import BlogV2 from "@/components/blog/BlogV2";
import WhyChooseV2 from "@/components/choose/WhyChooseV2";
import FooterV2 from "@/components/footer/FooterV2";
import ProcessV2 from "@/components/process/ProcessV2";
import ProjectV2 from "@/components/project/ProjectV2";
import ServiceV6 from "@/components/services/ServiceV6";

const AiStartupPage = () => {
    return (
        <>
            <BannerV6 />
            <AboutV5 />
            <ServiceV6 sectionClass="bg-gray blurry-shape-left-bottom" />
            <ProcessV2 />
            <ProjectV2 sectionClass="default-padding" />
            <WhyChooseV2 />
            <AwardV1 />
            <BlogV2 />
            <FooterV2 />
        </>
    );
};

export default AiStartupPage;
