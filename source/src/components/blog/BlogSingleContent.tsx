import Image from "next/image";
import Link from "next/link";
import BlogV1Data from "@/assets/jsonData/blog/BlogV1Data.json"
import BlogPostComments from "./BlogPostComments";
import BlogCommentForm from "./BlogCommentForm";
import SocialV5 from "../social/SocialV5";

interface DataType {
    id: number;
    thumbFull: string;
    author: string;
    date: string;
    title: string;
}

interface BlogSingleProps {
    blogInfo: DataType;
    totalBlogs: number;
}

const BlogSingleContent = ({ blogInfo, totalBlogs }: BlogSingleProps) => {
    const { id, thumbFull, author, date } = blogInfo || {};

    // Blogs Navigation 
    const currentId = id ? parseInt(id.toString(), 10) : 1;

    // Calculate the previous and next IDs dynamically
    const previousId = currentId === 1 ? totalBlogs : currentId - 1;
    const nextId = currentId === totalBlogs ? 1 : currentId + 1;

    // Get the previous and next project titles
    const previousBlog = BlogV1Data.find((blog) => blog.id === previousId);
    const nextBlog = BlogV1Data.find((blog) => blog.id === nextId);

    // Get the first two words of the project title
    const getFirstTwoWords = (text?: string) => text?.split(' ').slice(0, 2).join(' ') || "No Title";

    return (
        <>
            <div className="blog-area single full-blog full-blog default-padding">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content wow fadeInUp col-lg-10 offset-lg-1 col-md-12">
                                <div
                                    className="blog-style-two item p-4 p-md-5 rounded-4 mb-4"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.035)",
                                        border: "1px solid rgba(255, 255, 255, 0.08)",
                                        backdropFilter: "blur(16px)",
                                        boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)"
                                    }}
                                >
                                    <div className="blog-item-box">
                                        <div className="thumb rounded-4 overflow-hidden mb-4 position-relative" style={{ maxHeight: "550px" }}>
                                            <Image
                                                src={`/assets/img/blog/${thumbFull}`}
                                                alt={blogInfo?.title || "Blog Cover"}
                                                width={1730}
                                                height={905}
                                                className="w-100 h-auto d-block"
                                                style={{ objectFit: "cover" }}
                                                priority
                                            />
                                        </div>
                                        <div className="info">
                                            <div className="meta mb-3">
                                                <ul className="d-flex flex-wrap gap-4 p-0 m-0 list-unstyled" style={{ fontSize: "14px", color: "#94a3b8" }}>
                                                    <li className="d-flex align-items-center gap-2">
                                                        <i className="fas fa-calendar-alt" style={{ color: "#38bdf8" }} />
                                                        <span style={{ color: "#cbd5e1" }}>{date}</span>
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2">
                                                        <i className="fas fa-user-circle" style={{ color: "#818cf8" }} />
                                                        <span style={{ color: "#cbd5e1" }}>{author}</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <h2 className="text-white fw-bold mb-4" style={{ fontSize: "clamp(24px, 3.5vw, 36px)", lineHeight: 1.3, letterSpacing: "-0.02em" }}>
                                                {blogInfo?.title}
                                            </h2>

                                            <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: "1.8" }}>
                                                As modern AI systems transition from single-prompt generation to autonomous multi-step execution, engineering architectures must be designed with determinism, distributed state recovery, and granular tool-calling boundaries. Deploying agents in enterprise production requires rigorous guardrails to prevent infinite loops, hallucinations, and unconstrained memory bloat.
                                            </p>
                                            <p style={{ color: "#94a3b8", fontSize: "15.5px", lineHeight: "1.8" }}>
                                                At Neno Technology, our architecture separates planning, tool execution, and verification into discrete state graph nodes. By adopting structured JSON schemas and protocol specifications such as Anthropic’s Model Context Protocol (MCP), each agent operates within validated capability envelopes while maintaining persistent checkpoints for human-in-the-loop auditability.
                                            </p>

                                            <blockquote
                                                className="p-4 p-md-5 my-4 rounded-4 position-relative"
                                                style={{
                                                    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(56, 189, 248, 0.08) 100%)",
                                                    borderLeft: "4px solid #6366f1",
                                                    border: "1px solid rgba(99, 102, 241, 0.25)",
                                                    borderLeftWidth: "4px"
                                                }}
                                            >
                                                <p className="m-0 fst-italic fw-medium" style={{ color: "#e2e8f0", fontSize: "18px", lineHeight: "1.7" }}>
                                                    “In enterprise autonomous systems, reliability is not about eliminating model stochasticity—it is about designing deterministic fallback graphs and atomic state recovery so failures are handled gracefully without service disruption.”
                                                </p>
                                                <cite className="d-block mt-3 fw-semibold" style={{ color: "#38bdf8", fontStyle: "normal", fontSize: "14px" }}>
                                                    — Tirth Patel, Founder & CEO at Neno Technology
                                                </cite>
                                            </blockquote>

                                            <p style={{ color: "#94a3b8", fontSize: "15.5px", lineHeight: "1.8" }}>
                                                When orchestrating multiple concurrent agents across complex enterprise workflows, synchronization latency and tool failure recovery become primary engineering bottlenecks. Implementing hierarchical agent structures allows domain-specialized sub-agents to operate autonomously while a supervisor agent maintains graph consensus and monitors execution budgets.
                                            </p>

                                            <h3 className="text-white fw-bold mt-4 mb-3" style={{ fontSize: "22px", letterSpacing: "-0.01em" }}>
                                                Core Architecture Principles for Production Deployment:
                                            </h3>
                                            <ul className="list-unstyled d-flex flex-column gap-3 mb-4" style={{ color: "#cbd5e1", fontSize: "15px" }}>
                                                <li className="d-flex align-items-start gap-3">
                                                    <i className="fas fa-check-circle mt-1" style={{ color: "#38bdf8", flexShrink: 0 }} />
                                                    <span><strong>Immutable State Checkpointing:</strong> Every state change is serialized and persisted to high-speed vector and relational backends for point-in-time recovery.</span>
                                                </li>
                                                <li className="d-flex align-items-start gap-3">
                                                    <i className="fas fa-check-circle mt-1" style={{ color: "#38bdf8", flexShrink: 0 }} />
                                                    <span><strong>Sandboxed Tool Calling:</strong> Tools are governed by strict schema validation, rate-limiting, and automated circuit breakers to protect downstream systems.</span>
                                                </li>
                                                <li className="d-flex align-items-start gap-3">
                                                    <i className="fas fa-check-circle mt-1" style={{ color: "#38bdf8", flexShrink: 0 }} />
                                                    <span><strong>Telemetry & Observability:</strong> Comprehensive OpenTelemetry trace integration tracking token usage, latency distributions, and agent decision branches.</span>
                                                </li>
                                                <li className="d-flex align-items-start gap-3">
                                                    <i className="fas fa-check-circle mt-1" style={{ color: "#38bdf8", flexShrink: 0 }} />
                                                    <span><strong>Human-in-the-Loop Escalation:</strong> High-stakes actions automatically suspend execution and route approval requests to authorized engineers.</span>
                                                </li>
                                            </ul>
                                            <p style={{ color: "#94a3b8", fontSize: "15.5px", lineHeight: "1.8" }}>
                                                Building scalable AI applications requires moving past generic prototypes and focusing on enterprise-grade reliability, cost containment, and security posture. Organizations that implement robust guardrail architectures unlock dramatic operational leverage while eliminating compliance risk.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Post Author */}
                                <div
                                    className="post-author p-4 p-md-5 rounded-4 mb-4 d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-4"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.035)",
                                        border: "1px solid rgba(255, 255, 255, 0.08)",
                                        backdropFilter: "blur(16px)",
                                        boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.25)"
                                    }}
                                >
                                    <div className="thumb flex-shrink-0">
                                        <Image
                                            src="/assets/img/team/tirth-patel.jpg"
                                            alt="Tirth Patel - Founder & CEO"
                                            width={110}
                                            height={110}
                                            className="rounded-circle object-fit-cover"
                                            style={{ border: "2px solid rgba(56, 189, 248, 0.4)", width: "100px", height: "100px" }}
                                        />
                                    </div>
                                    <div className="info text-center text-sm-start">
                                        <div className="d-flex flex-column flex-sm-row align-items-center gap-2 mb-1">
                                            <h4 className="m-0 fw-bold" style={{ fontSize: "20px" }}>
                                                <Link href="/company" className="text-white text-decoration-none">Tirth Patel</Link>
                                            </h4>
                                            <span style={{ color: "#38bdf8", fontSize: "13px", fontWeight: 500 }}>
                                                (Founder & CEO)
                                            </span>
                                        </div>
                                        <p className="m-0 mt-2" style={{ color: "#94a3b8", fontSize: "14.5px", lineHeight: "1.7" }}>
                                            Leading the vision and engineering execution at Neno Technology. Specialized in architecting enterprise autonomous agent swarms, real-time voice platforms, and deploying forward-deployed engineering squads for high-growth production systems.
                                        </p>
                                    </div>
                                </div>

                                {/* Post Tags Share */}
                                <div
                                    className="post-tags share p-4 rounded-4 mb-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.035)",
                                        border: "1px solid rgba(255, 255, 255, 0.08)",
                                        backdropFilter: "blur(16px)"
                                    }}
                                >
                                    <div className="tags d-flex align-items-center flex-wrap gap-2">
                                        <h4 className="m-0 text-white fw-bold me-2" style={{ fontSize: "15px" }}>Tags:</h4>
                                        <Link href="#" className="d-inline-block text-decoration-none px-3 py-1 rounded-pill" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "#cbd5e1", fontSize: "13px" }}>Agentic AI</Link>
                                        <Link href="#" className="d-inline-block text-decoration-none px-3 py-1 rounded-pill" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "#cbd5e1", fontSize: "13px" }}>Enterprise RAG</Link>
                                        <Link href="#" className="d-inline-block text-decoration-none px-3 py-1 rounded-pill" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "#cbd5e1", fontSize: "13px" }}>LangGraph</Link>
                                        <Link href="#" className="d-inline-block text-decoration-none px-3 py-1 rounded-pill" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "#cbd5e1", fontSize: "13px" }}>LLMOps</Link>
                                    </div>
                                    <div className="social d-flex align-items-center gap-2">
                                        <h4 className="m-0 text-white fw-bold me-2" style={{ fontSize: "15px" }}>Share:</h4>
                                        <ul className="p-0 m-0 list-unstyled d-flex gap-2">
                                            <SocialV5 />
                                        </ul>
                                    </div>
                                </div>

                                <div className="post-pagi-area">
                                    <div className="post-previous">
                                        <Link href={`/blog-single/${previousId}`}>
                                            <div className="icon"><i className="fas fa-angle-double-left"></i></div>
                                            <div className="nav-title"> Previous Post <h5>{getFirstTwoWords(previousBlog?.title)}</h5></div>
                                        </Link>
                                    </div>
                                    <div className="post-next">
                                        <Link href={`/blog-single/${nextId}`}>
                                            <div className="nav-title">Next Post <h5>{getFirstTwoWords(nextBlog?.title)}</h5></div>
                                            <div className="icon"><i className="fas fa-angle-double-right"></i></div>
                                        </Link>
                                    </div>
                                </div>

                                {/* Start Blog Comment */}
                                <div className="blog-comments">
                                    <div className="comments-area">
                                        <div className="comments-title">
                                            <h3>3 Comments On “Providing Top Quality Cleaning Related Services Charms.”</h3>
                                            <BlogPostComments />
                                        </div>
                                        <div className="comments-form">
                                            <div className="title">
                                                <h3>Leave a comments</h3>
                                            </div>
                                            <BlogCommentForm />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSingleContent;
