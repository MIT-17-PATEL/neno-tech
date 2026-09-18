import Image from "next/image";
import Link from "next/link";

export interface BlogStandardItem {
    id: string | number;
    slug?: string;
    thumbFull?: string;
    date: string;
    author: string;
    readTime?: string;
    readingTime?: string;
    category?: string;
    title: string;
    description: string;
    shortDescription?: string;
    buttonText?: string;
    isHero?: boolean;
}

const SingleBlogStandard = ({ blog, isHero = false }: { blog: BlogStandardItem; isHero?: boolean }) => {
    const { id, thumbFull = "1-full.jpg", date, author, readTime, readingTime, category, title, description, shortDescription, buttonText = "Read Article" } = blog;
    const blogUrl = `/blog-single-with-sidebar/${id}`;
    const displayDesc = shortDescription || description;
    const displayReadTime = readingTime || readTime;
    const imgSrc = thumbFull.startsWith('/') ? thumbFull : `/assets/img/blog/${thumbFull}`;

    return (
        <article className={`item blog-standard-card mb-5 rounded-4 overflow-hidden ${isHero ? 'blog-hero-card' : ''}`} style={{
            background: "rgba(255, 255, 255, 0.035)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)"
        }}>
            <div
                className={`thumb position-relative overflow-hidden ${isHero ? 'blog-hero-thumb' : ''}`}
                style={{
                    maxHeight: isHero ? undefined : "420px",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px"
                }}
            >
                <Link href={blogUrl} className="d-block w-100 h-100">
                    <Image
                        src={imgSrc}
                        alt={title}
                        width={1200}
                        height={675}
                        className="w-100 h-100 d-block"
                        style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                        priority={isHero}
                    />
                </Link>
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
                            fontWeight: 600,
                            letterSpacing: "0.02em"
                        }}
                    >
                        {category}
                    </span>
                )}
            </div>
            <div className="info p-4 p-md-5" style={{ background: "transparent" }}>
                <div className="meta mb-3">
                    <ul className="d-flex flex-wrap align-items-center gap-3 gap-md-4 p-0 m-0 list-unstyled" style={{ fontSize: "14px", color: "#94a3b8" }}>
                        <li className="d-flex align-items-center gap-2">
                            <i className="far fa-calendar-alt text-primary" style={{ color: "#38bdf8" }} />
                            <span style={{ color: "#cbd5e1" }}>{date}</span>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                            <i className="far fa-user-circle text-primary" style={{ color: "#818cf8" }} />
                            <span style={{ color: "#cbd5e1" }}>{author}</span>
                        </li>
                        {displayReadTime && (
                            <li className="d-flex align-items-center gap-2">
                                <i className="far fa-clock text-primary" style={{ color: "#38bdf8" }} />
                                <span style={{ color: "#94a3b8" }}>{displayReadTime}</span>
                            </li>
                        )}
                    </ul>
                </div>
                <h2 className="mb-3" style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, lineHeight: 1.35, letterSpacing: "-0.02em" }}>
                    <Link
                        href={blogUrl}
                        className="text-white text-decoration-none"
                        style={{ transition: "color 0.2s ease" }}
                    >
                        {title}
                    </Link>
                </h2>
                <p className="mb-4" style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.7 }}>
                    {displayDesc}
                </p>
                <Link
                    className="btn-read-article d-inline-flex align-items-center gap-2 text-decoration-none"
                    href={blogUrl}
                    style={{
                        background: "linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)",
                        color: "#ffffff",
                        padding: "10px 24px",
                        borderRadius: "30px",
                        fontWeight: 600,
                        fontSize: "14px",
                        boxShadow: "0 4px 14px rgba(99, 102, 241, 0.35)",
                        transition: "all 0.25s ease"
                    }}
                >
                    <span>{buttonText}</span>
                    <i className="fas fa-arrow-right" style={{ fontSize: "12px" }} />
                </Link>
            </div>
        </article>
    );
};

export default SingleBlogStandard;
