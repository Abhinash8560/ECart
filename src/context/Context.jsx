import React, { createContext, useContext, useReducer } from "react";
import data from "./data.json";
import { cartReducer, productReducer } from "./Reducer";

//Creating the context
const Cart = createContext();

// wrapping the childrens in context.Provider
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: data,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};