"use client"
import AwardV1Data from "@/assets/jsonData/awards/AwardV1Data.json"
import SingleAwardV1 from "./SingleAwardV1";
import { useState } from "react";
import SplitText from "../animation/SplitText";

const AwardV1 = () => {

    const [activeAwardId, setActiveAwardId] = useState(AwardV1Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveAwardId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className="award-style-one-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Achievement & Awards</h4>
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        We translate your story into a stunning visual language.
                                    </SplitText>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="award-style-one-items">
                                {AwardV1Data.map(award =>
                                    <div
                                        className={`award-style-one-item hover-active-item ${activeAwardId === award.id ? 'active' : ''}`}
                                        key={award.id}
                                        onMouseEnter={() => handleMouseEnter(award.id)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <SingleAwardV1 award={award} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AwardV1;
