interface DataType {
    id: number;
    listTitle: string;
    memberInfo: {
        id: number;
        title: string;
        subtitle: string;
        year: string;
    }[];
}

const TeamListItem = ({ data }: { data: DataType }) => {
    const { listTitle, memberInfo } = data;

    return (
        <div className="team-list-item">
            <h4>{listTitle}</h4>

            <ul>
                {memberInfo.map(({ id, title, subtitle, year }) => (
                    <li key={id}>
                        <h5>{title}</h5>
                        <span>{subtitle}</span>
                        <p>{year}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeamListItem;
