import Image from "next/image";
import SocialV4 from "../social/SocialV4";
import Link from "next/link";
import TeamListItem from "./TeamListItem";
import SkillProgress from "../progress/SkillProgress";
import ConsultationForm from "../form/ConsultationForm";

interface DataType {
    id: number;
    thumb: string;
    role: string;
    name: string;
    email: string;
    phone: string;
    memberData: {
        id: number;
        listTitle: string;
        memberInfo: {
            id: number;
            title: string;
            subtitle: string;
            year: string;
        }[];
    }[];
    skillProgress: {
        id: number;
        title: string;
        end: number;
    }[];
}

const TeamDetailsContent = ({ teamInfo }: { teamInfo: DataType }) => {
    const { thumb, name, role, memberData, skillProgress, email, phone } = teamInfo

    return (
        <>
            <div className="team-single-area default-padding">
                <div className="container">
                    <div className="team-single-items">
                        <div className="row">
                            <div className="col-lg-5 left-info">
                                <div className="thumb fade-up-anim">
                                    <Image src={`/assets/img/team/${thumb}`} alt="Thumb" width={800} height={900} />
                                </div>
                            </div>
                            <div className="col-lg-7 right-info pl-60 pl-md-15 pl-xs-15">
                                <div className="about">
                                    <h2 className="title">{name}</h2>
                                    <span>{role}</span>
                                    <p>
                                        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring house in never fruit up. Pasture imagine my garrets..
                                    </p>
                                    <ul>
                                        <li>
                                            <strong>Email:</strong>
                                            <a href={`mailto:${email}`}> {email}</a>
                                        </li>
                                        <li>
                                            <strong>Phone:</strong>
                                            <a href={`tel:${phone}`}> {phone}</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="social">
                                    <Link className="btn btn-style-one" href="/contact-us">
                                        Contact Me <i className="fas fa-arrow-right" />
                                    </Link>
                                    <div className="share-link">
                                        <i className="fas fa-share-alt" />
                                        <ul>
                                            <SocialV4 />
                                        </ul>
                                    </div>
                                </div>

                                <div className="team-single-card team-single-list mt-60">
                                    {memberData.map(data =>
                                        <TeamListItem data={data} key={data.id} />
                                    )}
                                </div>

                                <div className="skill-items mt-50">
                                    <h3>Personal Skills</h3>
                                    {skillProgress.map(skill =>
                                        <SkillProgress skill={skill} key={skill.id} />
                                    )}
                                </div>

                                <div className="contact-form-card mt-70"
                                    style={{ backgroundImage: 'url(/assets/img/shape/3.png)' }}>
                                    <h4 className="sub-title">Free Consultation</h4>
                                    <p>
                                        Fill out the form to get a personalized price quote and package solution from our global team of experts.
                                    </p>
                                    <ConsultationForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamDetailsContent;
