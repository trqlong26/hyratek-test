import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(stored);

    const updateCart = () => {
      const updated = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(updated);
    };

    window.addEventListener("cartUpdated", updateCart);
    return () => window.removeEventListener("cartUpdated", updateCart);
  }, []);

  const removeFromCart = (targetItem) => {
    const updated = cartItems.filter(
      (item) =>
        !(
          item.id === targetItem.id &&
          item.selectedSize === targetItem.selectedSize &&
          item.selectedColor === targetItem.selectedColor
        )
    );
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
