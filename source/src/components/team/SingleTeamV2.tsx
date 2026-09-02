import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    name: string;
    designation: string;
    thumb: string;
}

const SingleTeamV2 = ({ member }: { member: DataType }) => {
    const { name, designation, thumb, id } = member;

    return (
        <>
            <div className="team-style-two-item fade-up-anim">
                <div className="thumb">
                    <Image src={`/assets/img/team/${thumb}`} alt="Image Not Found" width={800} height={900} />
                    <div className="social-overlay">
                        <ul>
                            <li>
                                <a href="www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </li>
                            <li>
                                <a href="www.dribbble.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-dribbble" />
                                </a>
                            </li>
                            <li>
                                <a href="www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                        </ul>
                        <div className="icon">
                            <i className="fas fa-plus" /> <Link href="/contact-us">Contact</Link>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <h4><Link href={`/team-details/${id}`}>{name}</Link></h4>
                    <span>{designation}</span>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV2;