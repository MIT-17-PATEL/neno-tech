import ServiceV1Data from "@/assets/jsonData/services/ServiceV1Data.json"
import SingleServiceV1 from "./SingleServiceV1";
import Image from "next/image";
import SplitText from "../animation/SplitText";

interface DataType {
    sectionClass?: string
    darkIcon?: boolean
}

const ServiceV1 = ({ sectionClass, darkIcon }: DataType) => {
    return (
        <>
            <div className={`services-style-one-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">What We Deliver</h4>
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        End-to-end technology services engineered for scale
                                    </SplitText>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="service-style-one-items fade-up-anim">
                        <div className="row gutter-zero">

                            <div className="col-lg-4 col-md-6 service-one-tags" style={{ backgroundImage: 'url(/assets/img/shape/banner-7.jpg)' }}>
                                <div className="curve-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z" />
                                        <text><textPath href="#textPath">Automation & predictive maintenance</textPath></text>
                                    </svg>
                                    <Image src="/assets/img/illustration/2.png" alt="Image Not Found" width={410} height={600} />
                                </div>
                            </div>

                            {ServiceV1Data.map(service =>
                                <SingleServiceV1 service={service} key={service.id} darkIcon={darkIcon} />
                            )}

                            <div className="col-lg-4 col-md-6 community-card text-light"
                                style={{ backgroundImage: 'url(/assets/img/shape/1.jpg)' }}>
                                <h4>Ai Community</h4>
                                <p>
                                    Dive into the art scene and unleash your inner artist!
                                </p>
                                <div className="info">
                                    <div className="multi-users">
                                        <Image src="/assets/img/team/11.jpg" alt="Image Not Found" width={128} height={128} />
                                        <Image src="/assets/img/team/12.jpg" alt="Image Not Found" width={128} height={128} />
                                        <Image src="/assets/img/team/13.jpg" alt="Image Not Found" width={128} height={128} />
                                        <Image src="/assets/img/team/3.jpg" alt="Image Not Found" width={128} height={128} />
                                        <i className="fas fa-plus" />
                                    </div>
                                    <h5>Over 40M+ users </h5>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceV1;