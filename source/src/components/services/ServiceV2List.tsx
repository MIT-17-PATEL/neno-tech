import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    icon: string;
    title: string;
    description: string;
}

const ServiceV2List = ({ service }: { service: DataType }) => {
    const { icon, title, description, id } = service;

    return (
        <>
            <li>
                <div className="icon">
                    <Image src={`/assets/img/icon/${icon}`} alt="Image Not Found" width={128} height={128} />
                </div>
                <div className="info">
                    <h4><Link href={`/services-details/${id}`}>{title}</Link></h4>
                    <p>
                        {description}
                    </p>
                </div>
            </li>
        </>
    );
};

export default ServiceV2List;