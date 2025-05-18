import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "../components/CoffeeCard";
import Banner from "../components/Banner";
import Features from "../components/Features";
import LeftAside from "../components/LeftAside";
import RightAside from "../components/RightAside";
import FollowUs from "../components/FollowUs";

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);

  const handleUpdateUI = (_id) => {
    setCoffees(coffees.filter((coffee) => coffee._id !== _id));
  };

  return (
    <div>
      <Banner></Banner>
      <Features></Features>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-10">
        <div className="md:col-span-1 order-1">
          <LeftAside></LeftAside>
        </div>

        <div className="md:col-span-10 order-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto mt-10 md:mt-40">
            {coffees.map((coffee) => (
              <CoffeeCard
                key={coffee._id}
                coffee={coffee}
                handleUI={handleUpdateUI}
              ></CoffeeCard>
            ))}
          </div>
        </div>

        <div className="md:col-span-1 order-3">
          <RightAside></RightAside>
        </div>
      </div>

      <FollowUs></FollowUs>
    </div>
  );
};

export default Home;
