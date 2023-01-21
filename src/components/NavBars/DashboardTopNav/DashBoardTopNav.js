import React from "react";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const DashBoardTopNav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Winter Fashion
        </Link>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <MdDashboard className="text-3xl" />
          </label>
        </button>
      </div>
    </div>
  );
};

export default DashBoardTopNav;
