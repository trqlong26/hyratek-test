import { Mail } from "lucide-react";
import React from "react";
import Facebook from "../assets/logos/logo-fb.svg";
import Github from "../assets/logos/logo-github.svg";
import Instagram from "../assets/logos/logo-instagram.svg";
import Twitter from "../assets/logos/logo-twitter.svg";
import { Link } from "react-router-dom";
import ApplePay from "../assets/logos/ApplePay.svg";
import GooglePay from "../assets/logos/GooglePay.svg";
import Mastercard from "../assets/logos/Mastercard.svg";
import Paypal from "../assets/logos/Paypal.svg";
import Visa from "../assets/logos/Visa.svg";

const Footer = () => {
  return (
    <footer className="bg-secondary relative px-[16px] py-20 mt-40 border-t">
      <div className="max-w-screen-xl lg:container mx-auto">
        {/* newsletter container */}
        <div className="relative z-10 lg:-mt-44 -mt-60 bg-black text-white rounded-2xl px-6 py-10 lg:px-12 lg:py-[43px] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h2 className="text-[32px] lg:text-[40px] pb-3 lg:pb-0 lg:text-3xl font-bold font-integral lg:leading-tight">
              STAY UP TO DATE ABOUT <br className="hidden lg:block" />
              OUR
              <br className="lg:hidden" />
              LATEST OFFERS
            </h2>
          </div>
          {/* subscribe form */}
          <form className="flex flex-col items-center gap-4 w-full max-w-lg lg:w-[350px]">
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-3 w-full">
              <Mail className="text-gray-500" size={18} />
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent outline-none text-sm text-black"
              />
            </div>
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold w-full"
            >
              Subscribe to Newsletter
            </button>
          </form>
        </div>

        {/* main footer */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* logo + description */}
          <div className="col-span-2 lg:col-span-1 -mt-4">
            <h3 className="text-[28px] lg:text-[33px] font-bold font-integral">
              SHOP.CO
            </h3>
            <p className="mt-3 text-sm lg:text-xs text-gray-600">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            {/* social icons */}
            <div className="flex items-center gap-2 mt-4">
              <Link
                to={"/#"}
                className="flex items-center justify-center border border-black rounded-full bg-primary w-[28px] h-[28px]"
              >
                <img src={Twitter} alt="Twitter" />
              </Link>
              <Link
                to={"/#"}
                className="flex items-center justify-center border border-black rounded-full bg-black w-[28px] h-[28px]"
              >
                <img src={Facebook} alt="Facebook" />
              </Link>
              <Link
                to={"/#"}
                className="flex items-center justify-center border border-black rounded-full bg-primary w-[28px] h-[28px]"
              >
                <img src={Instagram} alt="Instagram" />
              </Link>
              <Link
                to={"/#"}
                className="flex items-center justify-center border border-black rounded-full bg-primary w-[28px] h-[28px]"
              >
                <img src={Github} alt="Github" />
              </Link>
            </div>
          </div>

          {/* footer links */}
          {/* links company */}
          <div>
            <h4 className="mb-2 font-semibold font-satoshi uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-2 text-gray-600 tracking-wide text-sm">
              <li>
                <Link to={"/#"}>About</Link>
              </li>
              <li>
                <Link to={"/#"}>Features</Link>
              </li>
              <li>
                <Link to={"/#"}>Works</Link>
              </li>
              <li>
                <Link to={"/#"}>Career</Link>
              </li>
            </ul>
          </div>

          {/* links help */}
          <div>
            <h4 className="mb-2 font-semibold font-satoshi uppercase tracking-widest">
              Help
            </h4>
            <ul className="space-y-2 text-gray-600 tracking-wide text-sm">
              <li>
                <Link to={"/#"}>Customer Support</Link>
              </li>
              <li>
                <Link to={"/#"}>Delivery Details</Link>
              </li>
              <li>
                <Link to={"/#"}>Terms & Conditions</Link>
              </li>
              <li>
                <Link to={"/#"}>Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* links faq */}
          <div>
            <h4 className="mb-2 font-semibold font-satoshi uppercase tracking-widest">
              FAQ
            </h4>
            <ul className="space-y-2 text-gray-600 tracking-wide text-sm">
              <li>
                <Link to={"/#"}>Account</Link>
              </li>
              <li>
                <Link to={"/#"}>Manage Deliveries</Link>
              </li>
              <li>
                <Link to={"/#"}>Orders</Link>
              </li>
              <li>
                <Link to={"/#"}>Payments</Link>
              </li>
            </ul>
          </div>

          {/* links resources */}
          <div>
            <h4 className="mb-2 font-semibold font-satoshi uppercase tracking-widest">
              Resources
            </h4>
            <ul className="space-y-2 text-gray-600 tracking-wide text-sm">
              <li>
                <Link to={"/#"}>Free eBooks</Link>
              </li>
              <li>
                <Link to={"/#"}>Development Tutorial</Link>
              </li>
              <li>
                <Link to={"/#"}>How to - Blog</Link>
              </li>
              <li>
                <Link to={"/#"}>Youtube Playlist</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-10 pt-6 border-t text-sm text-gray-600 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="tracking-wide">
            Shop.co © 2000-2023, All Rights Reserved
          </p>

          {/* payment methods */}
          <div className="flex items-center gap-2">
            <span className="bg-primary p-1">
              <img
                src={Visa}
                alt="Visa"
                className="bg-primary w-[32px] h-[10px]"
              />
            </span>
            <span className="bg-primary p-1">
              <img
                src={Mastercard}
                alt="PayPal"
                className="bg-primary w-[32px] h-[10px]"
              />
            </span>
            <span className="bg-primary p-1">
              <img
                src={Paypal}
                alt="MasterCard"
                className="bg-primary w-[32px] h-[10px]"
              />
            </span>

            <span className="bg-primary p-1">
              <img
                src={ApplePay}
                alt="Apple Pay"
                className="bg-primary w-[32px] h-[10px]"
              />
            </span>
            <span className="bg-primary p-1">
              <img
                src={GooglePay}
                alt="Google Pay"
                className=" w-[32px] h-[10px]"
              />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
