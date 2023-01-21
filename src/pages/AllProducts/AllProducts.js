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
        <SecondaryHeading>Watch Out All Collections</SecondaryHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus iste
          libero natus beatae eos. Ad exercitationem facere necessitatibus error
          minus optio sequi fugit ea.
        </p>
      </SectionHeaderWrapper>
      <ProductCardContainer products={products} />
    </SectionWrapper>
  );
};

export default AllProducts;
