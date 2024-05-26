import React from "react";

const Shelter = () => {
  return (
    <div className="py-7">
      <div className="pl-34">
        <h1 className="text-4xl text-center p-4 text-[#003366]">
          Subscribe & Get 10% Discount
        </h1>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Enter your email"
            className="focus:outline-none pl-4 shadow-lg"
          />
          <button className="bg-[#556B2F] p-3 rounded text-white text-center pl-5">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shelter;
