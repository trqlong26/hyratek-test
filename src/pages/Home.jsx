import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals";
import TopSelling from "../components/TopSelling";
import Category from "../components/Category";
import Customers from "../components/Customers";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <NewArrivals />
      <div className="w-[90%] md:w-[81%] h-[.5px] mx-auto bg-gray-200"></div>
      <TopSelling />
      <Category />
      <Customers />
    </>
  );
};

export default Home;
