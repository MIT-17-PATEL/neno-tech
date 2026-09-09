import Link from "next/link";
import FaqV1Data from "@/assets/jsonData/faq/FaqV1Data.json";
import SingleFaqV1 from "./SingleFaqV1";

interface DataType {
    sectionClass?: string;
}

const FaqV1 = ({ sectionClass }: DataType) => {
    return (
        <section className={`faq-modern-area default-padding position-relative text-light ${sectionClass ? sectionClass : ""}`}>
            {/* Subtle Radial Ambient Glows */}
            <div className="faq-ambient-glow faq-glow-blue" aria-hidden="true" />
            <div className="faq-ambient-glow faq-glow-indigo" aria-hidden="true" />

            <div className="container position-relative" style={{ zIndex: 2 }}>
                <div className="row g-5 align-items-start">
                    {/* Left Column: Heading & Info */}
                    <div className="col-lg-5">
                        <div className="faq-info-box">
                            {/* Standard Light Blue Outlined Pill Badge */}
                            <span className="faq-pill-badge">
                                <span className="faq-badge-dot" />
                                QUESTION &amp; ANSWER
                            </span>

                            {/* Main Title */}
                            <h2 className="faq-main-title">
                                AI queries? Expert responses await
                            </h2>

                            <p className="faq-main-desc">
                                Everything you need to know about our production AI talent, deployment timelines, enterprise security guardrails, and flexible engagement models.
                            </p>

                            <div className="faq-cta-wrap">
                                <Link href="/contact" className="btn-faq-ask">
                                    <span>Ask a Question</span>
                                    <i className="fas fa-arrow-right ms-2" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Dark Glassmorphism Accordion Items */}
                    <div className="col-lg-7">
                        <div className="faq-accordion-wrap">
                            <div className="accordion" id="faqAccordion">
                                {FaqV1Data.map(faq => (
                                    <SingleFaqV1 faq={faq} key={faq.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqV1;
