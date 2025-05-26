import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {" "}
      <div className="hero-content">
        <h1 className="carattere-regular">Mina's Diary: All These Questions</h1>
        <p>"An intimate glimpse into the life of a teenage girl navigating the ups and downs of adolescence."</p>
        <p className="author">By Huldah</p>
        <a href="#purchase" className="btn">
          Get Your Copy
        </a>
      </div>
    </motion.section>
  ); 
};

export default Hero;
