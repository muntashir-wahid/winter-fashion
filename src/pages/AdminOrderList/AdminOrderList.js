import React from "react";
import { useLoaderData } from "react-router-dom";
import SecondaryHeading from "../../components/Headings/SecondaryHeading/SecondaryHeading";
import SectionHeaderWrapper from "../../components/Wrappers/SectionHeaderWrapper/SectionHeaderWrapper";
import SectionWrapper from "../../components/Wrappers/SectionWrapper/SectionWrapper";
import AdminOrderItem from "./AdminOrderItem";

const AdminOrderList = () => {
  const loadedData = useLoaderData();
  const { orders } = loadedData?.data;

  return (
    <SectionWrapper>
      <SectionHeaderWrapper>
        <SecondaryHeading>All Order</SecondaryHeading>
      </SectionHeaderWrapper>
      <ul>
        {orders.length > 0 &&
          orders?.map((order) => (
            <AdminOrderItem
              key={order._id}
              customerName={order.customerName}
              productId={order.productId}
            />
          ))}
      </ul>
    </SectionWrapper>
  );
};

export default AdminOrderList;
