import React from "react";
import { Trash2, Tag, MoveRight } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="lg:container mx-auto px-4 py-4">
      {/* breadcrumb */}
      <div className="text-gray-600 mb-4 text-sm sm:text-base">
        Home &gt; <span className="text-black">Cart</span>
      </div>

      <h1 className="text-3xl lg:text-[40px] font-integral font-bold mb-4 md:mb-8">
        YOUR CART
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* cart items */}
        <div className="lg:col-span-2 space-y-6">
          <div className="border p-4 rounded-xl">
            {cartItems.map((item, index) => (
              <div
                key={item.id}
                className={`pb-4 mb-4 ${
                  index !== cartItems.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="flex gap-4 items-start">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 lg:w-32 h-24 lg:h-32 rounded-lg"
                  />
                  <div className="flex flex-col w-full">
                    {/* name + trash */}
                    <div className="flex justify-between items-center">
                      <h3 className="text-base md:text-xl font-bold">
                        {item.name}
                      </h3>
                      <button onClick={() => removeFromCart(item)}>
                        <Trash2 size={24} color={"red"} />
                      </button>
                    </div>

                    {/* size + color */}
                    <p className="text-xs md:text-sm text-gray-600">
                      Size: {item.selectedSize}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-7">
                      Color: {item.selectedColor}
                    </p>

                    {/* price + quantity */}
                    <div className="flex items-center justify-between">
                      <span className="text-xl md:text-2xl font-bold">
                        ${item.price}
                      </span>
                      <div className="flex bg-gray-200 items-center border rounded-[62px] px-4 py-1">
                        <button className="px-2 font-bold">-</button>
                        <span className="px-2 font-semibold">
                          {item.quantity}
                        </span>
                        <button className="px-2 font-bold">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="border p-6 rounded-xl space-y-4 h-fit">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          <div className="flex justify-between text-xl text-gray-600">
            <span>Subtotal</span>
            <span className="text-black font-bold">${subtotal}</span>
          </div>
          <div className="flex justify-between text-xl text-gray-600">
            <span>Discount (-20%)</span>
            <span className="text-red-500 font-bold">-${discount}</span>
          </div>
          <div className="flex justify-between text-xl text-gray-600">
            <span>Delivery Fee</span>
            <span className="text-black font-bold">${deliveryFee}</span>
          </div>
          <hr />
          <div className="flex justify-between text-xl">
            <span>Total</span>
            <span className="font-bold">${total}</span>
          </div>

          <div className="flex gap-2 py-4">
            <div className="relative w-full">
              <Tag
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="text"
                placeholder="Add promo code"
                className="bg-gray-200 border px-10 py-2 rounded-[62px] w-full focus:outline-none"
              />
            </div>
            <button className="bg-black text-white px-4 md:px-8 py-2 rounded-[62px]">
              Apply
            </button>
          </div>

          <button className="flex justify-center items-center gap-3 w-full bg-black text-white py-3 rounded-[62px] mt-4 hover:bg-gray-800">
            Go to Checkout
            <MoveRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
