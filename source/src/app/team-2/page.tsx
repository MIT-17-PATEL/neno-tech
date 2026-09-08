import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import TeamV1 from "@/components/team/TeamV1";

const Team2Page = () => {
    return (
        <>
            <div className="include-breadcrumb">
                <LayoutV1>
                    <BreadCrumb title="Meet our talent for intelligent solutions service" breadCrumb="team-2" />
                    <TeamV1 sectionClass="team-page" teamFull={true} />
                </LayoutV1>
            </div>
        </>
    );
};

export default Team2Page;
