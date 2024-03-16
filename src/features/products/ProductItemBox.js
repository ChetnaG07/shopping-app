import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsCurrencyDollar, BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { addToCart } from "../cart/cartSlice";
import { selectProductById } from "./productsSlice";

const ProductItemBox = ({ id }) => {
  const product = useSelector((state) => selectProductById(state, Number(id)));
  //console.log("id", product);
  const dispatch = useDispatch();
  return (
    <div className="col-12 cat-item-box">
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
              to={`/products/category/${product.category}/${product.id}`}
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

export default ProductItemBox;
