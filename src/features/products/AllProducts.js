import React from "react";
import { useSelector } from "react-redux";
import { useGetAllProductsQuery } from "./productsSlice";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ProductItemBox from "./ProductItemBox";

const AllProducts = () => {
  const {
    data: products,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetAllProductsQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    //console.log("resAll", products);
    content = products.ids.map((id) => <ProductItemBox key={id} id={id} />);
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <div className="all-products-sec">
      <div className="container">
        <h2 className="section-heading text-center my-4">Featured Products</h2>
        <div className="row">
          <div className="col-lg-12">
            {products && (
              <OwlCarousel
                className="owl-theme"
                items={4}
                dots={false}
                loop
                margin={10}
                nav
              >
                {content}
              </OwlCarousel>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
