"use client"
import Image from "next/image";
import Link from "next/link";
import ServiceV6Data from "@/assets/jsonData/services/ServiceV6Data.json"
import { useState } from "react";
import SplitText from "../animation/SplitText";

interface DataType {
    sectionClass?: string
}

const ServiceV6 = ({ sectionClass }: DataType) => {
    const [activeServiceId, setActiveServiceId] = useState(ServiceV6Data.thumbData[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    return (
        <>
            <div className={`services-style-six-area bg-cover default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="service-tab-content-box">
                                {ServiceV6Data.thumbData.map(service =>
                                    <div
                                        className={`service-tab-contents ${activeServiceId === service.id ? 'active' : ''}`}
                                        key={service.id}
                                    >
                                        <Image src={`/assets/img/services/${service.thumb}`} alt="Image Not Found" width={700} height={760} />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="col-lg-7 pl-70 pl-md-15 pl-xs-15">
                            <h4 className="sub-title">Services</h4>
                            <h2 className="title split-text-right split-text-in-right">
                                <SplitText
                                    delay={8}
                                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                    easing="easeOutCubic"
                                    threshold={0.2}
                                    rootMargin="-50px"
                                >
                                    AI-optimized design for innovative futures
                                </SplitText>
                            </h2>
                            <ul className="service-tab-content-list text-scroll-animation">
                                {ServiceV6Data.serviceData.map(list =>
                                    <li
                                        className={`${activeServiceId === list.id ? 'active' : ''}`}
                                        key={list.id}
                                        onMouseEnter={() => handleMouseEnter(list.id)}
                                    >
                                        <div className="service-tab-item">
                                            <h4>
                                                <Link className="text" href={`/services-details/${list.id}`}>
                                                    <strong>{list.number}</strong>{list.title}
                                                </Link>
                                            </h4>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceV6;