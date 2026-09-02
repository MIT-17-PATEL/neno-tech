import Link from "next/link";
import Image from "next/image";
import MainMenu from "./MainMenu";
import SidebarInfo from "./SidebarInfo";

interface DataType {
    lightMode?: boolean;
    openInfoBar: () => void;
    isOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
    isMenuSticky: boolean;
    isInfoOpen: boolean;
    closeInfoBar: () => void;
}

const HeaderV1 = ({ lightMode, openInfoBar, isOpen, openMenu, closeMenu, isMenuSticky, isInfoOpen, closeInfoBar }: DataType) => {
    return (
        <>
            <header>
                <nav className={`navbar mobile-sidenav navbar-sticky navbar-default validnavs white navbar-fixed on menu-center no-full  ${isMenuSticky ? "sticked" : "no-background"} ${isOpen ? "navbar-responsive" : ""}`}>

                    <div className="container-full d-flex justify-content-between align-items-center">
                        <div className="navbar-header">

                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars" />
                            </button>

                            <Link className="navbar-brand" href="/" style={{ display: 'flex', alignItems: 'center', minHeight: '80px' }}>
                                <span style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '1px', color: lightMode ? '#000' : '#fff', whiteSpace: 'nowrap', fontFamily: 'serif' }}>
                                    NENO TECHNOLOGY
                                </span>
                            </Link>
                        </div>

                        <div className={`collapse navbar-collapse ${isOpen ? "show collapse-mobile" : "collapse-mobile"}`} id="navbar-menu">
                            <Image src="/assets/img/logo-light.svg" alt="Logo" width={750} height={160} />

                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                <i className="fa fa-times" />
                            </button>

                            <MainMenu navbarPlacement="navbar-center" />
                        </div>

                        <div className="attr-right">
                            <div className="attr-nav">
                                <ul>
                                    <li className="side-menu">
                                        <button className="main-bar" onClick={openInfoBar}>
                                            <span className="bar-1" />
                                            <span className="bar-2" />
                                            <span className="bar-3" />
                                        </button>
                                    </li>
                                    <li className="button">
                                        <Link className="btn btn-style-one btn-border-light" href="/contact-us">
                                            Get Started <i className="fas fa-arrow-right" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <SidebarInfo isInfoOpen={isInfoOpen} closeInfoBar={closeInfoBar} />
                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`} />
                </nav>
            </header>
        </>
    );
};

export default HeaderV1;