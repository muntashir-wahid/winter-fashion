import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSideNav from "../components/NavBars/DashboardSideNav/DashboardSideNav";
import DashBoardTopNav from "../components/NavBars/DashboardTopNav/DashBoardTopNav";

const DashBoard = () => {
  return (
    <main>
      <DashBoardTopNav />
      <div className="drawer drawer-mobile overflow-visible">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet />
        </div>
        <DashboardSideNav />
      </div>
    </main>
  );
};

export default DashBoard;
