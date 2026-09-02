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
                <li>
                    <Link href="/">Home</Link>
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
                        <li><Link href="/services">All Services</Link></li>
                        <li><Link href="/services/engineer-on-demand">Engineer on Demand</Link></li>
                        <li><Link href="/services/products">Proprietary Products</Link></li>
                        <li><Link href="/services/consulting">Strategic Consulting</Link></li>
                        <li><Link href="/services/training">Training & Bootcamps</Link></li>
                    </ul>
                </li>

                <li className={`dropdown ${isMenuOpen('projects') ? 'on' : ''}`}>
                    <Link
                        href="/project"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleSubMenu('projects');
                        }}
                    >
                        Case Studies
                    </Link>
                    <ul
                        className="dropdown-menu"
                        style={getMenuStyle('projects')}
                    >
                        <li><Link href="/project">All Case Studies</Link></li>
                        <li><Link href="/project-details/1">AI CRM Platform</Link></li>
                        <li><Link href="/project-details/2">Smart Email Outreach</Link></li>
                        <li><Link href="/project-details/3">Enterprise Data Hub</Link></li>
                    </ul>
                </li>

                <li className={`dropdown ${isMenuOpen('pages') ? 'on' : ''}`}>
                    <Link
                        href="/about-us"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleSubMenu('pages');
                        }}
                    >
                        About Neno-Tec
                    </Link>
                    <ul
                        className="dropdown-menu"
                        style={getMenuStyle('pages')}
                    >
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/team">Leadership & Team</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                    </ul>
                </li>

                <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;