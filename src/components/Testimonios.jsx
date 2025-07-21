"use client";

import { useState, useEffect } from "react";
import "@/styles/Testimonios.css";
import CardTestimonio from "./CardTestimonio";

const testimoniosFila1 = [
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson",
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson",
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson",
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson",
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson",
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson",
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson",
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson",
    },
];
const testimoniosFila2 = [
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson",
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson",
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson",
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson",
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson",
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson",
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnson",
    },
    {
        text: "Garage door spring replacement: Roman was great, called before arrival, was on time, precision skills, fully stocked truck. Reasonable price and certainly a nice person. Five stars!",
        img: "/testimonials/mjhonson.png",
        name: "M. Johnsoasdn",
    },
];

const allTestimonios = [...testimoniosFila1, ...testimoniosFila2];

export default function Testimonios() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? allTestimonios.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === allTestimonios.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <section className="testimonios">
            <div className="testimonios-container">
                <div className="testimonios-text">
                    <span className="mini-title">TESTIMONIALS</span>
                    <h2>
                        Real Reviews, <strong>Real Results</strong>
                    </h2>
                </div>
            </div>

            {!isMobile && (
                <div className="testimonios-marquee">
                    <div className="testimonios-fila1-wrapper">
                        <div className="testimonios-fila testimonios-fila1">
                            {[...testimoniosFila1, ...testimoniosFila1].map(
                                (testimonio, index) => (
                                    <CardTestimonio
                                        key={`fila1-${index}`}
                                        {...testimonio}
                                    />
                                )
                            )}
                        </div>
                    </div>
                    <div className="testimonios-fila2-wrapper">
                        <div className="testimonios-fila testimonios-fila2">
                            {[...testimoniosFila2, ...testimoniosFila2].map(
                                (testimonio, index) => (
                                    <CardTestimonio
                                        key={`fila2-${index}`}
                                        {...testimonio}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
            )}

            {isMobile && (
                <div className="testimonios-mobile-slider">
                    <div key={currentIndex} className="testimonio-slide-in">
                        <CardTestimonio {...allTestimonios[currentIndex]} />
                    </div>

                    <div className="testimonios-arrows">
                        <button onClick={handlePrev}>
                            <img
                                src="/svgs/slider-left.svg"
                                alt="Slider Left"
                            />
                        </button>
                        <button onClick={handleNext}>
                            <img
                                src="/svgs/slider-right.svg"
                                alt="Slider Right"
                            />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
