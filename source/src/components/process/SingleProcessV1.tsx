interface DataType {
    id: number;
    step: string;
    title: string;
    description: string;
}

const SingleProcessV1 = ({ process }: { process: DataType }) => {
    const { step, title, description } = process;

    return (
        <>
            <div className="process-style-one-item fade-up-anim">
                <h2>{step}</h2>
                <h4>{title}</h4>
                <p>
                    {description}
                </p>
            </div>
        </>
    );
};

export default SingleProcessV1;
