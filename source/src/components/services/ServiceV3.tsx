import ServiceV3Data from "@/assets/jsonData/services/ServiceV3Data.json"
import SingleServiceV3 from "./SingleServiceV3";
import FactV2Data from "@/assets/jsonData/fact/FactV2Data.json";
import SingleFactV2 from "../fact/SingleFactV2";
import SplitText from "../animation/SplitText";
import AppSwiper from "../slider/AppSwiper";

interface DataType {
    sectionClass?: string
    lightIcon?: boolean
}

const ServiceV3 = ({ sectionClass, lightIcon }: DataType) => {
    return (
        <>
            <div className={`services-style-three-area overflow-hidden blurry-shape-left-bottom ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="service-style-three-items">
                                <div className="heading">
                                    <h4 className="sub-title">Our Services</h4>
                                    <h2 className="title split-text-right split-text-in-right">
                                        <SplitText
                                            delay={8}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            AI-optimized design for innovative futures
                                        </SplitText>
                                    </h2>
                                </div>

                                <AppSwiper
                                    className="services-style-three-carousel default-padding-bottom fade-up-anim"
                                    direction="horizontal"
                                    loop={true}
                                    slidesPerView={1}
                                    grabCursor={true}
                                    spaceBetween={30}
                                    autoplay={true}
                                    pagination={{
                                        el: '.services-pagination',
                                        type: 'fraction',
                                        clickable: true,
                                    }}
                                    navigation={{
                                        nextEl: ".services-button-next",
                                        prevEl: ".services-button-prev"
                                    }}
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        1024: {
                                            slidesPerView: 2,
                                        }
                                    }}
                                    navigationModule
                                    paginationModule
                                    autoplayModule
                                    items={ServiceV3Data.map((service) => ({
                                        id: service.id,
                                        content: (
                                            <SingleServiceV3 service={service} lightIcon={lightIcon} />
                                        ),
                                    }))}
                                />
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="fun-fact-card-two-items">
                                {FactV2Data.map(fact =>
                                    <SingleFactV2 fact={fact} key={fact.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default ServiceV3;