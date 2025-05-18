import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="p-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
