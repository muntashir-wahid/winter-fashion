import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../store/CartContext/CartContextProvider";
import { CurrUserContext } from "../../../store/CurrUser/CurrUserProvider";

const ProductCard = ({ productData }) => {
  const { currUser } = useContext(CurrUserContext);
  const { addToCartHandler } = useContext(CartContext);

  const { _id, name, picture, price, isAvailable } = productData;

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
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">
            {isAvailable ? "Available" : "Out of Stock"}
          </div>
        </h2>
        <p>Price:{price}BDT</p>
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
