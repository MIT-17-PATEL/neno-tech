import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import TeamDetailsContent from "@/components/team/TeamDetailsContent";
import TeamV1Data from "@/assets/jsonData/team/TeamV1Data.json";

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const TeamDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = TeamV1Data.find(team => team.id === parseInt(id))

    return (
        <>
            <div className="include-breadcrumb">
                <LayoutV1>
                    <BreadCrumb title="Team Details" breadCrumb="team-details" />
                    {data && <TeamDetailsContent teamInfo={data} />}
                </LayoutV1>
            </div>
        </>
    );
};

export default TeamDetailsPage;