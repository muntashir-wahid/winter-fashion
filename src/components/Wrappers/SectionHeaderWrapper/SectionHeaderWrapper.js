import React from "react";

const SectionHeaderWrapper = ({ children, className }) => {
  return (
    <header
      className={`w-full md:w-8/12 text-center mb-12 mx-auto px-2 ${className}`}
    >
      {children}
    </header>
  );
};

export default SectionHeaderWrapper;
