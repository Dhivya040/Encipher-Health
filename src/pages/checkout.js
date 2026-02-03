import React, { useEffect, useState } from "react";
import "../App.css";

const Checkout = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    localStorage.removeItem("cart");
    setCart([]);
    alert("Order placed successfully! Thank you for shopping with PetShop");
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      {cart.length === 0 ? (
        <div className="empty-checkout">
          <p>Your cart is empty!</p>
        </div>
      ) : (
        <div className="checkout-wrapper">
  
          <div className="checkout-summary">
            <h2>Order Summary</h2>
            {cart.map((item) => (
              <div key={item.id} className="checkout-item">
                <img src={item.image} alt={item.name} />
                <div className="checkout-item-info">
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
            <div className="checkout-total">
              <h3>Total: {total}</h3>
            </div>
          </div>

          <div className="checkout-form">
            <h2>Shipping Details</h2>
            <form onSubmit={handlePlaceOrder}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Phone Number" required />
              <input type="text" placeholder="Address" required />
              <input type="text" placeholder="City" required />
              <input type="text" placeholder="Postal Code" required />
              <button type="submit" className="checkout-btn">
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;