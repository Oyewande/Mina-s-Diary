import React from "react";
import "../styles/Footer.css";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <a
          href="https://www.instagram.com/huldah_thestationarymissionary?igsh=MWV0MDB1eG9kZW5vbA=="
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <FaInstagram className="instagram-icon" />
        </a>
        <p>&copy; 2025 anonymously-yours. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
