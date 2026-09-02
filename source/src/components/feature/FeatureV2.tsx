import FeatureV2Data from "@/assets/jsonData/feature/FeatureV2Data.json"
import Image from "next/image";
import Link from "next/link";
import AppSwiper from "../slider/AppSwiper";

const FeatureV2 = () => {
    return (
        <>
            <div className="feature-style-two-area default-padding-top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="feature-style-two-items">
                                <div className="api-intigration-items fade-up-anim bg-dark-secondary text-light">
                                    <h4>AI Integration and Deployment</h4>
                                    <p>
                                        AI integration and deployment refers to the process of incorporating artificial chanel intelligence for any application.
                                    </p>
                                    <div className="api-list-items">
                                        <AppSwiper
                                            className="infinit-carousel"
                                            loop={true}
                                            slidesPerView={3}
                                            spaceBetween={30}
                                            centeredSlides={true}
                                            speed={2000}
                                            autoplay={{
                                                delay: 0
                                            }}
                                            autoplayModule
                                            keyboardModule
                                            breakpoints={{
                                                768: {
                                                    slidesPerView: 5,
                                                },
                                                1024: {
                                                    slidesPerView: 3,
                                                },
                                                1400: {
                                                    slidesPerView: 4,
                                                }
                                            }}

                                            items={FeatureV2Data.map((feature) => ({
                                                id: feature.id,
                                                content: (
                                                    <Image src={`/assets/img/icon/${feature.icon}`} alt={feature.alt} width={128} height={128} />
                                                ),
                                            }))}
                                        />
                                    </div>
                                </div>

                                <div className="feature-style-two-item bg-gradient text-light fade-up-anim">
                                    <h4>Custom AI Model Development</h4>
                                    <ul className="list-style-two">
                                        <li>Robotic Process Automation</li>
                                        <li>Natural Language Processing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="dashboard-info bg-cover fade-up-anim align-center"
                                style={{ backgroundImage: 'url(/assets/img/shape/banner-11.jpg)' }}>
                                <div className="info">
                                    <h2>Versatile ways to create your unified chatbot</h2>
                                    <Link className="btn btn-style-one mt-10" href="/about-us">Explore More <i className="fas fa-arrow-right" /></Link>
                                    <div className="user-card-style-two">
                                        <div className="multi-users">
                                            <Image src="/assets/img/team/11.jpg" alt="Image Not Found" width={800} height={800} />
                                            <Image src="/assets/img/team/12.jpg" alt="Image Not Found" width={800} height={800} />
                                            <Image src="/assets/img/team/13.jpg" alt="Image Not Found" width={800} height={800} />
                                            <Image src="/assets/img/team/3.jpg" alt="Image Not Found" width={800} height={800} />
                                            <i className="fas fa-plus" />
                                        </div>
                                        <div className="contents">
                                            <div className="ratings">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <span>(4.9/5.0)</span>
                                            </div>
                                            <h4>Highly rated by millions of thrusted users!</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumb">
                                    <Image className="fade-up-anim" src="/assets/img/illustration/10.png" alt="Image Not Found" width={750} height={680} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV2;