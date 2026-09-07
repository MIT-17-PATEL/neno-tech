import Link from "next/link";
import SplitText from "../animation/SplitText";

const CareersWhy = () => {
    const values = [
        {
            icon: "fas fa-laptop-code",
            title: "Real Engineering, Not Demos",
            desc: "We ship to production on day one. Every engineer at Neno writes code that runs in production — not a staging sandbox.",
        },
        {
            icon: "fas fa-paper-plane",
            title: "Ship to Production",
            desc: "Our default rhythm is small, frequent releases. If it cannot ship, it does not count.",
        },
        {
            icon: "fas fa-brain",
            title: "Learn Constantly",
            desc: "We invest in conferences, courses, and hands-on AI research. Continuous learning is part of the job description.",
        },
        {
            icon: "fas fa-bullseye",
            title: "Own Your Outcomes",
            desc: "We give you clear goals and the autonomy to deliver them. Micromanagement has no place here.",
        },
    ];

    return (
        <>
            <div className="careers-why-area default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="careers-why-info">
                                <h4 className="sub-title">Why Work With Us</h4>
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                                        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Because great engineering deserves a great environment.
                                    </SplitText>
                                </h2>
                                <p>
                                    Neno Technology is not a body shop. We are a small, senior team building
                                    AI-native products and delivery capabilities for enterprises worldwide.
                                    When you join, you join a culture that values craftsmanship, transparency,
                                    and measurable impact.
                                </p>
                                <Link href="#open-positions" className="btn btn-style-one mt-20 wow fadeInUp" data-wow-delay="100ms">
                                    View Open Roles <i className="fas fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="careers-why-tiles">
                                <div className="row">
                                    {values.map((item, i) => (
                                        <div className="col-lg-6 col-md-6 mb-30" key={i}>
                                            <div className="careers-why-tile bg-gray wow fadeInUp" data-wow-delay={`${100 + i * 100}ms`}>
                                                <div className="icon">
                                                    <i className={item.icon} />
                                                </div>
                                                <h4>{item.title}</h4>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CareersWhy;
