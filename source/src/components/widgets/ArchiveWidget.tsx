import Link from 'next/link';
import ArchiveWidgetData from "@/assets/jsonData/widgets/ArchiveWidgetData.json"

const ArchiveWidget = () => {
    return (
        <>
            <div className="sidebar-item archives">
                <h4 className="title">Archives</h4>
                <div className="sidebar-info">
                    <ul>
                        {ArchiveWidgetData.map(archive =>
                            <li key={archive.id}>
                                <Link href="#">
                                    {archive.title}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ArchiveWidget;