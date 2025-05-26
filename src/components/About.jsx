import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/About.css";
import BookCover from "../assets/Mina.PNG";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about">
      <div className="about-container">
        <h2>About the Book</h2>
        <motion.div
          className="about-image"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={BookCover} alt="Book Cover" />
        </motion.div>

        <motion.button
          className="about-btn"
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Read More
        </motion.button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="modal-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p>
                <strong>Mina's Diary: All These Questions</strong> is a deeply
                relatable coming-of-age story that offers an intimate glimpse
                into the life of a teenage girl navigating the ups and downs of
                adolescence.Through the pages of her diary, 17-year-old Mina
                shares her innermost thoughts, struggles with friendships,
                school pressures, family drama, and her own sense of identity.
              </p>
              <button
                className="close-btn"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
