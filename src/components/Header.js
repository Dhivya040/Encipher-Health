import React from "react";
import { Link } from "react-router-dom";
import { FaPaw, FaShoppingCart } from "react-icons/fa";
import "../App.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <FaPaw size={24} />
        <span>PetShop</span>
      </div>

      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/cart" className="cart-icon-link">
          <FaShoppingCart size={22} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
