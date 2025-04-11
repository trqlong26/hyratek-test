import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { renderStarIcons } from "./utils/renderStarIcons";
import { useProducts } from "../context/ProductContext";

const NewArrivals = () => {
  const { products } = useProducts();

  return (
    <section className="py-20 px-4 lg:container">
      <h2 className="text-3xl lg:text-4xl font-integral font-bold text-center mb-8">
        NEW ARRIVALS
      </h2>
      <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 overflow-x-auto scrollbar-hide">
        {products.slice(0, 4).map((product) => (
          // product card section
          <div
            key={product.id}
            className="min-w-[60%] sm:min-w-[40%] md:min-w-0 bg-white rounded-2xl shadow-sm py-4 flex-shrink-0"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image[0]}
                alt={product.name}
                className="w-full h-44 md:h-56 object-cover rounded-xl mb-4"
              />
            </Link>
            <h3 className="font-bold text-sm mb-1 normal-case">
              {product.name}
            </h3>
            {/* rating section  */}
            <div className="flex items-center gap-1 mb-1 text-yellow-500 text-sm">
              <span className="text-base">
                {renderStarIcons(product.rating)}
              </span>
              <span className="text-neutral-500">{product.rating}/5</span>
            </div>
            {/* price section */}
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">${product.price}</span>
              {product.oldPrice && (
                <>
                  <span className="line-through text-gray-400 font-semibold">
                    ${product.oldPrice}
                  </span>
                  <span className="text-red-600 bg-red-100 text-xs font-medium rounded-full px-2 py-0.5">
                    -{product.discount}%
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
