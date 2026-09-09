import TestimonialV1Data from "@/assets/jsonData/testimonial/TestimonialV1Data.json";
import SingleTestimonialV1 from "./SingleTestimonialV1";

interface DataType {
    sectionClass?: string;
}

const TestimonialV1 = ({ sectionClass }: DataType) => {
    return (
        <section className={`testimonial-modern-area default-padding position-relative text-light ${sectionClass ? sectionClass : ""}`}>
            {/* Subtle Radial Ambient Light Accents */}
            <div className="testimonial-ambient-glow testimonial-glow-indigo" aria-hidden="true" />
            <div className="testimonial-ambient-glow testimonial-glow-cyan" aria-hidden="true" />

            <div className="container position-relative" style={{ zIndex: 2 }}>
                {/* Horizontally Centered Section Header */}
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-9 text-center">
                        <div className="testimonial-header-content">
                            <span className="testimonial-pill-badge">
                                <span className="testimonial-badge-dot" />
                                TESTIMONIALS
                            </span>
                            <h2 className="testimonial-header-title">
                                What People Say
                            </h2>
                            <p className="testimonial-header-desc">
                                Trusted by engineering leaders, CTOs, and founders scaling production AI systems worldwide.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Balanced 3-Column Glassmorphism Cards Grid */}
                <div className="row g-4 justify-content-center testimonial-grid-row">
                    {TestimonialV1Data.map(testimonial => (
                        <div className="col-lg-4 col-md-6 d-flex" key={testimonial.id}>
                            <SingleTestimonialV1 testimonial={testimonial} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialV1;
