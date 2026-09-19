import SingleBlogV3 from "./SingleBlogV3";
import Link from "next/link";
import Image from "next/image";
import SplitText from "../animation/SplitText";
import { getPublishedBlogs, PublicBlog } from "@/lib/server/blogs";

interface BlogV4Props {
    blogs?: PublicBlog[];
}

const BlogV4 = async ({ blogs }: BlogV4Props) => {
    const publishedBlogs = blogs || (await getPublishedBlogs());
    if (publishedBlogs.length === 0) {
        return null;
    }

    const featured = publishedBlogs[0];
    const rest = publishedBlogs.slice(1, 3);
    const featuredUrl = `/blog-single-with-sidebar/${featured.slug || featured.id}`;
    const featuredImg = featured.thumbFull 
        ? (featured.thumbFull.startsWith('/') ? featured.thumbFull : `/assets/img/blog/${featured.thumbFull}`) 
        : (featured.thumb ? (featured.thumb.startsWith('/') ? featured.thumb : `/assets/img/blog/${featured.thumb}`) : '/assets/img/blog/4.jpg');

    return (
        <div className="home-blog-three-area default-padding bg-gray bg-cover" style={{ backgroundImage: `url('/assets/img/shape/banner-16.jpg')` }}>
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
                                <Link href={featuredUrl}>
                                    <Image src={featuredImg} alt={featured.title} width={760} height={455} style={{ objectFit: "cover" }} />
                                </Link>
                            </div>
                            <div className="info">
                                <div className="blog-one-meta">
                                    <ul>
                                        <li>
                                            <Link href="#">{featured.category || "Technology"}</Link>
                                        </li>
                                        <li>
                                            {featured.date}
                                        </li>
                                    </ul>
                                </div>
                                <h3 className="blog-title">
                                    <Link href={featuredUrl}>
                                        {featured.title}
                                    </Link>
                                </h3>
                                <Link href={featuredUrl} className="btn-regular">
                                    Read more <Image src="/assets/img/icon/arrow-right-three.png" alt="Arrow" width={41} height={14} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        {rest.map(blog =>
                            <SingleBlogV3 key={blog.id} blog={blog} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogV4;
