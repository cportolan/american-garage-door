import "@/styles/OurValues.css";

import Tarjeta from "./Tarjeta";

const ourMissionCards = [
    {
        title: "Honest Pricing",
        desc: "No surprises, no hidden fees. We provide clear, upfront quotes so you know exactly what you’re paying for before we start any work.",
        ico: "/svgs/honestpricing.svg"
    },
    {
        title: "Satisfaction Guarantee",
        desc: "Your satisfaction is our success. We’re not done until you’re fully happy with the results — guaranteed on every job, big or small.",
        ico: "/svgs/satisfaction.svg"
    },
    {
        title: "Security",
        desc: "We use only trusted products and proven techniques to ensure your home, business, or vehicle stays safe and secure — giving you total peace of mind.",
        ico: "/svgs/security.svg"
    },
    {
        title: "Licensed, Bonded, and Insured",
        desc: "You’re in safe hands with a fully licensed, bonded, and insured company. We meet all professional standards to ensure your property and your peace of mind are always protected.",
        ico: "/svgs/key.svg"
    },
    {
        title: "Fast Response Times",
        desc: "We know that when you're locked out or need urgent repairs, every minute matters. Our mobile team is ready to respond quickly and efficiently — often arriving in 30 minutes or less.",
        ico: "/svgs/response.svg"
    },
    {
        title: "Experience",
        desc: "Our team brings years of hands-on experience and deep industry knowledge to every job. We treat every project with professionalism, attention to detail, and respect for your property.",
        ico: "/svgs/experience.svg"
    }
]

export default function OurValues() {
    return(
        <section className="ourvalues">
            <div className="ourvalues-container">
                <div className="ourvalues-text">
                    <span className="mini-title">OUR VALUES</span>
                    <h2>Why Choose <b>Us?</b></h2>
                    <p className="section-paragraph">At American Garage Door & Key LLC, we deliver fast, reliable service with upfront pricing and guaranteed satisfaction. Our licensed and insured team uses trusted products and proven techniques to protect your home, business, or vehicle — all with a focus on quality, integrity, and your peace of mind.</p>
                </div>
                <div className="services-cards_grid6">
                    {ourMissionCards.map((card, index) => (
                        <Tarjeta
                            key={index}
                            title={card.title}
                            desc={card.desc}
                            ico={card.ico}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}