import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ productData }) => {
  const user = { _id: 112 };
  // const user = null;

  const { _id, name, picture, price, isAvailable } = productData;

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
          {user?._id && (
            <button className="btn btn-primary">Add to Cart</button>
          )}
          {!user?._id && (
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
