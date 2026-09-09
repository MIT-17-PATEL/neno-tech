import BlogV1Data from "@/assets/jsonData/blog/BlogV1Data.json";
import SingleBlogV1 from "./SingleBlogV1";
import Link from "next/link";

interface DataType {
    sectionClass?: string;
}

const BlogV1 = ({ sectionClass }: DataType) => {
    // Show top 3 recent insights
    const recentBlogs = BlogV1Data.slice(0, 3);

    return (
        <section className={`blog-modern-area position-relative text-light ${sectionClass ? sectionClass : ""}`}>
            {/* Ambient Radial Glow Accents */}
            <div className="blog-ambient-glow blog-glow-indigo" aria-hidden="true" />
            <div className="blog-ambient-glow blog-glow-cyan" aria-hidden="true" />

            <div className="container position-relative" style={{ zIndex: 2 }}>
                {/* Horizontally Centered Section Header */}
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-9 text-center">
                        <div className="blog-header-content">
                            <span className="blog-pill-badge">
                                <span className="blog-badge-dot" />
                                LATEST INSIGHTS
                            </span>
                            <h2 className="blog-header-title">
                                Engineering Insights & AI Architecture
                            </h2>
                            <p className="blog-header-desc">
                                Deep dives, system blueprints, and production benchmarks from our agentic AI engineering team.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3-Column Glassmorphism Blog Grid */}
                <div className="row g-4 justify-content-center blog-grid-row">
                    {recentBlogs.map(blog => (
                        <div className="col-lg-4 col-md-6 d-flex" key={blog.id}>
                            <SingleBlogV1 blog={blog} />
                        </div>
                    ))}
                </div>

                {/* View All Articles Footer */}
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <Link href="/blog-with-sidebar" className="btn-explore-all-blogs">
                            <span>Browse All Research & Articles</span>
                            <i className="fas fa-arrow-right" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogV1;
