import Image from "next/image";

interface DataType {
    id: number;
    icon: string;
    iconDark: string;
    title: string;
    description: string;
}

const SingleServiceV4 = ({ service, bgDark }: { service: DataType; bgDark?: boolean }) => {
    const { icon, title, description, iconDark } = service;

    return (
        <>

            <div className="services-style-four-item">
                <div className="icon">
                    {bgDark ?
                        <Image src={`/assets/img/icon/${iconDark}`} alt="Image Not Found" width={128} height={128} /> :
                        <Image src={`/assets/img/icon/${icon}`} alt="Image Not Found" width={128} height={128} />
                    }
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </>
    );
};

export default SingleServiceV4;