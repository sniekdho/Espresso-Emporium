import React from "react";
import leftImage from "../assets/more/4.png";

const LeftAside = () => {
  return (
    <aside className="hidden md:inline-block">
      <img className="bg-no-repeat" src={leftImage} alt="" />
    </aside>
  );
};

export default LeftAside;
