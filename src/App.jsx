import Test from "./Test";
import "./main.css";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import { ParticleTextEffect } from "./components/particle-text-effect";
import { useState } from "react";

const App = () => {
  const [showHero, setShowHero] = useState(false);

  const handleParticleComplete = () => {
    console.log("Particle text effect completed - hiding particle effect and showing Hero");
    setShowHero(true);
  };

  return (
    <div>
      <Cursor />
      <section id="Homepage">
        {/* <Navbar /> */}
        {!showHero ? (
          <ParticleTextEffect onComplete={handleParticleComplete} />
        ) : (
          <Hero />
        )}
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
