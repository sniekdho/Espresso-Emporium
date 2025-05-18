import React from "react";
import background1 from "../assets/more/11.png";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { MdArrowBack } from "react-icons/md";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());

    fetch("https://espresso-emporium-server-nu-sooty.vercel.app/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added Successfully",
            icon: "success",
            draggable: true,
            timer: 1500,
          });
          form.reset();
        }
      });
  };

  return (
    <div style={{ backgroundImage: `url(${background1})` }}>
      <div className="max-w-9/12 mx-auto p-5">
        <h2 className="flex items-center gap-2 mb-5">
          <Link to="/">
            <MdArrowBack />
          </Link>
          Back to home
        </h2>
        <div className="bg-gray-300 p-10">
          <div className=" text-center space-y-5 mb-5">
            <h1 className="text-4xl">Add New Coffee</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <form onSubmit={handleAddCoffee}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Name</legend>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="Enter Coffee Name"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Quantity</legend>
                <input
                  type="number"
                  name="quantity"
                  className="input w-full"
                  placeholder="Enter Coffee Quantity"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Supplier</legend>
                <input
                  type="text"
                  name="supplier"
                  className="input w-full"
                  placeholder="Enter Coffee Supplier"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Taste</legend>
                <input
                  type="text"
                  name="taste"
                  className="input w-full"
                  placeholder="Enter Coffee Taste"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Price</legend>
                <input
                  type="number"
                  name="price"
                  className="input w-full"
                  placeholder="Enter Coffee Price"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Details</legend>
                <input
                  type="text"
                  name="details"
                  className="input w-full"
                  placeholder="Enter Coffee Details"
                />
              </fieldset>
            </div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Photo</legend>
              <input
                type="text"
                name="photoUrl"
                className="input w-full"
                placeholder="Enter Photo URL"
              />
            </fieldset>
            <button className="btn w-full mt-5 bg-[#d2b48c] text-black">
              Add Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
