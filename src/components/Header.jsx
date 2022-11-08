import React from "react";
import Logo from "../assets/logo.png";
import Avatar from '../assets/avatar.png'
import { FcPaid } from "react-icons/fc";
const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-screen z-50 p-6 px-16">
        {/* Desktop */}
        <div className="hidden md:flex w-full h-full p-4 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="w-8 object-cover" />
            <p className="text-slate-900 text-xl font-bold">
              Chicken Restaurant
            </p>
          </div>
          <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-lg text-slate-900 font-semibold hover:text-orange-500 transitions-all duration-300 ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-lg text-slate-900 font-semibold hover:text-orange-500 transitions-all duration-300 ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-lg text-slate-900 font-semibold hover:text-orange-500 transitions-all duration-300 ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-lg text-slate-900 font-semibold hover:text-orange-500 transitions-all duration-300 ease-in-out cursor-pointer">
              Service
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <FcPaid className="icon-style"/>
            <div className="absolute -top-2 -right-3 w-4 h-4 rounded-full bg-theme flex items-center justify-center">
                <p className="text-xs text-slate-900 font-bold">2</p>
            </div>
          </div>

          <img src={Avatar} alt="avatar" className="w-8 min-w-[40px] min-h-[40px] cursor-pointer drop-shadow-xl" />
          </div>
          
        </div>

        {/* Mobile */}
        <div className="flex md:hidden w-full h-full p-4"></div>
      </header>
    </>
  );
};

export default Header;
