import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../Redux/cartSlice";
import "../App.css";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    dispatch(clearCart());
    alert("Order placed successfully!");
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="empty-checkout">Your cart is empty</p>
      ) : (
        <div className="checkout-wrapper">
          <div className="checkout-summary">
            <h2>Order Summary</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="checkout-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>
                    {item.price} × {item.quantity}
                  </p>
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
