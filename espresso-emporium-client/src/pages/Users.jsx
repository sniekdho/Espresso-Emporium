import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthContext";

const Users = () => {
  const { deletingUser } = useContext(AuthContext);
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);

  const handleDeleteUser = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              // SweetAlert
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });

              //   Delete user from firebase
              deletingUser()
                .then()
                .catch((error) => console.log(error.message));

              // update UI
              setUsers(users.filter((user) => user._id !== _id));
            }
          });
      }
    });
  };

  return (
    <div>
      <div>
        <h1>Users : {users.length}</h1>

        <div className="overflow-x-auto p-5">
          <table className="table w-full bg-[#554a4a] text-center">
            {/* Table head */}
            <thead className="text-white">
              <tr>
                <th className="text-center">No</th>
                <th className="text-center">Name</th>
                <th className="text-center">Address</th>
                <th className="text-center">Creation Time</th>
                <th className="text-center">Last SignIn</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>

                  <td>
                    <div className="flex items-center justify-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={user.photoUrl} alt="Avatar" />
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm opacity-50">{user.email}</div>
                      </div>
                    </div>
                  </td>

                  <td>
                    {user.address}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {user.phoneNumber}
                    </span>
                  </td>

                  <td>{user.creationTime}</td>
                  <td>{user.lastSignInTime}</td>
                  <td>
                    <div className="space-x-2">
                      <button className="btn btn-xs">Details</button>

                      <Link to={`/updateUser/${user._id}`}>
                        <button className="btn btn-xs">Update</button>
                      </Link>

                      <button
                        onClick={() => handleDeleteUser(user._id)}
                        className="btn btn-xs"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
