import Link from "next/link";
import Image from "next/image";
import HeaderNewsLetter from "../form/HeaderNewsLetter";
import SocialV3 from "../social/SocialV3";

interface SidebarInfoProps {
    isInfoOpen: boolean;
    closeInfoBar?: () => void;
}

const SidebarInfo = ({ isInfoOpen, closeInfoBar }: SidebarInfoProps) => {
    return (
        <>
            <div className={`side ${isInfoOpen ? "on" : ""}`}>
                <button className="close-side" onClick={closeInfoBar}>
                    <i className="fas fa-times" />
                </button>
                <div className="widget">
                    <div className="logo">
                        <Link href="/">
                            <img src="/assets/img/logo-light.png" alt="Neno Technology" style={{ height: '38px', width: 'auto', objectFit: 'contain' }} />
                        </Link>
                    </div>
                    <p>
                        End-to-end technology services engineered for scale, from specialized engineering talent on demand to production AI and custom software delivery.
                    </p>
                </div>
                <div className="widget address">
                    <div>
                        <ul>
                            <li>
                                <div className="content">
                                    <p>Headquarters</p>
                                    <strong>13th Floor, GIFT Tower One, GIFT City, Gandhinagar, Gujarat</strong>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <p>Email</p>
                                    <strong>info@nenotechnology.com</strong>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <p>Careers</p>
                                    <strong>careers@nenotechnology.com</strong>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="widget newsletter">
                    <h4>Get Subscribed!</h4>
                    <HeaderNewsLetter />
                </div>
                <div className="widget social">
                    <ul className="link">
                        <SocialV3 />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SidebarInfo;
