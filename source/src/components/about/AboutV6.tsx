import Image from "next/image";
import Link from "next/link";
import Counter from "../counter/Counter";
import AboutV6Data from "@/assets/jsonData/about/AboutV6Data.json"
import SingleAboutV6 from "./SingleAboutV6";
import SplitText from "../animation/SplitText";

const AboutV6 = () => {
    return (
        <>
            <div className="aobut-style-six-area default-padding-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading">
                                <h4 className="sub-title">About Robok</h4>
                                <h2 className="title">
                                    <SplitText
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Unlock limitless possibilities with our intelligent
                                    </SplitText>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-stage-left">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-style-six-left-info">
                                <Image src="/assets/img/about/5.jpg" alt="Image Not Found" width={895} height={480} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-style-six-right-info">
                                <p>
                                    Artificial Intelligence refers to the development of computer systems that can perform tasks that would typically require human intelligence. It involves the creation of algorithms and models that enable machines to learn, reason, perceive, and make decisions.  It involves the creation of algorithms.
                                </p>
                                <p className="strong">
                                    There are generally two types of AI: Narrow or Weak AI, which is designed to perform specific tasks, and General or Strong AI, which possesses human-level intelligence and can handle a wide range of tasks. Artificial Intelligence refers to the development of computer systems that can perform tasks that would typically require human.
                                </p>
                                <Link href="/about-us" className="btn btn-style-one">Know More <i className="fas fa-arrow-right" /></Link>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 text-end">
                            <div className="about-six-fun-fact bg-gray">
                                <div className="fun-fact">
                                    <div className="js-counter"><span className="js-counter-num"><Counter end={4.95} decimals={2} /></span></div>
                                    <h5>Positive Review</h5>
                                </div>
                                <div className="fun-fact">
                                    <div className="js-counter"><span className="js-counter-num"><Counter end={218} /></span>M</div>
                                    <h5>Worldwide Users</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="about-six-features bg-dark text-light bg-cover"
                                style={{ backgroundImage: 'url(/assets/img/shape/banner-20.jpg)' }}>
                                <ul>
                                    {AboutV6Data.map(item =>
                                        <SingleAboutV6 item={item} key={item.id} />
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

export default AboutV6;