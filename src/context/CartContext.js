import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id
              ? { ...i, qty: i.qty + action.payload.qty }
              : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.payload }] };
    }
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) };
    case "UPDATE_QTY":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i
        ),
      };
    case "CLEAR_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = (product, qty = 1) => dispatch({ type: "ADD_ITEM", payload: { ...product, qty } });
  const removeFromCart = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });
  const updateQty = (id, qty) => dispatch({ type: "UPDATE_QTY", payload: { id, qty } });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const subtotal = state.items.reduce((s, it) => s + it.price * it.qty, 0);

  return (
    <CartContext.Provider value={{ items: state.items, addToCart, removeFromCart, updateQty, clearCart, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
