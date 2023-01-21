import React from "react";

const SecondaryHeading = ({ children, className }) => {
  return (
    <h2
      className={`text-2xl font-semibold md:text-3xl lg:text-4xl mb-2 ${className}`}
    >
      {children}
    </h2>
  );
};

export default SecondaryHeading;
