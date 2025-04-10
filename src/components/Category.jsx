import React from "react";

const categories = [
  {
    name: "Casual",
    image:
      "https://i0.wp.com/befonts.com/wp-content/uploads/2022/03/Integral-CF-4.jpg?resize=1200%2C800&ssl=1",
  },
  {
    name: "Formal",
    image:
      "https://i0.wp.com/befonts.com/wp-content/uploads/2022/03/Integral-CF-4.jpg?resize=1200%2C800&ssl=1",
  },
  {
    name: "Party",
    image:
      "https://i0.wp.com/befonts.com/wp-content/uploads/2022/03/Integral-CF-4.jpg?resize=1200%2C800&ssl=1",
  },
  {
    name: "Gym",
    image:
      "https://i0.wp.com/befonts.com/wp-content/uploads/2022/03/Integral-CF-4.jpg?resize=1200%2C800&ssl=1",
  },
];

const Category = () => {
  return (
    <section className="mx-20 py-12 bg-[#f0f0f0] border rounded-[40px]">
      <div className="px-12 mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-800">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="flex flex-col gap-6 md:grid md:grid-cols-12 md:gap-6">
          {/* First Row */}
          <div className="md:col-span-4 relative">
            <div className="rounded-md overflow-hidden shadow-md h-48 md:h-64">
              <img
                src={categories[0].image}
                alt={`${categories[0].name} Style`}
                className="w-full h-full object-cover"
              />
              <h3 className="absolute top-4 left-4 bg-white bg-opacity-75 px-3 py-2 text-sm text-gray-800 font-medium rounded-md">
                {categories[0].name}
              </h3>
            </div>
          </div>
          <div className="md:col-span-8 relative">
            <div className="rounded-md overflow-hidden shadow-md h-48 md:h-64">
              <img
                src={categories[1].image}
                alt={`${categories[1].name} Style`}
                className="w-full h-full object-cover"
              />
              <h3 className="absolute top-4 left-4 bg-white bg-opacity-75 px-3 py-2 text-sm text-gray-800 font-medium rounded-md">
                {categories[1].name}
              </h3>
            </div>
          </div>
          {/* Second Row */}
          <div className="md:col-span-8 relative">
            <div className="rounded-md overflow-hidden shadow-md h-48 md:h-64">
              <img
                src={categories[2].image}
                alt={`${categories[2].name} Style`}
                className="w-full h-full object-cover"
              />
              <h3 className="absolute top-4 left-4 bg-white bg-opacity-75 px-3 py-2 text-sm text-gray-800 font-medium rounded-md">
                {categories[2].name}
              </h3>
            </div>
          </div>
          <div className="md:col-span-4 relative">
            <div className="rounded-md overflow-hidden shadow-md h-48 md:h-64">
              <img
                src={categories[3].image}
                alt={`${categories[3].name} Style`}
                className="w-full h-full object-cover"
              />
              <h3 className="absolute top-4 left-4 bg-white bg-opacity-75 px-3 py-2 text-sm text-gray-800 font-medium rounded-md">
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
