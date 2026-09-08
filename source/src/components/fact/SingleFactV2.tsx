import Counter from "../counter/Counter";

interface DataType {
    id: number;
    value: number;
    title: string;
    bgClass: string;
    textClass: string;
    suffix: string;
}

const SingleFactV2 = ({ fact }: { fact: DataType }) => {
    const { value, title, bgClass, textClass, suffix } = fact;

    return (
        <>
            <div className={`fun-fact-car-two ${bgClass} ${textClass} fade-up-anim`}>
                <div className="js-counter"><Counter end={value} />{suffix}</div>
                <h5>{title}</h5>
            </div>
        </>
    );
};

export default SingleFactV2;
