import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals";
import TopSelling from "../components/TopSelling";
import Category from "../components/Category";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <NewArrivals />
      <TopSelling />
      <Category />
    </div>
  );
};

export default Home;
