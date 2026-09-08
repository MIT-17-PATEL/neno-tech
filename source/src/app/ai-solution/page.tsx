import AboutV2 from "@/components/about/AboutV2";
import BannerV2 from "@/components/banner/BannerV2";
import BlogV2 from "@/components/blog/BlogV2";
import BrandV2 from "@/components/brand/BrandV2";
import FactV1 from "@/components/fact/FactV1";
import FeatureV1 from "@/components/feature/FeatureV1";
import FooterV2 from "@/components/footer/FooterV2";
import HeaderSwitcher from "@/components/header/HeaderSwitcher";
import PriceV1 from "@/components/price/PriceV1";
import ServiceV2 from "@/components/services/ServiceV2";
import TeamV2 from "@/components/team/TeamV2";
import TestimonialV2 from "@/components/testimonial/TestimonialV2";

const AiSolutionPage = () => {
    return (
        <>
            <HeaderSwitcher headerStyle={2} lightMode={true} />
            <BannerV2 />
            <ServiceV2 sectionClass="default-padding" />
            <AboutV2 sectionClass="default-padding-top blurry-shape-half-right-bottom" />
            <FeatureV1 sectionClass="blurry-shape-half-right-bottom" />
            <BrandV2 />
            <PriceV1 sectionClass="default-padding" />
            <TestimonialV2 sectionClass="default-padding-top pb-240 pb-xs-70 blurry-shape-bottom" />
            <FactV1 />
            <TeamV2 sectionClass="default-padding" />
            <BlogV2 />
            <FooterV2 />
        </>
    );
};

export default AiSolutionPage;
