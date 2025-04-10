import React from "react";
import { Link } from "react-router-dom";
import Casual from "../assets/images/casual.png";
import Formal from "../assets/images/formal.png";
import Gym from "../assets/images/gym.png";
import Party from "../assets/images/party.png";

const Category = () => {
  const categories = [
    {
      name: "Casual",
      image: Casual,
    },
    {
      name: "Formal",
      image: Formal,
    },
    {
      name: "Party",
      image: Party,
    },
    {
      name: "Gym",
      image: Gym,
    },
  ];

  return (
    <section className="px-4 lg:container">
      <div className="mx-auto px-6 lg:px-16 text-center bg-[#f0f0f0] border rounded-[40px] py-6 md:py-12">
        <h2 className="text-3xl lg:text-4xl font-integral font-bold mb-6 md:mb-14">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="flex flex-col gap-6 md:grid md:grid-cols-12 md:gap-6">
          {/* first row */}
          <div className="md:col-span-4 relative">
            <div className="rounded-[20px] overflow-hidden shadow-sm h-48 md:h-64">
              <Link to={"#"}>
                <img
                  src={categories[0].image}
                  alt={`${categories[0].name}`}
                  className="w-full h-full object-cover scale-x-[-1]"
                />
              </Link>
              <h3 className="absolute top-4 left-4 px-3 py-2 font-bold text-[24px] lg:text-[32px]">
                {categories[0].name}
              </h3>
            </div>
          </div>
          <div className="md:col-span-8 relative">
            <div className="rounded-[20px] overflow-hidden shadow-sm h-48 md:h-64">
              <Link to={"#"}>
                <img
                  src={categories[1].image}
                  alt={`${categories[1].name}`}
                  className="w-full h-full object-cover"
                />
              </Link>
              <h3 className="absolute top-4 left-4  px-3 py-2 font-bold text-[24px] lg:text-[32px]">
                {categories[1].name}
              </h3>
            </div>
          </div>
          {/* second row */}
          <div className="md:col-span-8 relative">
            <div className="rounded-[20px] overflow-hidden shadow-sm h-48 md:h-64">
              <Link to={"#"}>
                <img
                  src={categories[2].image}
                  alt={`${categories[2].name}`}
                  className="w-full h-full object-cover"
                />
              </Link>
              <h3 className="absolute top-4 left-4  px-3 py-2 font-bold text-[24px] lg:text-[32px]">
                {categories[2].name}
              </h3>
            </div>
          </div>
          <div className="md:col-span-4 relative">
            <div className="rounded-[20px] overflow-hidden shadow-sm h-48 md:h-64">
              <Link to={"#"}>
                <img
                  src={categories[3].image}
                  alt={`${categories[3].name}`}
                  className="w-full h-full object-cover"
                />
              </Link>
              <h3 className="absolute top-4 left-4  px-3 py-2 font-bold text-[24px] lg:text-[32px]">
                {categories[3].name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
