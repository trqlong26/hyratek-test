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
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-8 text-gray-800">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((style) => (
            <div
              key={style.name}
              className="rounded-md overflow-hidden shadow-md"
            >
              <div className="aspect-w-3 aspect-h-2">
                {" "}
                {/* Use a 3:2 aspect ratio */}
                <img
                  src={style.image}
                  alt={`${style.name} Style`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="bg-gray-100 py-3 text-sm text-gray-600 font-medium">
                {style.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
