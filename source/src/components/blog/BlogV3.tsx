import BlogV3Data from "@/assets/jsonData/blog/BlogV3Data.json"
import SingleBlogV3 from "./SingleBlogV3";
import Link from "next/link";
import Image from "next/image";
import SplitText from "../animation/SplitText";

interface DataType {
    sectionClass?: string;
}

const BlogV3 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`home-blog-three-area default-padding ${sectionClass ? sectionClass : ""}`}>
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
                        <div className="col-lg-6">

                            <div className="blog-style-three inc-thumb fade-up-anim">
                                <div className="thumb">
                                    <Link href="/blog-single-with-sidebar/1">
                                        <Image src="/assets/img/blog/4.jpg" alt="Thumb" width={760} height={455} />
                                    </Link>
                                </div>
                                <div className="info">
                                    <div className="blog-one-meta">
                                        <ul>
                                            <li>
                                                <Link href="#">Technology</Link>
                                            </li>
                                            <li>
                                                06 December, 2025
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="blog-title">
                                        <Link href="/blog-single-with-sidebar/1">
                                            Discovery incommode earnestly commanded if perform good.
                                        </Link>
                                    </h3>
                                    <Link href="/blog-single-with-sidebar/1" className="btn-regular">
                                        Read more <Image src="/assets/img/icon/arrow-right-three.png" alt="Image Not Found" width={41} height={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            {BlogV3Data.map(blog =>
                                <SingleBlogV3 key={blog.id} blog={blog} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogV3;