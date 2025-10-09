import React, { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import TestimonialCard from "./TestimonialCard";
import "../styles/Testimonial.css";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState("");
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const q = query(
      collection(db, "testimonials"),
      orderBy("timestamp", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const testimonialsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTestimonial(testimonialsData);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!review.trim()) {
      setMessage("Please enter a review.");
      return;
    }
    try {
      await addDoc(collection(db, "testimonials"), {
        name: name || "Anonymous",
        quote: review,
        timestamp: serverTimestamp(),
      });
      setMessage("Thank you for your review!");
      setName("");
      setReview("");

      setTimeout(() => setMessage(""), 5000);

    } catch (error) {
      console.error("Error submitting testimonial:", error);
      setMessage("Failed to submit. Try again.");

      setTimeout(() => setMessage(""), 5000);
    }
  };

  return (
    <section id="testimonials">
      <h2>What Readers Are Saying</h2>
      <div className="testimonial-grid">
        {testimonial.length > 0 ? (
          testimonial.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))
        ) : (
          <p>No testimonials yet. Be the first to leave a review!</p>
        )}
      </div>
      <form className="testimonial-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Write your review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />
        <button type="submit">Submit Review</button>
        {message && <p className="message">{message}</p>}
      </form>
    </section>
  );
};

export default Testimonials;
