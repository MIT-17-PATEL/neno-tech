import Image from "next/image";

interface DataType {
    id: number;
    title: string;
    description: string;
    icon: string;
}

const PriceV1List = ({ list }: { list: DataType }) => {
    const { title, description, icon } = list;

    return (
        <>
            <li>
                <div className="icon">
                    <Image src={`/assets/img/icon/${icon}`} alt="Image Not FOund" width={150} height={128} />
                </div>
                <div className="info">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </li>
        </>
    );
};

export default PriceV1List;