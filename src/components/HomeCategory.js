import React from "react";
import HomeCategoryBox from "./HomeCategoryBox";
import { Link } from "react-router-dom";

const HomeCategory = () => {
  return (
    <>
      <div className="home-category-sec">
        <div className="container">
          <div className="row">
            <HomeCategoryBox
              title="Women"
              linkTo="womens-dresses"
              catImg="https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <HomeCategoryBox
              title="Men"
              linkTo="mens-shirts"
              catImg="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <HomeCategoryBox
              title="Sunglasses"
              linkTo="sunglasses"
              catImg="https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
          <div className="text-center">
            <Link to="/products" className="btn-comm my-3">
              View All
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCategory;
