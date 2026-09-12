import AboutV1 from "@/components/about/AboutV3";
import BannerV5 from "@/components/banner/BannerV5";
import BlogV1 from "@/components/blog/BlogV1";
import FooterV1 from "@/components/footer/FooterV1";
import PriceV2 from "@/components/price/PriceV2";
import PromotionV1 from "@/components/promotion/PromotionV1";
import ServiceV5 from "@/components/services/ServiceV5";
import TestimonialV2 from "@/components/testimonial/TestimonialV2";

const ImageGeneratorPage = () => {
    return (
        <>
            <BannerV5 />
            <ServiceV5 />
            <PromotionV1 />
            <AboutV1 />
            <PriceV2 sectionClass="default-padding bg-dark text-light blurry-shape" />
            <TestimonialV2 sectionClass="default-padding" bgImage={true} />
            <BlogV1 />
            <FooterV1 sectionClass="bg-dark text-light" />
        </>
    );
};

export default ImageGeneratorPage;
