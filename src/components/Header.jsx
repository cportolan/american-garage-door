"use client";

import "@/styles/Header.css";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
    const pathname = usePathname();
    const [navbarOpen, setNavbarOpen] = useState(false);

    // Bloquear scroll del body cuando el menú está abierto (opcional pero recomendado)
    useEffect(() => {
        if (navbarOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [navbarOpen]);

    const toggleNavbar = () => setNavbarOpen((v) => !v);
    const closeNavbar = () => setNavbarOpen(false);

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/contact", label: "Contact" },
    ];

    const servicesItems = [
        {
            href: "/services/residential",
            label: "Residential",
            img: "/svgs/residential.svg",
        },
        {
            href: "/services/automotive",
            label: "Automotive",
            img: "/svgs/automotive.svg",
        },
        {
            href: "/services/commercial",
            label: "Commercial",
            img: "/svgs/commercial.svg",
        },
        {
            href: "/services/emergency",
            label: "Emergency",
            img: "/svgs/emergency.svg",
        },
    ];

    return (
        <header className="header">
            <div className="header-container">
                <img
                    src="/imgs/logo.png"
                    alt="American Garage Door Logo"
                    title="American Garage Door Logo"
                />

                {/* Navegación desktop (se oculta en mobile via CSS) */}
                <nav className="header-nav header-nav--desktop">
                    <ul className="header-nav_list">
                        {navItems.map((item) => (
                            <li
                                key={item.href}
                                className={`header-nav_item ${
                                    pathname === item.href ? "active" : ""
                                } ${
                                    item.href === "/services" ? "services" : ""
                                }`}
                            >
                                <Link
                                    href={
                                        item.href === "/services"
                                            ? ""
                                            : item.href
                                    }
                                >
                                    {item.label}
                                </Link>

                                {item.href === "/services" && (
                                    <>
                                        <img
                                            src="/svgs/arrow-down.svg"
                                            alt="Arrow"
                                            className="header-nav_arrow"
                                        />
                                        <div className="header-nav_services">
                                            <div className="header-nav_services-container">
                                                {servicesItems.map(
                                                    (srv, index) => (
                                                        <a
                                                            href={srv.href}
                                                            className="header-nav_services-link"
                                                            key={index}
                                                        >
                                                            <div className="header-nav_services-link_logo">
                                                                <img
                                                                    src={
                                                                        srv.img
                                                                    }
                                                                    alt={
                                                                        srv.label
                                                                    }
                                                                />
                                                            </div>
                                                            <div className="header-nav_services-link_text">
                                                                <span>
                                                                    {srv.label}
                                                                </span>
                                                                <img
                                                                    src="/svgs/arrow-right.svg"
                                                                    alt="Arrow Right"
                                                                />
                                                            </div>
                                                        </a>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Botón primario (desktop) */}
                <a
                    className="btn-global btn-primary300 header-cta-desktop"
                    href="/contact"
                >
                    Get in touch
                </a>

                {/* Botón hamburguesa móvil */}
                <button
                    type="button"
                    aria-label={navbarOpen ? "Close menu" : "Open menu"}
                    aria-expanded={navbarOpen}
                    aria-controls="mobile-menu"
                    onClick={toggleNavbar}
                    className="header-hamburger-btn"
                >
                    <img
                        src={
                            navbarOpen
                                ? "/control/close.svg"
                                : "/control/open.svg"
                        }
                        alt={navbarOpen ? "Close" : "Hamburger Menu"}
                        className="header-hamburger"
                    />
                </button>
            </div>

            {/* Panel móvil */}
            <nav
                id="mobile-menu"
                className={`header-nav-mobile ${navbarOpen ? "open" : ""}`}
            >
                <ul className="header-nav-mobile_list">
                    {navItems.map((item) => (
                        <li key={item.href} className="header-nav-mobile_item">
                            {item.href === "/services" ? (
                                <>
                                    <span className="header-nav-mobile_services-label">
                                        Services
                                    </span>
                                    <ul className="header-nav-mobile_services-list">
                                        {servicesItems.map((srv) => (
                                            <li
                                                key={srv.href}
                                                className="header-nav-mobile_services-item"
                                            >
                                                <Link
                                                    href={srv.href}
                                                    onClick={closeNavbar}
                                                >
                                                    <img
                                                        src={srv.img}
                                                        alt={srv.label}
                                                    />

                                                    {srv.label}

                                                    <img
                                                        src="/svgs/arrow-right.svg"
                                                        alt="Arrow Right"
                                                    />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <Link
                                    href={item.href}
                                    onClick={closeNavbar}
                                    className={
                                        pathname === item.href ? "active" : ""
                                    }
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="header-nav-mobile_cta">
                    <a
                        className="btn-global btn-primary300"
                        href="/contact"
                        onClick={closeNavbar}
                    >
                        Get in touch
                    </a>
                </div>
            </nav>
        </header>
    );
}
