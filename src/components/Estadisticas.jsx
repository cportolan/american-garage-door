import "@/styles/Estadisticas.css";

const estadisticasData = [
    { number: "+6", text: "Years on bussiness" }, 
    { number: "3.8k", text: "Lock Problems Solves" },
    { number: "100%", text: "Satisfying Treatment" },
    { number: "+10k", text: "Emergency calls attended" }
];

export default function Estadisticas( {} ) {
    return(
        <section className="stats">
            <div className="stats-container">
                {estadisticasData.map((stat, index) => {
                    return (
                        <div className="stats-item" key={index}>
                            <div className="stats-stat">
                                <h3>{stat.number}</h3>
                                <p>{stat.text}</p>
                            </div>
                            {index < estadisticasData.length - 1 && <span className="stats-separator"></span>}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}