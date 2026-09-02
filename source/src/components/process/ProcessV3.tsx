import Image from "next/image";
import ProcessV3Data from "@/assets/jsonData/process/ProcessV3Data.json"
import SingleProcessV3 from "./SingleProcessV3";
import SplitText from "../animation/SplitText";

const ProcessV3 = () => {
    return (
        <>
            <div className="process-style-three-area default-padding bg-dark text-light bg-cover"
                style={{ backgroundImage: 'url(/assets/img/shape/banner-22.jpg)' }}>
                <div className="shape">
                    <Image src="/assets/img/illustration/16.png" alt="Image Not Found" width={400} height={470} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="site-heading">
                                <h4 className="sub-title">How it works</h4>
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Crafting smarter AI through our three easy process
                                    </SplitText>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-2">
                            <div className="process-style-three-items">
                                {ProcessV3Data.map(process =>
                                    <SingleProcessV3 key={process.id} process={process} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProcessV3;