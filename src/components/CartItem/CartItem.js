import React, { useEffect } from "react";
import { useState } from "react";
import ListItemWrapper from "../Wrappers/ListItemWrapper/ListItemWrapper";

const CartItem = ({ itemId, onDeleteFromCart, onCheckOutPorduct }) => {
  const [cartItem, setCartItem] = useState(null);

  useEffect(() => {
    fetch(`https://winter-fashion-server.vercel.app/api/v1/products/${itemId}`)
      .then((res) => res.json())
      .then((data) => {
        setCartItem(data.data.product);
      });
  }, [itemId]);

  return (
    <li>
      {cartItem && (
        <ListItemWrapper className="justify-between items-center text-sm md:text-base">
          <div className="w-2/5">
            <img
              className="h-16 md:h-20 xl:h-24 rounded-lg"
              src={cartItem.picture}
              alt={cartItem.name}
            />
            <h3 className="md:font-medium">{cartItem.name}</h3>
          </div>
          <div className="md:w-3/12">
            <p>Price: {cartItem.price}BDT</p>
            <p>Delivery Cost: {cartItem.deliveryCost}BDT</p>
            <p className="md:font-medium">
              Total: {cartItem.price + cartItem.deliveryCost}BDT
            </p>
          </div>
          <div className="md:w-3/12 flex flex-col gap-2 justify-center items-center">
            <button
              onClick={onCheckOutPorduct}
              className="btn btn-primary btn-sm"
            >
              Buy
            </button>
            <button
              onClick={onDeleteFromCart}
              className="btn btn-primary btn-sm"
            >
              Delete
            </button>
          </div>
        </ListItemWrapper>
      )}
    </li>
  );
};

export default CartItem;
