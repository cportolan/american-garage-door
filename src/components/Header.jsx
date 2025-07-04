"use client";

import "@/styles/Header.css";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const navItems = [
        { href: "/", label: "Home" }, 
        { href: "/about", label: "About" }, 
        { href: "/services", label: "Services" }, 
        { href: "/contact", label: "Contact" }
    ]

    const servicesItems = [
        { href: "/services/residential", label: "Residential", img: "/svgs/residential.svg" },
        { href: "/services/automotive", label: "Automotive", img: "/svgs/automotive.svg" },
        { href: "/services/commercial", label: "Commercial", img: "/svgs/commercial.svg" },
        { href: "/services/emergency", label: "Emergency", img: "/svgs/emergency.svg" }
    ]

    return(
        <header className="header">
            <div className="header-container">
                <img src="/imgs/logo.png" alt="American Garage Door Logo" title="American Garage Door Logo"/>
                <nav className="header-nav">
                    <ul className="header-nav_list">
                        {navItems.map((item) => (
                            <li
                                key={item.href}
                                className={`header-nav_item ${pathname === item.href ? 'active' : ''} ${item.href === '/services' ? 'services' : ''}`}
                                >
                                <Link href={item.href}>{item.label}</Link>

                                {item.href === "/services" && (
                                    <>
                                    <img src="/svgs/arrow-down.svg" alt="Arrow" className="header-nav_arrow" />
                                    <div className="header-nav_services">
                                        <div className="header-nav_services-container">
                                        {servicesItems.map((item, index) => (
                                            <a href={item.href} className="header-nav_services-link" key={index}>
                                                <div className="header-nav_services-link_logo">
                                                    <img src={item.img} alt={item.label} />
                                                </div>
                                                <div className="header-nav_services-link_text">
                                                    <span>{item.label}</span>
                                                    <img src="/svgs/arrow-right.svg" alt="Arrow Right" />
                                                </div>
                                            </a>
                                        ))}
                                        </div>
                                    </div>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className="btn-global btn-primary300">Get in touch</button>
            </div>
        </header>
    )
}