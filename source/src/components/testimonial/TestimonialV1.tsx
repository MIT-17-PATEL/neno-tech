import TestimonialV1Data from "@/assets/jsonData/testimonial/TestimonialV1Data.json";
import SingleTestimonialV1 from "./SingleTestimonialV1";

interface DataType {
    sectionClass?: string;
}

const TestimonialV1 = ({ sectionClass }: DataType) => {
    // Duplicate items to ensure smooth seamless infinite scrolling
    const repeatedTestimonials = [
        ...TestimonialV1Data,
        ...TestimonialV1Data,
        ...TestimonialV1Data,
        ...TestimonialV1Data,
    ];

    return (
        <section className={`testimonial-modern-area default-padding position-relative text-light ${sectionClass ? sectionClass : ""}`}>
            {/* Subtle Radial Ambient Light Accents */}
            <div className="testimonial-ambient-glow testimonial-glow-indigo" aria-hidden="true" />
            <div className="testimonial-ambient-glow testimonial-glow-cyan" aria-hidden="true" />

            <div className="container position-relative mb-3" style={{ zIndex: 2 }}>
                {/* Horizontally Centered Section Header */}
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-9 text-center">
                        <div className="testimonial-header-content">
                            <span className="testimonial-pill-badge">
                                <span className="testimonial-badge-dot" />
                                ILLUSTRATIVE ENTERPRISE FEEDBACK
                            </span>
                            <h2 className="testimonial-header-title">
                                What People Say
                            </h2>
                            <p className="testimonial-header-desc">
                                Sample enterprise feedback representing verified production outcomes, agentic performance, and engineering velocity from partner teams.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Continuous Auto-Sliding Testimonials Carousel Track */}
            <div className="testimonial-marquee-wrapper" style={{ zIndex: 2 }}>
                <div className="testimonial-marquee-track">
                    {repeatedTestimonials.map((testimonial, index) => (
                        <div className="testimonial-marquee-item" key={`${testimonial.id}-${index}`}>
                            <SingleTestimonialV1 testimonial={testimonial} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialV1;
