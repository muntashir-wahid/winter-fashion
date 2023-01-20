import React from "react";
import { useLoaderData } from "react-router-dom";

const AllCustomers = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);

  return (
    <div>
      {loadedData?.data?.users.map((user) => (
        <p key={user._id}>{user.name}</p>
      ))}
    </div>
  );
};

export default AllCustomers;
