import TeamV1Data from '@/assets/jsonData/team/TeamV1Data.json'
import SingleTeamV1 from './SingleTeamV1';
import SplitTextV3 from '../animation/SplitTextV3';

interface DataType {
    sectionClass?: string;
    hasTitle?: boolean;
    teamFull?: boolean;
}

const TeamV1 = ({ sectionClass, hasTitle, teamFull }: DataType) => {

    // Decide data once
    const teamMembers = teamFull ? TeamV1Data : TeamV1Data.slice(0, 4);

    return (
        <>
            <div className={`team-style-one-area default-padding ${sectionClass ? sectionClass : ""}`}>

                {/* has Title  */}

                {hasTitle &&
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h4 className="sub-title">AI Developer</h4>
                                    <h2 className="title split-text-right split-text-in-right">
                                        <SplitTextV3
                                            delay={10}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            {"Meet our talent for"} <br /> {"intelligent solutions"}
                                        </SplitTextV3>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="team-style-one-items">
                                {teamMembers.map(member =>
                                    <SingleTeamV1 member={member} key={member.id} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamV1;