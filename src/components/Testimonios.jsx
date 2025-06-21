import "@/styles/Testimonios.css";

import CardTestimonio from "./CardTestimonio";

const testimoniosFila1 = [
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson"
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson"
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson"
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson"
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson"
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson"
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson"
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson"
    },
];
const testimoniosFila2 = [
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson"
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson"
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson"
    }
    ,
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson"
    },
     {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson"
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson"
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson"
    }
    ,
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnsoasdn"
    },
];

export default function Testimonios( {} ) {
    return(
        <section className="testimonios">
            <div className="testimonios-container">
                <div className="testimonios-text">
                    <span className="mini-title">TESTIMONIALS</span>
                    <h2>Real Reviews, <strong>Real Results</strong></h2>
                </div>
            </div>
            <div className="testimonios-marquee">
                <div className="testimonios-fila1-wrapper">
                    <div className="testimonios-fila testimonios-fila1">
                        {[...testimoniosFila1, ...testimoniosFila1].map((testimonio, index) => (
                            <CardTestimonio
                            key={`fila1-${index}`}
                            text={testimonio.text}
                            img={testimonio.img}
                            name={testimonio.name}
                            />
                        ))}
                    </div>
                </div>
                <div className="testimonios-fila2-wrapper">
                    <div className="testimonios-fila testimonios-fila2">
                        {[...testimoniosFila2, ...testimoniosFila2].map((testimonio, index) => (
                            <CardTestimonio
                            key={`fila2-${index}`}
                            text={testimonio.text}
                            img={testimonio.img}
                            name={testimonio.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}