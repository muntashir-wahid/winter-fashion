import React from "react";
import { useContext } from "react";
import CartItem from "../../components/CartItem/CartItem";
import { CartContext } from "../../store/CartContext/CartContextProvider";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Hello from the cart component</h1>
      <ul>
        {cart.map((cartItem) => (
          <CartItem key={cartItem._id} itemId={cartItem.productId} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
