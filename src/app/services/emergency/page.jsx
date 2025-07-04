import HeroServices from "@/components/HeroServices";

const content = {
    service: "EMERGENCY",
    title: "Emergency Locksmith Services You Can Rely On",
    desc: "When you're locked out, every minute matters. Our emergency mobile locksmith services are available and ready to help you regain access quickly and safely. Whether it’s your home, car, or business.",
    img: "/imgs/whatwedo1-4.png"
}

export default function ServicesEmergency( {} ) {
    return(
        <HeroServices
            service={content.service}
            title={content.title}
            desc={content.desc}
            img={content.img}
        />
    )
}