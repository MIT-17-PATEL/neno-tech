import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    title: string;
    icon: string;
    headingId: string;
    collapseId: string;
    description: string;
    thumb: string;
    features: string[];
}

const SingleServiceV7 = ({ service }: { service: DataType }) => {
    const { id, title, icon, headingId, collapseId, description, thumb, features } = service;

    // Determine if this is the first item (id === 1)
    const isFirst = id === 1;
    const collapseClasses = `accordion-collapse collapse ${isFirst ? 'show' : ''}`;
    const buttonClasses = `accordion-button ${isFirst ? '' : 'collapsed'}`;
    const ariaExpanded = isFirst ? 'true' : 'false';

    return (
        <div className="services-style-seven-item">
            <h2 className="accordion-header" id={headingId}>
                <button
                    className={buttonClasses}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded={ariaExpanded}
                    aria-controls={collapseId}
                >
                    <i className={icon} /> {title}
                </button>
            </h2>

            <div
                id={collapseId}
                className={collapseClasses}
                aria-labelledby={headingId}
                data-bs-parent="#faqAccordion"
            >
                <div className="accordion-body">
                    <div className="info">
                        <p>{description}</p>
                        <Link href={`/services-details/${id}`} className="btn-simple">
                            Explore More <i className="fas fa-long-arrow-right" />
                        </Link>
                    </div>

                    <div className="thumb">
                        <Image src={`/assets/img/services/${thumb}`} alt={title} width={600} height={400} />
                    </div>

                    <ul className="list-style-two">
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceV7;
