import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/Card";
import { SlidersHorizontal } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { renderStarIcons } from "../components/utils/renderStarIcons";
import { useProducts } from "../context/ProductContext";

const CategoryPage = () => {
  const { products } = useProducts();
  const { category } = useParams();
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  if (!category) {
    return <div className="p-8">Category not found.</div>;
  }

  const categoryName =
    category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
  const ITEMS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="px-8 py-6 lg:container mx-auto">
      {/* mobile filters container */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-end md:hidden">
          <div className="bg-white w-full rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto animate-slide-up">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Filters</h2>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="text-gray-600 font-bold text-lg"
              >
                ✕
              </button>
            </div>

            {/* main content */}
            <div className="space-y-6">
              {/* category links */}
              <div className="border-b pb-6">
                <ul className="space-y-4 text-gray-500">
                  {[
                    "Electronics",
                    "Jewelery",
                    "Men's Clothing",
                    "Women's Clothing",
                  ].map((cat, idx) => (
                    <li key={idx}>
                      <Link
                        to={`/category/${cat
                          .toLowerCase()
                          .replace(/'/g, "")
                          .replace(" ", "-")}`}
                        onClick={() => setShowMobileFilters(false)}
                        className="flex items-center justify-between"
                      >
                        {cat}
                        <span>{">"}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* prices */}
              <div className="border-b pb-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-bold text-xl">Price</h2>
                  <span>{"^"}</span>
                </div>
                <input type="range" min="0" max="500" className="w-full mt-6" />
              </div>

              {/* ratings */}
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="font-bold text-xl">Rating</h2>
                  <span>{"^"}</span>
                </div>
                <div className="py-10 flex items-center gap-1">
                  <span className="ml-2">4+</span>
                </div>
                <button className="mt-2 w-full bg-black text-white py-2 rounded-[62px]">
                  Apply Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* breadcrumb */}
      <div className="text-gray-600 mb-6 md:mb-10 text-sm sm:text-base">
        Home &gt; <span className="text-black">{categoryName}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 mb-20 md:mb-0 gap-8">
        {/* desktop filters container */}
        <div className="pb-10 col-span-1 border px-6 rounded-[20px] hidden md:block">
          <div className="space-y-6">
            <div>
              <div className="py-6 border-b flex justify-between items-center">
                <h2 className="text-xl font-bold">Filters</h2>
                <SlidersHorizontal size={24} />
              </div>
              {/* category links */}
              <div className="py-6 border-b">
                <ul className="space-y-4 text-gray-500">
                  {[
                    "Electronics",
                    "Jewelery",
                    "Men's Clothing",
                    "Women's Clothing",
                  ].map((cat, idx) => (
                    <li key={idx}>
                      <Link
                        to={`/category/${cat
                          .toLowerCase()
                          .replace(/'/g, "")
                          .replace(" ", "-")}`}
                        className="flex items-center justify-between"
                      >
                        {cat}
                        <span>{">"}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* prices */}
            <div className="border-b pb-6">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-xl">Price</h2>
                <span>{"^"}</span>
              </div>
              <input type="range" min="0" max="500" className="w-full mt-6" />
            </div>

            {/* rating */}
            <div>
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-xl">Rating</h2>
                <span>{"^"}</span>
              </div>
              <div className="py-10 flex items-center gap-1">
                <span className="ml-2">4+</span>
              </div>
              <button className="mt-2 w-full bg-black text-white py-2 rounded-[62px]">
                Apply Filter
              </button>
            </div>
          </div>
        </div>

        {/* products section */}
        <div className="col-span-3">
          {/* header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1 md:mb-4 gap-2">
            <div className="flex items-center justify-between w-full gap-4">
              <div className="lg:w-[79%] flex justify-between items-center gap-4">
                <h2 className="text-2xl lg:text-3xl font-bold">
                  {categoryName}
                </h2>
                <p className=" text-xs lg:text-base text-gray-600">
                  Showing {startIndex + 1}-
                  {Math.min(
                    startIndex + ITEMS_PER_PAGE,
                    filteredProducts.length
                  )}{" "}
                  of {filteredProducts.length} Products
                </p>
              </div>
              <button
                onClick={() => setShowMobileFilters(true)}
                className="lg:hidden rounded-full bg-gray-200 "
              >
                <SlidersHorizontal size={32} className="p-2" />
              </button>
              <div className="hidden md:flex items-center gap-2 w-full sm:w-auto sm:justify-end">
                <p className="text-black font-medium">Sort by:</p>
                <span className=" text-gray-600">Most popular {"^"}</span>
              </div>
            </div>
          </div>

          {/* products list */}
          <div className="border-b pb-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-4">
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="w-full h-32 md:h-60 object-cover mb-4 rounded-xl"
                  />
                  <h3 className="font-bold text-base md:text-xl">
                    {product.name}
                  </h3>
                  <div className="flex gap-1 text-yellow-500">
                    {renderStarIcons(product.rating)}
                    <span className="text-black">
                      {product.rating}/<span className="text-gray-600">5</span>
                    </span>
                  </div>
                  <span className="text-xl md:text-2xl font-bold">
                    ${product.price}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* pagination */}
          <div className="flex justify-between items-center mt-10 space-x-2 flex-wrap">
            {/* prev btn */}
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="border px-4 py-2 rounded-lg flex items-center gap-2 font-semibold"
            >
              <span className="md:text-lg">←</span> Previous
            </button>

            {/* numbers */}
            <div className="flex items-center space-x-2 mx-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => {
                  if (
                    totalPages <= 10 ||
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-md border text-sm ${
                          currentPage === page
                            ? "bg-gray-200 font-semibold"
                            : ""
                        }`}
                      >
                        {page}
                      </button>
                    );
                  }

                  // show ellipsis
                  if (
                    (page === currentPage - 2 && page > 2) ||
                    (page === currentPage + 2 && page < totalPages - 1)
                  ) {
                    return (
                      <span key={page} className="px-2 text-gray-400">
                        ...
                      </span>
                    );
                  }

                  return null;
                }
              )}
            </div>

            {/* next btn */}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="border px-4 py-2 rounded-lg flex items-center gap-2 font-semibold"
            >
              Next <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
