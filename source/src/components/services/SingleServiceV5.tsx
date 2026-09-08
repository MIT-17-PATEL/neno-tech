import Link from "next/link";

interface DataType {
    id: number;
    icon: string;
    title: string;
    description: string;
}

const SingleServiceV5 = ({ service }: { service: DataType }) => {
    const { id, icon, title, description } = service;

    return (
        <>
            <div className="col-xl-3 col-lg-6 col-md-6 mb-30 service-five-single">
                <div className="service-style-five-item">
                    <i className={icon} />
                    <h4><Link href={`/services-details/${id}`}>{title}</Link></h4>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
};

export default SingleServiceV5;
