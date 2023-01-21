import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ImStarFull } from "react-icons/im";
import { ImStarHalf } from "react-icons/im";
import { CartContext } from "../../../store/CartContext/CartContextProvider";
import { CurrUserContext } from "../../../store/CurrUser/CurrUserProvider";

const ProductCard = ({ productData }) => {
  const { currUser } = useContext(CurrUserContext);
  const { addToCartHandler } = useContext(CartContext);

  const { _id, name, picture, price, isAvailable, ratings } = productData;
  console.log(productData);

  const cartProductHandler = (cartItemId) => {
    const cartData = {
      productId: cartItemId,
      userId: currUser._id,
    };
    addToCartHandler(cartData);
  };

  return (
    <article className="card bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" className="h-96" />
      </figure>
      <div className="card-body">
        <h3 className="card-title items-start">
          {name}
          <div className="badge badge-secondary">
            {isAvailable ? "Available" : "Out of Stock"}
          </div>
        </h3>
        <p className="font-semibold">Price: {price}BDT</p>
        <div className="flex items-center gap-1 mb-3">
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
        <div className="card-actions justify-end">
          {currUser?._id && (
            <button
              onClick={cartProductHandler.bind(null, productData._id)}
              className="btn btn-primary"
            >
              Add to Cart
            </button>
          )}
          {!currUser?._id && (
            <Link to="/login" className="btn btn-primary">
              Add to Cart
            </Link>
          )}
          <Link to={`/products/${_id}`} className="btn btn-primary btn-outline">
            View details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
