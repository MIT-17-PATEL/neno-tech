import LayoutV1 from "@/components/layouts/LayoutV1";
import TeamV2 from "@/components/team/TeamV2";

const TeamPage = () => {
    return (
        <>
            <LayoutV1>
                <TeamV2 teamFull={true} sectionClass="default-padding-bottom bottom-less mt-200 mt-md-120 mt-xs-70" />
            </LayoutV1>
        </>
    );
};

export default TeamPage;