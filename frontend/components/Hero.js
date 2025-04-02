import React from "react";
import '../styles/hero.css';

function Hero() {
    return (
        <section className="hero">
            <p className="hero-subtitle"><span>Photography | </span>Photo of the day</p>
            <h1 className="hero-title">Witness our photo of the day</h1>
            <p className="hero-description">Every day we feature an image chosen from thousands submitted to our photo community, Your Shot. Here are favorites from each day.</p>
        </section>
    )
}

export default Hero;
