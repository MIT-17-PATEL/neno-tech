import ServiceV1Data from "@/assets/jsonData/services/ServiceV1Data.json"
import SingleServiceV1 from "./SingleServiceV1";
import Image from "next/image";
import SplitText from "../animation/SplitText";
import styles from "./community-card.module.css";

interface DataType {
    sectionClass?: string
    darkIcon?: boolean
}

const ServiceV1 = ({ sectionClass, darkIcon }: DataType) => {
    return (
        <>
            <div className={`services-style-one-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">What We Deliver</h4>
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        End-to-end technology services engineered for scale
                                    </SplitText>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="service-style-one-items fade-up-anim">
                        <div className="row equal-boxes" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>

                            {ServiceV1Data.map(service =>
                                <SingleServiceV1 service={service} key={service.id} darkIcon={darkIcon} />
                            )}

                            <div className={`${styles.cardWrapper} equal-box text-light`}
                                style={{ backgroundImage: 'url(/assets/img/shape/1.jpg)' }}>
                                <div className={styles.cardContent}>
                                    <h4 className={styles.title}>Ai Community</h4>
                                    <p className={styles.description}>
                                        Dive into the art scene and unleash your inner artist!
                                    </p>
                                    <div className={styles.info}>
                                        <div className={styles.multiUsers}>
                                            <Image src="/assets/img/team/11.jpg" alt="Team" width={64} height={64} />
                                            <Image src="/assets/img/team/12.jpg" alt="Team" width={64} height={64} />
                                            <Image src="/assets/img/team/13.jpg" alt="Team" width={64} height={64} />
                                            <Image src="/assets/img/team/3.jpg" alt="Team" width={64} height={64} />
                                            <span className={styles.plusBadge}>+</span>
                                        </div>
                                        <h5 className={styles.userCount}>Over 40M+ users</h5>
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

export default ServiceV1;
