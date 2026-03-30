import { ShoppingCart } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="navbar w-[80%] mx-auto">
      <div className="navbar-start">
        <div className="flex items-center gap-2 font-bold text-xl">
          <img src="/logo.png" alt="" className="w-44 h-10" />
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1.5 text-lg font-medium text-gray-500">
          <li>
            <a href="#" className="hover:text-gray-800">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-800">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-800">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-800">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-800">
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-5 text-gray-500">
            <span className="relative">
                <ShoppingCart className="w-5 h-5" id="cart"/>
                <span id="count" className="absolute p-2 -top-4 -right-2 bg-rose-400 text-white rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </span>
          <h4 className="hidden md:block text-lg font-medium hover:text-gray-800 cursor-pointer">
            Login
          </h4>
          <button className="hidden md:flex btn border-2 border-transparent bg-linear-to-tr from-violet-600 to-indigo-600 text-white rounded-full hover:from-white hover:to-white hover:text-violet-600 hover:border-violet-600 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
