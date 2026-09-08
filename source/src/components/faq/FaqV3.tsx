import Link from "next/link";
import FaqV1Data from "@/assets/jsonData/faq/FaqV1Data.json"
import SingleFaqV1 from "./SingleFaqV1";
import SplitText from "../animation/SplitText";

const FaqV3 = () => {
    return (
        <>
            <div className="faq-style-one-area default-padding" style={{ backgroundImage: 'url(/assets/img/shape/7.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="faq-style-one-info">
                                <h4 className="sub-title">Question & Answer</h4>
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        AI queries? expert responses await
                                    </SplitText>
                                </h2>
                                <Link href="/faq" className="btn btn-style-one btn-dark mt-10 wow fadeInUp" data-wow-delay="100ms">All Questions <i className="fas fa-arrow-right" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1 col-lg-6">
                            <div className="accordion-style-one-items fade-up-anim">
                                <div className="accordion" id="faqAccordion">
                                    {FaqV1Data.map(faq =>
                                        <SingleFaqV1 faq={faq} key={faq.id} />
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

export default FaqV3;
