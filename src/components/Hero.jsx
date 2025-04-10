import React from "react";
import HeroImg from "../assets/images/hero.png";
import CalvinKlein from "../assets/logos/CalvinKlein.svg";
import Gucci from "../assets/logos/Gucci.svg";
import Prada from "../assets/logos/Prada.svg";
import Versace from "../assets/logos/Versace.svg";
import Zara from "../assets/logos/Zara.svg";
import Star1 from "../assets/star1.svg";
import Star2 from "../assets/star2.svg";

const Hero = () => {
  const Brands = [
    {
      name: "Versace",
      src: Versace,
    },
    {
      name: "Zara",
      src: Zara,
    },
    {
      name: "Gucci",
      src: Gucci,
    },
    {
      name: "Prada",
      src: Prada,
    },
    {
      name: "Calvin klein",
      src: CalvinKlein,
    },
  ];

  return (
    <div>
      <section className="bg-[#F2F0F1] pt-5 overflow-hidden">
        <div className="px-[16px] lg:container">
          <div className="grid md:grid-cols-2 items-center">
            {/* text section */}
            <div className="space-y-5 md:space-y-8 w-full">
              <h1 className="text-[34px] xl:text-[64px] font-integral font-bold leading-none text-black">
                FIND CLOTHES <br />
                THAT MATCHES <br />
                YOUR STYLE
              </h1>
              <p className="text-sm md:text-base text-gray-600 max-w-lg">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="w-full md:w-2/5 bg-black text-white py-4 px-8 rounded-full">
                Shop Now
              </button>

              {/* Stats Section */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 py-3 lg:pt-6 lg:pb-14">
                <div className="flex flex-col items-center lg:items-start border-r pr-4">
                  <p className="text-2xl lg:text-4xl font-bold">200+</p>
                  <p className="text-gray-600 text-xs lg:text-sm text-center lg:text-left">
                    International Brands
                  </p>
                </div>
                <div className="flex flex-col items-center lg:items-start lg:border-r lg:px-4">
                  <p className="text-2xl lg:text-4xl font-bold">2,000+</p>
                  <p className="text-gray-600 text-xs lg:text-sm text-center lg:text-left">
                    High-Quality Products
                  </p>
                </div>
                <div className="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start lg:pl-4">
                  <p className="text-2xl lg:text-4xl font-bold">30,000+</p>
                  <p className="text-gray-600 text-xs lg:text-sm text-center lg:text-left">
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>

            {/* img section */}
            <div className="relative flex justify-center items-center mt-8 md:mt-0 h-[300px] md:h-full">
              <img
                src={HeroImg}
                alt="Hero"
                className="h-full object-cover z-10"
              />
              <img
                src={Star1}
                alt="Star"
                className="absolute top-[30px] lg:top-[80px] right-0 w-16 lg:w-20 z-20"
              />
              <img
                src={Star2}
                alt="Star"
                className="absolute left-[20px] w-8 lg:w-10 z-20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* brands section */}
      <div className="bg-black py-8">
        <div className="px-4 lg:container mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-y-6 gap-x-4 place-items-center">
            {Brands.map((brands, index) => (
              <div key={index} className="w-full flex justify-between">
                <img
                  src={brands.src}
                  alt={brands.name}
                  className="object-contain max-h-10 w-full max-w-[150px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
