import Link from "next/link";
import SplitText from "../animation/SplitText";

const CareersHero = () => {
    return (
        <>
            <div
                className="careers-hero-area default-padding-top bg-dark text-light bg-cover"
                style={{ backgroundImage: "url(/assets/img/shape/banner-6.jpg)" }}
            >
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-7">
                            <div className="careers-hero-info">
                                <h4 className="sub-title">Join the Team</h4>
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                                        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Build the future of AI with us.
                                    </SplitText>
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay="200ms">
                                    We are an engineer-led, product-driven team building Agentic AI systems,
                                    proprietary products, and the people who deliver them. If you want your work
                                    to ship to production — and your craft to keep sharpening — you&apos;ll fit in here.
                                </p>
                                <div className="btn-group mt-20 wow fadeInUp" data-wow-delay="400ms">
                                    <Link href="/contact-us" className="btn btn-style-one btn-dark">
                                        Book a Discovery Call <i className="fas fa-arrow-right" />
                                    </Link>
                                    <Link href="#open-positions" className="btn btn-style-one border-light ms-3" style={{ marginLeft: "12px" }}>
                                        See Open Roles <i className="fas fa-arrow-down" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="careers-hero-stats">
                                <div className="row">
                                    <div className="col-6 mb-30">
                                        <div className="card-style-one-item bg-gradient text-light wow fadeInUp" data-wow-delay="100ms">
                                            <i className="fas fa-microchip fa-3x mb-20" />
                                            <h3 className="counter-number">
                                                <span className="js-counter">50</span>+
                                            </h3>
                                            <p>Engineers on the bench</p>
                                        </div>
                                    </div>
                                    <div className="col-6 mb-30">
                                        <div className="card-style-one-item bg-gray text-dark wow fadeInUp" data-wow-delay="200ms">
                                            <i className="fas fa-globe fa-3x mb-20" />
                                            <h3 className="counter-number">
                                                <span className="js-counter">5</span>
                                            </h3>
                                            <p>Countries served</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="card-style-one-item bg-gray text-dark wow fadeInUp" data-wow-delay="300ms">
                                            <i className="fas fa-rocket fa-3x mb-20" />
                                            <h3 className="counter-number">
                                                <span className="js-counter">120</span>+
                                            </h3>
                                            <p>Projects shipped</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="card-style-one-item bg-gradient text-light wow fadeInUp" data-wow-delay="400ms">
                                            <i className="fas fa-heart fa-3x mb-20" />
                                            <h3 className="counter-number">
                                                <span className="js-counter">4.8</span>/5
                                            </h3>
                                            <p>Team happiness score</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CareersHero;
