import Image from "next/image";
import Link from "next/link";
import Counter from "../counter/Counter";

interface DataType {
    sectionClass?: string
}

const AboutV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`about-style-one-area default-padding-top ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="about-style-one-info bg-gray fade-up-anim" style={{ backgroundImage: 'url(/assets/img/shape/3.png)' }}>
                                <h2 className="fixed-text">Neno-Tec</h2>
                                <h4 className="sub-title">About Neno-Tec</h4>
                                <h2 className="title">Precision Engineering Talent & End-to-End Technology Delivery</h2>
                                <p>
                                    Neno-Tec delivers specialized technology services engineered for scale. From providing pre-vetted senior AI, Full-Stack, and Cloud engineers on demand to building custom CRM, ERP, and AI products, we empower organizations to build fast and scale with confidence.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="card-style-one-item fade-up-anim bg-gradient text-light">
                                <Image src="/assets/img/illustration/4.png" alt="Image Not Found" width={410} height={445} />
                                <div className="info">
                                    <h3>API integration to your business</h3>
                                    <p>
                                        Application programming interface integration has become essential for modern machines businesses.
                                    </p>
                                    <div className="text-end mt-80">
                                        <Link href="/about-us" className="btn btn-style-one border-light">Explore More <i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card-style-one-two fade-up-anim mt-30">
                                <h4>Seamless Integration</h4>
                                <div className="bottom">
                                    <Image src="/assets/img/illustration/5.png" alt="Image Not Found" width={440} height={400} />
                                    <div className="fun-fact">
                                        <div className="js-counter"><Counter end={28} />K</div>
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

export default AboutV1;