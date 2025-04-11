import React, { useState } from "react";
import { MoveLeft, MoveRight, CircleCheck } from "lucide-react";

const customers = [
  {
    id: 1,
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    rating: 5,
  },
  {
    id: 3,
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
  },
  {
    id: 5,
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    rating: 5,
  },
];

const StarRating = ({ rating }) => (
  <div className="flex mb-4">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`h-5 w-5 ${
          star <= Math.floor(rating) ? "text-yellow-500" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const CustomerCard = ({ customer, nameSize = "text-xl" }) => (
  <div className="bg-primary rounded-[20px] p-6 border">
    <StarRating rating={customer.rating} />
    <div className="flex items-center mb-2">
      <h3 className={`${nameSize} font-bold text-gray-800`}>{customer.name}</h3>
      <CircleCheck size={24} fill="#01AB31" color="#ffffff" className="ml-2" />
    </div>
    <p className="text-gray-600 text-[14px] md:text-base">{customer.review}</p>
  </div>
);

const Customers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === customers.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? customers.length - 1 : prev - 1));
  };

  const getVisibleCustomers = () => {
    const end = currentIndex + 3;
    return end <= customers.length
      ? customers.slice(currentIndex, end)
      : [
          ...customers.slice(currentIndex),
          ...customers.slice(0, end - customers.length),
        ];
  };

  return (
    <section className="py-16 lg:py-0 lg:pt-20">
      <div className="lg:container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-integral font-bold">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex">
            <button onClick={handlePrev} className="p-2">
              <MoveLeft size={24} />
            </button>
            <button onClick={handleNext} className="p-2">
              <MoveRight size={24} />
            </button>
          </div>
        </div>

        {/* mobile view */}
        <div className="block md:hidden">
          <CustomerCard
            customer={customers[currentIndex]}
            nameSize="text-base"
          />
        </div>

        {/* desktop view */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {getVisibleCustomers().map((customer, idx) => (
            <CustomerCard key={`${customer.id}-${idx}`} customer={customer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
