import React from "react";
import { ImStarFull, ImStarHalf } from "react-icons/im";
import { MdRateReview } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const loadedData = useLoaderData();
  const { name, picture, price, ratings, reviews, deliveryCost } =
    loadedData?.data?.product;

  return (
    <section>
      <div className="hero min-h-screen pb-20">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={picture}
            alt="product"
            className="w-full sm:max-w-lg rounded-lg shadow-2xl"
          />
          <div className="text-lg font-semibold space-y-5">
            <h2 className="text-3xl font-bold">{name}</h2>
            <div>
              <p>Price: {price}BDT</p>
              <p>Delivery cost: {deliveryCost}</p>
            </div>
            <div className="text-lg font-semibold">
              <div className="flex items-center gap-1">
                <span className="font-semibold">Ratings:</span>
                <div className="flex items-center">
                  <ImStarFull className="text-amber-400" />
                  <ImStarFull className="text-amber-400" />
                  <ImStarFull className="text-amber-400" />
                  <ImStarFull className="text-amber-400" />
                  <ImStarHalf className="text-amber-400" />
                </div>
                <span>({ratings})</span>
              </div>
              <div className="flex items-center gap-1">
                <span>Reviews: </span>
                <span>{reviews}</span>
                <MdRateReview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
