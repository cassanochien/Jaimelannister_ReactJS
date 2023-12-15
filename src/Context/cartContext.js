import { useState, createContext } from "react";
import { CourseData } from "../Components/ProductList/courseData";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const handleAddToCart = (product) => {
    console.log("Adding to cart", product);
    setCartItem((prevState) => [...prevState, product]);
  };
  const handleRemoveFromCart = (product) => {
    const newCartItem = cartItem.filter((item) => item.id !== product.id);
    console.log("remove from cart", newCartItem);
    setCartItem(newCartItem);
  };

  const handleIncrease = (product) => {
    const newCartItem = cartItem.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    console.log("increase", newCartItem);
    setCartItem(newCartItem);
  };
  const handleDecrease = (product) => {
    const newCartItem = cartItem
      .map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    console.log("decrease", newCartItem);

    setCartItem(newCartItem);
  };
  const contextValue = {
    cartItem,
    handleAddToCart,
    handleRemoveFromCart,
    handleIncrease,
    handleDecrease,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
