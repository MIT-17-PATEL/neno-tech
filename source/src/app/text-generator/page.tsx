import AboutV3 from "@/components/about/AboutV3";
import BannerV4 from "@/components/banner/BannerV4";
import BlogV3 from "@/components/blog/BlogV3";
import FaqV1 from "@/components/faq/FaqV1";
import FooterV2 from "@/components/footer/FooterV2";
import HeaderSwitcher from "@/components/header/HeaderSwitcher";
import LanguageV1 from "@/components/language/LanguageV1";
import NewsletterV2 from "@/components/newsletter/NewsletterV2";
import PriceV1 from "@/components/price/PriceV1";
import ServiceV4 from "@/components/services/ServiceV4";
import TestimonialV4 from "@/components/testimonial/TestimonialV4";

const TextGeneratorPage = () => {
    return (
        <>
            <HeaderSwitcher headerStyle={5} lightMode={true} />
            <BannerV4 />
            <ServiceV4 />
            <AboutV3 />
            <LanguageV1 />
            <PriceV1 sectionClass="default-padding" />
            <TestimonialV4 />
            <FaqV1 />
            <BlogV3 sectionClass="bg-gray bg-cover" />
            <NewsletterV2 />
            <FooterV2 />
        </>
    );
};

export default TextGeneratorPage;
