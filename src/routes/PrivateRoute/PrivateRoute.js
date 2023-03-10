import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { CurrUserContext } from "../../store/CurrUser/CurrUserProvider";

const PrivateRoute = ({ children }) => {
  const { currUser, isUserLoading } = useContext(CurrUserContext);

  const location = useLocation();

  if (isUserLoading) {
    return <Loader className="min-h-screen w-full" />;
  }

  if (!currUser?._id) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
