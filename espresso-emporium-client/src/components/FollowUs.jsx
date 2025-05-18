import React from "react";
import cup1 from "../assets/cups/Rectangle 9.png";
import cup2 from "../assets/cups/Rectangle 10.png";
import cup3 from "../assets/cups/Rectangle 11.png";
import cup4 from "../assets/cups/Rectangle 12.png";
import cup5 from "../assets/cups/Rectangle 13.png";
import cup6 from "../assets/cups/Rectangle 14.png";
import cup7 from "../assets/cups/Rectangle 15.png";
import cup8 from "../assets/cups/Rectangle 16.png";

const FollowUs = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center">Follow Us On Instagram</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-20">
        <img src={cup1} alt="" />
        <img src={cup2} alt="" />
        <img src={cup3} alt="" />
        <img src={cup4} alt="" />
        <img src={cup5} alt="" />
        <img src={cup6} alt="" />
        <img src={cup7} alt="" />
        <img src={cup8} alt="" />
      </div>
    </div>
  );
};

export default FollowUs;
