import React from "react";

const Loader = ({ className, message }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center space-y-3 ${className}`}
    >
      <progress className="progress w-56"></progress>
      <p className="text-primary">Please wait!Loading...</p>
    </div>
  );
};

export default Loader;
