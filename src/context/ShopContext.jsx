// src/context/ShopContext.js
import React, { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const addToWishlist = (item) => {
    setWishlist((prev) => {
      const exists = prev.find((wishItem) => wishItem.id === item.id);
      if (exists) return prev;
      return [...prev, item];
    });
  };

  // ✅ Remove item completely from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <ShopContext.Provider
      value={{ cart, wishlist, addToCart, addToWishlist, removeFromCart }}
    >
      {children}
    </ShopContext.Provider>
  );
};
