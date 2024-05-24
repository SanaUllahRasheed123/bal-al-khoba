import React from "react";
import logo from "../assets/images/Bab Al Khokha LOGO-10 2.png";
import Wishlist from "../assets/images/wishlist-logo.svg";
import profile from "../assets/images/profile-logo.svg";
import cart from "../assets/images/cart-logo.svg";
import voice from "../assets/images/voice-logo.svg";
import search from "../assets/images/search-logo.svg";
const Header = () => {
  return (
    <div className="bg-[#f8fafc] border border-black p-4">
      <div className="max-w-[1340px] border border-[blue] mx-auto grid grid-cols-3 pl-7">
        <div className="text-white pt-4 col-span-1 border border-[yellow]">
          <div className="flex">
            <img src={voice} alt="fdj" className="pl-4" />
            <input type="text" placeholder="Search" className="shadow p-5" />
            <img src={search} alt="fdj" className="bg-[#CC9966] pr-0" />
            <button className="bg-[#CC9966] p-4 text-white">Search</button>
          </div>
        </div>
        <div className="col-span-1 border- border-[pink] pl-17">
          <img src={logo} alt="fk" className="justify-center " />
        </div>
        <div className="flex justify-center gap-7 items-center col-span-1 border border-[red]">
          <div className="flex gap-3">
            <img src={profile} alt="fdk" />

            <a href="j" alt="fkh" className="flex gap-2">
              Profile
            </a>
          </div>

          <div className="flex gap-3">
            <img src={Wishlist} alt="fdk" />

            <a href="j" alt="fkh" className="flex gap-2">
              Wishlist
            </a>
          </div>

          <div className="flex gap-3">
            <img src={cart} alt="fdk" />

            <a href="j" alt="fkh" className="flex gap-2">
              Cart
            </a>
          </div>
        </div>
      </div>

      <div className="flex gap-4 max-w-[1240px] mx-auto pt-3 p-2 justify-between">
        <a href="fdk">Homes</a>
        <a href="fdk">Best Sellers</a>
        <a href="fdk">Today's Deals</a>
        <a href="fdk">New Collection</a>
        <a href="fdk">All Categories</a>
        <a href="fdk">On Sale</a>
        <a href="fdk">Electronics</a>
        <a href="fdk">Fashion</a>
        <a href="fdk">Gift Cards</a>
        <a href="fdk">Kids $ Toy</a>
      </div>
    </div>
  );
};

export default Header;
