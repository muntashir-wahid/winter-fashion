import React from "react";
import { useLoaderData } from "react-router-dom";

const AdminOrderList = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);

  return (
    <div>
      {loadedData?.data?.orders?.map((order) => (
        <h1 key={order._id}>{order.customerName}</h1>
      ))}
    </div>
  );
};

export default AdminOrderList;
