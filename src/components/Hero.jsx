import React from "react";
import HeroImg from "../assets/images/hero.png";
import Star1 from "../assets/star1.svg";
import Star2 from "../assets/star2.svg";
import Versace from "../assets/logos/Versace.svg";
import Zara from "../assets/logos/Zara.svg";
import Gucci from "../assets/logos/Gucci.svg";
import Prada from "../assets/logos/Prada.svg";
import CalvinKlein from "../assets/logos/CalvinKlein.svg";

const Hero = () => {
  return (
    <div>
      <section className="bg-[#f2f0f1] pt-12 px-4 md:px-8">
        <div className="max-w-7xl px-3 md:px-6 mx-auto grid md:grid-cols-2 items-center gap-10">
          {/* Text Section */}
          <div className="space-y-6 w-full">
            <h1 className="text-5xl font-extrabold leading-none text-black">
              FIND CLOTHES <br />
              THAT MATCHES <br />
              YOUR STYLE
            </h1>
            <p className="text-gray-600 text-base max-w-lg">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="w-full md:w-2/5 bg-black text-white py-4 px-8 rounded-full hover:opacity-80 transition">
              Shop Now
            </button>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col border-r">
                <p className="text-4xl font-bold">200+</p>
                <p className="text-gray-500 text-sm">International Brands</p>
              </div>
              <div className="flex flex-col md:border-r md:px-4">
                <p className="text-4xl font-bold">2,000+</p>
                <p className="text-gray-500 text-sm">High-Quality Products</p>
              </div>
              <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start md:mt-0 mt-4 md:pl-4">
                <p className="text-4xl font-bold">30,000+</p>
                <p className="text-gray-500 text-sm">Happy Customers</p>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="relative flex justify-center items-center">
            <img
              src={HeroImg}
              alt="Hero"
              className="w-full max-h-[500px] object-contain z-10"
            />
            <img
              src={Star1}
              alt="Star"
              className="absolute top-[20px] right-[20px] w-20 z-20"
            />
            <img
              src={Star2}
              alt="Star"
              className="absolute left-[20px] w-10 z-20"
            />
          </div>
        </div>
      </section>
      {/* Brands Section */}
      <div className="bg-black py-8 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:justify-between gap-4">
            <div className="flex justify-center">
              <img src={Versace} alt="Versace" className="object-contain" />
            </div>
            <div className="flex justify-center">
              <img src={Zara} alt="Zara" className="object-contain" />
            </div>
            <div className="flex justify-center">
              <img src={Gucci} alt="Gucci" className="object-contain" />
            </div>
            <div className="flex justify-center">
              <img src={Prada} alt="Prada" className="object-contain" />
            </div>
            <div className="flex justify-center">
              <img
                src={CalvinKlein}
                alt="Calvin Klein"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
