import Image from "next/image";
import ServiceV4Data from "@/assets/jsonData/services/ServiceV4Data.json"
import SingleServiceV4 from "./SingleServiceV4";
import SplitText from "../animation/SplitText";

interface DataType {
    bgDark?: boolean
}

const ServiceV4 = ({ bgDark }: DataType) => {
    return (
        <>
            <div className="services-style-two-area default-padding">
                <div className="shape">
                    <Image src="/assets/img/illustration/13.png" alt="Image Not Found" width={700} height={945} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-4 col-lg-8">
                            <div className="site-heading">
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
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-4">
                            <div className="services-style-four-items">
                                {ServiceV4Data.map(service =>
                                    <SingleServiceV4 service={service} key={service.id} bgDark={bgDark} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceV4;