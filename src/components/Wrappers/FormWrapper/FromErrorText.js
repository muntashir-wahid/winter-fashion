import React from "react";

const FromErrorText = ({ message, className }) => {
  return (
    <span className={`label-text-alt text-red-500 ${className}`}>
      {message}
    </span>
  );
};

export default FromErrorText;
