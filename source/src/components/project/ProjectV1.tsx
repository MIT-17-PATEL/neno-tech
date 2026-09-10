"use client";

import Counter from '../counter/Counter';
import ProjectV1Data from '@/assets/jsonData/project/ProjectV1Data.json';
import SingleProjectV1 from './SingleProjectV1';
import SplitText from '../animation/SplitText';
import { useEffect, useRef } from 'react';

interface DataType {
    sectionClass?: string;
}

const ProjectV1 = ({ sectionClass }: DataType) => {
    const projectsViewportRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const viewport = projectsViewportRef.current;
        if (!viewport || typeof window === 'undefined') {
            return;
        }

        const mobileQuery = window.matchMedia('(max-width: 767px)');
        let advanceTimer: ReturnType<typeof setTimeout> | undefined;
        let resumeTimer: ReturnType<typeof setTimeout> | undefined;
        let isPaused = false;

        const scheduleAdvance = () => {
            if (advanceTimer) {
                clearTimeout(advanceTimer);
            }

            advanceTimer = setTimeout(() => {
                if (!mobileQuery.matches || isPaused) {
                    scheduleAdvance();
                    return;
                }

                const cards = viewport.querySelectorAll<HTMLElement>('.project-style-one-item');
                const currentCardIndex = Array.from(cards).findIndex(
                    (card) => card.offsetTop > viewport.scrollTop + 2,
                );
                const nextCard = cards[currentCardIndex];

                if (nextCard) {
                    viewport.scrollTo({ top: nextCard.offsetTop, behavior: 'smooth' });
                    scheduleAdvance();
                }
            }, 3200);
        };

        const pauseScroll = () => {
            isPaused = true;
            if (resumeTimer) {
                clearTimeout(resumeTimer);
            }
            resumeTimer = setTimeout(() => {
                isPaused = false;
                scheduleAdvance();
            }, 1800);
        };

        const handleWheel = (event: WheelEvent) => {
            pauseScroll();
            if (
                mobileQuery.matches &&
                event.deltaY > 0 &&
                viewport.scrollTop >= viewport.scrollHeight - viewport.clientHeight - 2
            ) {
                event.preventDefault();
                window.scrollBy({ top: event.deltaY, behavior: 'auto' });
            }
        };

        viewport.addEventListener('pointerdown', pauseScroll);
        viewport.addEventListener('wheel', handleWheel, { passive: false });
        mobileQuery.addEventListener('change', pauseScroll);
        scheduleAdvance();

        return () => {
            if (advanceTimer) {
                clearTimeout(advanceTimer);
            }
            if (resumeTimer) {
                clearTimeout(resumeTimer);
            }
            viewport.removeEventListener('pointerdown', pauseScroll);
            viewport.removeEventListener('wheel', handleWheel);
            mobileQuery.removeEventListener('change', pauseScroll);
        };
    }, []);

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
                        <div className="project-scroll-viewport" ref={projectsViewportRef}>
                            <div className="project-style-one-items">
                                {ProjectV1Data.map(project => (
                                    <SingleProjectV1 project={project} key={project.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectV1;
