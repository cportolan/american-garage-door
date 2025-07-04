import "@/styles/AboutHome.css";

const content = {
    title: "Committed to Your Security and Peace of Mind Since 2016",
    img: "/imgs/abouthome.jpg"
}

export default function AboutHome( {title, img} ) {
    return(
        <section className="abouthome">
            <div className="abouthome-container">
                <span className="mini-title">ABOUT US</span>
                <h1>{content.title}</h1>
                <img src={content.img} alt={content.title} className="abouthome-image" />
            </div>
        </section>
    )
}