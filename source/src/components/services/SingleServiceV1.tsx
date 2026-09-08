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
            <div className="equal-box" style={{ flex: '1 1 calc(33.333% - 16px)' }}>
                <div className="service-style-one-item" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
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
