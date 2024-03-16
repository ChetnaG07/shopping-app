import React from "react";
import { useDispatch } from "react-redux";
import { BsCurrencyDollar, BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { addToCart } from "../features/cart/cartSlice";

const SearchItem = ({ product, searchCat }) => {
  const dispatch = useDispatch();

  return (
    <div className="col-lg-3 col-md-3 col-sm-12 cat-item-box">
      <div className="cat-item-box-inn">
        <div className="cat-item-img">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="cat-item-content">
          <h2 className="box-heading">{product.title.substring(0, 20)}</h2>
          <p>{product.description.substring(0, 40)}</p>
          <p className="cat-item-price">
            <BsCurrencyDollar />
            {product.price}
          </p>
          <div className="btn-group">
            <Link
              to={`/products/${searchCat}/${product.id}`}
              className="btn-comm btn-black"
            >
              View More
            </Link>
            <button
              type="submit"
              className="btn-comm"
              onClick={() => dispatch(addToCart({ product, qty: 1 }))}
            >
              <BsFillCartFill />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
