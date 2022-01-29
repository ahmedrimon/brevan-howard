import React from 'react';
import './Home.css';
import Navbar from '../../Shared/Navbar/Navbar';
import Hero from '../Hero/Hero';
import AboutUs from './../AboutUs/AboutUs';
import Investment from '../Investment/Investment';
import HallMarks from '../HallMarks/HallMarks';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../../Shared/Footer/Footer.js';

const Home = () => {
  return (
    <section>
      <main className="main-bg">
        <Navbar />
        <Hero />
      </main>
      <AboutUs />
      <Investment />
      <HallMarks />
      <ContactUs />
      <Footer />
    </section>
  );
};

export default Home;
