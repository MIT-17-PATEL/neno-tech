import Pagination from "../pagination/Pagination";
import SingleBlogStandard from "./SingleBlogStandard";
import { PublicBlog } from "@/lib/server/blogs";

interface BlogStandardContentProps {
    blogs?: PublicBlog[];
}

const BlogStandardContent = ({ blogs = [] }: BlogStandardContentProps) => {
    return (
        <div className="blog-area full-blog blog-standard default-padding">
            <div className="container">
                <div className="row">
                    <div className="blog-content col-xl-10 offset-xl-1 col-md-12">
                        {blogs.length > 0 ? (
                            <>
                                <div className="blog-item-box">
                                    {blogs.map(blog =>
                                        <SingleBlogStandard blog={blog} key={blog.id} />
                                    )}
                                </div>
                                {blogs.length > 5 && <Pagination />}
                            </>
                        ) : (
                            <div className="text-center py-5 px-4 rounded-4" style={{
                                background: "rgba(255, 255, 255, 0.02)",
                                border: "1px dashed rgba(255, 255, 255, 0.15)",
                                backdropFilter: "blur(16px)"
                            }}>
                                <i className="fas fa-newspaper fa-3x mb-3" style={{ color: "#38bdf8", opacity: 0.7 }} />
                                <h3 className="text-white fw-bold mb-2">No Articles Published Yet</h3>
                                <p style={{ color: "#94a3b8", maxWidth: "480px", margin: "0 auto" }}>
                                    Our engineering team is actively preparing insights and architectural breakdowns. Check back soon for the latest publications.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogStandardContent;
