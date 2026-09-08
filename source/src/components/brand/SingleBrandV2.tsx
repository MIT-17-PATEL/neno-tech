import Image from "next/image";

interface DataType {
    id: number;
    category: string;
    logo: string;
    website: string;
}

const SingleBrandV2 = ({ brand }: { brand: DataType }) => {
    const { category, logo, website } = brand;

    return (
        <>
            <div className="brand-style-two-item wow fadeInUp">
                <h5>{category}</h5>
                <div className="info">
                    <div className="logo-icon">
                        <Image src={`/assets/img/logo/${logo}`} alt="Image Not Found" width={620} height={150} />
                    </div>
                    <a href={`https://www.${website}`} target="_blank" rel="noopener noreferrer">
                        {website}
                    </a>
                </div>
            </div>
        </>
    );
};

export default SingleBrandV2;
