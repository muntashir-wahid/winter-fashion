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
      {orders.length === 0 && (
        <div className="text-center text-3xl font-semibold">
          <h2>There is no available order for right now</h2>
        </div>
      )}
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
