"use client"
import useSubMenuToggle from "@/hooks/useSubMenuToggle";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";

interface DataType {
    navbarPlacement?: string;
    closeMenu?: () => void;
}

const MainMenu = ({ navbarPlacement, closeMenu }: DataType) => {
    const { toggleSubMenu, isMenuOpen, getMenuStyle, closeAllSubMenus } = useSubMenuToggle();

    const handleLinkClick = () => {
        closeAllSubMenus();
        if (closeMenu) {
            closeMenu();
        }
    };

    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`}>
                <li><Link href="/" onClick={handleLinkClick}>Home</Link></li>

                <li className={`dropdown ${isMenuOpen('hire') ? 'on' : ''}`}>
                    <Link
                        href="/hire-engineers"
                        className="dropdown-toggle"
                        onClick={(e) => {
                            if (typeof window !== 'undefined' && window.innerWidth <= 1199) {
                                e.preventDefault();
                                toggleSubMenu('hire');
                            }
                        }}
                    >
                        Hire Engineers
                    </Link>
                    <ul
                        className="dropdown-menu"
                        style={getMenuStyle('hire')}
                    >
                        <li className="neno-drawer-only-item d-xl-none"><Link href="/hire-engineers" onClick={handleLinkClick} style={{ fontWeight: 600, color: '#9c96f0' }}>All Hire Engineers →</Link></li>
                        <li><Link href="/hire-engineers/forward-deployed-engineer" onClick={handleLinkClick}>Forward Deployed Engineer (FDE)</Link></li>
                        <li><Link href="/hire-engineers/agentic-ai-engineer" onClick={handleLinkClick}>AI / Agentic AI Engineer</Link></li>
                        <li><Link href="/hire-engineers/claude-llm-engineer" onClick={handleLinkClick}>Claude & LLM Engineer</Link></li>
                        <li><Link href="/hire-engineers/full-stack-backend-engineer" onClick={handleLinkClick}>Full Stack / Backend Engineer</Link></li>
                        <li><Link href="/hire-engineers/software-product-developer" onClick={handleLinkClick}>Software Product Developer</Link></li>
                        <li><Link href="/hire-engineers/security-engineer" onClick={handleLinkClick}>Security Engineer</Link></li>
                        <li><Link href="/hire-engineers/ui-ux-cloud-engineer" onClick={handleLinkClick}>UI/UX & Cloud Engineer</Link></li>
                        <li><Link href="/hire-engineers/application-support-team" onClick={handleLinkClick}>Application Support Team</Link></li>
                    </ul>
                </li>

                <li className={`dropdown ${isMenuOpen('services') ? 'on' : ''}`}>
                    <Link
                        href="/services"
                        className="dropdown-toggle"
                        onClick={(e) => {
                            if (typeof window !== 'undefined' && window.innerWidth <= 1199) {
                                e.preventDefault();
                                toggleSubMenu('services');
                            }
                        }}
                    >
                        Services
                    </Link>
                    <ul
                        className="dropdown-menu"
                        style={getMenuStyle('services')}
                    >
                        <li className="neno-drawer-only-item d-xl-none"><Link href="/services" onClick={handleLinkClick} style={{ fontWeight: 600, color: '#9c96f0' }}>All Services →</Link></li>
                        <li><Link href="/services/agentic-ai-development" onClick={handleLinkClick}>Agentic AI Development</Link></li>
                        <li><Link href="/services/ai-product-development" onClick={handleLinkClick}>AI Product Development</Link></li>
                        <li><Link href="/services/vibe-coding-squads" onClick={handleLinkClick}>Vibe Coding Squads</Link></li>
                        <li><Link href="/services/ai-gtm" onClick={handleLinkClick}>AI GTM (Go-To-Market)</Link></li>
                        <li><Link href="/services/llm-fine-tuning-deployment" onClick={handleLinkClick}>LLM Fine-Tuning & Deployment</Link></li>
                        <li><Link href="/services/application-support-modernization" onClick={handleLinkClick}>Application Support & Modernization</Link></li>
                    </ul>
                </li>

                <li className={`dropdown ${isMenuOpen('products') ? 'on' : ''}`}>
                    <Link
                        href="/products"
                        className="dropdown-toggle"
                        onClick={(e) => {
                            if (typeof window !== 'undefined' && window.innerWidth <= 1199) {
                                e.preventDefault();
                                toggleSubMenu('products');
                            }
                        }}
                    >
                        Products
                    </Link>
                    <ul
                        className="dropdown-menu"
                        style={getMenuStyle('products')}
                    >
                        <li className="neno-drawer-only-item d-xl-none"><Link href="/products" onClick={handleLinkClick} style={{ fontWeight: 600, color: '#9c96f0' }}>All Products →</Link></li>
                        <li><Link href="/products/neno-voice" onClick={handleLinkClick}>Neno Voice — Voice AI Agents</Link></li>
                        <li><Link href="/products/neno-dialer" onClick={handleLinkClick}>Neno Dialer</Link></li>
                        <li><Link href="/products/neno-crm" onClick={handleLinkClick}>Neno CRM</Link></li>
                        <li><Link href="/products/neno-erp" onClick={handleLinkClick}>Neno ERP</Link></li>
                    </ul>
                </li>

                <li className={`dropdown ${isMenuOpen('consulting') ? 'on' : ''}`}>
                    <Link
                        href="/consulting"
                        className="dropdown-toggle"
                        onClick={(e) => {
                            if (typeof window !== 'undefined' && window.innerWidth <= 1199) {
                                e.preventDefault();
                                toggleSubMenu('consulting');
                            }
                        }}
                    >
                        Consulting
                    </Link>
                    <ul
                        className="dropdown-menu"
                        style={getMenuStyle('consulting')}
                    >
                        <li className="neno-drawer-only-item d-xl-none"><Link href="/consulting" onClick={handleLinkClick} style={{ fontWeight: 600, color: '#9c96f0' }}>All Consulting →</Link></li>
                        <li><Link href="/consulting/ai-strategy" onClick={handleLinkClick}>AI Strategy Consulting</Link></li>
                        <li><Link href="/consulting/software-product" onClick={handleLinkClick}>Software Product Consulting</Link></li>
                        <li><Link href="/consulting/mvp-to-production" onClick={handleLinkClick}>MVP → Production Consulting</Link></li>
                        <li><Link href="/consulting/marketing-gtm" onClick={handleLinkClick}>Marketing & GTM Consulting</Link></li>
                    </ul>
                </li>

                <li className={`dropdown ${isMenuOpen('company') ? 'on' : ''}`}>
                    <Link
                        href="/company/about-us"
                        className="dropdown-toggle"
                        onClick={(e) => {
                            if (typeof window !== 'undefined' && window.innerWidth <= 1199) {
                                e.preventDefault();
                                toggleSubMenu('company');
                            }
                        }}
                    >
                        Company
                    </Link>
                    <ul
                        className="dropdown-menu"
                        style={getMenuStyle('company')}
                    >
                        <li><Link href="/about-us" onClick={handleLinkClick}>About Us</Link></li>
                        <li><Link href="/industries" onClick={handleLinkClick}>Industries</Link></li>
                        <li><Link href="/careers" onClick={handleLinkClick}>Careers</Link></li>
                        <li><Link href="/company/case-studies" onClick={handleLinkClick}>Case Studies</Link></li>
                        <li><Link href="/company/training" onClick={handleLinkClick}>Training</Link></li>
                        <li><Link href="/contact-us" onClick={handleLinkClick}>Contact Us</Link></li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;
