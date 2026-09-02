import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    thumb: string;
    tags: string[];
    title: string;
}

const SingleProjectV2 = ({ project }: { project: DataType }) => {
    const { id, thumb, tags, title } = project;

    return (
        <>
            <div className="project-style-two-item">
                <Image src={`/assets/img/projects/${thumb}`} alt="Image Not Found" width={1500} height={850} />
                <div className="info bg-dark text-light" style={{ backgroundImage: 'url(/assets/img/shape/10.png)' }}>
                    <div className="top">
                        <ul className="project-tags mb-30">
                            {tags.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))}
                        </ul>
                        <h3><Link href={`/project-details/${id}`}>{title}</Link></h3>
                    </div>
                    <div className="bottom">
                        <Link href={`/project-details/${id}`} className="btn-simple">Explore More
                            <i className="fas fa-long-arrow-right" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProjectV2;