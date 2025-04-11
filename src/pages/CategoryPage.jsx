import React from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Star } from "lucide-react";

const products = [
  {
    name: "Fullsleeve - Folded Collar",
    price: "$145",
    image: "/images/product1.png",
    rating: 4,
  },
  {
    name: "Mens Casual Premium T-shirt",
    price: "$180",
    image: "/images/product2.png",
    rating: 4,
  },
  {
    name: "Mens Cotton Jacket",
    price: "$120",
    image: "/images/product3.png",
    rating: 4,
  },
  // Add more products as needed
];

const CategoryPage = () => {
  return (
    <div className="px-8 py-6 max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Casual</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters */}
        <aside className="col-span-1 hidden md:block">
          <div className="space-y-6">
            <div>
              <h2 className="font-semibold mb-2">Filters</h2>
              <ul className="space-y-1 text-sm">
                <li>All</li>
                <li>Mens Clothing</li>
                <li>Jewelery</li>
                <li>Electronics</li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold mb-2">Price</h2>
              <input type="range" min="0" max="500" className="w-full" />
            </div>
            <div>
              <h2 className="font-semibold mb-2">Rating</h2>
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="ml-2">4+</span>
              </div>
              <Button className="mt-2 w-full">Apply Filter</Button>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="rounded-2xl overflow-hidden">
              <CardContent className="p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-contain mb-4"
                />
                <h3 className="font-semibold text-base mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-bold">{product.price}</span>
                  <div className="flex gap-1">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer newsletter */}
      <div className="mt-16 rounded-2xl bg-black text-white p-8 text-center">
        <h2 className="text-xl font-bold mb-2">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="rounded-full max-w-sm"
          />
          <Button className="rounded-full px-6">Subscribe to Newsletter</Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
