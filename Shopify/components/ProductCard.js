import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ProductCard = ({ p }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const exists = existingCart.some((item) => item.id === product.id);

    if (!exists) {
      existingCart.push(product);
      localStorage.setItem("cart", JSON.stringify(existingCart));
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  return (
    <div className="product-card">
      <img src={p.image} alt={p.name} />
      <h3>{p.name}</h3>
      <p>{p.price}</p>
      <p>{p.rating}</p>

      <div className="product-buttons">
        <button className="add-btn" onClick={() => handleAddToCart(p)}>
          {added ? "Added" : "Add to Cart"}
        </button>
        <Link to={`/product/${p.id}`} className="view-btn">
          View
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;