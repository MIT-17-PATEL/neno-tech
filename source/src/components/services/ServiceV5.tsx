import ServiceV5Data from "@/assets/jsonData/services/ServiceV5Data.json"
import SingleServiceV5 from "./SingleServiceV5";
import SplitTextV3 from "../animation/SplitTextV3";

const ServiceV5 = () => {
    return (
        <>
            <div className="services-style-five-area default-padding bottom-less">
                <div className="container">
                    <div className="left-heading">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h4 className="sub-title">Robok Features</h4>
                                <div className="right">
                                    <h2 className="title split-text-right split-text-in-right">
                                        <SplitTextV3
                                            delay={8}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            {"The features and benefits"} <br /> {"that make us unique"}
                                        </SplitTextV3>
                                    </h2>
                                    <p>
                                        Artificial Intelligence refers to the development of computer systems that can perform tasks that would typically require human intelligence. It involves the creation of algorithms and models that enable machines to learn, reason, perceive most necessitating option intelligence for your resources..
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="services-style-five-items">
                        <div className="row">
                            {ServiceV5Data.map(service =>
                                <SingleServiceV5 key={service.id} service={service} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceV5;