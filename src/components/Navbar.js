import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPaw, FaShoppingCart } from "react-icons/fa";
import "../App.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
     
      <div className="navbar-left" onClick={() => navigate("/")}>
        <FaPaw className="navbar-icon" />
        <span className="navbar-title">PetShop</span>
      </div>

     
      <div className="navbar-right">
        <Link to="/shop" className="nav-link">Shop</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/tips" className="nav-link">Tips</Link>
        <FaShoppingCart
          className="cart-icon"
          onClick={() => navigate("/cart")}
          title="View Cart"
        />
      </div>
    </nav>
  );
};

export default Navbar;
