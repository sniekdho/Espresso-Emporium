import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Navigate } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-bars loading-xl"></span>;
  }

  if (user && user.email) {
    return children;
  }

  return <Navigate to="/auth/login"></Navigate>;
};

export default PrivateRouter;
