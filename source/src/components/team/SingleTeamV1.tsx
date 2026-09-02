import Image from "next/image";
import Link from "next/link";
import SocialV1 from "../social/SocialV1";

interface DataType {
    id: number;
    name: string;
    role: string;
    thumb: string;
    delay: number;
}

const SingleTeamV1 = ({ member }: { member: DataType }) => {
    const { id, name, role, thumb } = member;

    return (
        <>
            <div className="team-style-one-item wow fadeInUp" data-wow-delay="100ms">
                <div className="thumb">
                    <Image src={`/assets/img/team/${thumb}`} alt="Image Not Found" width={800} height={800} />
                    <div className="social-overlay">
                        <ul>
                            <SocialV1 />
                        </ul>
                        <div className="icon">
                            <i className="fas fa-plus" />
                        </div>
                    </div>
                </div>
                <div className="info">
                    <h4><Link href={`/team-details/${id}`}>{name}</Link></h4>
                    <span>{role}</span>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV1;