import Image from "next/image";

interface DataType {
    id: number;
    icon: string;
    title: string;
    description: string;
}

const SingleProcessV3 = ({ process }: { process: DataType }) => {
    const { icon, title, description } = process;

    return (
        <>
            <div className="process-style-three-item fade-up-anim">
                <div className="icon">
                    <Image src={`/assets/img/icon/${icon}`} alt="Image Not Found" width={128} height={128} />
                </div>
                <h4>{title}</h4>
                <p>
                    {description}
                </p>
            </div>
        </>
    );
};

export default SingleProcessV3;
