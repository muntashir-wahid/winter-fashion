import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCardContainer from "../../components/Cards/ProductCard/ProductCardContainer";
import Banner from "./Banner";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data?.data?.products));
  });

  return (
    <Fragment>
      <Banner />
      <section>
        <ProductCardContainer products={products.slice(0, 3)} />
        <div className="flex justify-center my-10">
          <Link className="btn btn-primary" to="/all-products">
            See all Products
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
