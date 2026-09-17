import Image from "next/image";
import Link from "next/link";

interface MetricType {
    label: string;
    val: string;
}

interface DataType {
    id: number;
    slug?: string;
    title: string;
    client?: string;
    description?: string;
    metrics?: MetricType[];
    thumb: string;
    shape?: string;
    actionText?: string;
    actionIcon?: string;
    tags: string[];
}

const SingleProjectV1 = ({ project }: { project: DataType }) => {
    const { id, slug, title, client, description, metrics, thumb, actionText = "Explore Blueprint", tags } = project;
    const detailUrl = `/project-details/${slug || id}`;

    return (
        <div className="project-style-one-item">
            <div className="thumb">
                <Image
                    src={`/assets/img/projects/${thumb}`}
                    alt={title}
                    width={1200}
                    height={780}
                    className="project-dashboard-img"
                    sizes="(max-width: 768px) 92vw, (max-width: 1024px) 75vw, 550px"
                    priority
                />
            </div>
            <div className="info">
                <div className="top">
                    {client && <span className="project-client-badge">{client}</span>}
                    <h3><Link href={detailUrl}>{title}</Link></h3>
                    {description && <p className="project-desc">{description}</p>}
                    {metrics && metrics.length > 0 && (
                        <div className="project-metrics-grid">
                            {metrics.map((metric, idx) => (
                                <div key={idx} className="project-metric-box">
                                    <div className="metric-val">{metric.val}</div>
                                    <div className="metric-label">{metric.label}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="bottom">
                    <Link href={detailUrl} className="btn-simple">
                        {actionText}
                        <i className="fas fa-long-arrow-right" />
                    </Link>
                    <ul className="project-tags">
                        {tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SingleProjectV1;
