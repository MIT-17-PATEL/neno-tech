import ServiceV2Data from "@/assets/jsonData/services/ServiceV2Data.json"
import ServiceV2List from "./ServiceV2List";
import Image from "next/image";
import Link from "next/link";
import Counter from "../counter/Counter";
import SplitText from "../animation/SplitText";

interface DataType {
    sectionClass?: string
}

const ServiceV2 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`services-style-two-area bg-gray blurry-shape-right-bottom ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">What we do</h4>
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        AI-optimized design for innovative solutions
                                    </SplitText>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="services-style-two-colum-large text-light fade-up-anim"
                                style={{ backgroundImage: 'url(/assets/img/shape/banner-8.jpg)' }}>
                                <h3 className="text-end">
                                    <Link href="/services-details">Developing machine <br /> learning models</Link></h3>

                                <ul className="service-list mt-70 mt-xs-30">
                                    {ServiceV2Data.serviceV2List.map(service =>
                                        <ServiceV2List service={service} key={service.id} />
                                    )}
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-7">
                            <div className="services-style-two-items fade-up-anim">

                                <div className="services-style-two-item">
                                    <div className="top-info">
                                        <Image src="/assets/img/icon/7.png" alt="Image Not Found" width={185} height={165} />
                                        <h4><Link href="/services-details/1">Next-gen computer <br /> vision solutions</Link></h4>
                                        <ul className="list-style-one">
                                            <li>Real-time object detection </li>
                                            <li>AR-powered assistance</li>
                                            <li>Markerless AR tracking</li>
                                        </ul>
                                    </div>
                                    <Link href="/services-details/1" className="btn-simple">Explore More <i className="fas fa-long-arrow-right" /></Link>
                                </div>

                                <div className="services-style-two-item fade-up-anim">
                                    <div className="top-info">
                                        <Image src="/assets/img/icon/6.png" alt="Image Not Found" width={260} height={265} />
                                        <h4><Link href="/services-details/2">Data-driven and <br /> predictions solution</Link></h4>
                                        <ul className="list-style-one">
                                            <li>Business Intelligence</li>
                                            <li>Real-time Data Monitoring</li>
                                            <li>Demand Forecasting</li>
                                        </ul>
                                    </div>
                                    <div className="bottom">
                                        <div className="fun-fact">
                                            <div className="js-counter"><Counter end={218} />K</div>
                                            <h5>Worldwide Users</h5>
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

export default ServiceV2;
