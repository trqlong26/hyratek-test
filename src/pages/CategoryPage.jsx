import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { SlidersHorizontal } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { renderStarIcons } from "../components/utils/renderStarIcons";
import { useProducts } from "../context/ProductContext";

const CategoryPage = () => {
  const { products } = useProducts();
  const { category } = useParams();

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
      {/* breadcrumb */}
      <div className="text-gray-600 mb-6 md:mb-10 text-sm sm:text-base">
        Home &gt; <span className="text-black">{categoryName}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="pb-10 col-span-1 border px-6 rounded-[20px] hidden md:block">
          <div className="space-y-6">
            <div>
              <div className="py-6 border-b flex justify-between items-center">
                <h2 className="text-xl font-bold">Filters</h2>
                <SlidersHorizontal size={24} />
              </div>
              {/* Optional: You can comment this section out if not using */}
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

            {/* Price filter */}
            <div className="border-b pb-6">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-xl">Price</h2>
                <span>{"^"}</span>
              </div>
              <input type="range" min="0" max="500" className="w-full mt-6" />
            </div>

            {/* Rating filter */}
            <div>
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-xl">Rating</h2>
                <span>{"^"}</span>
              </div>
              <div className="py-10 flex items-center gap-1">
                <span className="ml-2">4+</span>
              </div>
              <Button className="mt-2 w-full">Apply Filter</Button>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="col-span-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
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
              <button className="lg:hidden rounded-full bg-gray-200 ">
                <SlidersHorizontal size={32} className="p-2" />
              </button>
              <div className="hidden md:flex items-center gap-2 w-full sm:w-auto sm:justify-end">
                <p className="text-black font-medium">Sort by:</p>
                <span className=" text-gray-600">Most popular {"^"}</span>
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="border-b pb-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover mb-4 rounded-xl"
                  />
                  <h3 className="font-semibold text-base mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">{product.price}</span>
                    <div className="flex gap-1 text-yellow-500">
                      {renderStarIcons(product.rating)}
                    </div>
                  </div>
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
              <span className="text-lg">←</span> Previous
            </button>

            {/* numbers */}
            <div className="flex items-center space-x-2 mx-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => {
                  // Only render certain pages for now, or all if <= 10
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

                  // Show ellipsis
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
