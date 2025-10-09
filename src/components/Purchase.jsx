import React from "react";
import "../styles/Purchase.css";


const Purchase = () => {
  return (
    <section id="purchase">
      <h2>Get Your Copy</h2>
      <p>Available on major platforms:</p>
      <ul>
        <li>
          <a
            href="https://www.amazon.co.uk/dp/1836546831?ref=cm_sw_r_ffobk_cp_ud_dp_77RDX0RFDBCF45DH10XD"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amazon UK
          </a>
        </li>
        <li>
          <a
            href="https://www.bookshop.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bookshop.org
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Purchase;
