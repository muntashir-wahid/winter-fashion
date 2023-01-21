import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { CurrUserContext } from "../../store/CurrUser/CurrUserProvider";

const AdminRoute = ({ children }) => {
  const { currUser, isUserLoading } = useContext(CurrUserContext);

  const navigate = useNavigate();

  if (currUser?.role === "admin") {
    return children;
  } else if (isUserLoading) {
    return <Loader className="min-h-screen w-full" />;
  } else {
    navigate("/home");
    return;
  }
};

export default AdminRoute;
