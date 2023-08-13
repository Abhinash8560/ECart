import React from "react";
import Header from "./component/Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import CartComponent from "./component/CartComponent";
import OrderPlaced from "./component/OrderPlaced";


const App = () => {
  return (
    <BrowserRouter>
      <Header>Cart</Header>
      <Routes>
        <>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" exact element={<CartComponent />} />
          <Route path="/orderPlaced" exact element={<OrderPlaced />} />
         
        </>
      </Routes>
    </BrowserRouter>
  );
};

export default App;