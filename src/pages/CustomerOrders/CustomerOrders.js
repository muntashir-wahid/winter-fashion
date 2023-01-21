import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { CurrUserContext } from "../../store/CurrUser/CurrUserProvider";

const CustomerOrders = () => {
  const [orders, setOrders] = useState([]);
  const { currUser } = useContext(CurrUserContext);

  useEffect(() => {
    if (currUser._id) {
      fetch(`http://localhost:5000/api/v1/orders?customerId=${currUser?._id}`)
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }, [currUser]);

  return (
    <div>
      <h1>Hello from customer orders page</h1>
    </div>
  );
};

export default CustomerOrders;
