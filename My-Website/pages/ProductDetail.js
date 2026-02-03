import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import "../App.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === parseInt(id));

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.some((item) => item.id === product.id);

    if (!exists) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  if (!product) {
    return <p>Cart is empty</p>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <div className="details-info">
        <h2>{product.name}</h2>
        <p className="price">{product.price}</p>
        <p className="rating">{product.rating}</p>
        <p className="description">
          A perfect choice for your lovely pet — high-quality, durable, and
          stylish. Available in multiple sizes and colors.
        </p>
        <button className="add-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="view-btn" onClick={() => navigate("/shop")}>
          Back to Shop
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
