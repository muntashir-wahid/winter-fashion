import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import SecondaryHeading from "../../components/Headings/SecondaryHeading/SecondaryHeading";
import SectionHeaderWrapper from "../../components/Wrappers/SectionHeaderWrapper/SectionHeaderWrapper";
import SectionWrapper from "../../components/Wrappers/SectionWrapper/SectionWrapper";
import { CurrUserContext } from "../../store/CurrUser/CurrUserProvider";
import OrderItem from "./OrderItem";

const CustomerOrders = () => {
  const [orders, setOrders] = useState([]);
  const { currUser } = useContext(CurrUserContext);

  useEffect(() => {
    if (currUser?._id) {
      fetch(
        `https://winter-fashion-server.vercel.app/api/v1/orders?customerId=${currUser?._id}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.status === "success") {
            setOrders(data?.data?.orders);
          }
        });
    }
  }, [currUser]);

  return (
    <SectionWrapper>
      <SectionHeaderWrapper>
        <SecondaryHeading>Your Orders {currUser?.name}</SecondaryHeading>
        <p>Thank you for ordering from our page. Stay with us and ware good.</p>
      </SectionHeaderWrapper>
      {orders.length === 0 && (
        <div className="text-center text-3xl font-semibold">
          <h2>Your haven't orderd anythig from our page</h2>
        </div>
      )}
      <ul>
        {orders.length > 0 &&
          orders?.map((order) => (
            <OrderItem key={order._id} productId={order.productId} />
          ))}
      </ul>
    </SectionWrapper>
  );
};

export default CustomerOrders;
