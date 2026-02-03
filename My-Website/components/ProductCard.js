import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/cartSlice";
import { Link } from "react-router-dom";
import "../App.css";

const ProductCard = ({ p }) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addItem(p));
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="product-card">
      <img src={p.image} alt={p.name} />
      <h3>{p.name}</h3>
      <p>{p.price}</p>
      <div className="product-buttons">
        <button className="add-btn" onClick={handleAddToCart}>
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
