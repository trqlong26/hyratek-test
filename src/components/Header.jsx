import {
  ChevronDown,
  Menu,
  Search,
  ShoppingCart,
  UserCircle,
  X,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full border-b bg-white">
      {/* topbar */}
      <div className="bg-black text-white font-satoshi text-[12px] lg:text-sm">
        <div className="px-[13px] lg:container text-center py-2 relative">
          Sign up and get 20% off your first order.{" "}
          <span className="underline cursor-pointer">Sign Up Now</span>
          {/* X btn */}
          <button className="absolute right-[102px] top-1/2 -translate-y-1/2 hidden md:block">
            <X size={20} />
          </button>
        </div>
      </div>

      {/* main navbar */}
      <div className="px-[13px] lg:container mx-auto my-[23px] lg:my-[14px]">
        <div className="flex items-center justify-between gap-6">
          {/* mobile nav btn + logo*/}
          <div className="flex items-center gap-4">
            {/* mobile nav btn */}
            <button className="lg:hidden">
              <Menu size={24} />
            </button>

            {/* logo  */}
            <Link
              to={"/"}
              className="text-[25px] lg:text-[32px] font-integral font-bold pb-[5px] !leading-none flex items-center"
            >
              SHOP.CO
            </Link>
          </div>

          {/* nav links */}
          <nav className="hidden lg:flex lg:w-[340px] items-center justify-around gap-6">
            <Link to="#" className="flex items-center gap-1">
              <span>Shop</span>
              <ChevronDown size={16} className="mt-[3px]" />
            </Link>
            <Link to="#">On Sale</Link>
            <Link to="#">New Arrivals</Link>
            <Link to="#">Brands</Link>
          </nav>

          {/* Search input */}
          <div className="hidden xl:flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full flex-1 max-w-[558px]">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          {/* icons */}
          <div className="flex items-center gap-4 text-gray-700">
            <Link to={"/#"}>
              <Search className="xl:hidden " />
            </Link>
            <Link to={"/#"}>
              <ShoppingCart />
            </Link>
            <Link to={"/#"}>
              <UserCircle />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
