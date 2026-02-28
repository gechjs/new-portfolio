import Test from "./Test";
import "./main.css";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import Certificates from "./components/certificates/Certificates";
import Skills from "./components/skills/Skills";
import { ParticleTextEffect } from "./components/particle-text-effect";
import { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  const [showHero, setShowHero] = useState(false);

  const handleParticleComplete = () => {
    console.log("Particle text effect completed - hiding particle effect and showing Hero");
    setShowHero(true);
  };

  return (
    <div className="bg-black text-white">
      <Header />
      <Cursor />
      <section id="home" className="min-h-screen">
        {/* <Navbar /> */}
        {!showHero ? (
          <ParticleTextEffect onComplete={handleParticleComplete} />
        ) : (
          <Hero />
        )}
      </section>
      <section id="services">
        <Parallax type="services" />
      </section>
      <Services />
      <section id="portfolio">
        <Parallax type="portfolio" />
      </section>

      <Portfolio />
      <section id="skills">
        <Parallax type="skills" />
      </section>
      <Skills />
      <section id="experience">
        <Parallax type="experience" />
      </section>
      <Experience />
      <Certificates />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      
    </div>
  );
};

export default App;
