import Image from 'next/image';
import Link from 'next/link';

interface Blog {
    id: number;
    thumb: string;
    title: string;
    date: string;
    readTime?: string;
}

interface SingleRecentPostProps {
    blog: Blog;
}

const SingleRecentPost: React.FC<SingleRecentPostProps> = ({ blog }) => {
    const { id, thumb, title, date } = blog;

    const truncateString = (str: string): string => {
        if (str.length <= 48) {
            return str;
        }
        return `${str.slice(0, 48)}...`;
    };

    const truncatedTitle = truncateString(title);

    return (
        <li className="d-flex align-items-center mb-3 pb-3 gap-3" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
            <div
                className="thumb flex-shrink-0 position-relative overflow-hidden"
                style={{ width: "80px", height: "60px", borderRadius: "10px", border: "1px solid rgba(255, 255, 255, 0.08)" }}
            >
                <Link href={`/blog-single-with-sidebar/${id}`} className="d-block w-100 h-100">
                    <Image
                        src={`/assets/img/blog/${thumb}`}
                        width={160}
                        height={120}
                        alt={title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease" }}
                    />
                </Link>
            </div>
            <div className="info flex-grow-1 min-w-0">
                <div className="meta-title mb-1">
                    <span className="post-date d-inline-flex align-items-center gap-1" style={{ fontSize: "12px", color: "#818cf8", fontWeight: 500 }}>
                        <i className="far fa-calendar-alt" style={{ fontSize: "11px" }} /> {date}
                    </span>
                </div>
                <h6 className="m-0" style={{ fontSize: "13.5px", lineHeight: "1.4", fontWeight: 600 }}>
                    <Link
                        href={`/blog-single-with-sidebar/${id}`}
                        className="text-decoration-none d-block"
                        style={{ color: "#e2e8f0", transition: "color 0.2s ease" }}
                    >
                        {truncatedTitle}
                    </Link>
                </h6>
            </div>
        </li>
    );
};

export default SingleRecentPost;
