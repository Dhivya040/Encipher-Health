import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PRODUCTS from "../data/products";
import "../App.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = PRODUCTS.find((p) => p.id.toString() === id);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.some((item) => item.id === product.id);

    if (!exists) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  if (!product) {
    return (
      <div className="empty-details">
        <h3>Product Not Found</h3>
        <button className="back-btn" onClick={() => navigate("/shop")}>
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="detail-card">
        <img src={product.image} alt={product.name} className="detail-image" />
        <div className="detail-content">
          <h2>{product.name}</h2>
          <p className="price">{product.price}</p>
          <p className="rating">{product.rating}</p>
          <p className="description">
            {product.description ||
              "A perfect choice for your lovely pet — high-quality, durable, and stylish. Available in multiple sizes and colors."}
          </p>

          <div className="detail-buttons">
            <button className="add-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="view-btn" onClick={() => navigate("/shop")}>
              Back to Shop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;