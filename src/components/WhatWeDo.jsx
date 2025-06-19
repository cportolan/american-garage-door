import "@/styles/WhatWeDo.css";

const WhatWeDoCards = [
    {
        title: "Residential",
        description: "Secure your home with expert garage door repairs, lock installations, rekeying, and smart lock upgrades.",
        image: "/imgs/whatwedo1-1.png",
        height: "100%",
    },
    {
        title: "Automotive",
        description: "Locked out or lost your keys?We handle car lockouts, key replacements, and ignition repairs on the spot.",
        image: "/imgs/whatwedo1-2.png",
        height: "75%",
    },
    {
        title: "Commercial",
        description: "Protect your business with high-security lock systems, access control, master key solutions, and rapid support.",
        image: "/imgs/whatwedo1-3.png",
        height: "100%",
    },
    {
        title: "Emergency",
        description: "Fast, reliable emergency lockout services for homes, cars, and businesses—just a call away.",
        image: "/imgs/whatwedo1-4.png",
        height: "75%"
    }
]

export default function WhatWeDo() {
    return(
        <div className="whatwedo">
            <div className="whatwedo-container">
                <div className="whatwedo-1">
                    <span className="mini-title">WHAT WE DO</span>
                    <div className="whatwedo1-text">
                        <h2>Locksmith & Garage <strong>Door Services</strong></h2>
                        <p className="section-paragraph">Lörem ipsum for sudegt ifall sera makroligt fodebel makrosamma inte ypeser i lareledes itt. Aling heteroforat att stenovis monopons ektigt det nirade i övis plus niliga kakynat en äsevis. </p>
                    </div>
                    <div className="whatwedo1-cards">
                        {WhatWeDoCards.map((card, index) => (
                            <div className="whatwedo1-card" key={index} style={{ backgroundImage: `linear-gradient(#1C242A10, #1C242A99), url(${card.image})`, height: card.height }}>
                                <h3>{card.title}</h3>
                                <p className="section-paragraph">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="whatwedo-2">
                    <img src="/imgs/whatwedo2.png" alt="What We Do" />
                    <div className="whatwedo2-text">
                        <span className="mini-title">WHAT WE DO</span>
                        <h2>Our Story, <strong>Your Security</strong></h2>
                        <p className="section-paragraph">Get to know American Garage Door & Key LLC — a trusted garage door and locksmith company serving Beaverton, Oregon since 2016. We’re known for top-rated service, quality products, and a commitment to customer satisfaction on every job, big or small. Whether you're a homeowner or a business, we’re here to help.</p>
                        <div className="whatwedo2-btns">
                            <a href="tel:+11232344342" className="btn-global btn-primary300">Call Now</a>
                            <a href="/contact" className="btn-global btn-secondary">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}