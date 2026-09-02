import ServiceV7Data from "@/assets/jsonData/services/ServiceV7Data.json"
import SingleServiceV7 from "./SingleServiceV7";
import SplitText from "../animation/SplitText";

interface DataType {
    sectionClass?: string
}

const ServiceV7 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`services-style-seven-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Services</h4>
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
                        <div className="col-lg-12">
                            <div className="services-style-seven-items">
                                <div className="accordion" id="faqAccordion">
                                    {ServiceV7Data.map(service =>
                                        <SingleServiceV7 service={service} key={service.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceV7;