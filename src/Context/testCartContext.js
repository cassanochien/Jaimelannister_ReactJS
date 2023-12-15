import { useState, createContext, useReducer } from "react";
import { CourseData } from "../Components/ProductList/courseData";

export const testCartProvider = createContext();

// 01. initState
const initCart = [];
// 02. actions
const ADD_TO_CART = "add_to_cart";
const REMOVE_FROM_CART = "remove_from_cart";
const DECREASE_QUANTITY = "decrease_quantity";
const INCREASE_QUANTITY = "increase_quantity";

const addingToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};
const removingFromCart = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
};
const decreaseQuantity = (payload) => {
  return {
    type: DECREASE_QUANTITY,
    payload,
  };
};
const increaseQuantity = (payload) => {
  return {
    type: INCREASE_QUANTITY,
    payload,
  };
};
// 03. reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        initCart: [...state, payload],
      };
    case REMOVE_FROM_CART:
      return {
        initCart: initCart.filter((payload) => payload.id !== product.id),
      };
    case DECREASE_QUANTITY:
      return {};
    case INCREASE_QUANTITY:
      return {};
    default:
      throw new Error("Invalid action !");
  }
};
// 4. dispatch
const [state, cartDispatch] = useReducer(cartReducer, initCart);

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

export default testCartProvider;
