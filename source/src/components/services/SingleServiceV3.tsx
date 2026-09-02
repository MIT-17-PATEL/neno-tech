import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    icon: string;
    iconLight: string;
    title: string;
    description: string;
    features: string[];
}

interface PropsType {
    service: DataType;
    lightIcon?: boolean;
}

const SingleServiceV3 = ({ service, lightIcon }: PropsType) => {
    const { icon, title, description, features, iconLight } = service;

    return (
        <>
            <div className="service-style-three-item">
                <div className="top">
                    <div className="icon">

                        {lightIcon ?
                            <Image src={`/assets/img/icon/${iconLight}`} alt="Image Not Found" width={128} height={128} /> :
                            <Image src={`/assets/img/icon/${icon}`} alt="Image Not Found" width={128} height={128} />
                        }
                    </div>
                    <h4><Link href={`/services-details/${service.id}`}>{title}</Link></h4>
                    <p> {description}</p>
                </div>
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>
                            <Link href="#">{feature}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default SingleServiceV3;