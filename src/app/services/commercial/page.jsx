import HeroServices from "@/components/HeroServices";

const content = {
    service: "COMMERCIAL",
    title: "Security Solutions Built for Your Business",
    desc: "Businesses require strong security solutions that protect assets, employees, and customers. Our mobile commercial locksmith services are tailored for small businesses, office buildings, warehouses, and retail locations",
    img: "/imgs/whatwedo1-3.png"
}

export default function ServicesCommercial( {} ) {
    return(
        <HeroServices
            service={content.service}
            title={content.title}
            desc={content.desc}
            img={content.img}
        />
    )
}