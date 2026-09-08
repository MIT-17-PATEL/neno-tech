import Image from "next/image";
import WhyChooseV2Data from "@/assets/jsonData/choose/WhyChooseV2Data.json"
import SingleChooseV2 from "./SingleChooseV2";
import SplitText from "../animation/SplitText";

const WhyChooseV2 = () => {
    return (
        <>
            <div className="choose-us-style-two default-padding bg-gray blurry-shape-left-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading">
                                <h4 className="sub-title">Design Startup</h4>
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Empower your business to reach new heights decisive.
                                    </SplitText>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="choose-us-two-thumb">
                                <Image src="/assets/img/thumb/5.jpg" alt="Image Not Found" width={695} height={525} />
                            </div>
                        </div>
                        <div className="col-lg-6 pl-80 pl-md-15 pl-xs-10">
                            <div className="choose-us-two-info">
                                <p>
                                    Artificial Intelligence refers to the development of computer systems that can perform tasks that would typically require human intelligence. It involves the creation of algorithms and models that enable machines to learn, reason, perceive, and make decisions.  It involves the creation of algorithms. There are generally two types of AI: Narrow or Weak AI, which is designed to perform specific tasks.
                                </p>
                                <ul className="list-style-four">
                                    {WhyChooseV2Data.map(feature =>
                                        <SingleChooseV2 feature={feature} key={feature.id} />
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseV2;
