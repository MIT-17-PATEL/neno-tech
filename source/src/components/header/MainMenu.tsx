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
                        href="/hire-engineers"
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
                        <li><Link href="/hire-engineers/forward-deployed-engineer">Forward Deployed Engineer (FDE)</Link></li>
                        <li><Link href="/hire-engineers/ai-agentic-ai-engineer">AI / Agentic AI Engineer</Link></li>
                        <li><Link href="/hire-engineers/claude-llm-engineer">Claude & LLM Engineer</Link></li>
                        <li><Link href="/hire-engineers/full-stack-backend-engineer">Full Stack / Backend Engineer</Link></li>
                        <li><Link href="/hire-engineers/software-product-developer">Software Product Developer</Link></li>
                        <li><Link href="/hire-engineers/security-engineer">Security Engineer</Link></li>
                        <li><Link href="/hire-engineers/ui-ux-cloud-engineer">UI/UX & Cloud Engineer</Link></li>
                        <li><Link href="/hire-engineers/application-support-team">Application Support Team</Link></li>
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
                        <li><Link href="/services/agentic-ai-development">Agentic AI Development</Link></li>
                        <li><Link href="/services/ai-product-development">AI Product Development</Link></li>
                        <li><Link href="/services/vibe-coding-squads">Vibe Coding Squads</Link></li>
                        <li><Link href="/services/ai-gtm">AI GTM (Go-To-Market)</Link></li>
                        <li><Link href="/services/llm-fine-tuning-deployment">LLM Fine-Tuning & Deployment</Link></li>
                        <li><Link href="/services/application-support-modernization">Application Support & Modernization</Link></li>
                    </ul>
                </li>

                <li className={`dropdown ${isMenuOpen('products') ? 'on' : ''}`}>
                    <Link
                        href="/products"
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
                        <li><Link href="/products">Neno Voice — Voice AI Agents</Link></li>
                        <li><Link href="/products">Neno Dialer</Link></li>
                        <li><Link href="/products">Neno CRM</Link></li>
                        <li><Link href="/products">Neno ERP</Link></li>
                    </ul>
                </li>

                <li className={`dropdown ${isMenuOpen('consulting') ? 'on' : ''}`}>
                    <Link
                        href="/consulting"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        onClick={(e) => {
                            if (typeof window !== 'undefined' && window.innerWidth <= 991) {
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
                        <li><Link href="/consulting#ai-strategy">AI Strategy Consulting</Link></li>
                        <li><Link href="/consulting#software-product">Software Product Consulting</Link></li>
                        <li><Link href="/consulting#mvp-production">MVP → Production Consulting</Link></li>
                        <li><Link href="/consulting#marketing-gtm">Marketing & GTM Consulting</Link></li>
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
                        <li><Link href="/training">Training</Link></li>
                        <li><Link href="/contact-us">Contact</Link></li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;
