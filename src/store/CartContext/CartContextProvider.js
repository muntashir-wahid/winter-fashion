import { useContext } from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { CurrUserContext } from "../CurrUser/CurrUserProvider";

const contextDefaultValue = {
  cart: [],
  addToCartHandler(cartProduct) {},
};

export const CartContext = createContext(contextDefaultValue);

const CartContextProvider = ({ children }) => {
  const { currUser } = useContext(CurrUserContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (currUser?._id) {
      fetch(`http://localhost:5000/api/v1/carts?userId=${currUser._id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            setCart(data?.data?.cart);
          }
        });
    }
  }, [currUser]);

  const addToCartHandler = (cartItem) => {
    fetch("http://localhost:5000/api/v1/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          console.log(data);
          setCart((prevCart) => {
            const updatedCart = [...prevCart, data?.data?.cartItem];
            return updatedCart;
          });
        }
      });
  };

  const contextValue = {
    cart,
    addToCartHandler,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
