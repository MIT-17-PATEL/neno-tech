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
                <div className="container d-flex justify-content-between align-items-center neno-nav-container">
                    {/* Left: Mobile Hamburger Toggle */}
                    <div className="neno-nav-left">
                        <button
                            type="button"
                            className="navbar-toggle neno-mobile-toggle"
                            onClick={openMenu}
                            aria-label="Open Mobile Menu"
                        >
                            <i className="fa fa-bars" />
                        </button>
                    </div>

                    {/* Center: Mobile Book a Call CTA */}
                    <div className="neno-nav-center">
                        <Link
                            className="btn btn-style-one btn-theme neno-mobile-cta"
                            href="/contact-us"
                            aria-label="Book a Call"
                            title="Book a Call"
                        >
                            <span className="neno-mobile-cta-text">Book a Call</span>
                            <i className="fas fa-phone" aria-hidden="true" />
                        </Link>
                    </div>

                    {/* Right on Mobile / Left on Desktop: Brand Logo */}
                    <div className="neno-nav-right navbar-header">
                        <Link className="navbar-brand neno-brand-logo" href="/">
                            <img src="/assets/img/logo-light.png" className="logo" alt="Neno Technology" />
                        </Link>
                    </div>

                    {/* Central Navigation Menu / Mobile Drawer */}
                    <div className={`collapse navbar-collapse ${isOpen ? "show collapse-mobile" : "collapse-mobile"}`} id="navbar-menu">
                        <button
                            type="button"
                            className="navbar-toggle"
                            onClick={closeMenu}
                            aria-label="Close Mobile Menu"
                        >
                            <i className="fa fa-times" />
                        </button>

                        <MainMenu navbarPlacement="navbar-center" closeMenu={closeMenu} />
                    </div>

                    {/* Desktop Right CTA Button */}
                    <div className="attr-right neno-desktop-attr">
                        <div className="attr-nav">
                            <ul>
                                <li className="button">
                                    <Link className="btn btn-style-one btn-theme" href="/contact-us">
                                        Book A Call <i className="fas fa-phone" />
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
