import React from "react";
import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";

const Features = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10 bg-[#eceae3]">
      <div className="max-w-sm p-5 space-y-3 text-center">
        <img src={icon1} alt="" className="mx-auto" />
        <h1 className="text-xl font-bold">Awesome Aroma</h1>
        <p>You will definitely be a fan of the design & aroma of your coffee</p>
      </div>

      <div className="max-w-sm p-5 space-y-3 text-center">
        <img src={icon2} alt="" className="mx-auto" />
        <h1 className="text-xl font-bold">High Quality</h1>
        <p>
          We serve the best quality coffee made from carefully selected beans
        </p>
      </div>

      <div className="max-w-sm p-5 space-y-3 text-center">
        <img src={icon3} alt="" className="mx-auto" />
        <h1 className="text-xl font-bold">Pure Grades</h1>
        <p>Only pure, fresh, and premium-grade coffee beans go into your cup</p>
      </div>

      <div className="max-w-sm p-5 space-y-3 text-center">
        <img src={icon4} alt="" className="mx-auto" />
        <h1 className="text-xl font-bold">Proper Roasting</h1>
        <p>
          Expert roasting to bring out the full flavor and richness in every sip
        </p>
      </div>
    </div>
  );
};

export default Features;
