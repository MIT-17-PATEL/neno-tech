interface DataType {
    id: number;
    icon: string;
    title: string;
    description: string;
}

const SingleChooseV2 = ({ feature }: { feature: DataType }) => {
    const { icon, title, description } = feature;

    return (
        <>
            <li>
                <div className="icon">
                    <i className={icon} />
                </div>
                <div className="info">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </li>
        </>
    );
};

export default SingleChooseV2;