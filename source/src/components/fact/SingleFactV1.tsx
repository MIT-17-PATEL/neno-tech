import Counter from "../counter/Counter";

interface DataType {
    id: number;
    value: number;
    suffix: string;
    title: string;
    description: string;
}

const SingleFactV1 = ({ fact }: { fact: DataType }) => {
    const { value, suffix, title, description } = fact;

    return (
        <>
            <div className="fun-fact">
                <div className="top">
                    <div className="js-counter"><Counter end={value} />{suffix}</div>
                </div>
                <div className="info">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
};

export default SingleFactV1;