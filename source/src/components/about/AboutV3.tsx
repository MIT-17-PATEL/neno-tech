import Image from "next/image";
import Link from "next/link";
import SplitText from "../animation/SplitText";

interface DataType {
    bgDark?: boolean
}

const AboutV3 = ({ bgDark }: DataType) => {
    return (
        <>
            <div className={`about-style-three-area default-padding bg-gray bg-cover `}
                style={bgDark ? {} : { background: "url(/assets/img/shape/banner-16.jpg)" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4 className="sub-title">AI writing assistant</h4>
                            <h2 className="title split-text-right split-text-in-right">
                                <SplitText
                                    delay={8}
                                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                    easing="easeOutCubic"
                                    threshold={0.2}
                                    rootMargin="-50px"
                                >
                                    Artificial intelligence designed for writing
                                </SplitText>
                            </h2>
                            <p>
                                Artificial Intelligence refers to the development of computer systems that can perform tasks that would typically require human intelligence. It involves the creation of algorithms and models that enable machines to learn, reason, perceive, and make decisions.  It involves the creation of algorithms.
                            </p>
                            <p>
                                There are generally two types of AI: Narrow or Weak AI, which is designed to perform specific tasks, and General or Strong AI, which possesses human-level intelligence and can handle a wide range of tasks.
                            </p>
                            <Link className="btn btn-style-one" href="/about-us">Know more <i className="fas fa-arrow-right" /></Link>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-style-three-thumb">
                                <Image className="fade-up-anim" src="/assets/img/illustration/dashboard-4.jpg" alt="Image Not Found" width={955} height={685} />
                                <Image className="fade-up-anim" src="/assets/img/illustration/1.gif" alt="Image Not Found" width={640} height={400} />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default AboutV3;
