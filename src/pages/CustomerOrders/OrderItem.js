import React, { useEffect, useState } from "react";
import ListItemWrapper from "../../components/Wrappers/ListItemWrapper/ListItemWrapper";

const OrderItem = ({ productId }) => {
  const [orderItem, setorderItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setorderItem(data.data.product);
      });
  }, [productId]);

  return (
    <li>
      {orderItem && (
        <ListItemWrapper className="justify-between items-center text-sm md:text-base gap-2">
          <div className="">
            <img
              className="h-16 md:h-20 xl:h-24 rounded-lg"
              src={orderItem.picture}
              alt={orderItem.name}
            />
          </div>
          <div>
            <h3 className="md:font-medium">{orderItem.name}</h3>
          </div>
          <div className="">
            <p>Price: {orderItem.price}BDT</p>
            <p>Delivery Cost: {orderItem.deliveryCost}BDT</p>
            <p className="md:font-medium">
              Total: {orderItem.price + orderItem.deliveryCost}BDT
            </p>
          </div>
        </ListItemWrapper>
      )}
    </li>
  );
};

export default OrderItem;
