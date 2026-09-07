"use client";

import { useState } from "react";
import Link from "next/link";
import SplitText from "../animation/SplitText";

interface JobType {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    mode: string;
    bullets: string[];
}

const jobs: JobType[] = [
    {
        id: 1,
        title: "Forward Deployed Engineer",
        department: "Engineering",
        location: "GIFT City / Remote",
        type: "Full-time",
        mode: "Hybrid",
        bullets: [
            "Build production AI solutions directly for enterprise clients.",
            "Collaborate with data scientists and ML engineers on model deployment.",
            "Own client delivery from scoping to handover.",
        ],
    },
    {
        id: 2,
        title: "Agentic AI Engineer",
        department: "Engineering",
        location: "GIFT City / Remote",
        type: "Full-time",
        mode: "Hybrid",
        bullets: [
            "Design and build autonomous agent workflows using LLMs and tool use.",
            "Integrate with APIs, databases, and message queues.",
            "Evaluate and iterate on agent performance.",
        ],
    },
    {
        id: 3,
        title: "Claude & LLM Engineer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        mode: "Remote",
        bullets: [
            "Fine-tune and prompt-engineer Claude / foundation models.",
            "Build RAG pipelines and evaluation frameworks.",
            "Ship LLM features to production with observability.",
        ],
    },
    {
        id: 4,
        title: "Full Stack Engineer",
        department: "Engineering",
        location: "GIFT City / Remote",
        type: "Full-time",
        mode: "Hybrid",
        bullets: [
            "Build web applications with Next.js, TypeScript, and modern backend stacks.",
            "Own features end-to-end from design to deployment.",
            "Mentor junior engineers and participate in code reviews.",
        ],
    },
    {
        id: 5,
        title: "AI Product Designer",
        department: "Design",
        location: "GIFT City / Remote",
        type: "Full-time",
        mode: "Hybrid",
        bullets: [
            "Design AI-first experiences for enterprise SaaS products.",
            "Create wireframes, prototypes, and design systems.",
            "Work closely with engineering on interaction design.",
        ],
    },
    {
        id: 6,
        title: "AI GTM Lead",
        department: "GTM",
        location: "GIFT City / Remote",
        type: "Full-time",
        mode: "Hybrid",
        bullets: [
            "Shape go-to-market strategy for AI products.",
            "Collaborate with sales, marketing, and engineering.",
            "Build customer success playbooks.",
        ],
    },
];

const departments = ["All", "Engineering", "Product", "Design", "GTM"];

const CareersOpenPositions = () => {
    const [activeDept, setActiveDept] = useState("All");

    const filtered =
        activeDept === "All" ? jobs : jobs.filter((j) => j.department === activeDept);

    return (
        <>
            <div className="careers-positions-area default-padding bg-dark text-light" id="open-positions">
                <div className="container">
                    <div className="site-heading text-center">
                        <h4 className="sub-title">Open Positions</h4>
                        <h2 className="title split-text-right split-text-in-right">
                            <SplitText
                                delay={8}
                                animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                                easing="easeOutCubic"
                                threshold={0.2}
                                rootMargin="-50px"
                            >
                                We&apos;re hiring across engineering, design, and GTM.
                            </SplitText>
                        </h2>
                        <p className="mt-25">
                            Scroll down to apply, or send us an open note at{" "}
                            <a href="mailto:careers@nenotechnology.com">careers@nenotechnology.com</a>.
                        </p>
                    </div>

                    {/* Filter tabs */}
                    <div className="careers-filter-tabs d-flex justify-content-center flex-wrap gap-10 mb-50">
                        {departments.map((dept) => (
                            <button
                                key={dept}
                                className={`btn ${activeDept === dept ? "btn-style-one" : "btn-style-one border-light"}`}
                                onClick={() => setActiveDept(dept)}
                            >
                                {dept}
                            </button>
                        ))}
                    </div>

                    {/* Job listings */}
                    <div className="careers-jobs-list">
                        {filtered.map((job, i) => (
                            <div
                                className="careers-job-card bg-gray text-dark p-30 mb-30 wow fadeInUp"
                                key={job.id}
                                data-wow-delay={`${i * 100}ms`}
                            >
                                <div className="row align-center">
                                    <div className="col-lg-6 mb-15 mb-lg-0">
                                        <h4 className="mb-10">{job.title}</h4>
                                        <div className="careers-job-meta">
                                            <span className="badge me-2">{job.department}</span>
                                            <span className="me-2"><i className="fas fa-map-marker-alt me-1" />{job.location}</span>
                                            <span className="me-2"><i className="fas fa-briefcase me-1" />{job.type}</span>
                                            <span><i className="fas fa-wifi me-1" />{job.mode}</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-15 mb-lg-0">
                                        <ul className="job-bullets ps-0">
                                            {job.bullets.map((b, idx) => (
                                                <li key={idx}><i className="fas fa-check me-2" style={{ color: "var(--color-primary)" }} />{b}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-lg-2 text-end">
                                        <a
                                            href="#apply"
                                            className="btn btn-style-one"
                                            data-job-id={job.id}
                                            data-job-title={job.title}
                                        >
                                            Apply Now <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CareersOpenPositions;
