"use client"
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import SplitTextV2 from "../animation/SplitTextV2";
import AppMotion from "../animation/AppMotion";

interface DataType {
    sectionClass?: string;
}

const AboutV2 = ({ sectionClass }: DataType) => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className={`about-style-two-area ${sectionClass ? sectionClass : ""}`}
                style={{ backgroundImage: 'url(/assets/img/shape/8.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-style-two">
                                <h1 className="fade-up-anim">
                                    <SplitTextV2
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Universal solutions <strong>That work for all!</strong>
                                    </SplitTextV2>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="about-style-two-info default-padding-bottom fade-up-anim">
                                <h4>Algorithms that learn from data to make predictions or classifications.</h4>
                                <p>
                                    AI solutions refer to the application of artificial intelligence technologies to solve complex problems, automate processes, and enhance decision-making across various industries. These solutions leverage machine learning , deep learning, natural language processing , computer vision, and other AI techniques to deliver intelligent, data-driven for the perfect artificial solution.
                                </p>
                                <div className="card-style-two mt-50">
                                    <div className="card-thumb">
                                        <button className="popup-youtube" onClick={() => setOpen(true)}>
                                            <Image src="/assets/img/about/2.jpg" alt="Image Not Found" width={500} height={475} />
                                            <div className="vieo-text">
                                                <Image src="/assets/img/icon/play-circle.png" alt="Image Not Found" width={58} height={58} /> Watch Video
                                            </div>
                                        </button>
                                    </div>
                                    <div className="info">
                                        <h4>Challenges in AI Implementation:</h4>
                                        <ul className="list-style-two">
                                            <li>Robotic Process Automation</li>
                                            <li>Natural Language Processing</li>
                                            <li>Data Privacy & Ethics</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 offset-lg-1">
                            <AppMotion animation="fadeLeft" className="about-style-two-thumb fade-up-anim">
                                <Image className="img-reveal" src="/assets/img/about/1.jpg" alt="Image Not Found" width={905} height={1000} />
                            </AppMotion>
                        </div>
                    </div>
                </div>
            </div>

            <ModalVideo channel='youtube' isOpen={isOpen} videoId="iyARCQ7Ohd4" onClose={() => setOpen(false)} />
        </>
    );
};

export default AboutV2;