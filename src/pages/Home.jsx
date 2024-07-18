import React from 'react';
import Navbar from '../components/Home/Navbar';
import Hero from '../components/Home/Hero';
import Events from '../components/Home/Events';
import About from '../components/Home/About';
import Achievements from '../components/Home/Achievements';
import Sponsors from '../components/Home/Sponsors';
import Footer from '../components/Home/Footer';

function Home() {
  return (
    <div>

        <Navbar />
        <Hero />
      <section id="about">
        <About />
      </section>
      <section id="events">
        <Events />
      </section>
      <Achievements />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default Home;
