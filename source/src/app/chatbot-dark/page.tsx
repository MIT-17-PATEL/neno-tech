import BannerV3 from "@/components/banner/BannerV3";
import BlogV3 from "@/components/blog/BlogV3";
import WhyChooseV1 from "@/components/choose/WhyChooseV1";
import FaqV3 from "@/components/faq/FaqV3";
import FeatureV2 from "@/components/feature/FeatureV2";
import FooterV1 from "@/components/footer/FooterV1";
import HeaderSwitcher from "@/components/header/HeaderSwitcher";
import NewsletterV1 from "@/components/newsletter/NewsletterV1";
import PriceV2 from "@/components/price/PriceV2";
import ServiceV3 from "@/components/services/ServiceV3";
import TestimonialV3 from "@/components/testimonial/TestimonialV3";

const ChatPageDark = () => {
    return (
        <>
            <div className="smooth-scroll-yes bg-dark">
                <HeaderSwitcher headerStyle={2} />
                <BannerV3 bgDark={true} />
                <FeatureV2 />
                <ServiceV3 sectionClass="default-padding-top" lightIcon={true} />
                <WhyChooseV1 />
                <PriceV2 sectionClass="default-padding" />
                <TestimonialV3 />
                <FaqV3 />
                <NewsletterV1 />
                <BlogV3 />
                <FooterV1 sectionClass="bg-gray" />
            </div>
        </>
    );
};

export default ChatPageDark;