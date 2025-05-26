import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from '../assets/Mina.PNG'
import "../styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Book Logo" />
      </div>
      
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </div>


      <nav className={isOpen ? "open" : ""}>
        <ul>
          <li><Link to="hero" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="testimonials" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Reviews</Link></li>
          <li><Link to="purchase" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Purchase</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;