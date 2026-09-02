import Image from "next/image";
import TestimonialV1Data from "@/assets/jsonData/testimonial/TestimonialV1Data.json"
import SingleTestimonialV1 from "./SingleTestimonialV1";
import SplitText from '../animation/SplitText';
import AppSwiper from '../slider/AppSwiper';
import AppMotion from "../animation/AppMotion";

const TestimonialV1 = () => {
    return (
        <>
            <div className="testimonial-style-one-area blurry-shape default-padding bg-dark text-light">
                <div className="container container-stage-lg">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <AppMotion
                                animation="scale"
                                className="testimonial-thumb image-scale-animation"
                            >
                                <Image className="image-scale-animation-item" src="/assets/img/illustration/7.png" alt="Image Not Found" width={520} height={560} />
                            </AppMotion>
                        </div>
                        <div className="col-lg-7">
                            <div className="site-heading">
                                <h4 className="sub-title">Testimonials</h4>
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={10}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        What People Say
                                    </SplitText>
                                </h2>
                            </div>

                            <AppSwiper
                                className="testimonial-style-one-carousel fade-up-anim"
                                loop={true}
                                slidesPerView={1}
                                spaceBetween={30}
                                autoplay={true}
                                pagination={{
                                    el: ".testimonial-swiper-pagination",
                                    clickable: true,
                                }}

                                // Navigation arrows
                                navigation={{
                                    nextEl: ".testimonial-swiper-button-next",
                                    prevEl: ".testimonial-swiper-button-prev"
                                }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 50,
                                    },
                                    992: {
                                        slidesPerView: 1,
                                        spaceBetween: 50,
                                    },
                                    1400: {
                                        slidesPerView: 2,
                                        spaceBetween: 50,
                                    }
                                }}
                                navigationModule
                                paginationModule
                                autoplayModule
                                keyboardModule

                                items={TestimonialV1Data.map((testimonial) => ({
                                    id: testimonial.id,
                                    content: (
                                        <SingleTestimonialV1 testimonial={testimonial} />
                                    ),
                                }))}
                            >
                                <div className="testimonial-one-control">
                                    <div className="testimonial-swiper-pagination" />
                                    <div className="testimonial-swiper-nav">
                                        <div className="testimonial-swiper-button-prev">
                                            <i className="fas fa-arrow-left" />
                                        </div>
                                        <div className="testimonial-swiper-button-next">
                                            <i className="fas fa-arrow-right" />
                                        </div>
                                    </div>
                                </div>
                            </AppSwiper>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default TestimonialV1;