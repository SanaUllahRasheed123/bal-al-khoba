import React from "react";
import fb from "../assets/images/fb.svg";
import insta from "../assets/images/insta.svg";
import linked from "../assets/images/linked.svg";
import pin from "../assets/images/pin.svg";
import tiktok from "../assets/images/tiktok.svg";

const FooterLinks = () => {
  return (
    <>
      <div className="bg-[#556B2F] py-10 p-4">
        <div className="max-w-[1440px] mx-auto  grid grid-cols-4 gap-8">
          <div className="grid-col-1  text-white">
            <h1 className="text-[30px] pb-5">About</h1>
            <p className="pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
            <h1 className="text-[30px] pb-4">Follow Us</h1>
            <div className="flex gap-2 cursor-pointer justify-between">
              <img src={fb} alt="kdfj" />
              <img src={insta} alt="kdfj" />
              <img src={pin} alt="kdfj" />
              <img src={tiktok} alt="kdfj" />
              <img src={linked} alt="kdfj" />
            </div>
          </div>
          <div className="grid-col-1  text-white ">
            <h1 className="text-[30px] pl-4">Quick Links</h1>
            <ul className="cursor-pointer p-3 text-[17px]">
              <li className="m-3">About Us</li>
              <li className="m-3">Shopping</li>
              <li className="m-3">Customer Review</li>
              <li className="m-3">Contact Us </li>
              <li className="m-3">Blog</li>
            </ul>
          </div>
          <div className="grid-col-1  text-white">
            <h1 className="text-[30px] pl-4">Shop</h1>
            <ul className="cursor-pointer p-3 text-[17px]">
              <li className="m-3">Men Products</li>
              <li className="m-3">Women Products</li>
              <li className="m-3">Kids Producats</li>
              <li className="m-3">Trending Products </li>
              <li className="m-3">Sale Products</li>
            </ul>
          </div>
          <div className="grid-col-1  text-white center">
            <h1 className="text-[30px] pl-4">Customer Care</h1>
            <ul className="cursor-pointer p-3 text-[17px]">
              <li className="m-3">Help $ FAQs</li>
              <li className="m-3">Return My Order</li>
              <li className="m-3">Refer a Friend</li>
              <li className="m-3">Size Guide</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterLinks;
