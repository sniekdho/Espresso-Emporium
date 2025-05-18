import React from "react";
import { MdArrowBack } from "react-icons/md";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const singleCoffee = useLoaderData();
  const { name, supplier, taste, price, details, photoUrl } =
    singleCoffee || {};

  return (
    <div className="p-10 space-y-5">
      <h2 className="flex items-center gap-2">
        <Link to="/">
          <MdArrowBack />
        </Link>{" "}
        Back to home
      </h2>
      <div className="card card-side bg-[#f5f4f1] shadow-sm p-10">
        <figure>
          <img className="w-96 h-full" src={photoUrl} alt="Coffee" />
        </figure>
        <div className="flex w-full justify-around items-center">
          <div className="space-y-2.5">
            <h2 className="card-title">Name: {name}</h2>
            <p>Quantity : {supplier}</p>
            <p>Taste : {taste}</p>
            <p>Details : {details}</p>
            <p>Price : {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
