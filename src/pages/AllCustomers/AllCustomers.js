import React from "react";
import { useLoaderData } from "react-router-dom";
import SecondaryHeading from "../../components/Headings/SecondaryHeading/SecondaryHeading";
import SectionHeaderWrapper from "../../components/Wrappers/SectionHeaderWrapper/SectionHeaderWrapper";
import SectionWrapper from "../../components/Wrappers/SectionWrapper/SectionWrapper";
import CustomerList from "./CustomerList";

const AllCustomers = () => {
  const loadedData = useLoaderData();

  return (
    <SectionWrapper>
      <SectionHeaderWrapper>
        <SecondaryHeading>All Customers we have</SecondaryHeading>
      </SectionHeaderWrapper>
      <ul>
        {loadedData?.data?.users?.map((user) => (
          <CustomerList key={user._id} customer={user} />
        ))}
      </ul>
    </SectionWrapper>
  );
};

export default AllCustomers;
