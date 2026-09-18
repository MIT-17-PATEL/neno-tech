import Image from "next/image";
import Link from "next/link";

export interface BlogV3Item {
    id: string | number;
    slug?: string;
    category?: string;
    date: string;
    title: string;
    description?: string;
    shortDescription?: string;
}

const SingleBlogV3 = ({ blog }: { blog: BlogV3Item }) => {
    const { id, slug, category = "AI Architecture", date, title, description, shortDescription } = blog;
    const blogUrl = `/blog-single-with-sidebar/${slug || id}`;
    const displayDesc = shortDescription || description;

    return (
        <div className="blog-style-three fade-up-anim mb-4">
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
                <h3 className="blog-title">
                    <Link href={blogUrl}>{title}</Link>
                </h3>
                {displayDesc && (
                    <p>
                        {displayDesc}
                    </p>
                )}
                <Link href={blogUrl} className="btn-regular">
                    Read more <Image src="/assets/img/icon/arrow-right-three.png" alt="Arrow" width={41} height={14} />
                </Link>
            </div>
        </div>
    );
};

export default SingleBlogV3;
