import React from "react";
import ProductCard from "./ProductCard";

const ProductCardContainer = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product._id} productData={product} />
      ))}
    </div>
  );
};

export default ProductCardContainer;
