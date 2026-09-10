import Link from 'next/link';
import ArchiveWidgetData from "@/assets/jsonData/widgets/ArchiveWidgetData.json";

const ArchiveWidget = () => {
    return (
        <div
            className="sidebar-item archives p-4 rounded-4 mb-4"
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
                Archives
            </h4>
            <div className="sidebar-info">
                <ul className="p-0 m-0 list-unstyled">
                    {ArchiveWidgetData.map(archive =>
                        <li key={archive.id} className="mb-2">
                            <Link
                                href="#"
                                className="d-flex align-items-center gap-2 text-decoration-none py-1"
                                style={{
                                    color: "#cbd5e1",
                                    fontSize: "13.5px",
                                    transition: "color 0.2s ease"
                                }}
                            >
                                <i className="far fa-folder" style={{ color: "#38bdf8" }} />
                                <span>{archive.title}</span>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ArchiveWidget;
