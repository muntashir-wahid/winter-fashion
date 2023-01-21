import React from "react";
import { useContext } from "react";
import { ImStarFull, ImStarHalf } from "react-icons/im";
import { MdRateReview } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import { CurrUserContext } from "../../store/CurrUser/CurrUserProvider";
import { CartContext } from "../../store/CartContext/CartContextProvider";

const ProductDetails = () => {
  const { currUser } = useContext(CurrUserContext);
  const { addToCartHandler } = useContext(CartContext);
  const loadedData = useLoaderData();
  const { _id, name, picture, price, ratings, reviews, deliveryCost } =
    loadedData?.data?.product;

  const cartProductHandler = () => {
    const cartData = {
      productId: _id,
      userId: currUser._id,
    };
    addToCartHandler(cartData);
  };

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
              <div className="mt-6">
                {currUser?._id ? (
                  <button
                    onClick={cartProductHandler}
                    className="btn btn-primary"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <Link className="btn btn-primary" to="/login">
                    Get Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
