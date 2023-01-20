import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CurrUserProvider from "./store/CurrUser/CurrUserProvider";
import CartContextProvider from "./store/CartContext/CartContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CurrUserProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </CurrUserProvider>
);
