import React from "react";
import cat1 from "../assets/images/cat-one.png";
import cat2 from "../assets/images/cat-two.png";
import cat3 from "../assets/images/cat-three.png";
import cat4 from "../assets/images/cat-four.png";
import arrow from "../assets/images/arrow img.png";
import couples from "../assets/images/coupleone.png";
import sounds from "../assets/images/sound.svg";

const Catagories = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-3">
      <div className="flex justify-between">
        <h1 className="text-[#CC9966] text-5xl font-bold">Featured Products</h1>
        <img src={arrow} alt="fdh" />
      </div>
      <div className="max-w-[1240px] mx-auto grid grid-cols-4 gap-10 p-4 ">
        <div className="grid-col-1 ">
          <img src={cat1} alt="fjdkj" />
        </div>

        <div className="grid-col-1 ">
          <img src={cat2} alt="fjdkj " />
        </div>

        <div className="grid-col-1 ">
          <img src={cat3} alt="fjdkj" />
        </div>

        <div className="grid-col-2 w-[30%] h-[80%] overflow-hidden">
          <img src={cat4} alt="fjdkj" />
        </div>
      </div>

      {/* fjkd */}

      <div className="max-w-[1340px] p-10">
        <div
          style={{ backgroundImage: `url(${couples})` }} // Set the background image inline
          className=" flex flex-col   w-full
        bg-cover bg-center p-8  grid-col-1 justify-between h-[350px] "
        >
          <img
            src={sounds}
            alt="fj"
            className="h-10 mt-[109px] justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Catagories;
