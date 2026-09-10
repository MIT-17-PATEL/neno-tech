import Link from 'next/link';
import CategoryWidgetData from "@/assets/jsonData/widgets/CategoryWidgetData.json";

const CategoryWidget = () => {
    return (
        <div
            className="sidebar-item category p-4 rounded-4 mb-4"
            style={{
                background: "rgba(255, 255, 255, 0.035)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.25)"
            }}
        >
            <h4
                className="title fw-bold mb-3 pb-2"
                style={{
                    color: "#ffffff",
                    fontSize: "17px",
                    letterSpacing: "-0.01em",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
                }}
            >
                Categories
            </h4>
            <div className="sidebar-info">
                <ul className="p-0 m-0 list-unstyled">
                    {CategoryWidgetData.map(category =>
                        <li key={category.id} className="mb-2">
                            <Link
                                href="#"
                                className="d-flex align-items-center justify-content-between p-2 px-3 rounded-3 text-decoration-none"
                                style={{
                                    background: "rgba(255, 255, 255, 0.03)",
                                    color: "#cbd5e1",
                                    border: "1px solid rgba(255, 255, 255, 0.06)",
                                    fontSize: "13.5px",
                                    transition: "all 0.2s ease"
                                }}
                            >
                                <span>{category.title}</span>
                                <span
                                    style={{
                                        background: "rgba(99, 102, 241, 0.15)",
                                        color: "#818cf8",
                                        padding: "2px 8px",
                                        borderRadius: "20px",
                                        fontSize: "11px",
                                        fontWeight: 600
                                    }}
                                >
                                    {category.count}
                                </span>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default CategoryWidget;
