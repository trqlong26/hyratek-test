import React from "react";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const newArrivals = [
    {
      id: 1,
      name: "T-shirt with Tape Details",
      price: 120,
      rating: 4.5,
      image:
        "https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YO-0vl7I~GNtedZ2AnkDw4nG9NszSVZ~BBDFU6qm6Q5kKHhZypH6jFlqUwKubaayl9FX9RiNQWrdxHdZ5f6mUnk9vcBUhmpzN7pBngjO5-BnAUPcbbZH1eeWO5bM2dGlic4JIfPXgHYrU38XMDdDuq4ljqVW1Focsa~pcWHG1fPEWPalPpaaF6dkkTD7vUAyi4wBpayvgYKeI8bOTT3X4~qMHE2Og7D6KZ3K88WwkfBt6IywpbXskltoxflePyCoLWGdT4FGJRGcAon8QSpptolZRP1an9-2AUqgrjNFUI9CFT8HkD-Ng9XYSZTGOd~1BQO56TvhO84xY3pQwVOU8Q__",
    },
    {
      id: 2,
      name: "Skinny Fit Jeans",
      price: 240,
      oldPrice: 260,
      discount: 20,
      rating: 3.5,
      image:
        "https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YO-0vl7I~GNtedZ2AnkDw4nG9NszSVZ~BBDFU6qm6Q5kKHhZypH6jFlqUwKubaayl9FX9RiNQWrdxHdZ5f6mUnk9vcBUhmpzN7pBngjO5-BnAUPcbbZH1eeWO5bM2dGlic4JIfPXgHYrU38XMDdDuq4ljqVW1Focsa~pcWHG1fPEWPalPpaaF6dkkTD7vUAyi4wBpayvgYKeI8bOTT3X4~qMHE2Og7D6KZ3K88WwkfBt6IywpbXskltoxflePyCoLWGdT4FGJRGcAon8QSpptolZRP1an9-2AUqgrjNFUI9CFT8HkD-Ng9XYSZTGOd~1BQO56TvhO84xY3pQwVOU8Q__",
    },
    {
      id: 3,
      name: "Checkered Shirt",
      price: 180,
      rating: 4.5,
      image:
        "https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YO-0vl7I~GNtedZ2AnkDw4nG9NszSVZ~BBDFU6qm6Q5kKHhZypH6jFlqUwKubaayl9FX9RiNQWrdxHdZ5f6mUnk9vcBUhmpzN7pBngjO5-BnAUPcbbZH1eeWO5bM2dGlic4JIfPXgHYrU38XMDdDuq4ljqVW1Focsa~pcWHG1fPEWPalPpaaF6dkkTD7vUAyi4wBpayvgYKeI8bOTT3X4~qMHE2Og7D6KZ3K88WwkfBt6IywpbXskltoxflePyCoLWGdT4FGJRGcAon8QSpptolZRP1an9-2AUqgrjNFUI9CFT8HkD-Ng9XYSZTGOd~1BQO56TvhO84xY3pQwVOU8Q__",
    },
    {
      id: 4,
      name: "Sleeve Striped T-shirt",
      price: 130,
      oldPrice: 160,
      discount: 30,
      rating: 4.5,
      image:
        "https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YO-0vl7I~GNtedZ2AnkDw4nG9NszSVZ~BBDFU6qm6Q5kKHhZypH6jFlqUwKubaayl9FX9RiNQWrdxHdZ5f6mUnk9vcBUhmpzN7pBngjO5-BnAUPcbbZH1eeWO5bM2dGlic4JIfPXgHYrU38XMDdDuq4ljqVW1Focsa~pcWHG1fPEWPalPpaaF6dkkTD7vUAyi4wBpayvgYKeI8bOTT3X4~qMHE2Og7D6KZ3K88WwkfBt6IywpbXskltoxflePyCoLWGdT4FGJRGcAon8QSpptolZRP1an9-2AUqgrjNFUI9CFT8HkD-Ng9XYSZTGOd~1BQO56TvhO84xY3pQwVOU8Q__",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push("★");
      } else if (i < rating) {
        stars.push("⯪");
      } else {
        stars.push("☆");
      }
    }

    return stars.join("");
  };

  return (
    <section className="py-20 px-4 lg:container">
      <h2 className="text-3xl lg:text-4xl font-integral font-bold text-center mb-8">
        NEW ARRIVALS
      </h2>
      <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 overflow-x-auto scrollbar-hide">
        {newArrivals.map((item) => (
          // product card section
          <div
            key={item.id}
            className="min-w-[60%] sm:min-w-[40%] md:min-w-0 bg-white rounded-2xl shadow-sm py-4 flex-shrink-0"
          >
            <Link to={`/product/${item.id}`}>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-44 md:h-56 object-cover rounded-xl mb-4"
              />
            </Link>
            <h3 className="font-bold text-sm mb-1">{item.name}</h3>
            {/* rating section  */}
            <div className="flex items-center gap-1 mb-1 text-yellow-500 text-sm">
              <span className="text-base">{renderStars(item.rating)}</span>
              <span className="text-neutral-500">{item.rating}/5</span>
            </div>
            {/* price section */}
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">${item.price}</span>
              {item.oldPrice && (
                <>
                  <span className="line-through text-gray-400 font-semibold">
                    ${item.oldPrice}
                  </span>
                  <span className="text-red-600 bg-red-100 text-xs font-medium rounded-full px-2 py-0.5">
                    -{item.discount}%
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="border border-gray-300 px-6 py-2 w-full md:w-1/3 lg:w-1/4 rounded-full font-semibold hover:bg-black hover:text-white transition duration-300">
          View All
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
