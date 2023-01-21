import React from "react";

const FromWrapper = ({ children, className }) => {
  return (
    <div
      className={`bg-base-200 p-8 rounded-lg shadow-lg mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default FromWrapper;
