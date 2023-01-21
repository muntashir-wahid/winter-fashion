import React from "react";
import SecondaryHeading from "../../Headings/SecondaryHeading/SecondaryHeading";
import SectionHeaderWrapper from "../../Wrappers/SectionHeaderWrapper/SectionHeaderWrapper";
import SectionWrapper from "../../Wrappers/SectionWrapper/SectionWrapper";
import ProductCard from "./ProductCard";

const ProductCardContainer = ({ products }) => {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} productData={product} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProductCardContainer;
