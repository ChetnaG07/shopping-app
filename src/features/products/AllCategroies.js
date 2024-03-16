import React from "react";
import { useGetAllCategoriesQuery } from "./productsSlice";
import HomeCategoryBox from "../../components/HomeCategoryBox";

const AllCategories = () => {
  const {
    data: categories,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetAllCategoriesQuery();
  console.log("categories", categories);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = categories.map((category, i) => {
      return (
        <HomeCategoryBox key={i} title={category} linkTo={category} catImg="" />
      );
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <div className="home-category-sec all-categories-sec">
      <div className="container">
        <h2 class="section-heading text-center my-4">All Categories</h2>
        <div className="row">{content}</div>
      </div>
    </div>
  );
};

export default AllCategories;
