import Link from "next/link";
import SingleAboutV5 from "./SingleAboutV5";
import AboutV5Data from "@/assets/jsonData/about/AboutV5Data.json"
import SplitText from "../animation/SplitText";

const AboutV5 = () => {
    return (
        <>
            <div className="about-style-five-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="about-style-five-left-info">
                                <h5>We build and integrate production-grade AI systems, voice agents, and dedicated engineering squads for forward-thinking enterprises.</h5>
                                <p>
                                    From autonomous agent workflows and custom LLM fine-tuning to high-throughput backend infrastructure, Neno Technology engineers reliable, observable systems with SLA-backed performance.
                                </p>
                                <ul className="list-style-two">
                                    <li>Multi-Agent Orchestration</li>
                                    <li>Conversational Voice AI</li>
                                    <li>Forward Deployed Engineers</li>
                                    <li>LLM Fine-Tuning & Evaluation</li>
                                    <li>SLA-Backed Production Support</li>
                                    <li>Enterprise Data Integration</li>
                                </ul>
                                <Link className="btn btn-style-one mt-30" href="/about-us">Explore More
                                    <i className="fas fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-lg-7">
                            <div className="about-style-five-right-info">
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Advance solutions by creative power
                                    </SplitText>
                                </h2>
                                <ul className="feature-list">
                                    {AboutV5Data.map(feature =>
                                        <SingleAboutV5 key={feature.id} feature={feature} />
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

export default AboutV5;
