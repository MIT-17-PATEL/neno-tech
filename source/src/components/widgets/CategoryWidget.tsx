import Link from 'next/link';
import CategoryWidgetData from "@/assets/jsonData/widgets/CategoryWidgetData.json"

const CategoryWidget = () => {
    return (
        <>
            <div className="sidebar-item category">
                <h4 className="title">category list</h4>
                <div className="sidebar-info">
                    <ul>
                        {CategoryWidgetData.map(category =>
                            <li key={category.id}>
                                <Link href="#">
                                    {category.title} <span>{category.count}</span>
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CategoryWidget;