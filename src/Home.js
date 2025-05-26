import React from 'react';
import { Helmet } from 'react-helmet';
import { AnimatePresence } from 'framer-motion';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Purchase from './components/Purchase';
import Testimonial from './components/Testimonial';
import './App.css';

function Home() {
  return (
    <AnimatePresence>
      <div className="App">
        <Helmet>
          <title>Mina's Diary: All These Questions</title>
          <meta name="description" content="A deeply relatable coming-of-age story that offers an intimate glimpse into the life of a teenage girl navigating the ups and downs of adolescence." />
        </Helmet>
        <Header />
        <Hero />
        <About />
        <Testimonial />
        <Purchase />
        <Contact />
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default Home;
