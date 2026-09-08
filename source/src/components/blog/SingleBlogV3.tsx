import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    category: string;
    date: string;
    title: string;
    description: string;
}

const SingleBlogV3 = ({ blog }: { blog: DataType }) => {
    const { id, category, date, title, description } = blog;

    return (
        <>
            <div className="blog-style-three fade-up-anim">
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
                    <h3 className="blog-title">
                        <Link href={`/blog-single-with-sidebar/${id}`}>{title}</Link>
                    </h3>
                    <p>
                        {description}
                    </p>
                    <Link href={`/blog-single-with-sidebar/${id}`} className="btn-regular">
                        Read more <Image src="/assets/img/icon/arrow-right-three.png" alt="Image Not Found" width={41} height={14} />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogV3;
