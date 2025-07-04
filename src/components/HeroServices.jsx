import "@/styles/HeroServices.css";

export default function HeroServices( {service, title, desc, img} ) {
    return(
        <section className="heroservices">
            <div className="heroservices-container">
                <div className="heroservices-text">
                    <span className="mini-title">{service}</span>
                    <h1>{title}</h1>
                    <p className="section-paragraph">{desc}</p>
                </div>
                <img src={img} alt={service} />
            </div>  
        </section>
    )
}