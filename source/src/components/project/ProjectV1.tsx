"use client";

/**
 * HONESTY GUARDRAIL:
 * Replace target KPIs with real measured numbers and relabel as Case Study
 * only once we have a live client with written permission to use their name/results.
 */

import SingleProjectV1 from './SingleProjectV1';
import SplitText from '../animation/SplitText';
import { CAPABILITY_BLUEPRINTS, BLUEPRINT_INDUSTRIES } from '@/data/blueprintsData';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

interface DataType {
    sectionClass?: string;
}

const ProjectV1 = ({ sectionClass }: DataType) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndustry, setActiveIndustry] = useState<string>("All");
    const [isMobile, setIsMobile] = useState(false);
    const activeIndexRef = useRef(0);
    const isMountedRef = useRef(true);
    const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
    const isDraggingRef = useRef(false);
    const dragStartXRef = useRef(0);
    const dragOffsetRef = useRef(0);

    const filteredBlueprints = useMemo(() => {
        if (activeIndustry === "All") return CAPABILITY_BLUEPRINTS;
        return CAPABILITY_BLUEPRINTS.filter(b => b.industries.includes(activeIndustry));
    }, [activeIndustry]);

    const totalProjects = filteredBlueprints.length;

    // Handle industry change
    const handleIndustryChange = (ind: string) => {
        setActiveIndustry(ind);
        setActiveIndex(0);
        if (trackRef.current) {
            trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    };

    // Sync activeIndex to ref
    useEffect(() => {
        activeIndexRef.current = activeIndex;
    }, [activeIndex]);

    // Track mounted state & cleanup on unmount
    useEffect(() => {
        isMountedRef.current = true;
        return () => {
            isMountedRef.current = false;
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
            if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        };
    }, []);

    // Check viewport size
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const checkSize = () => {
            if (isMountedRef.current) {
                setIsMobile(window.innerWidth < 1024);
            }
        };
        checkSize();
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, []);

    // Scroll to active slide
    const scrollToSlide = useCallback((index: number, smooth = true) => {
        const track = trackRef.current;
        if (!track) return;
        const slide = track.children[index] as HTMLElement;
        if (!slide) return;

        const trackRect = track.getBoundingClientRect();
        const slideRect = slide.getBoundingClientRect();
        const offset = slideRect.left - trackRect.left + track.scrollLeft - (trackRect.width - slideRect.width) / 2;

        track.scrollTo({
            left: Math.max(0, offset),
            behavior: smooth ? 'smooth' : 'auto',
        });
    }, []);

    // Go to specific slide
    const goToSlide = useCallback((index: number) => {
        if (!isMountedRef.current) return;
        const clamped = Math.max(0, Math.min(index, totalProjects - 1));
        setActiveIndex(clamped);
        scrollToSlide(clamped);
    }, [scrollToSlide, totalProjects]);

    // Pause auto-play on interaction
    const pauseAutoPlay = useCallback(() => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
            autoPlayRef.current = null;
        }
        if (resumeTimeoutRef.current) {
            clearTimeout(resumeTimeoutRef.current);
            resumeTimeoutRef.current = null;
        }
    }, []);

    // Resume auto-play safely
    const resumeAutoPlay = useCallback(() => {
        if (!isMobile || !isMountedRef.current || totalProjects <= 1) return;
        pauseAutoPlay();
        autoPlayRef.current = setInterval(() => {
            if (!isMountedRef.current) return;
            const next = (activeIndexRef.current + 1) % totalProjects;
            setActiveIndex(next);
            scrollToSlide(next);
        }, 5000);
    }, [isMobile, pauseAutoPlay, scrollToSlide, totalProjects]);

    const scheduleResumeAutoPlay = useCallback(() => {
        if (!isMobile || !isMountedRef.current) return;
        if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = setTimeout(() => {
            resumeAutoPlay();
        }, 3000);
    }, [isMobile, resumeAutoPlay]);

    // Touch handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        pauseAutoPlay();
        touchStartRef.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
            time: Date.now(),
        };
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!touchStartRef.current) return;
        const diffX = touchStartRef.current.x - e.changedTouches[0].clientX;
        const diffY = touchStartRef.current.y - e.changedTouches[0].clientY;
        const diffTime = Date.now() - touchStartRef.current.time;

        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40 && diffTime < 400) {
            if (diffX > 0 && activeIndex < totalProjects - 1) {
                goToSlide(activeIndex + 1);
            } else if (diffX < 0 && activeIndex > 0) {
                goToSlide(activeIndex - 1);
            } else {
                scrollToSlide(activeIndex);
            }
        } else {
            scrollToSlide(activeIndex);
        }
        touchStartRef.current = null;
        scheduleResumeAutoPlay();
    };

    // Mouse drag handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!isMobile) return;
        pauseAutoPlay();
        isDraggingRef.current = true;
        dragStartXRef.current = e.clientX;
        dragOffsetRef.current = 0;
        if (trackRef.current) {
            trackRef.current.style.cursor = 'grabbing';
            trackRef.current.style.userSelect = 'none';
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDraggingRef.current || !trackRef.current) return;
        dragOffsetRef.current = dragStartXRef.current - e.clientX;
    };

    const handleMouseUp = () => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;
        if (trackRef.current) {
            trackRef.current.style.cursor = '';
            trackRef.current.style.userSelect = '';
        }

        const offset = dragOffsetRef.current;
        if (Math.abs(offset) > 50) {
            if (offset > 0 && activeIndex < totalProjects - 1) {
                goToSlide(activeIndex + 1);
            } else if (offset < 0 && activeIndex > 0) {
                goToSlide(activeIndex - 1);
            } else {
                scrollToSlide(activeIndex);
            }
        } else {
            scrollToSlide(activeIndex);
        }
        dragOffsetRef.current = 0;
        scheduleResumeAutoPlay();
    };

    // IntersectionObserver for mobile slide detection on scroll
    useEffect(() => {
        if (!isMobile) return;
        const track = trackRef.current;
        if (!track) return;

        let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
        const handleScroll = () => {
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (!isMountedRef.current || !track) return;
                const trackRect = track.getBoundingClientRect();
                const center = trackRect.left + trackRect.width / 2;

                let closestIndex = 0;
                let closestDist = Infinity;

                Array.from(track.children).forEach((child, i) => {
                    const rect = child.getBoundingClientRect();
                    const childCenter = rect.left + rect.width / 2;
                    const dist = Math.abs(center - childCenter);
                    if (dist < closestDist) {
                        closestDist = dist;
                        closestIndex = i;
                    }
                });

                if (closestIndex !== activeIndexRef.current) {
                    setActiveIndex(closestIndex);
                }
            }, 100);
        };

        track.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            track.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) clearTimeout(scrollTimeout);
        };
    }, [isMobile]);

    return (
        <div className={`project-style-one-area ${sectionClass ? sectionClass : "default-padding"} position-relative text-light`}>
            {/* Ambient Radial Glows */}
            <div className="project-ambient-glow project-glow-blue" aria-hidden="true" />
            <div className="project-ambient-glow project-glow-purple" aria-hidden="true" />

            <div className="container position-relative" style={{ zIndex: 2 }}>
                <div className="row">
                    <div className="col-xl-4">
                        <div className="fixed-content">
                            <div className="site-heading">
                                <h4 className="sub-title">WHAT WE BUILD</h4>
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Autonomous Systems & Blueprints
                                    </SplitText>
                                </h2>
                            </div>

                            {/* Honest credential strip replaces fake stat counter */}
                            <div className="blueprint-credential-strip">
                                <div className="blueprint-cred-badge-row">
                                    <span className="blueprint-cred-tag">
                                        <i className="fas fa-check-circle" /> DPIIT Recognized
                                    </span>
                                    <span className="blueprint-cred-tag">
                                        <i className="fas fa-building" /> GIFT City HQ
                                    </span>
                                    <span className="blueprint-cred-tag">
                                        <i className="fas fa-shield-alt" /> Enterprise SLA
                                    </span>
                                </div>
                                <p className="blueprint-cred-lead">
                                    Production-grade multi-agent architectures engineered for enterprise scale.
                                </p>
                                <p className="blueprint-cred-note">
                                    <strong>Engagement Blueprints:</strong> Architectural topologies and target engineering SLA thresholds. Client deployments with measured production telemetry are published under written mutual NDA.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-8 pl-50 pl-md-15 pl-xs-15">
                        {/* Industries Filter Chips */}
                        <div className="blueprint-filters" role="tablist" aria-label="Filter capability blueprints by industry">
                            {BLUEPRINT_INDUSTRIES.map(ind => (
                                <button
                                    key={ind}
                                    type="button"
                                    className={`blueprint-filter-chip ${activeIndustry === ind ? 'active' : ''}`}
                                    onClick={() => handleIndustryChange(ind)}
                                >
                                    {ind}
                                </button>
                            ))}
                        </div>

                        {/* Desktop: stacked sticky cards */}
                        {!isMobile && (
                            <div className="project-style-one-items">
                                {filteredBlueprints.map(blueprint => (
                                    <SingleProjectV1
                                        key={blueprint.id}
                                        project={{
                                            id: blueprint.id,
                                            slug: blueprint.slug,
                                            client: blueprint.categoryTag,
                                            title: blueprint.positioningLine,
                                            description: blueprint.cardDescription,
                                            metrics: blueprint.targetMetrics.map(m => ({ label: m.label, val: m.val })),
                                            thumb: blueprint.thumb,
                                            actionText: "Explore Blueprint",
                                            tags: blueprint.tags
                                        }}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Mobile / Tablet: horizontal carousel */}
                        {isMobile && (
                            <div className="project-carousel-wrapper">
                                <div
                                    className="project-carousel-track"
                                    ref={trackRef}
                                    onTouchStart={handleTouchStart}
                                    onTouchEnd={handleTouchEnd}
                                    onMouseDown={handleMouseDown}
                                    onMouseMove={handleMouseMove}
                                    onMouseUp={handleMouseUp}
                                    onMouseLeave={() => {
                                        if (isDraggingRef.current) {
                                            isDraggingRef.current = false;
                                            if (trackRef.current) {
                                                trackRef.current.style.cursor = '';
                                            }
                                            scrollToSlide(activeIndex);
                                            scheduleResumeAutoPlay();
                                        }
                                    }}
                                >
                                    {filteredBlueprints.map(blueprint => (
                                        <div className="project-carousel-slide" key={blueprint.id}>
                                            <SingleProjectV1
                                                project={{
                                                    id: blueprint.id,
                                                    slug: blueprint.slug,
                                                    client: blueprint.categoryTag,
                                                    title: blueprint.positioningLine,
                                                    description: blueprint.cardDescription,
                                                    metrics: blueprint.targetMetrics.map(m => ({ label: m.label, val: m.val })),
                                                    thumb: blueprint.thumb,
                                                    actionText: "Explore Blueprint",
                                                    tags: blueprint.tags
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation dots */}
                                <div className="project-carousel-dots">
                                    {filteredBlueprints.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`project-carousel-dot ${index === activeIndex ? 'active' : ''}`}
                                            onClick={() => {
                                                pauseAutoPlay();
                                                goToSlide(index);
                                                scheduleResumeAutoPlay();
                                            }}
                                            aria-label={`Go to blueprint ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectV1;
