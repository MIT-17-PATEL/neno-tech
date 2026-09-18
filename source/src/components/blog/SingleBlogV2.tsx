import Image from "next/image";
import Link from "next/link";

export interface BlogV2Item {
    id: string | number;
    slug?: string;
    thumb?: string;
    category?: string;
    date: string;
    title?: string;
    title2?: string;
}

const SingleBlogV2 = ({ blog }: { blog: BlogV2Item }) => {
    const { id, slug, thumb = "1.jpg", category = "AI Architecture", date, title, title2 } = blog;
    const blogUrl = `/blog-single-with-sidebar/${slug || id}`;
    const displayTitle = title || title2 || "Article";
    const imgSrc = thumb.startsWith('/') ? thumb : `/assets/img/blog/${thumb}`;

    return (
        <div className="blog-style-two fade-up-anim">
            <div className="thumb zoom-thumb">
                <Link href={blogUrl}>
                    <Image className="img-reveal" src={imgSrc} alt={displayTitle} width={800} height={500} style={{ objectFit: "cover" }} />
                </Link>
            </div>
            <div className="info">
                <div className="blog-one-meta">
                    <ul>
                        <li>
                            <Link href="#">{category}</Link>
                        </li>
                        <li>
                            {date}
                        </li>
                    </ul>
                </div>
                <h4 className="blog-title">
                    <Link href={blogUrl}>{displayTitle}</Link>
                </h4>
                <Link href={blogUrl} className="btn-simple">
                    Explore More <i className="fas fa-long-arrow-right" />
                </Link>
            </div>
        </div>
    );
};

export default SingleBlogV2;
