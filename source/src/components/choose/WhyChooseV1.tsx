import Image from "next/image";
import SplitText from "../animation/SplitText";
import AppMotion from "../animation/AppMotion";

const WhyChooseV1 = () => {
    return (
        <>
            <div className="choose-us-style-one-area default-padding-top bg-dark text-light blurry-shape-right-bottom overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <AppMotion animation="leftRight" className="choose-us-thumb">
                                <Image className="leftRightScroll" src="/assets/img/illustration/12.png" alt="Image Not Found" width={600} height={800} />
                                <Image src="/assets/img/shape/11.png" alt="Image Not Found" width={385} height={1000} />
                            </AppMotion>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="choose-us-one-info default-padding-bottom">
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Unlocking the perks of working with Roboko
                                    </SplitText>
                                </h2>
                                <ul className="list-style-three mt-15 fade-up-anim">
                                    <li>
                                        <h4>Time-Saving Automation</h4>
                                        <p>
                                            Roboko automates repetitive processes, freeing up time for more creative work.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>Seamless Collaboration</h4>
                                        <p>
                                            The platform supports smooth teamwork with real-time updates and shared workflows.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>Cutting-Edge AI Technology</h4>
                                        <p>
                                            Roboko leverages advanced artificial intelligence to streamline tasks and enhance productivity.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseV1;