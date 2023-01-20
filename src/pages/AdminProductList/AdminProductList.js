import React from "react";
import { useLoaderData } from "react-router-dom";

const AdminProductList = () => {
  const loadedData = useLoaderData();

  console.log(loadedData);

  return (
    <div>
      {loadedData?.data?.products?.map((product) => (
        <p key={product._id}>{product.name}</p>
      ))}
    </div>
  );
};

export default AdminProductList;
