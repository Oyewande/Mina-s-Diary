import React from "react";
import { motion } from "framer-motion";
import '../styles/TestimonialCard.css'

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <p className="quote">"{testimonial.quote}"</p>
      <h4 className="name">- {testimonial.name}</h4>
    </motion.div>
  );
};

export default TestimonialCard;
