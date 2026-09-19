import Pagination from "../pagination/Pagination";
import SingleBlogStandard from "./SingleBlogStandard";
import SearchWidget from "../widgets/SearchWidget";
import RecentPostsWidget from "../widgets/RecentPostsWidget";
import CategoryWidget from "../widgets/CategoryWidget";
import TagsWidget from "../widgets/TagsWidget";
import { PublicBlog } from "@/lib/server/blogs";

interface BlogWithSidebarContentProps {
    blogs?: PublicBlog[];
}

const BlogWithSidebarContent = ({ blogs = [] }: BlogWithSidebarContentProps) => {
    return (
        <div className="blog-area full-blog default-padding py-5">
            <div className="container">
                <div className="blog-items">
                    <div className="row g-4 g-lg-5">
                        {/* Main Articles Stream */}
                        <div className="blog-content col-xl-8 col-lg-7 col-md-12">
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
                                        Our engineering team is actively preparing insights and architectural breakthroughs. Check back soon for the latest updates.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Sidebar Column */}
                        <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-4 mt-lg-0">
                            <aside className="sticky-lg-top" style={{ top: "100px", zIndex: 10 }}>
                                <div className="sidebar-top-group mb-4">
                                    <SearchWidget />
                                    <RecentPostsWidget isFlexChild={true} blogs={blogs} />
                                </div>
                                <CategoryWidget />
                                <TagsWidget />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogWithSidebarContent;
