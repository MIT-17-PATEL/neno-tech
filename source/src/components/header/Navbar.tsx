'use client';
import React from 'react';
import Link from 'next/link';
import MainMenu from './MainMenu';
import HeaderClient from './HeaderClient';

interface NavbarInnerProps {
    isOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
    isMenuSticky: boolean;
}

const NavbarInner = ({ isOpen, openMenu, closeMenu, isMenuSticky }: NavbarInnerProps) => {
    return (
        <header className={`header-v7-wrapper global-floating-header ${isMenuSticky ? "sticked" : ""}`}>
            <nav
                className={`navbar mobile-sidenav navbar-common navbar-default validnavs on menu-center no-full glass home-pill-nav rounded-full ${isMenuSticky ? "sticked" : ""} ${isOpen ? "navbar-responsive" : ""}`}
                id="main-floating-pill-nav"
                aria-label="Main Navigation"
            >
                <div className="container d-flex justify-content-between align-items-center">
                    {/* Brand Logo & Mobile Toggle */}
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target="#navbar-menu"
                            onClick={openMenu}
                            aria-label="Open Mobile Menu"
                        >
                            <i className="fa fa-bars" />
                        </button>

                        <Link className="navbar-brand" href="/">
                            <img src="/assets/img/logo-light.png" className="logo" alt="Neno Technology" />
                        </Link>
                    </div>

                    {/* Central Navigation Menu */}
                    <div className={`collapse navbar-collapse ${isOpen ? "show collapse-mobile" : "collapse-mobile"}`} id="navbar-menu">
                        <Link href="/" className="mobile-brand-link" onClick={closeMenu}>
                            <img src="/assets/img/logo-light.png" alt="Neno Technology" className="logo" />
                        </Link>

                        <button
                            type="button"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target="#navbar-menu"
                            onClick={closeMenu}
                            aria-label="Close Mobile Menu"
                        >
                            <i className="fa fa-times" />
                        </button>

                        <MainMenu navbarPlacement="navbar-center" />
                    </div>

                    {/* Right CTA Button */}
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
                <div className={`overlay-screen ${isOpen ? "opened" : ""}`} onClick={closeMenu} />
            </nav>
        </header>
    );
};

const Navbar = () => {
    return (
        <HeaderClient>
            {(props) => <NavbarInner {...props} />}
        </HeaderClient>
    );
};

export default Navbar;
