import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    thumb: string;
    category: string;
    date: string;
    title: string;
}

const SingleBlogV1 = ({ blog }: { blog: DataType }) => {
    const { id, thumb, category, date, title } = blog;

    return (
        <>
            <div className="blog-style-one fade-up-anim">
                <div className="thumb zoom-thumb">
                    <Link href={`/blog-single-with-sidebar/${id}`}>
                        <Image className="img-reveal" src={`/assets/img/blog/${thumb}`} alt="Thumb" width={800} height={500} />
                    </Link>
                </div>
                <div className="info">
                    <div className="blog-one-meta">
                        <ul>
                            <li>
                                <a href="#">{category}</a>
                            </li>
                            <li>
                                {date}
                            </li>
                        </ul>
                    </div>
                    <h2 className="blog-title">
                        <Link href={`/blog-single-with-sidebar/${id}`}>{title}</Link>
                    </h2>
                    <Link href={`/blog-single-with-sidebar/${id}`} className="btn-simple">
                        Explore More <i className="fas fa-long-arrow-right" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogV1;