import Link from 'next/link';
import TagWidgetData from "@/assets/jsonData/widgets/TagWidgetData.json";

const TagsWidget = () => {
    return (
        <div
            className="sidebar-item tags p-4 rounded-4 mb-4"
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
                Popular Topics
            </h4>
            <div className="sidebar-info">
                <ul className="d-flex flex-wrap gap-2 p-0 m-0 list-unstyled">
                    {TagWidgetData.map(tag =>
                        <li key={tag.id}>
                            <Link
                                href="#"
                                className="d-inline-block text-decoration-none px-3 py-1 rounded-pill"
                                style={{
                                    background: "rgba(255, 255, 255, 0.04)",
                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                    color: "#cbd5e1",
                                    fontSize: "12.5px",
                                    transition: "all 0.2s ease"
                                }}
                            >
                                #{tag.title}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default TagsWidget;
