import ContactSection from "@/components/ContactSection";
import HeroServices from "@/components/HeroServices";
import Tarjeta from "@/components/Tarjeta";

const content = {
    service: "RESIDENTIAL",
    title: "Protecting Your Home, One Lock and Door at a Time",
    desc: "Your home’s security is our priority. Our mobile residential locksmith services provide homeowners with on-the-spot solutions to protect their property and family. We handle everything from basic lock changes and rekey to advanced smart lock installations.",
    img: "/imgs/whatwedo1-1.png"
}

const services1 = [
    {
        title: "House Lockout Assistance",
        desc: "Locked out of your home? Our technicians provide fast, damage-free entry so you can regain access without compromising your lock or door.",
        img: "/svgs/teacher.svg"
    },
    {
        title: "Safe Opening & Repair",
        desc: "We professionally open locked or malfunctioning safes and repair digital or mechanical locking mechanisms — without damaging your valuables.",
        img: "/svgs/teacher.svg"
    },
    {       
        title: "Lockbox Installation",
        desc: "We install secure key lockboxes to provide controlled access to trusted individuals like family members, real estate agents, or maintenance personnel.",
        img: "/svgs/teacher.svg"
    },
];

const services2 = [
    {
        title: "Lock Repair & Replacement",
        desc: "We fix or replace broken, rusted, or outdated locks to restore the safety of your doors, ensuring smooth functionality and improved security.",
        img: "/svgs/satisfactionBlue.svg"
    },
        {
        title: "Fresh Lock Installation",
        desc: "Need a brand-new lock installed on a door that’s never had one? We provide full installation, including drilling, fitting, and hardware setup.",
        img: "/svgs/satisfactionBlue.svg"
    },
        {
        title: "Deadbolt & High-Security Lock Installation",
        desc: "We install advanced locking systems like deadbolts and ANSI Grade 1 locks for maximum resistance against forced entry and tampering.",
        img: "/svgs/satisfactionBlue.svg"
    },
        {
        title: "Smart Wi-Fi Keypad Lock Setup",
        desc: "We install and program Wi-Fi or Bluetooth-enabled smart locks with keypad access for enhanced control and convenience.",
        img: "/svgs/satisfactionBlue.svg"
    }
];

const services3 = [
    {
        title: "Mailbox Lock Replacement",
        desc: "Protect your mail and personal information with our mailbox lock replacement service — ideal for lost keys or compromised boxes.",
        img: "/svgs/honestpricing.svg"
    },
        {
        title: "Peephole Installation",
        desc: "We install wide-angle peepholes on entry doors, allowing you to clearly see who’s at the door before opening it.",
        img: "/svgs/honestpricing.svg"
    },
    {
        title: "Sliding Door & Window Lock Services",
        desc: "We secure vulnerable entry points by repairing or installing locks on sliding glass doors and windows — preventing easy break-ins or tampering.",
        img: "/svgs/honestpricing.svg"
    },
];

const services4 = [
    {
        title: "Rekeying Door Lock Cylinders",
        desc: "We reconfigure the pins in your existing lock cylinder so old keys stop working — perfect after moving in or losing a key, without replacing the entire lock.",
        img: "/svgs/teacher.svg"
    },
        {
        title: "Master Key Systems for Homes",
        desc: "Simplify access with a master key system that opens all locks in your home, while individual keys still operate specific doors.",
        img: "/svgs/teacher.svg"
    },
    {
        title: "Key Duplication & On-Site Cutting",
        desc: "Need extra copies of your house keys? We cut and duplicate keys on-site, saving you a trip and ensuring a perfect fit every time.",
        img: "/svgs/teacher.svg"
    },
]

export default function ServicesResidential( {} ) {
    return(
        <>
            <HeroServices
                service={content.service}
                title={content.title}
                desc={content.desc}
                img={content.img}
            />
            <div className="services-services">
                <div className="services-flex">
                    <h2>Lockout & <b>Access Services</b></h2>
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
                    <h2>Lock Repair <b>& Installation</b></h2>
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
                    <h2>Home Entry <b>& Window Security</b></h2>
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
                    <h2>Keys & <b>Rekeying Services</b></h2>
                    <div className="services-cards_flex3">
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
    )
}