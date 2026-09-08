import AboutV1 from "@/components/about/AboutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import FaqV1 from "@/components/faq/FaqV1";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ProcessV1 from "@/components/process/ProcessV1";
import TeamV2 from "@/components/team/TeamV2";
import TestimonialV1 from "@/components/testimonial/TestimonialV1";

const AboutUsPage = () => {
    return (
        <>
            <div className="include-breadcrumb">
                <LayoutV1>
                    <BreadCrumb title="About Us" breadCrumb="about-us" />
                    <AboutV1 sectionClass="default-padding" />
                    <ProcessV1 />
                    <TeamV2 sectionClass="default-padding" />
                    <TestimonialV1 />
                    <FaqV1 />
                </LayoutV1>
            </div>
        </>
    );
};

export default AboutUsPage;
