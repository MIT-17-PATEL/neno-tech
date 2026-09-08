import TestimonialV2Data from "@/assets/jsonData/testimonial/TestimonialV2Data.json"
import SingleTestimonialV2 from "./SingleTestimonialV2";
import Image from 'next/image';
import SplitText from '../animation/SplitText';
import AppSwiper from '../slider/AppSwiper';

interface DataType {
    sectionClass?: string;
    bgImage?: boolean;
}

const TestimonialV2 = ({ sectionClass, bgImage }: DataType) => {
    return (
        <>
            <div className={`testimonial-style-two-area bg-gray bg-cover ${sectionClass ? sectionClass : ""}`}
                style={bgImage ? { background: "url(/assets/img/shape/banner-16.jpg)" } : {}}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
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
                                        Real success stories from our AI clients worldwide
                                    </SplitText>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="testimonial-style-two-items text-center fade-up-anim">
                                <AppSwiper
                                    className="testimonial-style-two-carousel"
                                    direction="horizontal"
                                    loop={true}
                                    autoplay={true}
                                    autoplayModule

                                    items={TestimonialV2Data.testimonialData.map((testimonial) => ({
                                        id: testimonial.id,
                                        content: (
                                            <SingleTestimonialV2 testimonial={testimonial} />
                                        ),
                                    }))}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="testimonial-provider-thumbs transform-up-animation">
                                {TestimonialV2Data.testimonialThumb.map(data =>
                                    <div className="testimonial-provider-item transform-animation-item" key={data.id}>
                                        {data.thumb.map((img, index) => (
                                            <Image key={index} src={`/assets/img/team/${img}`} alt="Image Not Found" width={800} height={900} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default TestimonialV2;
