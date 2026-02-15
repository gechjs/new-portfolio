import Test from "./Test";
import "./main.css";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Certificates from "./components/certificates/Certificates";
import { ParticleTextEffect } from "./components/particle-text-effect";
import { useState } from "react";

const App = () => {
  const [showHero, setShowHero] = useState(false);

  const handleParticleComplete = () => {
    console.log("Particle text effect completed - hiding particle effect and showing Hero");
    setShowHero(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Cursor />
      <section id="Homepage" className="min-h-screen">
        {/* <Navbar /> */}
        {!showHero ? (
          <ParticleTextEffect onComplete={handleParticleComplete} />
        ) : (
          <Hero />
        )}
      </section>
      <section id="Services" className="min-h-screen">
        <Parallax type="services" />
      </section>
      <section className="min-h-screen">
        <Services />
      </section>
      <section id="Portfolio" className="min-h-screen">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <Certificates />
      <section id="Contact" className="min-h-screen">
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
