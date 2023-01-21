import React from "react";
import { Link } from "react-router-dom";
import banner from "./../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <section className="mb-20">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to Winter Fashion
            </h1>
            <p className="mb-5">
              We provide the best winter clothes out of the market. Here you can
              find high-quality clothes at a reasonable price.
            </p>
            <Link to="/all-products" className="btn btn-primary">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
