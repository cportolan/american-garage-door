import ContactSection from "@/components/ContactSection";
import HeroServices from "@/components/HeroServices";

const content = {
    service: "AUTOMOTIVE",
    title: "Fast Automotive Locksmith Services When You Need Them",
    desc: "Locked out of your car? Lost your keys? Need a replacement key fob? Our mobile automotive locksmith services provide quick and professional car key solutions right where you are.",
    img: "/imgs/whatwedo1-2.png"
}

export default function ServicesAutomotive( {} ) {
    return(
        <>
            <HeroServices
                service={content.service}
                title={content.title}
                desc={content.desc}
                img={content.img}
            />
            <ContactSection />
        </>
    )
}