import SplitText from "../animation/SplitText";
import TeamV2Data from "@/assets/jsonData/team/TeamV2Data.json";
import SingleTeamV3 from "./SingleTeamV3";
import Image from "next/image";
import AppMotion from "../animation/AppMotion";

const TeamV3 = () => {
    return (
        <>
            <div className="team-style-two-area default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">AI Developer</h4>
                                <h2 className="title split-text-right split-text-in-right">
                                    <SplitText
                                        delay={8}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Meet our talent for the intelligent solutions
                                    </SplitText>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="team-style-two-items">
                        <AppMotion animation="parallax" className="shape">
                            <Image className="upDownScrol" src="/assets/img/illustration/17.png" alt="Image Not Found" width={330} height={370} />
                        </AppMotion>
                        <div className="row align-center">
                            {TeamV2Data.slice(0, 4).map((member) => (
                                <div className="col-lg-3 col-md-6 mb-30" key={member.id}>
                                    <SingleTeamV3 member={member} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamV3;