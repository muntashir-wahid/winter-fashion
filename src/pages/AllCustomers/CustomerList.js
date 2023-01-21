import React from "react";
import ListItemWrapper from "../../components/Wrappers/ListItemWrapper/ListItemWrapper";

const CustomerList = ({ customer }) => {
  return (
    <li>
      <ListItemWrapper className="justify-between items-center gap-2">
        <div>
          <img
            src={customer.picture}
            alt={customer.name}
            className="h-24 w-24 rounded-lg"
          />
        </div>
        <div>
          <h4 className="text-xl font-medium">{customer.name}</h4>
        </div>
        <div>
          <p className="font-medium">Contact no:</p>
          <p>{customer.phoneNum}</p>
        </div>
      </ListItemWrapper>
    </li>
  );
};

export default CustomerList;
