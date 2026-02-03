import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Save cart to localStorage when state changes
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cart_state", JSON.stringify(state.cart.items));
});

export default store;
