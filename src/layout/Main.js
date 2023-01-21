import React, { Fragment } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";
import TopNav from "../components/NavBars/TopNav/TopNav";

const Main = () => {
  const { state } = useNavigation();

  return (
    <Fragment>
      <TopNav />
      <main className="min-h-screen">
        {state === "idle" && <Outlet />}
        {state === "loading" && <Loader className="min-h-screen w-full" />}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Main;
