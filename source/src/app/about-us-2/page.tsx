import AboutV2 from "@/components/about/AboutV2";
import BrandV2 from "@/components/brand/BrandV2";
import WhyChooseV1 from "@/components/choose/WhyChooseV1";
import FaqV1 from "@/components/faq/FaqV1";
import FeatureV1 from "@/components/feature/FeatureV1";
import LayoutV1 from "@/components/layouts/LayoutV1";
import TeamV2 from "@/components/team/TeamV2";

const AboutUs2Page = () => {
    return (
        <>
            <LayoutV1>
                <AboutV2 sectionClass="mt-180 mt-md-110 mt-xs-70" />
                <FeatureV1 sectionClass="blurry-shape-right-bottom" />
                <WhyChooseV1 />
                <TeamV2 sectionClass="default-padding" />
                <BrandV2 />
                <FaqV1 />
            </LayoutV1>
        </>
    );
};

export default AboutUs2Page;