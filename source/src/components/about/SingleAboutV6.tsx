interface DataType {
    id: number;
    title: string;
    description: string;
}

const SingleAboutV6 = ({ item }: { item: DataType }) => {
    const { title, description } = item;

    return (
        <>
            <li>
                <h4>{title}</h4>
                <p>
                    {description}
                </p>
            </li>
        </>
    );
};

export default SingleAboutV6;