import "@/styles/Tarjeta.css"

const Tarjeta = ( {title, desc, ico, orientation} ) => {
    return (
        <div className="tarjeta">
            <div className={`tarjeta-container ${orientation === 'vertical' ? 'vertical' : ''}`}>
                <img src={ico} alt={title} />
                <div className="tarjeta-title">
                    <h3>{title}</h3>
                    <p className="section-paragraph">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Tarjeta;