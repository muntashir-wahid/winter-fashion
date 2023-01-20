import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrUserContext } from "../../store/CurrUser/CurrUserProvider";

const DashboardSideNav = () => {
  const { currUser } = useContext(CurrUserContext);

  return (
    <aside className="drawer-side">
      <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
      <ul className="menu h-full p-4 w-80 bg-base-300 lg:bg-base-200 text-base-content">
        <li className="flex-row">
          <div>
            <div className="avatar">
              <div className="w-20 rounded-full">
                <img alt="Admin" src={currUser?.picture} />
              </div>
            </div>
            <div>
              <p>{currUser?.name}</p>
            </div>
          </div>
        </li>
        <li>
          <Link to="/dashboard">All Customers</Link>
        </li>
        <li>
          <Link to="/dashboard/orders-list">All Orders</Link>
        </li>
        <li>
          <Link to="/dashboard/product-list">All Products</Link>
        </li>
        <li>
          <Link to="/dashboard/add-costomer">Add a Customer</Link>
        </li>
        <li>
          <Link to="/dashboard/add-product">Add a product</Link>
        </li>
      </ul>
    </aside>
  );
};

export default DashboardSideNav;
