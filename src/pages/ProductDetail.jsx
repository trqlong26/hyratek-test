import React, { useState, useEffect } from "react";
import { ChevronDown, CheckCircle, SlidersHorizontal } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { renderStarIcons } from "../components/utils/renderStarIcons";
import { useProducts } from "../context/ProductContext";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { products } = useProducts();

  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [visibleReviews, setVisibleReviews] = useState(3);

  useEffect(() => {
    const foundProduct = products.find((item) => item.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, products]);

  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 1024;
      setIsLargeScreen(isLarge);
      setVisibleReviews(isLarge ? 6 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoadMore = () => {
    setVisibleReviews((prev) => prev + (isLargeScreen ? 6 : 3));
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select both size and color.");
      return;
    }

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image[0],
      selectedSize,
      selectedColor,
      quantity,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const itemExists = existingCart.some(
      (item) =>
        item.id === cartItem.id &&
        item.selectedSize === cartItem.selectedSize &&
        item.selectedColor === cartItem.selectedColor
    );

    if (itemExists) {
      alert(
        "This product with the selected size and color is already in your cart."
      );
      return;
    }

    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!product) {
    return <div className="text-center py-20">Loading product...</div>;
  }

  return (
    <div className=" lg:container mx-auto px-4 py-4">
      {/* breadcrumb */}
      <div className="text-gray-600 mb-4 text-sm sm:text-base">
        Home &gt; Shop &gt; Men &gt;{" "}
        <span className="text-black">T-shirts</span>
      </div>

      {/* product section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-12">
        {/* image gallery */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* thumbs desktop */}
          <div className="hidden sm:flex sm:flex-col gap-3 lg:ml-0">
            {product.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-lg border object-cover"
              />
            ))}
          </div>

          {/* main img */}
          <img
            src={product.image[0]}
            alt="main"
            className="w-full py-1 md:py-0 h-64 sm:h-96 md:h-[500px] lg:h-[505px] rounded-[20px] object-cover"
          />

          {/* thumbs mobile */}
          <div className="flex sm:hidden gap-3 justify-center">
            {product.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                className="w-24 h-24 rounded-[20px] border object-cover"
              />
            ))}
          </div>
        </div>

        {/* product info */}
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-integral font-bold mb-2">
            ONE LIFE GRAPHIC T&#9866;SHIRT
          </h1>

          {/* rating */}
          <div className="flex items-center gap-1 text-yellow-500 mb-4">
            <span className="text-2xl font-bold">
              {renderStarIcons(product.rating)}
            </span>
            <span className="text-black">
              {product.rating}/<span className="text-gray-500">5</span>
            </span>
          </div>

          {/* price */}
          <div className="mb-4">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-black mr-2">
              ${product.price}
            </span>
            {product.oldPrice && (
              <>
                <span className="text-xl sm:text-2xl md:text-3xl font-bold line-through text-gray-300 mr-2">
                  ${product.oldPrice}
                </span>
                <span className="text-sm sm:text-base text-red-600 bg-red-100 font-medium rounded-full px-2 py-0.5">
                  -{product.discount}%
                </span>
              </>
            )}
          </div>

          {/* description */}
          <p className="text-gray-600 pb-4 mb-4 border-b text-sm sm:text-base">
            {product.description}
          </p>

          {/* color options */}
          <div className="pb-6 mb-4 border-b">
            <p className="text-gray-600 mb-2 text-sm sm:text-base">
              Select Colors
            </p>
            <div className="flex gap-3">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  style={{ backgroundColor: `#${color}` }}
                  className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border-2 ${
                    selectedColor === color
                      ? "border-black"
                      : "border-transparent"
                  } focus:outline-none`}
                ></button>
              ))}
            </div>
          </div>

          {/* size options */}
          <div className="pb-6 mb-4 border-b">
            <p className="text-gray-600 mb-2 text-sm sm:text-base">
              Choose Size
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`bg-gray-200 px-4 sm:px-6 py-1 sm:py-2 rounded-[62px] text-sm sm:text-base ${
                    selectedSize === size
                      ? "!bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* quantity + add to cart */}
          <div className="flex items-center gap-4 md:pt-3">
            <div className=" w-[30%] flex items-center justify-center md:justify-around border rounded-[62px] overflow-hidden">
              <button
                onClick={() => {
                  setQuantity((prev) => Math.max(1, prev - 1));
                }}
                className="text-xl sm:text-2xl font-bold px-1 md:px-3 py-1"
              >
                -
              </button>
              <span className="text-xl sm:text-2xl px-4">{quantity}</span>
              <button
                onClick={() => {
                  setQuantity((prev) => prev + 1);
                }}
                className="text-xl sm:text-2xl font-bold px-1 md:px-3 py-1"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                handleAddToCart();
                console.log("Added to cart:", product, selectedSize, quantity);
              }}
              className="bg-black  w-[70%] text-white px-6 py-2 rounded-[62px] text-sm sm:text-base"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* tabs */}
      <div className=" pt-2 md:pt-10 border-b mb-6 flex items-center justify-between gap-3 sm:gap-6 text-gray-600 text-sm sm:text-base">
        <button className="pb-2 w-full text-sm sm:text-xl">
          Product Details
        </button>
        <button className="pb-2 w-full text-sm sm:text-xl border-b-2 border-black font-semibold text-black">
          Rating & Reviews
        </button>
        <button className="pb-2 w-full text-sm sm:text-xl">FAQs</button>
      </div>

      {/* reviews */}
      <div>
        <div className="flex flex-row justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0">
            All Reviews ({product.reviews.length})
          </h2>
          <div className="flex gap-2">
            <button className="bg-gray-200 rounded-full p-2 sm:p-3">
              <SlidersHorizontal size={20} />
            </button>
            <button className="hidden md:flex items-center gap-1 border bg-gray-200 px-3 sm:px-6 py-1 rounded-[62px] text-sm sm:text-base">
              Latest <ChevronDown size={16} />
            </button>
            <button className="bg-black text-white px-4 sm:px-8 py-1 sm:py-1.5 rounded-[62px] text-sm sm:text-base">
              Write a Review
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* review */}
          {product.reviews.slice(0, visibleReviews).map((review, index) => (
            <div
              key={index}
              className="border p-3 sm:p-4 rounded-lg sm:rounded-[20px]"
            >
              <div className="flex mb-2 font-bold text-xl sm:text-2xl text-yellow-500">
                {renderStarIcons(review.rating)}
              </div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-lg sm:text-xl">
                  {review.customerName}
                </h3>
                <CheckCircle size={20} fill="#01AB31" color="white" />
              </div>
              <p className="text-gray-600 mb-6 sm:mb-10 text-sm sm:text-base">
                {review.review}
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                Posted on {review.date}
              </p>
            </div>
          ))}
        </div>

        {/* load more btn */}
        {visibleReviews < product.reviews.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              className="border px-10 py-2 rounded-[62px] text-sm sm:text-base"
            >
              Load More Reviews
            </button>
          </div>
        )}
      </div>

      {/* you may also like */}
      <div className="pt-12 md:pt-20">
        <h2 className="text-3xl lg:text-4xl font-integral font-bold text-center mb-8">
          YOU MAY ALSO LIKE
        </h2>
        <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 overflow-x-auto scrollbar-hide">
          {products
            .filter((p) => p.id !== product.id)
            .slice(0, 4)
            .map((product) => (
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
      </div>
    </div>
  );
};

export default ProductDetailPage;
