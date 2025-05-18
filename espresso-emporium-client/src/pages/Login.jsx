import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [showEye, setShowEye] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    loginUser(email, password)
      .then((result) => {
        const loggedInUserInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        fetch("https://espresso-emporium-server-nu-sooty.vercel.app/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedInUserInfo),
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Logged In Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <div className="mb-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-[#372727]">
          Login
        </h1>
      </div>
      <div className="flex items-center justify-center px-4">
        <div className="card w-full max-w-md bg-white shadow-2xl rounded-2xl border border-indigo-100">
          <div className="card-body p-8 space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="label text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <label className="label text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showEye ? "text" : "password"}
                    name="password"
                    className="input input-bordered w-full pr-10"
                    placeholder="Password"
                    autoComplete="true"
                    required
                  />
                  <div
                    onClick={() => setShowEye(!showEye)}
                    className="absolute top-2.5 right-3 cursor-pointer text-gray-500 z-50"
                  >
                    {showEye ? (
                      <IoMdEye size={20} />
                    ) : (
                      <IoIosEyeOff size={20} />
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <Link
                  // to="/forgot-password"
                  className="text-sm text-indigo-500 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <button className="btn bg-[#372727] text-white w-full mt-2">
                Login
              </button>
            </form>

            <div className="divider">OR</div>

            <button
              onClick={`handleGoogleSignIn`}
              className="btn btn-outline w-full"
            >
              Continue with Google
            </button>

            <p className="text-sm text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <Link
                to="/auth/registration"
                className="text-indigo-600 underline font-medium"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
