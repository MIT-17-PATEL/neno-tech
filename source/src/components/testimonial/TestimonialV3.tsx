import TestimonialV3Data from "@/assets/jsonData/testimonial/TestimonialV3Data.json";
import SingleTestimonialV3 from "./SingleTestimonialV3";
import AppSwiper from "../slider/AppSwiper";

const TestimonialV3 = () => {
    return (
        <>
            <div className="testimonial-style-three-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testimonial-style-three-items bg-gray blurry-shape-right-bottom"
                                style={{ backgroundImage: 'url(/assets/img/shape/3.png)' }}>
                                <AppSwiper
                                    className="testimonial-style-three-carousel"
                                    direction="horizontal"
                                    loop={true}
                                    autoplay={true}
                                    navigation={{
                                        nextEl: ".testimonial-three-next",
                                        prevEl: ".testimonial-three-prev"
                                    }}
                                    navigationModule
                                    autoplayModule
                                    items={TestimonialV3Data.map((testimonial) => ({
                                        id: testimonial.id,
                                        content: (
                                            <SingleTestimonialV3 testimonial={testimonial} />
                                        ),
                                    }))}
                                >
                                    <div className="project-swiper-nav">
                                        <div className="testimonial-three-prev"><i className="fas fa-angle-left" /></div>
                                        <div className="testimonial-three-next"><i className="fas fa-angle-right" /></div>
                                    </div>
                                </AppSwiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default TestimonialV3;