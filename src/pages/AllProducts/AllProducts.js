import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCardContainer from "../../components/Cards/ProductCard/ProductCardContainer";

const AllProducts = () => {
  const data = useLoaderData();
  const { products } = data?.data;

  return (
    <section>
      <ProductCardContainer products={products} />
    </section>
  );
};

export default AllProducts;
