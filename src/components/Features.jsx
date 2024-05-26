import React from "react";
import feature1 from "../assets/images/featureone.png";
import feature2 from "../assets/images/featuretwo.png";
import feature3 from "../assets/images/featurethree.png";
import feature4 from "../assets/images/featurefour.png";

const Features = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-3  ">
      <div className="flex justify-between py-8">
        <h1 className="text-[#CC9966] text-5xl font-bold">
          Features of Our Store
        </h1>
      </div>
      <div className="max-w-[1240px] py-4 mx-auto grid grid-cols-4 gap-5 p-4  ">
        <div className="grid-col-1 ">
          <img src={feature1} alt="fjdkj" />
          <h4>Augmented Reality (AR) Product Visualization</h4>
        </div>

        <div className="grid-col-1 ">
          <img src={feature2} alt="fjdkj " />
          <h4>Voice Search and Voice Ordering </h4>
        </div>

        <div className="grid-col-2 ">
          <img src={feature3} alt="fjdkj" />
          <h4>AI-powered Product Recommendations</h4>
        </div>

        <div className="grid-col-1 overflow-hidden ">
          <img src={feature4} alt="fjdkj" className="overflow-hidden h-[68%]" />
          <h4 className="block">Interactive Loyalty Programs</h4>
        </div>
      </div>
    </div>
  );
};

export default Features;
