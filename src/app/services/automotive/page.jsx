import ContactSection from "@/components/ContactSection";
import HeroServices from "@/components/HeroServices";
import Tarjeta from "@/components/Tarjeta";

const content = {
    service: "AUTOMOTIVE",
    title: "Fast Automotive Locksmith Services When You Need Them",
    desc: "Locked out of your car? Lost your keys? Need a replacement key fob? Our mobile automotive locksmith services provide quick and professional car key solutions right where you are.",
    img: "/imgs/whatwedo1-2.png",
};

const services1 = [
    {
        title: "Car and Truck Lockouts",
        desc: "Locked out of your vehicle? We provide quick, damage-free access for most makes and models",
        ico: "/svgs/teacher.svg",
    },
    {
        title: "Broken Key Extraction",
        desc: "If a key breaks off in your ignition or door, we safely remove it and can create a replacement key on-site.",
        ico: "/svgs/teacher.svg",
    },
    {
        title: "Door Lock Repair & Replacement",
        desc: "We repair or replace damaged door locks to restore proper security and function to your vehicle’s entry system.",
        ico: "/svgs/teacher.svg",
    },
    {
        title: "Ignition Repair & Replacement",
        desc: "If your key is stuck, won’t turn, or the ignition is failing, we can repair or replace the cylinder and get you back on the road fast.",
        ico: "/svgs/teacher.svg",
    },
    {
        title: "Lock Cylinder Rekey",
        desc: "We rekey your car’s door or ignition cylinder so old or stolen keys no longer work — perfect after key loss or theft.",
        ico: "/svgs/teacher.svg",
    },
];

const services2 = [
    {
        title: "Car Key Replacement for Lost Keys",
        desc: "We cut and program new keys without the original — no dealership visit or towing needed.",
        ico: "/svgs/honestpricing.svg",
    },
    {
        title: "Key Duplication for Cars, Trucks & Motorcycles",
        desc: "We duplicate standard and chip keys for most vehicles, including motorcycles, on the spot.",
        ico: "/svgs/honestpricing.svg",
    },
    {
        title: "Key Fob Programming",
        desc: "We program new key fobs to control your locks, alarm, and engine start — compatible with most major brands.",
        ico: "/svgs/honestpricing.svg",
    },
    {
        title: "Transponder Key Programming",
        desc: "We program or reprogram chip-enabled keys that sync with your car’s security system to enable starting.",
        ico: "/svgs/honestpricing.svg",
    },
    {
        title: "Push-to-Start Smart Key Programming",
        desc: "We program modern smart keys for vehicles with proximity entry and push-button ignition systems.",
        ico: "/svgs/honestpricing.svg",
    },
    {
        title: "Remote Key Programming",
        desc: "Need a new remote? We sync it to your vehicle so you can unlock and start with ease.",
        ico: "/svgs/honestpricing.svg",
    },
];

const services3 = [
    {
        title: "Erasing Stolen Keys from Memory",
        desc: "If your keys were stolen or compromised, we erase them from the vehicle’s onboard system to block future use.",
        ico: "/svgs/teacher.svg",
    },
    {
        title: "ECU and Immobilizer Resets",
        desc: "We reset or reprogram your car’s security modules and immobilizer system (on select makes and models) to fix pairing issues or allow new key registration.",
        ico: "/svgs/teacher.svg",
    },
];

export default function ServicesAutomotive({}) {
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
                        Lockouts <b>& Mechanical Repairs</b>
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
                        Key Placement <b>& Programming</b>
                    </h2>
                    <div className="services-cards_grid6">
                        {services2.map((service, index) => (
                            <Tarjeta
                                key={index}
                                title={service.title}
                                desc={service.desc}
                                ico={service.ico}
                            />
                        ))}
                    </div>
                </div>
                <div className="services-flex">
                    <h2>
                        Advanced <b>Security Services</b>
                    </h2>
                    <div className="services-cards_flex2">
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
