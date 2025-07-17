import ContactSection from "@/components/ContactSection";
import HeroServices from "@/components/HeroServices";
import Tarjeta from "@/components/Tarjeta";

const content = {
    service: "COMMERCIAL",
    title: "Security Solutions Built for Your Business",
    desc: "Businesses require strong security solutions that protect assets, employees, and customers. Our mobile commercial locksmith services are tailored for small businesses, office buildings, warehouses, and retail locations",
    img: "/imgs/whatwedo1-3.png",
};

const services1 = [
    {
        title: "Business Lockouts",
        desc: "Locked out of your office or commercial space? Our technicians provide fast, damage-free entry so you can get back to business with minimal disruption.",
        img: "/svgs/teacher.svg",
    },
    {
        title: "Keypad Lock Installation",
        desc: "We install standalone digital keypads for convenient, keyless access to offices, utility rooms, or restricted areas — customizable for multiple users.",
        img: "/svgs/teacher.svg",
    },
    {
        title: "Do Not Duplicate Key Cutting",
        desc: "We provide restricted key duplication services for “Do Not Duplicate” keys, helping prevent unauthorized copies and enhancing your internal access control.",
        img: "/svgs/teacher.svg",
    },
];

const services2 = [
    {
        title: "High-Security Lock Installation",
        desc: "Protect your business with tamper-resistant, pick-proof, and bump-resistant commercial locks designed to meet higher security standards.",
        img: "/svgs/satisfactionBlue.svg",
    },
    {
        title: "Lock Rekeying for Office Spaces",
        desc: "When staff changes or keys are lost, we rekey your existing locks to ensure former keys no longer provide access — no need to replace all hardware.",
        img: "/svgs/satisfactionBlue.svg",
    },
    {
        title: "Rekey & Master Key Systems for Businesses",
        desc: "Simplify security with master key systems that allow tiered access across departments or tenants.",
        img: "/svgs/satisfactionBlue.svg",
    },
    {
        title: "Safe Opening & Lock Repair",
        desc: "We unlock office safes and service electronic or mechanical locks to ensure authorized access and proper operation without damaging the safe.",
        img: "/svgs/satisfactionBlue.svg",
    },
];

const services3 = [
    {
        title: "File Cabinet Locks & Key Replacement",
        desc: "Secure your records with new locks or keys for file cabinets and office storage units — ideal for administrative offices and HR departments.",
        img: "/svgs/honestpricing.svg",
    },
    {
        title: "Panic Bars & Push Bar Installation",
        desc: "We install and service exit devices (panic bars and push bars) to meet building safety codes and ensure safe emergency egress from commercial spaces.",
        img: "/svgs/honestpricing.svg",
    },
    {
        title: "Commercial Door Hardware Repair & Replacement",
        desc: "We repair or replace broken commercial door components, including locks, strikes, hinges, closers, and levers, to maintain full function and security.",
        img: "/svgs/honestpricing.svg",
    },
];

const services4 = [
    {
        title: "Access Control System",
        desc: "We design and install access control systems with magnetic locks, electric strikes, and ADA-compliant hardware to give your business modern, secure entry solutions.",
        img: "/svgs/teacher.svg",
    },
    {
        title: "Proximity Fobs, Exit Buttons & Indicators",
        desc: "We install and program proximity readers, push-to-exit buttons, status indicators, and other access control peripherals to streamline and secure building access.",
        img: "/svgs/teacher.svg",
    },
];

export default function ServicesCommercial({}) {
    return (
        <>
            <HeroServices
                service={content.service}
                title={content.title}
                desc={content.desc}
                img={content.img}
            />
            <div className="services-services">
                <div className="services-flex">
                    <h2>
                        Access & <b>Entry Solutions</b>
                    </h2>
                    <div className="services-cards_flex3">
                        {services1.map((service, index) => (
                            <Tarjeta
                                key={index}
                                title={service.title}
                                desc={service.desc}
                                ico={service.img}
                                orientation={"vertical"}
                            />
                        ))}
                    </div>
                </div>
                <div className="services-flex">
                    <h2>
                        High-Security <b>& Locking Systems</b>
                    </h2>
                    <div className="services-cards_grid4">
                        {services2.map((service, index) => (
                            <Tarjeta
                                key={index}
                                title={service.title}
                                desc={service.desc}
                                ico={service.img}
                            />
                        ))}
                    </div>
                </div>
                <div className="services-flex">
                    <h2>
                        Hardware <b>& Door Components</b>
                    </h2>
                    <div className="services-cards_flex3">
                        {services3.map((service, index) => (
                            <Tarjeta
                                key={index}
                                title={service.title}
                                desc={service.desc}
                                ico={service.img}
                                orientation={"vertical"}
                            />
                        ))}
                    </div>
                </div>
                <div className="services-flex">
                    <h2>
                        Electronic Access <b>& Control Systems</b>
                    </h2>
                    <div className="services-cards_flex2">
                        {services4.map((service, index) => (
                            <Tarjeta
                                key={index}
                                title={service.title}
                                desc={service.desc}
                                ico={service.img}
                                orientation={"vertical"}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <ContactSection />
        </>
    );
}
