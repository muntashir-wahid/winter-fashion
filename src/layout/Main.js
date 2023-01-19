import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import TopNav from "../components/TopNav/TopNav";

const Main = () => {
  return (
    <Fragment>
      <TopNav />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Main;
