import React, { useState } from "react";

const customers = [
  {
    id: 1,
    name: "John Doe",
    review:
      "This product has completely transformed our workflow. It's intuitive and efficient.",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "We’ve seen a significant boost in our productivity since adopting this platform.",
    rating: 5,
  },
  {
    id: 3,
    name: "Alex Johnson",
    review: "The support team is amazing, and the product is top-notch!",
    rating: 4,
  },
  {
    id: 4,
    name: "Maria Gonzalez",
    review: "Great experience. Highly recommend this product!",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Michael Brown",
    review: "Excellent service and very user-friendly.",
    rating: 5,
  },
];

const Customers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === customers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? customers.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Customer Reviews
          </h2>
          <div className="flex space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Single Card View (Mobile) */}
        <div className="block md:hidden">
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* Rating */}
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`h-5 w-5 ${
                    star <= Math.floor(customers[currentIndex].rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Name with Verified Icon */}
            <div className="flex items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {customers[currentIndex].name}
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Review */}
            <p className="text-gray-600">{customers[currentIndex].review}</p>
          </div>
        </div>

        {/* Grid View (Desktop) */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`h-5 w-5 ${
                      star <= Math.floor(customer.rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Name with Verified Icon */}
              <div className="flex items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {customer.name}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Review */}
              <p className="text-gray-600">{customer.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
