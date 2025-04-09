import React from "react";
import {
  X,
  Menu,
  ChevronDown,
  ShoppingCart,
  CircleUserRound,
  Search,
} from "lucide-react";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="w-full border-b shadow-sm bg-white">
      {/* Top Bar */}
      <div className="flex justify-around bg-black text-white text-center text-sm py-2 px-4">
        <span></span>
        <span>
          Sign up and get 20% off to your first order.{" "}
          <a
            href="/signup"
            className="underline cursor-pointer hover:opacity-80"
          >
            Sign Up Now
          </a>
        </span>
        <span>
          <X
            size={20}
            className="hidden md:block text-white cursor-pointer hover:opacity-80"
          />
        </span>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Btn */}
          <div className="md:hidden font-semibold hover:opacity-80">
            <Menu size={24} />
          </div>

          {/* Logo */}
          <a href="/" className="w-32 h-auto hover:opacity-75">
            <img src={Logo} alt="Logo" className="w-full h-auto" />
          </a>
        </div>

        {/* Menu */}
        <ul className="hidden xl:flex gap-6 text-sm text-gray-700 font-medium">
          <li className="flex items-center gap-1 cursor-pointer hover:opacity-75">
            Shop <ChevronDown size={16} />
          </li>
          <li className=" cursor-pointer hover:opacity-75">
            <a href="/#">On Sale</a>
          </li>
          <li className=" cursor-pointer hover:opacity-75">
            <a href="/#">New Arrivals</a>
          </li>
          <li className=" cursor-pointer hover:opacity-75">
            <a href="/#">Brands</a>
          </li>
        </ul>

        {/* Search */}
        <div className="hidden xl:flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full w-[558px]">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>

        {/* Icons */}
        <div className="flex gap-4 items-center">
          <Search className="xl:hidden cursor-pointer hover:opacity-75" />
          <ShoppingCart className="cursor-pointer hover:opacity-75" />
          <CircleUserRound className="cursor-pointer hover:opacity-75" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
