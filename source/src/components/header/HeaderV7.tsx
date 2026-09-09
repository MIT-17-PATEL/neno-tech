import Link from "next/link";
import MainMenu from "./MainMenu";

interface DataType {
    isOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
    isMenuSticky: boolean;
}

const HeaderV7 = ({ isOpen, openMenu, closeMenu, isMenuSticky, isHomePill }: DataType & { isHomePill?: boolean }) => {
    return (
        <>
            <header className={`header-v7-wrapper ${isMenuSticky ? "sticked" : ""}`}>
                <nav className={`navbar mobile-sidenav navbar-common navbar-default validnavs on menu-center no-full glass ${isHomePill ? `home-pill-nav rounded-full ${isMenuSticky ? "sticked" : ""}` : (isMenuSticky ? "navbar-sticky sticked" : "navbar-sticky navbar-fixed no-background")} ${isOpen ? "navbar-responsive" : ""}`}>

                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="navbar-header">

                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars" />
                            </button>

                            <Link className="navbar-brand" href="/">
                                <img src="/assets/img/logo-light.png" className="logo" alt="Neno Technology" />
                            </Link>
                        </div>

                        <div className={`collapse navbar-collapse ${isOpen ? "show collapse-mobile" : "collapse-mobile"}`} id="navbar-menu">
                            <Link href="/" className="mobile-brand-link">
                                <img src="/assets/img/logo-light.png" alt="Neno Technology" className="logo" />
                            </Link>

                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                <i className="fa fa-times" />
                            </button>

                            <MainMenu navbarPlacement="navbar-center" />
                        </div>

                        <div className="attr-right">
                            <div className="attr-nav">
                                <ul>
                                    <li className="button">
                                        <Link className="btn btn-style-one btn-theme" href="/contact-us">
                                            Book A Call <i className="fas fa-arrow-right" />
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

export default HeaderV7;
