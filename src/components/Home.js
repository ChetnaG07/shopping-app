import React from "react";
import Banner from "./Banner";
import HomeCategory from "./HomeCategory";
import AllProducts from "../features/products/AllProducts";

const Home = () => {
  return (
    <>
      <Banner />
      <HomeCategory />
      <AllProducts />
      <div className="copyrights">
        <p>©copyrights 2024. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Home;
