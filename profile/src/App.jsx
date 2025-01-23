import React from 'react';
import CustomCursor from './Components/CustomCursor';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Hero from './View/Hero';
import About from './View/About';
import Myresume from './View/Myresume';
import Services from './View/Services';
import Skills from './View/Skills';
import Projects from './View/Projects';
import Pricing from './View/Pricing';
import Contact from './View/Contact';
import './App.css';

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <CustomCursor />
      <Header onNavigate={scrollToSection} />
      

<div className="App">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="myresume">
          <Myresume />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />


          </>
  );
}

export default App;

