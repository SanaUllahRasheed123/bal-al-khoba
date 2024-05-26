import React from "react";
import collect1 from "../assets/images/collectone.png";
import collect2 from "../assets/images/collecttwo.png";
import collect3 from "../assets/images/collectthree.png";
import collect4 from "../assets/images/collectfour.png";

const Features = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-3  ">
      <div className="flex justify-between py-8">
        <h1 className="text-[#CC9966] text-5xl font-bold">New Collections</h1>
      </div>
      <div className="max-w-[1320px] py-4 mx-auto grid grid-cols-4 gap-5  shadow-lg">
        <div className="grid-col-1 overflow-hidden">
          <img src={collect1} alt="fjdkj" />
          <h2 className="pt-10">Man Glasses</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h2>29.99$ | 19.99$</h2>
        </div>

        <div className="grid-col-1 ">
          <img src={collect2} alt="fjdkj " />
          <h2 className="pt-10">Ladies Purse</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h2>29.99$ | 19.99$</h2>
        </div>

        <div className="grid-col-1 overflow-hidden pt-[-0px] ">
          <img src={collect3} alt="fjdkj" className="shadow-lg" />
          <h2 className="pt-0">Smart Watch</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h2>29.99$ | 19.99$</h2>
        </div>

        <div className="grid-col-1 w-full ">
          <img
            src={collect4}
            alt="fjdkj"
            className="overflow-hidden h-[400px]"
          />
          <h2 className="pt-30">Man Shoes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h2>29.99$ | 19.99$</h2>
        </div>
      </div>
    </div>
  );
};

export default Features;
