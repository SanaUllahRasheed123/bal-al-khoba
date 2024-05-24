import React from "react";
import newcollect from "../assets/images/new-collection-image.png";

const Banner = () => {
  return (
    <div className="bg-[#CC9966] p-4">
      <div className="max-w-[1340px] mx-auto grid grid-cols-2">
        <div className="col-span-1 border border-black  text-white pl-10 pt-8 py-6 ">
          <h3 className="text-[40px] text-[#003366] font-bold py-3">
            Bab Al Khokha
          </h3>
          <h1 className="text-6xl font-bold py-3">New Collection </h1>
          <p className="text-[30px]">Our Lates Collection Of Essential Basic</p>
          <button className="bg-transparent border border-[white] p-3 pt-2">
            Shop Now
          </button>
        </div>
        <div className="col-span-1 border border-black ">
          <img src={newcollect} alt="kjkj" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
