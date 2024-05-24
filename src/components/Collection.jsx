import React from "react";
import img from "../assets/images/men-collect.png";

const Collection = () => {
  return (
    <div className="bg-slate-100 p-4">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 gap-2">
        <div className="grid-col-1 border border-black bg-[#30c9c9]">
          <div className="flex">
            {/* <h1>Men Collection</h1>
            <p>
              Lorem ipsum sit amit Lorem ipsum sit amitLorem ipsum sit amit
              Lorem ipsum sit amit Lorem ipsum sit amitLorem ipsum sit amit
            </p> */}
            <button className="bg-transparent border border-[white] p-3 pt-2">
              Shop Now
            </button>
          </div>
          <div>
            <img src={img} alt="jk" />
          </div>
        </div>
        <div className="grid-col-1 border border-[blue] bg-[#F5F5F5]">
          Continue
        </div>
      </div>
    </div>
  );
};

export default Collection;
