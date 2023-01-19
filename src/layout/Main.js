import React, { Fragment } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import TopNav from "../components/TopNav/TopNav";

const Main = () => {
  const { state } = useNavigation();

  return (
    <Fragment>
      <TopNav />
      <main className="min-h-screen">
        {state === "idle" && <Outlet />}
        {state === "loading" && <h1>Loading...</h1>}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Main;
