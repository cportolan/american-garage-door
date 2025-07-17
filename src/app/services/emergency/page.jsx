import ContactSection from "@/components/ContactSection";
import HeroServices from "@/components/HeroServices";
import Tarjeta from "@/components/Tarjeta";

const content = {
    service: "EMERGENCY",
    title: "Emergency Locksmith Services You Can Rely On",
    desc: "When you're locked out, every minute matters. Our emergency mobile locksmith services are available and ready to help you regain access quickly and safely. Whether it’s your home, car, or business.",
    img: "/imgs/whatwedo1-4.png",
};

const services1 = [
    {
        title: "House Lockouts",
        desc: "Locked out of your home? We respond quickly to restore access without damaging your door or lock",
        ico: "/svgs/teacher.svg",
    },
    {
        title: "Car Lockouts",
        desc: "Whether your keys are lost, inside the car, or in the trunk, our team can unlock your vehicle on-site and get you back on the road.",
        ico: "/svgs/teacher.svg",
    },
    {
        title: "Office & Business Lockouts",
        desc: "We offer fast, non-destructive entry into commercial spaces, helping minimize downtime and keep your operations running smoothly.",
        ico: "/svgs/teacher.svg",
    },
    {
        title: "Storage Lockouts",
        desc: "Locked out of your storage unit or rental locker? We provide access quickly and securely, even for high-security padlocks or disc locks.",
        ico: "/svgs/teacher.svg",
    },
    {
        title: "Garage Door Lockouts",
        desc: "If your garage won’t open due to a lockout, broken remote, or manual mechanism failure, we’ll get you back in — fast and safely.",
        ico: "/svgs/teacher.svg",
    },
];

const services2 = [
    {
        title: "Broken Key Removal",
        desc: "When keys snap inside locks or ignitions, we carefully extract the piece without damaging the internal components — and can provide a replacement on the spot.",
        ico: "/svgs/honestpricing.svg",
    },
    {
        title: "Emergency Lock Repairs",
        desc: "After a break-in or mechanical failure, we repair or replace damaged locks on doors, gates, garages, or safes to restore immediate security.",
        ico: "/svgs/honestpricing.svg",
    },
    {
        title: "Safe Lockouts",
        desc: "Can’t access your home or office safe? Our team provides professional safe opening services, whether it’s a dial, keypad, or mechanical lock — with no damage to the contents.",
        ico: "/svgs/honestpricing.svg",
    },
];

const services3 = [
    {
        title: "After-Hours Locksmith Service",
        desc: "Emergencies don’t wait for business hours. Our mobile locksmiths are on call day and night, including weekends and holidays.",
        ico: "/svgs/teacher.svg",
    },
    {
        title: "Rapid Response Mobile Units",
        desc: "Our fully equipped mobile locksmith vans are strategically positioned to respond quickly across our service area.",
        ico: "/svgs/teacher.svg",
    },
    {
        title: "Same-Day Appointments",
        desc: "In addition to urgent emergencies, we also offer same-day scheduling for pressing but non-critical locksmith needs like rekeying or inspections.",
        ico: "/svgs/teacher.svg",
    },
];

export default function ServicesEmergency({}) {
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
                        Emergency <b>Lockout Services</b>
                    </h2>
                    <div className="services-cards_flex5">
                        {services1.map((service, index) => (
                            <Tarjeta
                                key={index}
                                title={service.title}
                                desc={service.desc}
                                ico={service.ico}
                                orientation={"vertical"}
                            />
                        ))}
                    </div>
                </div>
                <div className="services-flex">
                    <h2>
                        Lock & <b>Key Emergency Repairs</b>
                    </h2>
                    <div className="services-cards_flex3">
                        {services2.map((service, index) => (
                            <Tarjeta
                                key={index}
                                title={service.title}
                                desc={service.desc}
                                ico={service.ico}
                                orientation={"vertical"}
                            />
                        ))}
                    </div>
                </div>
                <div className="services-flex">
                    <h2>
                        Rapid Response <b>& Availability</b>
                    </h2>
                    <div className="services-cards_flex3">
                        {services3.map((service, index) => (
                            <Tarjeta
                                key={index}
                                title={service.title}
                                desc={service.desc}
                                ico={service.ico}
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
