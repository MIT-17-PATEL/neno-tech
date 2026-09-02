import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    thumbFull: string;
    date: string;
    author: string;
    title: string;
    description: string;
    buttonText: string;
}

const SingleBlogStandard = ({ blog }: { blog: DataType }) => {
    const { id, thumbFull, date, author, title, description, buttonText } = blog;

    return (
        <>
            <div className="item">
                <div className="thumb">
                    <Link href={`/blog-single/${id}`}>
                        <Image
                            src={`/assets/img/blog/${thumbFull}`}
                            alt="Thumb"
                            width={1730}
                            height={905}
                        />
                    </Link>
                </div>
                <div className="info">
                    <div className="meta">
                        <ul>
                            <li>
                                <Link href="#">
                                    <i className="far fa-calendar-alt" /> {date}
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="far fa-user-circle" /> {author}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <h2>
                        <Link href={`/blog-single/${id}`}>{title}</Link>
                    </h2>
                    <p>{description}</p>
                    <Link className="btn mt-10 btn-md circle btn-theme animation" href={`/blog-single/${id}`}>
                        {buttonText}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogStandard;
