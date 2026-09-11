"use client";

import Counter from '../counter/Counter';
import ProjectV1Data from '@/assets/jsonData/project/ProjectV1Data.json';
import SingleProjectV1 from './SingleProjectV1';
import SplitText from '../animation/SplitText';
import { useCallback, useEffect, useRef, useState } from 'react';

interface DataType {
    sectionClass?: string;
}

const ProjectV1 = ({ sectionClass }: DataType) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const activeIndexRef = useRef(0);
    const isMountedRef = useRef(true);
    const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
    const isDraggingRef = useRef(false);
    const dragStartXRef = useRef(0);
    const dragOffsetRef = useRef(0);
    const totalProjects = ProjectV1Data.length;

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
        if (!isMobile || !isMountedRef.current) return;
        pauseAutoPlay();
        autoPlayRef.current = setInterval(() => {
            if (!isMountedRef.current) return;
            const next = (activeIndexRef.current + 1) % totalProjects;
            setActiveIndex(next);
            scrollToSlide(next);
        }, 4500);
    }, [isMobile, totalProjects, scrollToSlide, pauseAutoPlay]);

    const scheduleResumeAutoPlay = useCallback(() => {
        if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = setTimeout(() => {
            if (isMountedRef.current) {
                resumeAutoPlay();
            }
        }, 3000);
    }, [resumeAutoPlay]);

    // Auto-play for carousel
    useEffect(() => {
        if (!isMobile) return;

        resumeAutoPlay();

        return () => {
            pauseAutoPlay();
        };
    }, [isMobile, resumeAutoPlay, pauseAutoPlay]);

    // Touch handlers for swipe
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        pauseAutoPlay();
        touchStartRef.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
            time: Date.now(),
        };
    }, [pauseAutoPlay]);

    const handleTouchEnd = useCallback((e: React.TouchEvent) => {
        if (!touchStartRef.current) return;
        const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
        const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
        const dt = Date.now() - touchStartRef.current.time;

        // Only horizontal swipes
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40 && dt < 500) {
            if (dx < 0 && activeIndex < totalProjects - 1) {
                goToSlide(activeIndex + 1);
            } else if (dx > 0 && activeIndex > 0) {
                goToSlide(activeIndex - 1);
            }
        }

        touchStartRef.current = null;
        scheduleResumeAutoPlay();
    }, [activeIndex, totalProjects, goToSlide, scheduleResumeAutoPlay]);

    // Mouse drag handlers for desktop-like drag on tablet
    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        pauseAutoPlay();
        isDraggingRef.current = true;
        dragStartXRef.current = e.clientX;
        dragOffsetRef.current = trackRef.current?.scrollLeft || 0;
        if (trackRef.current) {
            trackRef.current.style.scrollBehavior = 'auto';
            trackRef.current.style.cursor = 'grabbing';
        }
    }, [pauseAutoPlay]);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!isDraggingRef.current || !trackRef.current) return;
        e.preventDefault();
        const dx = e.clientX - dragStartXRef.current;
        trackRef.current.scrollLeft = dragOffsetRef.current - dx;
    }, []);

    const handleMouseUp = useCallback((e: React.MouseEvent) => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;
        if (trackRef.current) {
            trackRef.current.style.scrollBehavior = 'smooth';
            trackRef.current.style.cursor = '';
        }

        const dx = e.clientX - dragStartXRef.current;
        if (Math.abs(dx) > 60) {
            if (dx < 0 && activeIndex < totalProjects - 1) {
                goToSlide(activeIndex + 1);
            } else if (dx > 0 && activeIndex > 0) {
                goToSlide(activeIndex - 1);
            }
        } else {
            // Snap back
            scrollToSlide(activeIndex);
        }

        scheduleResumeAutoPlay();
    }, [activeIndex, totalProjects, goToSlide, scrollToSlide, scheduleResumeAutoPlay]);

    // Detect scroll-based active index update
    useEffect(() => {
        if (!isMobile) return;
        const track = trackRef.current;
        if (!track) return;

        let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
        const handleScroll = () => {
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (!isMountedRef.current || !track) return;
                const children = Array.from(track.children) as HTMLElement[];
                const trackCenter = track.scrollLeft + track.clientWidth / 2;
                let closest = 0;
                let minDist = Infinity;
                children.forEach((child, i) => {
                    const childCenter = child.offsetLeft + child.offsetWidth / 2;
                    const dist = Math.abs(childCenter - trackCenter);
                    if (dist < minDist) {
                        minDist = dist;
                        closest = i;
                    }
                });
                setActiveIndex(closest);
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
            {/* Ambient Radial Glows matching upper sections */}
            <div className="project-ambient-glow project-glow-blue" aria-hidden="true" />
            <div className="project-ambient-glow project-glow-purple" aria-hidden="true" />

            <div className="container position-relative" style={{ zIndex: 2 }}>
                <div className="row">
                    <div className="col-xl-4">
                        <div className="fixed-content">
                            <div className="site-heading">
                                <h4 className="sub-title">Latest Projects</h4>
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Best projects for intelligent
                                    </SplitText>
                                </h2>
                            </div>
                            <div className="project-fun-fact">
                                <div className="js-counter"><Counter end={2650} />+</div>
                                <h4>Finished creative projects successfully using AI support</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 pl-50 pl-md-15 pl-xs-15">
                        {/* Desktop: stacked sticky cards */}
                        {!isMobile && (
                            <div className="project-style-one-items">
                                {ProjectV1Data.map(project => (
                                    <SingleProjectV1 project={project} key={project.id} />
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
                                    {ProjectV1Data.map(project => (
                                        <div className="project-carousel-slide" key={project.id}>
                                            <SingleProjectV1 project={project} />
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation dots */}
                                <div className="project-carousel-dots">
                                    {ProjectV1Data.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`project-carousel-dot ${index === activeIndex ? 'active' : ''}`}
                                            onClick={() => {
                                                pauseAutoPlay();
                                                goToSlide(index);
                                                scheduleResumeAutoPlay();
                                            }}
                                            aria-label={`Go to project ${index + 1}`}
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
