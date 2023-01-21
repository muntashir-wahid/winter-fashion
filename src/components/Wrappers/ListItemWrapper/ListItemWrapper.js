import React from "react";

const ListItemWrapper = ({ children, className }) => {
  return (
    <div className={`flex py-4 border-t-2 border-b-2 ${className}`}>
      {children}
    </div>
  );
};

export default ListItemWrapper;
