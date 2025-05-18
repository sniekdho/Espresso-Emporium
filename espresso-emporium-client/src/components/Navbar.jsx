import React, { useContext } from "react";
import logo from "../assets/more/logo1.png";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        logoutUser()
          .then(() => {
            Swal.fire({
              title: "Logout!",
              text: "Logout Successfully",
              icon: "success",
            });
            navigate("/auth/login");
          })
          .catch((error) => {
            alert(error.message);
          });
      }
    });
  };

  return (
    <nav className="flex justify-between items-center mx-auto bg-[#372727] p-1.5">
      <Link to="/">
        <div className="flex justify-center items-center">
          <img className="w-12 h-12" src={logo} alt="" />
          <h1 className="text-white">Espresso Emporium</h1>
        </div>
      </Link>
      <div>
        <NavLink
          to="/addCoffee"
          className={({ isActive }) =>
            isActive
              ? "bg-[#554a4a] text-white px-3 py-1 rounded"
              : "px-3 py-1 text-white"
          }
        >
          Add Coffee
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive
              ? "bg-[#554a4a] text-white px-3 py-1 rounded"
              : "px-3 py-1 text-white"
          }
        >
          All Users
        </NavLink>
      </div>
      <div className="space-x-2">
        {user ? (
          <div className="text-white">
            <p>{user.email}</p>
            <button onClick={handleSignOut} className="btn">
              Logout
            </button>
          </div>
        ) : (
          <>
            <button className="btn bg-[#682b2b] border-0 shadow text-white">
              <Link to="/auth/login">Login</Link>
            </button>
            <button className="btn bg-[#682b2b] border-0 shadow text-white">
              <Link to="/auth/registration">Register</Link>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
