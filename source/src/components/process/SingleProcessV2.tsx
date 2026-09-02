interface DataType {
    id: number;
    step: string;
    title: string;
    description: string;
}

const SingleProcessV2 = ({ process }: { process: DataType }) => {
    const { step, title, description } = process;

    return (
        <>
            <div className="process-style-two-item">
                <span>{step}</span>
                <h4>{title}</h4>
                <p>
                    {description}
                </p>
            </div>
        </>
    );
};

export default SingleProcessV2;