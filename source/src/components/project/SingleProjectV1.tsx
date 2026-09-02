import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    title: string;
    thumb: string;
    shape: string;
    actionText: string;
    actionIcon: string;
    tags: string[];
}

const SingleProjectV1 = ({ project }: { project: DataType }) => {
    const { id, title, thumb, shape, actionText, tags } = project;

    return (
        <>
            <div className="project-style-one-item">
                <div className="thumb">
                    <Image src={`/assets/img/projects/${thumb}`} alt="Image Not Found" width={800} height={900} />
                    <Image src={`/assets/img/shape/${shape}`} alt="Image Not Found" width={260} height={320} />
                </div>
                <div className="info">
                    <div className="top">
                        <h3><Link href={`/project-details/${id}`}>{title}</Link></h3>
                    </div>
                    <div className="bottom">
                        <Link href={`/project-details/${id}`} className="btn-simple">{actionText}
                            <i className="fas fa-long-arrow-right" />
                        </Link>
                        <ul className="project-tags mt-30">
                            {tags.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProjectV1;