import SingleBlog2Column from "./SingleBlog2Column";
import Pagination from "../pagination/Pagination";
import { PublicBlog } from "@/lib/server/blogs";

interface Blog2ColumnContentProps {
    blogs?: PublicBlog[];
}

const Blog2ColumnContent = ({ blogs = [] }: Blog2ColumnContentProps) => {
    return (
        <div className="blog-area blog-grid default-padding">
            <div className="container">
                <div className="blog-item-box">
                    {blogs.length > 0 ? (
                        <>
                            <div className="row">
                                {blogs.slice(0, 8).map(blog =>
                                    <div className="col-lg-6 col-md-6 mb-50" key={blog.id}>
                                        <SingleBlog2Column blog={blog} />
                                    </div>
                                )}
                            </div>
                            {blogs.length > 8 && <Pagination />}
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
    );
};

export default Blog2ColumnContent;
