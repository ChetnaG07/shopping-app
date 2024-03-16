import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "./productsSlice";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Ratings from "./Ratings";
import { addToCart } from "../cart/cartSlice";

import {
  selectProductById,
  selectProductstIds,
  useGetSingleProductQuery,
} from "./productsSlice";
import ProductImageSlider from "./ProductImageSlider";

const SingleProduct = () => {
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSingleProductQuery(productId);
  /* const product = useSelector((state) => selectProductById(state, productId)); */
  const dispatch = useDispatch();
  const [qtyValue, setQtyValue] = useState(Number);
  /* 
  const idsP = useSelector(selectProductstIds);

  const findP = idsP.find((p) => p.id === productId); */

  useEffect(() => {
    if (isSuccess) setQtyValue(product?.qty);
  }, [isSuccess]);

  console.log("singleProduct findP", product, productId);

  /* console.log("single", product.qty, qtyValue); */

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = (
      <div className="col-lg-12 col-md-12 col-sm-12 sProduct-item-sec">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-5 col-sm-12 sProduct-item-img">
            {/*   <img src={product.images[0]} alt={product.title} /> */}
            <ProductImageSlider images={product?.images} />
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 sProduct-item-description">
            <h2 className="box-heading">{product.title}</h2>
            <ul className="ratings-stars">
              <Ratings value={product.rating} />
            </ul>
            <p className="single-product-desc">{product.description}</p>
            <p className="cat-item-price">
              <BsCurrencyDollar />
              {product.price}
            </p>
            <div className="qty-addCartbtn-grp">
              <div className="product-qty">
                <label>Qty:</label>
                <input
                  type="text"
                  value={qtyValue}
                  onChange={(e) => setQtyValue(e.target.value)}
                  className="form-control"
                />
              </div>
              <button
                type="submit"
                className="btn-comm btn-black"
                onClick={() =>
                  dispatch(
                    addToCart({ product: product, qty: Number(qtyValue) })
                  )
                }
              >
                <AiOutlineShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (isError) {
    console.log(error);
  }
  console.log(product?.images);
  return (
    <>
      <div className="single-product-sec p-4 mt-5">
        <div className="container">
          <div className="row">{content}</div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
