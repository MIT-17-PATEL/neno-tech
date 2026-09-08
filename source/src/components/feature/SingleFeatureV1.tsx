import Image from "next/image";

interface DataType {
    id: number;
    title: string;
    description: string;
    icon: string;
    shape: string;
}

const SingleFeatureV1 = ({ feature }: { feature: DataType }) => {
    const { title, description, icon, shape } = feature;

    return (
        <>
            <div className="content">
                <div className="icon">
                    <Image src={`/assets/img/icon/${icon}`} alt="Image Not Found" width={125} height={125} />
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <Image src={`/assets/img/shape/${shape}`} alt="Image Not Found" width={220} height={380} />
        </>
    );
};

export default SingleFeatureV1;
