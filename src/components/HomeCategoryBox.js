import React from "react";
import { Link } from "react-router-dom";

const HomeCategoryBox = ({ title, catImg, linkTo }) => {
  return (
    <>
      <div className="col-lg-4 col-md-4 col-sm-12 home-category-box">
        <div className="home-category-boxInn">
          <Link to={`/products/category/${linkTo}`}>
            <h3>{title}</h3>
            <img src={catImg} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeCategoryBox;
