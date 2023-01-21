import { useContext } from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { CurrUserContext } from "../CurrUser/CurrUserProvider";

const contextDefaultValue = {
  cart: [],
  addToCartHandler(cartProduct) {},
  deleteFromCartHandler(cartItem) {},
  checkoutProductHandler(cartId, productId) {},
};

export const CartContext = createContext(contextDefaultValue);

const CartContextProvider = ({ children }) => {
  const { currUser } = useContext(CurrUserContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (currUser?._id) {
      fetch(
        `https://winter-fashion-server.vercel.app/api/v1/carts?userId=${currUser._id}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            setCart(data?.data?.cart);
          }
        });
    }
  }, [currUser]);

  const addToCartHandler = (cartItem) => {
    fetch("https://winter-fashion-server.vercel.app/api/v1/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setCart((prevCart) => {
            const updatedCart = [...prevCart, data?.data?.cartItem];
            return updatedCart;
          });
        }
      });
  };

  const deleteFromCartHandler = (cartItemId) => {
    fetch(
      `https://winter-fashion-server.vercel.app/api/v1/carts/${cartItemId}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setCart((prevCart) => {
            const updatedCart = prevCart.filter(
              (el) => el._id !== data?.data?.item?._id
            );
            return updatedCart;
          });
        }
      });
  };

  const checkoutProductHandler = (cartId, productId) => {
    const orderedProduct = {
      productId,
      customerName: currUser.name,
      customerId: currUser._id,
    };

    fetch("https://winter-fashion-server.vercel.app/api/v1/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "success") {
          deleteFromCartHandler(cartId);
        }
      });
  };

  const contextValue = {
    cart,
    addToCartHandler,
    deleteFromCartHandler,
    checkoutProductHandler,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
