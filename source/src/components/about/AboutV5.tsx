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
                                <h5>A creative studio is a professional agency that blends strategic thinking with artistic execution to solve business problems and build brands.</h5>
                                <p>
                                    This focus on leveraging advanced technology—like AI, automation, and data-driven insights—to help businesses or individuals overcome challenges and achieve unprecedented growth. Below are some key details that could be associated with this statement. AI algorithms analyze your business needs and automatically. Tailors responses based on user behavior to help businesses and individuals overcome challenges and achieve Real fond attachment.
                                </p>
                                <ul className="list-style-two">
                                    <li>Robotic Process Automation</li>
                                    <li>Natural Language Processing</li>
                                    <li>Data Privacy Ethics</li>
                                    <li>Robotic Process Automation</li>
                                    <li>Natural Language Processing</li>
                                    <li>Data Privacy Ethics</li>
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