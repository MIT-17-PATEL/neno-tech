import Image from "next/image";
import Link from "next/link";

export interface BlogColumnItem {
    id: string | number;
    slug?: string;
    thumb?: string;
    category?: string;
    date: string;
    title: string;
}

const SingleBlog2Column = ({ blog }: { blog: BlogColumnItem }) => {
    const { id, slug, thumb = "1.jpg", category = "AI Architecture", date, title } = blog;
    const blogUrl = `/blog-single-with-sidebar/${slug || id}`;
    const imgSrc = thumb.startsWith('/') ? thumb : `/assets/img/blog/${thumb}`;

    return (
        <div className="blog-style-two fade-up-anim">
            <div className="thumb">
                <Link href={blogUrl}>
                    <Image
                        src={imgSrc}
                        alt={title}
                        width={800}
                        height={600}
                        style={{ objectFit: "cover", width: "100%", height: "auto" }}
                    />
                </Link>
            </div>

            <div className="info">
                <div className="blog-one-meta">
                    <ul>
                        <li>
                            <Link href="#">{category}</Link>
                        </li>
                        <li>{date}</li>
                    </ul>
                </div>
                <h3>
                    <Link href={blogUrl}>
                        {title}
                    </Link>
                </h3>

                <Link
                    href={blogUrl}
                    className="btn-regular"
                >
                    Read more <Image src="/assets/img/icon/arrow-right-three.png" alt="Arrow" width={41} height={14} />
                </Link>
            </div>
        </div>
    );
};

export default SingleBlog2Column;
