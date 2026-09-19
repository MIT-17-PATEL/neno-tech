import SingleBlogV2 from "./SingleBlogV2";
import SplitText from "../animation/SplitText";
import { getPublishedBlogs, PublicBlog } from "@/lib/server/blogs";

interface BlogV2Props {
    blogs?: PublicBlog[];
}

const BlogV2 = async ({ blogs }: BlogV2Props) => {
    const publishedBlogs = blogs || (await getPublishedBlogs());
    const recentBlogs = publishedBlogs.slice(0, 3);

    if (recentBlogs.length === 0) {
        return null;
    }

    return (
        <div className="home-blog-two-area default-padding bg-gray blurry-shape-left-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">Latest Blog</h4>
                            <h2 className="title split-text-right split-text-in-right">
                                <SplitText
                                    delay={10}
                                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                    easing="easeOutCubic"
                                    threshold={0.2}
                                    rootMargin="-50px"
                                >
                                    News & Update
                                </SplitText>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="blog-style-two-box">
                    <div className="row">
                        {recentBlogs.map(blog =>
                            <div className="col-xl-4 col-lg-6" key={blog.id} >
                                <SingleBlogV2 blog={blog} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogV2;
