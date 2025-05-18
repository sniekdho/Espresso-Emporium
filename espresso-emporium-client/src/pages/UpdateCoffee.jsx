import React from "react";
import background1 from "../assets/more/11.png";
import { MdArrowBack } from "react-icons/md";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, quantity, supplier, taste, price, details, photoUrl } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffeeData = Object.fromEntries(formData.entries());

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateCoffeeData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.matchedCount) {
              Swal.fire({ title: "Updated", icon: "success", timer: 1500 });
              form.reset();
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
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
            <h1 className="text-4xl">Update Coffee</h1>
          </div>
          <form onSubmit={handleUpdateCoffee}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Name</legend>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  className="input w-full"
                  placeholder="Enter Coffee Name"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Quantity</legend>
                <input
                  type="number"
                  name="quantity"
                  defaultValue={quantity}
                  className="input w-full"
                  placeholder="Enter Coffee Quantity"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Supplier</legend>
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  className="input w-full"
                  placeholder="Enter Coffee Supplier"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Taste</legend>
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  className="input w-full"
                  placeholder="Enter Coffee Taste"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Price</legend>
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  className="input w-full"
                  placeholder="Enter Coffee Price"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Details</legend>
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
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
                defaultValue={photoUrl}
                className="input w-full"
                placeholder="Enter Photo URL"
              />
            </fieldset>
            <button className="btn w-full mt-5 bg-[#d2b48c] text-black">
              Update Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
