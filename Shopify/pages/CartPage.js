import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../App.css";

const CartPage = () => {
  const { items, removeFromCart, updateQty, subtotal } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <main className="page-container text-center">
        <h2>Your cart is empty</h2>
        <p>Find something your pet will love.</p>
        <button onClick={() => navigate("/shop")} className="btn-primary" style={{ marginTop: "20px" }}>
          Shop Now
        </button>
      </main>
    );
  }

  return (
    <main className="page-container cart-page">
      <div>
        <h1>Your Cart</h1>
        {items.map((it) => (
          <div key={it.id} className="cart-item">
            <img src={it.image} alt={it.name} />
            <div className="cart-item-info">
              <div className="cart-item-name">{it.name}</div>
              <div className="cart-item-price">₹{it.price} each</div>
              <div style={{ marginTop: "8px" }}>
                <button onClick={() => updateQty(it.id, Math.max(1, it.qty - 1))}>−</button>
                <span style={{ padding: "0 10px" }}>{it.qty}</span>
                <button onClick={() => updateQty(it.id, it.qty + 1)}>+</button>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontWeight: "600" }}>₹{it.price * it.qty}</div>
              <button onClick={() => removeFromCart(it.id)} style={{ color: "red", marginTop: "6px" }}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <aside className="cart-summary">
        <div className="order-item">
          <span>Subtotal</span>
          <span>{subtotal}</span>
        </div>
        <div className="order-item">
          <span>Delivery</span>
          <span>49</span>
        </div>
        <div className="order-total">
          <span>Total</span>
          <span>{subtotal + 49}</span>
        </div>
        <button onClick={() => navigate("/checkout")} className="btn-primary" style={{ marginTop: "20px", width: "100%" }}>
          Proceed to Checkout
        </button>
      </aside>
    </main>
  );
};

export default CartPage;
