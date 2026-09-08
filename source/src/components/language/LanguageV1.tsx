import Image from "next/image";
import Link from "next/link";
import Counter from "../counter/Counter";
import SplitText from "../animation/SplitText";

const LanguageV1 = () => {
    return (
        <>
            <div className="language-support-area blurry-shape default-padding bg-dark text-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="language-support-country-flag text-center">
                                <Image src="/assets/img/shape/14.png" alt="Image Not Found" width={975} height={975} />
                                <Image src="/assets/img/icon/flag-can.png" alt="Image Not Found" width={150} height={150} />
                                <Image src="/assets/img/icon/flag-china.png" alt="Image Not Found" width={150} height={150} />
                                <Image src="/assets/img/icon/flag-dub.png" alt="Image Not Found" width={150} height={150} />
                                <Image src="/assets/img/icon/flat-am.png" alt="Image Not Found" width={150} height={150} />
                                <Image src="/assets/img/icon/flag-uks.png" alt="Image Not Found" width={150} height={150} />
                                <div className="round-move" />
                                <div className="round-move-two" />
                                <div className="fun-fact">
                                    <div className="js-counter"><Counter end={165} />+</div>
                                    <h4>Languages</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="language-support-info">
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Support all languages in the whole world
                                    </SplitText>
                                </h2>
                                <p>
                                    Expand your global footprint effortlessly. Our advanced AI content writing service generates professional, culturally-aware text for any need—from SEO blog articles to compelling social media ads. With support for 165+ languages, you can now communicate with your entire audience in their native tongue, building trust and driving engagement like never before. Go global, right from your dashboard.
                                </p>
                                <ul className="list-style-two">
                                    <li>High-Quality & Flawless</li>
                                    <li>All Content Types:</li>
                                    <li>Culturally-Relevant</li>
                                </ul>
                                <Link className="btn btn-style-one btn-border mt-35" href="/about-us">Know more <i className="fas fa-arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default LanguageV1;
