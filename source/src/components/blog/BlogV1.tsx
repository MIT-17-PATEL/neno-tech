import BlogV1Data from "@/assets/jsonData/blog/BlogV1Data.json"
import SingleBlogV1 from "./SingleBlogV1";
import SplitText from "../animation/SplitText";

const BlogV1 = () => {
    return (
        <>
            <div className="home-blog-area default-padding">
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
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            {BlogV1Data.slice(0,3).map(blog =>
                                <SingleBlogV1 blog={blog} key={blog.id} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogV1;
