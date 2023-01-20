import React, { useEffect } from "react";
import { useState } from "react";

const CartItem = ({ itemId }) => {
  const [cartItem, setCartItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/products/${itemId}`)
      .then((res) => res.json())
      .then((data) => {
        setCartItem(data.data.product);
      });
  }, [itemId]);
  console.log(cartItem);

  return (
    <li>
      {cartItem && (
        <div className="flex justify-between">
          <div>
            <img className="h-24" src={cartItem.picture} alt={cartItem.name} />
            <h3>{cartItem.name}</h3>
          </div>
          <div>
            <p>Price: {cartItem.price}</p>
            <p>Delivery Cost: {cartItem.deliveryCost}</p>
            <p>Total: {cartItem.price + cartItem.deliveryCost}</p>
          </div>
          <div>
            <button className="btn btn-primary btn-sm">Checkout</button>
            <button className="btn btn-primary btn-sm">Delete</button>
          </div>
        </div>
      )}
    </li>
  );
};

export default CartItem;
