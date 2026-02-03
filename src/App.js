import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/contact";
import Privacy from "./pages/Privacy";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/checkout";
import Tips from "./pages/Tips";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/Tips" element={<Tips />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
