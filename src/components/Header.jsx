"use client";

import "@/styles/Header.css";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const navItems = [
        { href: "/", label: "Home" }, 
        { href: "/services", label: "Services" }, 
        { href: "/about", label: "About" }, 
        { href: "/contact", label: "Contact" }
    ]

    return(
        <header className="header">
            <div className="header-container">
                <img src="/imgs/logo.png" alt="American Garage Door Logo" title="American Garage Door Logo"/>
                <nav className="header-nav">
                    <ul className="header-nav_list">
                        {navItems.map((item) => (
                            <li key={item.href} className={`header-nav_item ${pathname === item.href ? 'active' : ''}`}>
                                <Link href={item.href}>{item.label}</Link>
                                {item.href === "/services" && (
                                    <img src="/svgs/arrow-down.svg" alt="Arrow" className="header-nav_arrow"/>
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