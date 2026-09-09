import Link from "next/link";
import Image from "next/image";
import MainMenu from "./MainMenu";

interface DataType {
    openInfoBar: () => void;
    isOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
    isMenuSticky: boolean;
}

const HeaderV8 = ({ isOpen, openMenu, closeMenu, isMenuSticky }: DataType) => {
    return (
        <>
            <header className={`header-v8-clean ${isMenuSticky ? "sticked" : ""}`}>
                <nav className={`navbar mobile-sidenav navbar-common navbar-default validnavs menu-center no-full no-background ${isOpen ? "navbar-responsive" : ""}`}>

                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="navbar-header">

                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars" />
                            </button>

                            <Link className="navbar-brand" href="/">
                                <img src="/assets/img/logo.png" className="logo" alt="Neno Technology" />
                            </Link>
                        </div>

                        <div className={`collapse navbar-collapse ${isOpen ? "show collapse-mobile" : "collapse-mobile"}`} id="navbar-menu">
                            <img src="/assets/img/logo.png" alt="Neno Technology" className="logo" />

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

export default HeaderV8;
