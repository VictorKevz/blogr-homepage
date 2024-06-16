import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="outer-container">
      <div className="inner-container">
        <Hero />
        <Feature1/>
        <Feature2/>
        <Feature3/>
        <Footer/>
      </div>
    </main>
  );
}

export default App;
