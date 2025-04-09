import React from "react";
import { Link } from "react-router-dom";

const newArrivals = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    price: 120,
    rating: 4.5,
    image:
      "https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YO-0vl7I~GNtedZ2AnkDw4nG9NszSVZ~BBDFU6qm6Q5kKHhZypH6jFlqUwKubaayl9FX9RiNQWrdxHdZ5f6mUnk9vcBUhmpzN7pBngjO5-BnAUPcbbZH1eeWO5bM2dGlic4JIfPXgHYrU38XMDdDuq4ljqVW1Focsa~pcWHG1fPEWPalPpaaF6dkkTD7vUAyi4wBpayvgYKeI8bOTT3X4~qMHE2Og7D6KZ3K88WwkfBt6IywpbXskltoxflePyCoLWGdT4FGJRGcAon8QSpptolZRP1an9-2AUqgrjNFUI9CFT8HkD-Ng9XYSZTGOd~1BQO56TvhO84xY3pQwVOU8Q__",
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    price: 240,
    oldPrice: 260,
    discount: 20,
    rating: 3.5,
    image:
      "https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YO-0vl7I~GNtedZ2AnkDw4nG9NszSVZ~BBDFU6qm6Q5kKHhZypH6jFlqUwKubaayl9FX9RiNQWrdxHdZ5f6mUnk9vcBUhmpzN7pBngjO5-BnAUPcbbZH1eeWO5bM2dGlic4JIfPXgHYrU38XMDdDuq4ljqVW1Focsa~pcWHG1fPEWPalPpaaF6dkkTD7vUAyi4wBpayvgYKeI8bOTT3X4~qMHE2Og7D6KZ3K88WwkfBt6IywpbXskltoxflePyCoLWGdT4FGJRGcAon8QSpptolZRP1an9-2AUqgrjNFUI9CFT8HkD-Ng9XYSZTGOd~1BQO56TvhO84xY3pQwVOU8Q__",
  },
  {
    id: 3,
    title: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image:
      "https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YO-0vl7I~GNtedZ2AnkDw4nG9NszSVZ~BBDFU6qm6Q5kKHhZypH6jFlqUwKubaayl9FX9RiNQWrdxHdZ5f6mUnk9vcBUhmpzN7pBngjO5-BnAUPcbbZH1eeWO5bM2dGlic4JIfPXgHYrU38XMDdDuq4ljqVW1Focsa~pcWHG1fPEWPalPpaaF6dkkTD7vUAyi4wBpayvgYKeI8bOTT3X4~qMHE2Og7D6KZ3K88WwkfBt6IywpbXskltoxflePyCoLWGdT4FGJRGcAon8QSpptolZRP1an9-2AUqgrjNFUI9CFT8HkD-Ng9XYSZTGOd~1BQO56TvhO84xY3pQwVOU8Q__",
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    price: 130,
    oldPrice: 160,
    discount: 30,
    rating: 4.5,
    image:
      "https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YO-0vl7I~GNtedZ2AnkDw4nG9NszSVZ~BBDFU6qm6Q5kKHhZypH6jFlqUwKubaayl9FX9RiNQWrdxHdZ5f6mUnk9vcBUhmpzN7pBngjO5-BnAUPcbbZH1eeWO5bM2dGlic4JIfPXgHYrU38XMDdDuq4ljqVW1Focsa~pcWHG1fPEWPalPpaaF6dkkTD7vUAyi4wBpayvgYKeI8bOTT3X4~qMHE2Og7D6KZ3K88WwkfBt6IywpbXskltoxflePyCoLWGdT4FGJRGcAon8QSpptolZRP1an9-2AUqgrjNFUI9CFT8HkD-Ng9XYSZTGOd~1BQO56TvhO84xY3pQwVOU8Q__",
  },
];

const NewArrivals = () => {
  return (
    <section className="px-6 md:px-20 py-10">
      <h2 className="text-3xl font-extrabold text-center mb-8 font-integral">
        NEW ARRIVALS
      </h2>
      <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-4 md:gap-6 scrollbar-hide">
        {newArrivals.map((item) => (
          <div
            key={item.id}
            className="min-w-[45%] sm:min-w-[40%] md:min-w-0 bg-white rounded-xl shadow-sm p-3 flex-shrink-0"
          >
            <Link to={`/product/${item.id}`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-sm mb-4"
              />
            </Link>
            <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
            <div className="flex items-center gap-1 mb-1 text-yellow-500 text-sm">
              {"★".repeat(Math.floor(item.rating))}{" "}
              <span className="text-neutral-500 ml-1">{item.rating}/5</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">${item.price}</span>
              {item.oldPrice && (
                <>
                  <span className="line-through text-gray-400">
                    ${item.oldPrice}
                  </span>
                  <span className="text-red-500 text-xs bg-red-200 rounded-lg h-5 w-11 content-center text-center">
                    -{item.discount}%
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="border border-gray-200 px-6 py-2 w-full lg:w-1/4 rounded-full font-semibold hover:bg-black hover:text-white transition">
          View All
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
