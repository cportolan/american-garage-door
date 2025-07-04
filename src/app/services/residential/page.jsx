import HeroServices from "@/components/HeroServices";

const content = {
    service: "RESIDENTIAL",
    title: "Protecting Your Home, One Lock and Door at a Time",
    desc: "Your home’s security is our priority. Our mobile residential locksmith services provide homeowners with on-the-spot solutions to protect their property and family. We handle everything from basic lock changes and rekey to advanced smart lock installations.",
    img: "/imgs/whatwedo1-1.png"
}

export default function ServicesResidential( {} ) {
    return(
        <HeroServices
            service={content.service}
            title={content.title}
            desc={content.desc}
            img={content.img}
        />
    )
}