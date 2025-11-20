import React, { useContext } from "react";
import AuthContext from "../Contexts/CreateAuthContext";
import { Navigate, useLocation } from "react-router";
import Spinner from "../Components/Spinner";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log(location);

  const { user, authLoading } = useContext(AuthContext);

  if (authLoading) {
    return <Spinner></Spinner>;
  }
  return user ? (
    children
  ) : (
    <Navigate to="/login" state={location.pathname}></Navigate>
  );
};

export default PrivateRoute;
