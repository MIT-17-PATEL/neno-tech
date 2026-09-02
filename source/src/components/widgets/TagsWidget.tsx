import Link from 'next/link';
import TagWidgetData from "@/assets/jsonData/widgets/TagWidgetData.json"

const TagsWidget = () => {
    return (
        <>
            <div className="sidebar-item tags">
                <h4 className="title">tags</h4>
                <div className="sidebar-info">
                    <ul>
                        {TagWidgetData.map(tag =>
                            <li key={tag.id}>
                                <Link href="#">{tag.title}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TagsWidget;