import TeamV2Data from "@/assets/jsonData/team/TeamV2Data.json";
import SingleTeamV2 from "./SingleTeamV2";
import SplitText from "../animation/SplitText";
import Image from "next/image";
import AppMotion from "../animation/AppMotion";

interface DataType {
    teamFull?: boolean
    sectionClass?: string;
}

const TeamV2 = ({ teamFull, sectionClass }: DataType) => {

    // Decide data once
    const teamMembers = teamFull ? TeamV2Data : TeamV2Data.slice(0, 5);

    return (
        <>
            <div className={`team-style-two-area bottom-less ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="team-style-two-items">
                        <AppMotion animation="parallax" className="shape">
                            <Image className="upDownScrol" src="/assets/img/illustration/9.png" alt="Image Not Found" width={400} height={400} />
                        </AppMotion>
                        <div className="row align-center">
                            <div className="col-lg-6 col-md-6 mb-30">
                                <div className="team-style-two-heading">
                                    <h4 className="sub-title">Ai Developer</h4>
                                    <h2 className="title split-text-right split-text-in-right">
                                        <SplitText
                                            delay={8}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            Meet our talent for intelligent solution
                                        </SplitText>
                                    </h2>
                                </div>
                            </div>

                            {/* Team Members */}
                            {teamMembers.map((member) => (
                                <div className="col-lg-3 col-md-6 mb-30" key={member.id}>
                                    <SingleTeamV2 member={member} />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamV2;
