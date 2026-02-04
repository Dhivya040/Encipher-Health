import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>© 2026 PetShop</p>
      <div className="footer-links">
        <Link to="/about">About</Link>
        <span>•</span>
        <Link to="/contact">Contact</Link>
        <span>•</span>
        <Link to="/privacy">Privacy</Link>
      </div>
    </footer>
  );
};

export default Footer;
