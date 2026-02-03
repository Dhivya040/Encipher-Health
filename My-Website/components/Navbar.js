import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaPaw, FaShoppingCart } from "react-icons/fa";
import "../App.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-left" onClick={() => navigate("/")}>
        <FaPaw className="navbar-icon" />
        <span className="navbar-title">PetShop</span>
      </div>

      <div className="navbar-right">
        <Link
          to="/shop"
          className={`nav-link ${location.pathname === "/shop" ? "active" : ""}`}
        >
          Shop
        </Link>

        <Link
          to="/contact"
          className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
        >
          Contact
        </Link>

        <Link
          to="/login"
          className={`nav-link ${location.pathname === "/login" ? "active" : ""}`}
        >
          Login
        </Link>

        <Link
          to="/tips"
          className={`nav-link ${location.pathname === "/tips" ? "active" : ""}`}
        >
          Tips
        </Link>

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
