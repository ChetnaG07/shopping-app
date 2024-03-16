import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Ratings from "./Ratings";

const SingleProductItem = ({ product }) => {
  return (
    <>
      <div className="col-lg-12 col-md-12 col-sm-12 sProduct-item-sec">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12 sProduct-item-img">
            <img src={product.images[0]} alt={product.title} />
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 sProduct-item-description">
            <h2 className="box-heading">{product.title}</h2>
            <ul className="ratings-stars">
              <Ratings value={product.rating} />
            </ul>
            <p>{product.description}</p>
            <p className="cat-item-price">
              <BsCurrencyDollar />
              {product.price}
            </p>
            <button type="submit" className="btn-comm btn-black">
              <AiOutlineShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductItem;
