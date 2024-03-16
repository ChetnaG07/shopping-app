import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useGetSingleCategoryQuery,
  selectProductsCategoryIds,
} from "./productsSlice";
import SingleCategoryItem from "./SingleCategoryItem";
import { useSelector } from "react-redux";

const SingleCategory = () => {
  const { category } = useParams();
  const { data, isLoading, isError, isSuccess, error } =
    useGetSingleCategoryQuery(category);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    const { ids, entities } = data;
    content = ids.map((id) => (
      <SingleCategoryItem key={id} product={entities[id]} category={category} />
    ));
    console.log(data);
  } else if (isError) {
    console.log(error);
  }

  return (
    <>
      <div className="category-sec">
        <div className="container">
          <h2 className="section-heading text-center my-4">{category}</h2>
          <div className="row">{content}</div>
        </div>
      </div>
    </>
  );
};

export default SingleCategory;
