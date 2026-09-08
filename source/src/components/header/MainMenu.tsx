"use client"
import useSubMenuToggle from "@/hooks/useSubMenuToggle";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";

interface DataType {
    navbarPlacement?: string;
}

const MainMenu = ({ navbarPlacement }: DataType) => {
    const { toggleSubMenu, isMenuOpen, getMenuStyle } = useSubMenuToggle();

    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`}>
                <li><Link href="/">Home</Link></li>

                <li className={`dropdown ${isMenuOpen('hire') ? 'on' : ''}`}>
                    <Link
                        href="/services/engineer-on-demand"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleSubMenu('hire');
                        }}
                    >
                        Hire Engineers
                    </Link>
                    <ul
                        className="dropdown-menu"
                        style={getMenuStyle('hire')}
                    >
                        <li><Link href="/services/engineer-on-demand">Forward Deployed Engineer</Link></li>
                        <li><Link href="/services/engineer-on-demand">AI / Agentic AI Engineer</Link></li>
                        <li><Link href="/services/engineer-on-demand">Claude & LLM Engineer</Link></li>
                        <li><Link href="/services/engineer-on-demand">Full Stack / Backend Engineer</Link></li>
                        <li><Link href="/services/engineer-on-demand">Software Product Developer</Link></li>
                        <li><Link href="/services/engineer-on-demand">Security Engineer</Link></li>
                        <li><Link href="/services/engineer-on-demand">UI/UX & Cloud Engineer</Link></li>
                        <li><Link href="/services/engineer-on-demand">Application Support Team</Link></li>
                    </ul>
                </li>

                <li className={`dropdown ${isMenuOpen('services') ? 'on' : ''}`}>
                    <Link
                        href="/services"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleSubMenu('services');
                        }}
                    >
                        Services
                    </Link>
                    <ul
                        className="dropdown-menu"
                        style={getMenuStyle('services')}
                    >
                        <li><Link href="/services/engineer-on-demand">Engineer On Demand</Link></li>
                        <li><Link href="/services/products">Proprietary Products</Link></li>
                        <li><Link href="/services/consulting">Strategic Consulting</Link></li>
                        <li><Link href="/services/training">Training & Education</Link></li>
                        <li><Link href="/services/project-solutions">On Demand Project & Solution</Link></li>
                    </ul>
                </li>

                <li className={`dropdown ${isMenuOpen('products') ? 'on' : ''}`}>
                    <Link
                        href="/services/products"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleSubMenu('products');
                        }}
                    >
                        Products
                    </Link>
                    <ul
                        className="dropdown-menu"
                        style={getMenuStyle('products')}
                    >
                        <li><Link href="/services/products">Neno Voice — Voice AI Agents</Link></li>
                        <li><Link href="/services/products">Neno Dialer</Link></li>
                        <li><Link href="/services/products">Neno CRM</Link></li>
                        <li><Link href="/services/products">Neno ERP</Link></li>
                    </ul>
                </li>

                <li className={`dropdown ${isMenuOpen('consulting') ? 'on' : ''}`}>
                    <Link
                        href="/services/consulting"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleSubMenu('consulting');
                        }}
                    >
                        Consulting
                    </Link>
                    <ul
                        className="dropdown-menu"
                        style={getMenuStyle('consulting')}
                    >
                        <li><Link href="/services/consulting">AI Strategy Consulting</Link></li>
                        <li><Link href="/services/consulting">Software Product Consulting</Link></li>
                        <li><Link href="/services/consulting">MVP → Production Consulting</Link></li>
                        <li><Link href="/services/consulting">Marketing & GTM Consulting</Link></li>
                    </ul>
                </li>

                <li className={`dropdown ${isMenuOpen('company') ? 'on' : ''}`}>
                    <Link
                        href="/about-us"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleSubMenu('company');
                        }}
                    >
                        Company
                    </Link>
                    <ul
                        className="dropdown-menu"
                        style={getMenuStyle('company')}
                    >
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/about-us">Leadership</Link></li>
                        <li><Link href="/project">Case Studies</Link></li>
                        <li><Link href="/services/training">Training</Link></li>
                        <li><Link href="/contact-us">Contact</Link></li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;
