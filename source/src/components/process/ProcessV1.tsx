import Image from "next/image";
import ProcessV1Data from "@/assets/jsonData/process/ProcessV1Data.json"
import SingleProcessV1 from "./SingleProcessV1";
import SplitText from "../animation/SplitText";

interface DataType {
    sectionClass?: string;
}

const ProcessV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`process-style-one-area default-padding-top bg-theme text-light bg-cover ${sectionClass ? sectionClass : ""}`}
                style={{ backgroundImage: 'url(/assets/img/shape/banner-6.jpg)' }}>
                <div className="shape">
                    <Image src="/assets/img/illustration/6.png" alt="Image Not Found" width={600} height={940} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8">
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
                                        Crafting smarter AI through our process
                                    </SplitText>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="process-style-one-items">
                                {ProcessV1Data.map(process =>
                                    <SingleProcessV1 process={process} key={process.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProcessV1;