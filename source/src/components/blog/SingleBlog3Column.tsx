import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    thumb: string;
    category: string;
    date: string;
    title: string;
}

const SingleBlog3Column = ({ blog }: { blog: DataType }) => {
    const { id, thumb, category, date, title } = blog;

    return (
        <>
            <div className="blog-style-two fade-up-anim">
                <div className="thumb">
                    <Link href={`/blog-single-with-sidebar/${id}`}>
                        <Image
                            src={`/assets/img/blog/${thumb}`}
                            alt="Thumb"
                            width={800}
                            height={600}
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
                        <Link href={`/blog-single-with-sidebar/${id}`}>
                            {title}
                        </Link>
                    </h3>

                    <Link
                        href={`/blog-single-with-sidebar/${id}`}
                        className="btn-regular"
                    >
                        Read more <Image src="/assets/img/icon/arrow-right-three.png" alt="Image Not Found" width={41} height={14} />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlog3Column;
