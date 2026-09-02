import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    title: string;
    icon: string;
    iconDark: string;
    description: string;
}

interface PropsType {
    service: DataType;
    darkIcon?: boolean;
}

const SingleServiceV1 = ({ service, darkIcon }: PropsType) => {
    const { title, icon, description, id, iconDark } = service;

    return (
        <>
            <div className="col-lg-4 col-md-6 service-style-one-single">
                <div className="service-style-one-item">
                    <div className="icon">
                        {darkIcon ?
                            <Image src={`/assets/img/icon/${iconDark}`} alt="Image Not Found" width={128} height={128} /> :
                            <Image src={`/assets/img/icon/${icon}`} alt="Image Not Found" width={128} height={128} />
                        }
                    </div>
                    <h4><Link href={`/services-details/${id}`}>{title}</Link></h4>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
};

export default SingleServiceV1;