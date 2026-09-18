import Image from "next/image";
import Link from "next/link";
import BlogPostComments from "./BlogPostComments";
import BlogCommentForm from "./BlogCommentForm";
import SocialV5 from "../social/SocialV5";
import { PublicBlog } from "@/lib/server/blogs";

interface BlogSingleProps {
    blogInfo: PublicBlog;
    previousBlog?: PublicBlog | null;
    nextBlog?: PublicBlog | null;
}

const BlogSingleContent = ({ blogInfo, previousBlog, nextBlog }: BlogSingleProps) => {
    const { thumbFull, thumb, author, date, category, title, content, shortDescription } = blogInfo;

    const imgSrc = thumbFull 
        ? (thumbFull.startsWith('/') ? thumbFull : `/assets/img/blog/${thumbFull}`) 
        : (thumb ? (thumb.startsWith('/') ? thumb : `/assets/img/blog/${thumb}`) : '/assets/img/blog/1-full.jpg');

    const getFirstTwoWords = (text?: string) => text?.split(' ').slice(0, 2).join(' ') || "Article";

    // Split content by paragraphs
    const paragraphs = content ? content.split(/\n\s*\n/).filter(p => p.trim().length > 0) : [];

    return (
        <div className="blog-area single full-blog default-padding">
            <div className="container">
                <div className="blog-items">
                    <div className="row">
                        <div className="blog-content col-lg-10 offset-lg-1 col-md-12">
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
                                            src={imgSrc}
                                            alt={title || "Blog Cover"}
                                            width={1730}
                                            height={905}
                                            className="w-100 h-auto d-block"
                                            style={{ objectFit: "cover" }}
                                            priority
                                        />
                                        {category && (
                                            <span
                                                className="position-absolute"
                                                style={{
                                                    bottom: "16px",
                                                    left: "20px",
                                                    background: "rgba(15, 23, 42, 0.85)",
                                                    color: "#38bdf8",
                                                    border: "1px solid rgba(56, 189, 248, 0.3)",
                                                    backdropFilter: "blur(8px)",
                                                    padding: "6px 14px",
                                                    borderRadius: "20px",
                                                    fontSize: "12px",
                                                    fontWeight: 600
                                                }}
                                            >
                                                {category}
                                            </span>
                                        )}
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
                                            {title}
                                        </h2>

                                        {shortDescription && (
                                            <p className="lead fw-medium mb-4" style={{ color: "#cbd5e1", fontSize: "16.5px", lineHeight: "1.8" }}>
                                                {shortDescription}
                                            </p>
                                        )}

                                        {paragraphs.length > 0 ? (
                                            paragraphs.map((para, idx) => (
                                                <p key={idx} style={{ color: "#94a3b8", fontSize: "15.5px", lineHeight: "1.8", marginBottom: "1.5rem" }}>
                                                    {para}
                                                </p>
                                            ))
                                        ) : (
                                            !shortDescription && (
                                                <p style={{ color: "#94a3b8", fontSize: "15.5px", lineHeight: "1.8" }}>
                                                    Article content is being updated.
                                                </p>
                                            )
                                        )}
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
                                        alt={author || "Author"}
                                        width={110}
                                        height={110}
                                        className="rounded-circle object-fit-cover"
                                        style={{ border: "2px solid rgba(56, 189, 248, 0.4)", width: "100px", height: "100px" }}
                                    />
                                </div>
                                <div className="info text-center text-sm-start">
                                    <div className="d-flex flex-column flex-sm-row align-items-center gap-2 mb-1">
                                        <h4 className="m-0 fw-bold" style={{ fontSize: "20px" }}>
                                            <span className="text-white">{author || "Neno Technology"}</span>
                                        </h4>
                                    </div>
                                    <p className="m-0 mt-2" style={{ color: "#94a3b8", fontSize: "14.5px", lineHeight: "1.7" }}>
                                        Engineering insights and deep architectural guides published by the Neno Technology team.
                                    </p>
                                </div>
                            </div>

                            {/* Post Tags & Share */}
                            <div
                                className="post-tags share p-4 rounded-4 mb-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
                                style={{
                                    background: "rgba(255, 255, 255, 0.035)",
                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                    backdropFilter: "blur(16px)"
                                }}
                            >
                                <div className="tags d-flex align-items-center flex-wrap gap-2">
                                    <h4 className="m-0 text-white fw-bold me-2" style={{ fontSize: "15px" }}>Category:</h4>
                                    <span className="d-inline-block px-3 py-1 rounded-pill" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "#cbd5e1", fontSize: "13px" }}>
                                        {category || "AI Architecture"}
                                    </span>
                                </div>
                                <div className="social d-flex align-items-center gap-2">
                                    <h4 className="m-0 text-white fw-bold me-2" style={{ fontSize: "15px" }}>Share:</h4>
                                    <ul className="p-0 m-0 list-unstyled d-flex gap-2">
                                        <SocialV5 />
                                    </ul>
                                </div>
                            </div>

                            {/* Previous / Next Pagination */}
                            {(previousBlog || nextBlog) && (
                                <div className="post-pagi-area">
                                    {previousBlog ? (
                                        <div className="post-previous">
                                            <Link href={`/blog-single/${previousBlog.slug || previousBlog.id}`}>
                                                <div className="icon"><i className="fas fa-angle-double-left" /></div>
                                                <div className="nav-title"> Previous Post <h5>{getFirstTwoWords(previousBlog.title)}</h5></div>
                                            </Link>
                                        </div>
                                    ) : <div className="post-previous" />}
                                    {nextBlog ? (
                                        <div className="post-next">
                                            <Link href={`/blog-single/${nextBlog.slug || nextBlog.id}`}>
                                                <div className="nav-title">Next Post <h5>{getFirstTwoWords(nextBlog.title)}</h5></div>
                                                <div className="icon"><i className="fas fa-angle-double-right" /></div>
                                            </Link>
                                        </div>
                                    ) : <div className="post-next" />}
                                </div>
                            )}

                            {/* Comments */}
                            <div className="blog-comments">
                                <div className="comments-area">
                                    <div className="comments-title">
                                        <h3>Comments on “{title}”</h3>
                                        <BlogPostComments />
                                    </div>
                                    <div className="comments-form">
                                        <div className="title">
                                            <h3>Leave a comment</h3>
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
    );
};

export default BlogSingleContent;
