import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCardContainer from "../../components/Cards/ProductCard/ProductCardContainer";
import SecondaryHeading from "../../components/Headings/SecondaryHeading/SecondaryHeading";
import SectionHeaderWrapper from "../../components/Wrappers/SectionHeaderWrapper/SectionHeaderWrapper";
import SectionWrapper from "../../components/Wrappers/SectionWrapper/SectionWrapper";

const TopProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data?.data?.products));
  }, []);

  return (
    <SectionWrapper>
      <section>
        <SectionHeaderWrapper>
          <SecondaryHeading>Explore Your best products</SecondaryHeading>
          <p>
            We have an amazing collection for this winter. All clothes are so
            much comfortable and stylish. Here you can find some of our best
            collections.
          </p>
        </SectionHeaderWrapper>
        <ProductCardContainer products={products.slice(0, 3)} />
        <div className="flex justify-center my-10">
          <Link className="btn btn-primary" to="/all-products">
            See all Products
          </Link>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default TopProducts;
