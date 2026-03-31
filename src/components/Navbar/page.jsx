import { ShoppingCart, Menu } from "lucide-react";
import React from "react";

const page = ({cartCount, onCartClick}) => {
  return (
    <div className="sticky top-0 z-50 relative bg-white flex items-center py-2 mb-10 shadow-md">
      <div className="navbar w-[94%] md:w-[85%] lg:w-[60%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden -ml-4">
              <Menu className="w-6 h-6" />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content glass bg-gray-800 text-white text-center font-medium rounded-box z-[100] mt-3 w-93 mx-auto p-2 shadow-xl border border-gray-200">
              <li><a className="text-lg pb-3 mb-3 border-b-2 border-gray-400" href="#Products">Products</a></li>
              <li><a className="text-lg pb-3 mb-3 border-b-2 border-gray-400" href="#Features">Features</a></li>
              <li><a className="text-lg pb-3 mb-3 border-b-2 border-gray-400" href="#Pricing">Pricing</a></li>
              <li><a className="text-lg pb-3 mb-3 border-b-2 border-gray-400" href="#Testimonials">Testimonials</a></li>
              <li><a className="text-lg pb-3 mb-3 border-b-2 border-gray-400" href="#FAQ">FAQ</a></li>
            </ul>
          </div>
          <div className="flex items-center gap-2 font-bold text-xl">
            <img src="/logo.png" alt="DigiTools" className="w-32 h-auto md:w-36 lg:w-44 lg:h-10 object-contain" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 px-1 text-lg font-medium text-gray-500">
            <li><a href="#Products" className="hover:text-gray-800">Products</a></li>
            <li><a href="#Features" className="hover:text-gray-800">Features</a></li>
            <li><a href="#Pricing" className="hover:text-gray-800">Pricing</a></li>
            <li><a href="#Testimonials" className="hover:text-gray-800">Testimonials</a></li>
            <li><a href="#FAQ" className="hover:text-gray-800">FAQ</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-3 lg:gap-5 text-gray-500">
            <div onClick={onCartClick} className="relative cursor-pointer">
              <ShoppingCart className="w-5 h-5" id="cart" />
              <span id="count" className="absolute p-2 -top-4 -right-2 bg-rose-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            </div>
            <h4 className="hidden md:block text-base lg:text-lg font-medium hover:text-gray-800 cursor-pointer whitespace-nowrap">
              Login
            </h4>
            <button className="hidden md:flex px-6 py-2 lg:px-8 lg:py-3 border-2 border-transparent bg-linear-to-tr from-violet-600 to-indigo-600 text-white rounded-full hover:from-white hover:to-white hover:text-violet-600 hover:border-violet-600 transition-all text-sm lg:text-base font-bold whitespace-nowrap">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
