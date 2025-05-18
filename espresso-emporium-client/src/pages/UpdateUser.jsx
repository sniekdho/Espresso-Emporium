import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthContext";

const UpdateUser = () => {
  const { user, setUser, updateUser } = useContext(AuthContext);
  const { _id, name, address, phoneNumber, photoUrl, email } = useLoaderData();

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateUserData = Object.fromEntries(formData.entries());

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        updateUser({ displayName: updateUserData.name })
          .then(() => {
            fetch(
              `https://espresso-emporium-server-nu-sooty.vercel.app/users/${_id}`,
              {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(updateUserData),
              }
            )
              .then((res) => res.json())
              .then((data) => {
                if (data.matchedCount) {
                  setUser({ ...user, displayName: updateUserData.name });
                  Swal.fire("Saved!", "", "success");
                }
              });
          })
          .catch((error) => {
            alert(error.message);
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div className="p-2">
      <div className="mb-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-[#372727]">
          Create Your Account
        </h1>
      </div>
      <div className="flex items-center justify-center px-4">
        <div className="card w-full max-w-md bg-white shadow-2xl rounded-2xl border border-indigo-100">
          <div className="card-body p-8 space-y-4">
            <form onSubmit={handleUpdateUser} className="space-y-4">
              <div>
                <label className="label text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
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
                  defaultValue={address}
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
                    defaultValue={phoneNumber}
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
                  defaultValue={photoUrl}
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
                  defaultValue={email}
                  className="input input-bordered w-full"
                  placeholder="Email address"
                  required
                />
              </div>

              <button className="btn bg-[#372727] text-white w-full mt-2">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
