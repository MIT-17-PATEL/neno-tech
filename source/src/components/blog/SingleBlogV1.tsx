import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    thumb: string;
    category: string;
    date: string;
    title: string;
    readTime?: string;
    description?: string;
    buttonText?: string;
}

const SingleBlogV1 = ({ blog }: { blog: DataType }) => {
    const { id, thumb, category, date, title, readTime, description } = blog;
    const articleLink = `/blog-single-with-sidebar/${id}`;

    return (
        <div className="blog-glass-card w-100 d-flex flex-column justify-content-between">
            <div>
                {/* Rounded Image Container with Smooth Hover Scale */}
                <div className="blog-image-wrapper">
                    <Link href={articleLink} className="blog-image-link d-block position-relative overflow-hidden">
                        <Image
                            src={`/assets/img/blog/${thumb}`}
                            alt={title}
                            width={600}
                            height={380}
                            className="blog-card-img"
                        />
                        {category && (
                            <span className="blog-category-tag">
                                {category}
                            </span>
                        )}
                    </Link>
                </div>

                {/* Meta Row: Date & Read Time */}
                <div className="blog-meta-row mt-3 mb-2">
                    <span className="blog-meta-date">{date}</span>
                    <span className="blog-meta-dot">•</span>
                    <span className="blog-meta-time">{readTime || "5 min read"}</span>
                </div>

                {/* Article Title */}
                <h3 className="blog-item-title">
                    <Link href={articleLink}>
                        {title}
                    </Link>
                </h3>

                {/* Short Excerpt */}
                {description && (
                    <p className="blog-item-excerpt">
                        {description}
                    </p>
                )}
            </div>

            {/* Read Article Link */}
            <div className="blog-item-footer mt-3 pt-3">
                <Link href={articleLink} className="blog-read-article-link">
                    <span>Read Article</span>
                    <i className="fas fa-arrow-right" />
                </Link>
            </div>
        </div>
    );
};

export default SingleBlogV1;
