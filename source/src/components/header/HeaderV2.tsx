import Link from "next/link";
import Image from "next/image";
import MainMenu from "./MainMenu";

interface DataType {
    lightMode?: boolean;
    openInfoBar: () => void;
    isOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
    isMenuSticky: boolean;
}

const HeaderV2 = ({ lightMode, isOpen, openMenu, closeMenu, isMenuSticky }: DataType) => {
    return (
        <>
            <header>
                <nav className={`navbar mobile-sidenav navbar-common navbar-sticky navbar-default validnavs white navbar-fixed on menu-center no-full ${isMenuSticky ? "sticked" : "no-background"} ${isOpen ? "navbar-responsive" : ""}`}>

                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="navbar-header">

                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars" />
                            </button>

                            <Link className="navbar-brand" href="/">
                                <Image src="/assets/img/logo-light.png" className="logo logo-display" alt="Logo" width={750} height={160} />

                                {lightMode ?
                                    <Image src="/assets/img/logo.png" className="logo logo-scrolled" alt="Logo" width={750} height={160} /> :
                                    <Image src="/assets/img/logo-light.png" className="logo logo-scrolled" alt="Logo" width={750} height={160} />
                                }

                            </Link>
                        </div>

                        <div className={`collapse navbar-collapse ${isOpen ? "show collapse-mobile" : "collapse-mobile"}`} id="navbar-menu">
                            <Image src="/assets/img/logo-light.png" alt="Logo" width={750} height={160} />

                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                <i className="fa fa-times" />
                            </button>

                            <MainMenu navbarPlacement="navbar-center" />
                        </div>

                        <div className="attr-right">
                            <div className="attr-nav">
                                <ul>
                                    <li className="button">
                                        <Link className="btn btn-style-one" href="/contact-us">
                                            Get Started <i className="fas fa-arrow-right" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`} />
                </nav>
            </header>
        </>
    );
};

export default HeaderV2;