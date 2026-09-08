import Image from "next/image";
import FaqV2Data from "@/assets/jsonData/faq/FaqV2Data.json"
import SingleFaqV2 from "../faq/SingleFaqV2";
import SplitText from "../animation/SplitText";

const AboutV4 = () => {
    return (
        <>
            <div className="about-style-four-area default-padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="about-style-four-info">
                                <h4 className="sub-title">About Robok</h4>
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Unlock limitless possibilities with Robok
                                    </SplitText>
                                </h2>
                                <p>
                                    Artificial Intelligence refers to the development of computer systems that can perform tasks that would typically require human intelligence. It involves the creation of algorithms and models that enable machines to learn, reason, perceive, and make decisions it involves the creation.
                                </p>
                                <div className="faq-card mt-50">
                                    <div className="thumb">
                                        <Image src="/assets/img/about/3.jpg" alt="Image Not Found" width={565} height={475} />
                                    </div>
                                    <div className="faq-style-two-items">
                                        <div className="accordion" id="faqAccordion">
                                            {FaqV2Data.map(faq =>
                                                <SingleFaqV2 key={faq.id} faq={faq} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 offset-xl-1">
                            <div className="about-four-right-info">
                                <div className="thumb">
                                    <Image src="/assets/img/about/4.jpg" alt="Image Not Found" width={700} height={700} />
                                </div>
                                <h4>Stunning visuals crafted by our AI-powered image generator.</h4>
                                <ul className="social-list">
                                    <li>
                                        <Image src="/assets/img/icon/teams.png" alt="Image Not Found" width={128} height={128} />
                                    </li>
                                    <li>
                                        <Image src="/assets/img/icon/messenger.png" alt="Image Not Found" width={100} height={100} />
                                    </li>
                                    <li>
                                        <Image src="/assets/img/icon/slack.png" alt="Image Not Found" width={128} height={128} />
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

export default AboutV4;
