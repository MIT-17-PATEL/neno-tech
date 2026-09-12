"use client";

import Image from 'next/image';
import SplitTextV3 from '../animation/SplitTextV3';

interface DataType {
    sectionClass?: string;
    hasTitle?: boolean;
    teamFull?: boolean;
}

const TeamV1 = ({ sectionClass, hasTitle = true }: DataType) => {
    return (
        <section className={`team-style-one-area default-padding ${sectionClass ? sectionClass : ""}`}>
            {/* Section Heading */}
            {hasTitle && (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center mb-5">
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitTextV3
                                        delay={10}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Meet our founder
                                    </SplitTextV3>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Single Prominent Founder Card */}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-9">
                        <div 
                            className="p-4 p-md-5 rounded-4 position-relative overflow-hidden"
                            style={{
                                background: "rgba(255, 255, 255, 0.035)",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                backdropFilter: "blur(16px)",
                                WebkitBackdropFilter: "blur(16px)",
                                borderRadius: "24px",
                                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35)",
                            }}
                        >
                            <div className="row align-items-center g-4 g-lg-5">
                                {/* Left Half: Founder Photo */}
                                <div className="col-md-5">
                                    <div 
                                        className="position-relative overflow-hidden rounded-4"
                                        style={{
                                            borderRadius: "18px",
                                            border: "1px solid rgba(255, 255, 255, 0.1)",
                                            boxShadow: "0 12px 30px rgba(0, 0, 0, 0.35)",
                                            aspectRatio: "4/5",
                                            maxHeight: "420px",
                                        }}
                                    >
                                        <Image
                                            src="/assets/img/team/tirth-patel.jpg"
                                            alt="Tirth Patel - Founder & CEO"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 400px"
                                            style={{ objectFit: "cover", objectPosition: "center top" }}
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Right Half: Info & Bio */}
                                <div className="col-md-7 text-start">
                                    <div className="d-flex flex-column justify-content-center h-100">
                                        <span 
                                            className="badge d-inline-block align-self-start mb-2 px-3 py-2"
                                            style={{
                                                background: "rgba(56, 189, 248, 0.12)",
                                                border: "1px solid rgba(56, 189, 248, 0.3)",
                                                color: "#38bdf8",
                                                borderRadius: "9999px",
                                                fontSize: "12px",
                                                fontWeight: "700",
                                                letterSpacing: "0.5px",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            Leadership
                                        </span>

                                        <h3 className="fw-bold mb-1" style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 3vw, 2.3rem)", letterSpacing: "-0.5px" }}>
                                            Tirth Patel
                                        </h3>
                                        <div className="fw-semibold mb-3" style={{ color: "#818cf8", fontSize: "1.05rem" }}>
                                            Founder & CEO
                                        </div>

                                        <p className="mb-4" style={{ color: "#94a3b8", fontSize: "1.02rem", lineHeight: "1.75" }}>
                                            Leading the vision and engineering execution at Neno Technology. Specialized in architecting enterprise agentic AI systems, voice platforms, and deploying forward-deployed engineering squads for high-growth enterprises.
                                        </p>

                                        {/* Social Links */}
                                        <div className="d-flex align-items-center gap-3 pt-2">
                                            <a
                                                href="https://www.linkedin.com/in/tirth-patel-nenotechnology/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="LinkedIn"
                                                className="d-inline-flex align-items-center justify-content-center rounded-3 text-decoration-none neno-social-btn"
                                                style={{
                                                    width: "44px",
                                                    height: "44px",
                                                    background: "rgba(255, 255, 255, 0.05)",
                                                    border: "1px solid rgba(255, 255, 255, 0.12)",
                                                    color: "#38bdf8",
                                                    fontSize: "16px",
                                                    transition: "all 0.25s ease",
                                                }}
                                            >
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                            <a
                                                href="https://www.instagram.com/tirthpatel00/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Instagram"
                                                className="d-inline-flex align-items-center justify-content-center rounded-3 text-decoration-none neno-social-btn"
                                                style={{
                                                    width: "44px",
                                                    height: "44px",
                                                    background: "rgba(255, 255, 255, 0.05)",
                                                    border: "1px solid rgba(255, 255, 255, 0.12)",
                                                    color: "#f472b6",
                                                    fontSize: "16px",
                                                    transition: "all 0.25s ease",
                                                }}
                                            >
                                                <i className="fab fa-instagram" />
                                            </a>
                                            <a
                                                href="https://www.facebook.com/tirth.patel.152216/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Facebook"
                                                className="d-inline-flex align-items-center justify-content-center rounded-3 text-decoration-none neno-social-btn"
                                                style={{
                                                    width: "44px",
                                                    height: "44px",
                                                    background: "rgba(255, 255, 255, 0.05)",
                                                    border: "1px solid rgba(255, 255, 255, 0.12)",
                                                    color: "#818cf8",
                                                    fontSize: "16px",
                                                    transition: "all 0.25s ease",
                                                }}
                                            >
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamV1;
