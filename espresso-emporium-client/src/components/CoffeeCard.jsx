import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, handleUpdateUI }) => {
  const { _id, name, quantity, price, photoUrl } = coffee || {};

  const handleDeleteCoffee = (_id) => {
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
        fetch(
          `https://espresso-emporium-server-nu-sooty.vercel.app/coffees/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              handleUpdateUI(_id);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-[#f5f4f1] shadow-sm p-10">
        <figure>
          <img className="w-40 h-40" src={photoUrl} alt="Coffee" />
        </figure>
        <div className="flex w-full justify-around items-center">
          <div className="space-y-2.5">
            <h2 className="card-title">{name}</h2>
            <p>Quantity : {quantity}</p>
            <p>Price : {price}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-2.5">
              <button className="btn join-item">
                <Link to={`/coffeeDetails/${_id}`}>Details</Link>
              </button>

              <button className="btn join-item">
                <Link to={`/updateCoffee/${_id}`}>Update</Link>
              </button>

              <button
                onClick={() => handleDeleteCoffee(_id)}
                className="btn join-item"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
