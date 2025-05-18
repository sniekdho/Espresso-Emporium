import React from "react";
import bannerLogo from "../assets/more/3.png";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bannerLogo})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content w-full justify-end">
        <div className="max-w-2xl mt-40 p-10">
          <h1 className="mb-5 text-5xl font-bold">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="mb-5">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="btn bg-[#e3b577] border-0">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
