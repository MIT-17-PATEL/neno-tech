import Pagination from "../pagination/Pagination";
import BlogV1Data from "@/assets/jsonData/blog/BlogV1Data.json";
import SingleBlogStandard from "./SingleBlogStandard";
import SearchWidget from "../widgets/SearchWidget";
import RecentPostsWidget from "../widgets/RecentPostsWidget";
import CategoryWidget from "../widgets/CategoryWidget";
import TagsWidget from "../widgets/TagsWidget";

const BlogWithSidebarContent = () => {
    return (
        <div className="blog-area full-blog default-padding py-5">
            <div className="container">
                <div className="blog-items">
                    <div className="row g-4 g-lg-5">
                        {/* Main Articles Stream */}
                        <div className="blog-content col-xl-8 col-lg-7 col-md-12">
                            <div className="blog-item-box">
                                {BlogV1Data.map(blog =>
                                    <SingleBlogStandard blog={blog} key={blog.id} />
                                )}
                            </div>
                            <Pagination />
                        </div>

                        {/* Sidebar Column */}
                        <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-4 mt-lg-0">
                            <aside className="sticky-lg-top" style={{ top: "100px", zIndex: 10 }}>
                                <SearchWidget />
                                <RecentPostsWidget />
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
