import "@/styles/CardTestimonio.css";

const CardTestimonio = ( {text, img, name} ) => {
    return (
        <article className="cardtestimonio">
            <div className="cardtestimonio-container">
                <img src="/svgs/quotes-left.svg" alt="Quote" />
                <p className="section-paragraph">{text}</p>
                <div className="cardtestimonio-persona">
                    <img src={img} alt={name} />
                    <h3>{name}</h3>
                </div>
            </div>
        </article>
    )
}

export default CardTestimonio;