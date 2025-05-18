import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import Swal from "sweetalert2";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [showEye, setShowEye] = useState(false);

  const handleSingUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    // const email = formData.get("email");
    // const password = formData.get("password");

    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    createUser(email, password)
      .then((result) => {
        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        // Save profile in the DB
        fetch("https://espresso-emporium-server-nu-sooty.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registration Successful",
                showConfirmButton: false,
                timer: 1500,
              });
              form.reset();
            }
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
          Create Your Account
        </h1>
      </div>
      <div className="flex items-center justify-center px-4">
        <div className="card w-full max-w-md bg-white shadow-2xl rounded-2xl border border-indigo-100">
          <div className="card-body p-8 space-y-4">
            <form onSubmit={handleSingUp} className="space-y-4">
              <div>
                <label className="label text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="label text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  className="input input-bordered w-full"
                  placeholder="Your Address"
                  required
                />
              </div>

              <div>
                <label className="label text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="flex items-center border input input-bordered w-full overflow-hidden">
                  <span className="pl-3 pr-2 text-gray-600 text-sm bg-gray-100 border-r">
                    +880
                  </span>
                  <input
                    type="tel"
                    name="phoneNumber"
                    className="w-full px-2 py-2 outline-none"
                    placeholder="1XXXXXXXXX"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="label text-sm font-medium text-gray-700">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  className="input input-bordered w-full"
                  placeholder="Profile Photo URL"
                  required
                />
              </div>

              <div>
                <label className="label text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="Email address"
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

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="terms"
                  className="checkbox checkbox-sm"
                  required
                />
                <span className="text-sm text-gray-600">
                  I accept the{" "}
                  <span className="text-indigo-500 underline">
                    terms and conditions
                  </span>
                </span>
              </div>

              <button className="btn bg-[#372727] text-white w-full mt-2">
                Sign Up
              </button>
            </form>

            <div className="divider">OR</div>

            <button
              onClick={`handleGoogleSignUp`}
              className="btn btn-outline w-full"
            >
              Sign Up with Google
            </button>

            <p className="text-sm text-center text-gray-600 mt-4">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-indigo-600 underline font-medium"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
