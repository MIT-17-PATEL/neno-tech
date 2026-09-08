import ProcessV2Data from "@/assets/jsonData/process/ProcessV2Data.json"
import SingleProcessV2 from "./SingleProcessV2";
import SplitText from "../animation/SplitText";

const ProcessV2 = () => {
    return (
        <>
            <div className="process-style-two-area overflow-hidden bg-cover default-padding bg-dark text-light" style={{ backgroundImage: 'url(/assets/img/shape/banner-20.jpg)' }}>
                <div className="container">
                    <div className="site-heading">
                        <div className="row align-center">
                            <div className="col-lg-6">
                                <h4 className="sub-title">Our Process</h4>
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Get a unique work process in easy steps
                                    </SplitText>
                                </h2>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <p>
                                    Artificial Intelligence refers to the development of computer systems that can perform tasks that would typically require human intelligence. It involves the creation of algorithms and models that enable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="process-style-two-items">
                        <div className="row">
                            {ProcessV2Data.map(process =>
                                <div className="col-lg-4 col-md-6 process-two-single" key={process.id}>
                                    <SingleProcessV2 process={process} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProcessV2;
