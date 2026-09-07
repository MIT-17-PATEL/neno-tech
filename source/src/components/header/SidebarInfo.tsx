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
                            <img src="/assets/img/logo-light.png" alt="Logo" style={{ height: '70px', width: 'auto', objectFit: 'contain', transform: 'scale(2.5)', transformOrigin: 'left center' }} />
                        </Link>
                    </div>
                    <p>
                        End-to-end technology services engineered for scale — from specialized engineering talent on demand to complete AI and custom product delivery.
                    </p>
                </div>
                <div className="widget address">
                    <div>
                        <ul>
                            <li>
                                <div className="content">
                                    <p>Address</p>
                                    <strong>San Francisco, CA & Global Engineering Hubs</strong>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <p>Email</p>
                                    <strong>contact@nenotech.com</strong>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <p>Contact</p>
                                    <strong>+1 (555) 019-2834</strong>
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
