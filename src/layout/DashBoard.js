import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import DashboardSideNav from "../components/NavBars/DashboardSideNav/DashboardSideNav";
import DashBoardTopNav from "../components/NavBars/DashboardTopNav/DashBoardTopNav";

const DashBoard = () => {
  const { state } = useNavigation();

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
          {state === "idle" && <Outlet />}
          {state === "loading" && <Loader className="min-h-screen w-full" />}
        </div>
        <DashboardSideNav />
      </div>
    </main>
  );
};

export default DashBoard;
