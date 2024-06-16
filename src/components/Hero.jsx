import React from "react";
import "./css/hero.css";
import Navbar from "./Navbar";
function Hero() {
  return (
    <header className="hero-nav-container">
        <Navbar/>
      <div className="hero-container">
        <div className="hero-text-container">
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
        </div>
        <div className="hero-links-container">
          <a className="link filled">Start For Free</a>
          <a className="link">Learn More</a>
        </div>
      </div>
    </header>
  );
}
export default Hero;
