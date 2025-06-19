import "@/styles/HeroHome.css";

export default function HeroHome() {
    return(
        <main className="herohome">
            <div className="herohome-container">
                <div className="herohome-text">
                    <h1 className="herohome-title">Amazing Prices and <strong>Fast Response</strong></h1>
                    <p className="section-paragraph">Trusted mobile locksmith and garage door repair services you can count on. Serving homes, businesses, and vehicles with fast, professional support</p>
                    <a href="tel:+11232344342" className="btn-global btn-primary300">Call Now (123) 234-4342</a>
                </div>
                <div className="herohome-imgs">
                    <img src="/imgs/hero1.png" alt="Hero Image" />
                    <div>
                        <img src="/imgs/hero2.png" alt="Hero Image" />
                        <img src="/imgs/hero3.png" alt="Hero Image" />
                    </div>
                </div>
            </div>
        </main>
    )
}