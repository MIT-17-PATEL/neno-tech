import Image from "next/image";

interface DataType {
    logo: string;
    title: string;
    description: string;
    year: number;
    active: boolean;
}

const SingleAwardV1 = ({ award }: { award: DataType }) => {
    const { logo, title, description, year } = award;

    return (
        <>
            <div className="logo">
                <Image src={`/assets/img/brand/${logo}`} alt="Image Not Found" width={300} height={400} />
            </div>
            <div className="title">
                <h4>{title}</h4>
            </div>
            <div className="info">
                <p>
                    {description}
                </p>
            </div>
            <div className="year">
                <h2>{year}</h2>
            </div>
        </>
    );
};

export default SingleAwardV1;
