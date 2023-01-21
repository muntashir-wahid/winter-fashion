import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCardContainer from "../../components/Cards/ProductCard/ProductCardContainer";
import SecondaryHeading from "../../components/Headings/SecondaryHeading/SecondaryHeading";
import SectionHeaderWrapper from "../../components/Wrappers/SectionHeaderWrapper/SectionHeaderWrapper";
import SectionWrapper from "../../components/Wrappers/SectionWrapper/SectionWrapper";

const AllProducts = () => {
  const data = useLoaderData();
  const { products } = data?.data;

  return (
    <SectionWrapper>
      <SectionHeaderWrapper>
        <SecondaryHeading>Explore our all Collections</SecondaryHeading>
        <p>
          We have some excellent and high-quality winter clothes collections.
          You can shop from the collection. We ensure comfortable to wear.
        </p>
      </SectionHeaderWrapper>
      <ProductCardContainer products={products} />
    </SectionWrapper>
  );
};

export default AllProducts;
