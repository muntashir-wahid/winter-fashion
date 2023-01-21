import React from "react";

const SectionWrapper = ({ children, className }) => {
  return (
    <div
      className={`container mx-auto px-2 py-4 md:px-12 md:py-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
