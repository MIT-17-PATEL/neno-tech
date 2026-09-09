import Link from "next/link";
import BrandV1Data from "@/assets/jsonData/brand/BrandV1Data.json";
import AgenticWorkflowVisual from "./AgenticWorkflowVisual";

const BannerV1 = () => {
    return (
        <section className="banner-style-one-area hero-split-area bg-theme text-light bg-cover position-relative"
            style={{ background: 'url(/assets/img/shape/banner-1.jpg)' }}>
            
            {/* Ambient Background Glows */}
            <div className="hero-ambient-glow hero-glow-top-left" aria-hidden="true" />
            <div className="hero-ambient-glow hero-glow-center-right" aria-hidden="true" />
            <div className="hero-ambient-glow hero-glow-bottom-center" aria-hidden="true" />

            <div className="container hero-split-container position-relative">
                <div className="row align-items-center gy-5">
                    {/* Left Column: Text & Actions */}
                    <div className="col-lg-6 text-start">
                        <div className="hero-split-content">
                            {/* Headline */}
                            <h1 className="hero-split-title">
                                AI engineers and AI systems,{" "}
                                <span className="hero-gradient-text">ready when you are.</span>
                            </h1>

                            {/* Subheadline / Body */}
                            <p className="hero-split-desc">
                                Neno Technology gives you production-grade AI talent and end-to-end AI builds — from agentic systems to full product delivery.
                            </p>

                            {/* CTAs */}
                            <div className="hero-split-actions">
                                <Link href="/hire-engineers" className="btn-hero-primary">
                                    <span>Hire an Engineer</span>
                                    <i className="fas fa-arrow-right ms-2" />
                                </Link>
                                <Link href="/contact" className="btn-hero-secondary">
                                    <span>Book a 30-min Call</span>
                                    <i className="far fa-calendar-alt ms-2" />
                                </Link>
                            </div>

                            {/* Trust Badges (Footer Bar) */}
                            <div className="hero-trust-bar">
                                <div className="hero-trust-item">
                                    <span className="trust-check-icon">✓</span>
                                    <span className="trust-label">GIFT City, Gujarat</span>
                                </div>
                                <div className="hero-trust-item">
                                    <span className="trust-check-icon">✓</span>
                                    <span className="trust-label">DPIIT Recognized</span>
                                </div>
                                <div className="hero-trust-item">
                                    <span className="trust-check-icon">✓</span>
                                    <span className="trust-label">Serving IN/US/UK/UAE/AU</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visual Graphic (Agentic Workflow Animation / Abstract Graph) */}
                    <div className="col-lg-6">
                        <AgenticWorkflowVisual />
                    </div>
                </div>
            </div>

            {/* Brand Partners Marquee */}
            <div className="brand-items">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="brand-marquee-wrapper">
                                <div className="brand-marquee-track">
                                    {[...BrandV1Data, ...BrandV1Data].map((brand: any, index) => (
                                        <div 
                                            key={`${brand.id}-${index}`}
                                            className={`brand-marquee-item ${brand.customClass ? `${brand.customClass}-wrapper` : ''}`}
                                        >
                                            <img
                                                src={`/assets/logo/${brand.thumb}`}
                                                alt={brand.alt}
                                                className={brand.customClass || ''}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerV1;
