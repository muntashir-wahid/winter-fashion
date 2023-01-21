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
      fetch(`http://localhost:5000/api/v1/orders?customerId=${currUser?._id}`)
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
        <p>
          Thank you for ordering from your page. Stay with us and ware good.
        </p>
      </SectionHeaderWrapper>
      <ul>
        {orders.length &&
          orders?.map((order) => (
            <OrderItem key={order._id} productId={order.productId} />
          ))}
      </ul>
    </SectionWrapper>
  );
};

export default CustomerOrders;
