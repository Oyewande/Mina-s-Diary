import React, { useState } from "react";
import { subscribeEmail } from "../firebase/subscriptions";
import '../styles/Contact.css'

const Contact = () => {
  const [email, setEmail] = useState("");
  // const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    const success = await subscribeEmail(email);
    if (success) {
      setMessage("Thank you for subscribing!");
      setEmail("");
      
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } else {
      setMessage("Subscription failed. Try again.");
    }
  };

  return (
    <section id="contact">
      <h2>Stay Updated</h2>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" >
          Subscribe
        </button>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
};

export default Contact;
