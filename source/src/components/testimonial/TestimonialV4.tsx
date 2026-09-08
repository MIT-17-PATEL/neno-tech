import TestimonialV4Data from "@/assets/jsonData/testimonial/TestimonialV4Data.json"
import SingleTestimonialV4 from "./SingleTestimonialV4";
import SplitText from "../animation/SplitText";
import AppSwiper from "../slider/AppSwiper";

interface DataType {
    bgDark?: boolean
}

const TestimonialV4 = ({ bgDark }: DataType) => {
    return (
        <>
            <div className="testimonial-style-four-area default-padding bg-gray bg-cover overflow-hidden"
                style={bgDark ? {} : { background: 'url(/assets/img/shape/banner-16.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Testimonials</h4>
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Real success stories from our AI clients worldwide
                                    </SplitText>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <AppSwiper
                    className="testimonial-style-four-left-carousel"
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    centeredSlides={true}
                    speed={4000}
                    autoplay={{
                        delay: 0,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1400: {
                            slidesPerView: 4,
                        }
                    }}
                    autoplayModule
                    items={TestimonialV4Data.map((testimonial) => ({
                        id: testimonial.id,
                        content: (
                            <SingleTestimonialV4 testimonial={testimonial} key={testimonial.id} />
                        ),
                    }))}
                />

                <AppSwiper
                    className="testimonial-style-four-right-carousel swiper mt-30"
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    centeredSlides={true}
                    freeMode={true}
                    // freeModeMomentum={false}
                    // freeModeMomentumBounce={false}
                    speed={4000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: true,
                        reverseDirection: true,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1400: {
                            slidesPerView: 4,
                        }
                    }}
                    autoplayModule
                    freeModeModule
                    items={TestimonialV4Data.map((testimonial) => ({
                        id: testimonial.id,
                        content: (
                            <SingleTestimonialV4 testimonial={testimonial} key={testimonial.id} />
                        ),
                    }))}
                />
            </div >
        </>
    );
};

export default TestimonialV4;
