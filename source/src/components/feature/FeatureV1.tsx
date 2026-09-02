"use client"
import SplitText from "../animation/SplitText";
import Counter from "../counter/Counter";
import FeatureV1Data from "@/assets/jsonData/feature/FeatureV1Data.json"
import SingleFeatureV1 from "./SingleFeatureV1";
import { useState } from "react";

interface DataType {
    sectionClass?: string;
}

const FeatureV1 = ({ sectionClass }: DataType) => {

    const [activeFeatureId, setActiveFeatureId] = useState(FeatureV1Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveFeatureId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className={`feature-style-one-area default-padding bg-gray ${sectionClass ? sectionClass : ""}`}
                style={{ backgroundImage: 'url(/assets/img/shape/3.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="site-heading">
                                <h4 className="sub-title">Our Features</h4>
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={10}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Our competitive advantages and unique features
                                    </SplitText>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="fade-up-anim">
                        <div className="row">
                            <div className="col-xl-4 pr-50 pr-md-15 pr-xs-15">
                                <div className="feature-style-one-left-info">
                                    <div className="content">
                                        <p>
                                            An AI solution refers to the application of artificial intelligence technologies to solve specific business or technical problems. These solutions leverage AI techniques always a perfect side.
                                        </p>
                                    </div>
                                    <div className="fun-fact-card-one mt-10">
                                        <div className="js-counter"><Counter end={218} />K</div>
                                        <h5>AI-Powered Solutions</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-8">
                                <div className="feature-style-one-items fade-up-anim">
                                    {FeatureV1Data.map(feature =>
                                        <div
                                            className={`feature-style-one hover-active-item ${activeFeatureId === feature.id ? 'active' : ''}`}
                                            key={feature.id}
                                            onMouseEnter={() => handleMouseEnter(feature.id)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <SingleFeatureV1 feature={feature} />
                                        </div>
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

export default FeatureV1;