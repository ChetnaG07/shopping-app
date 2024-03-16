import React from "react";
import { useParams } from "react-router-dom";

import { useGetSearchResultQuery } from "../features/products/productsSlice";
import SearchItem from "./SearchItem";

const SearchResults = () => {
  const { searchItem } = useParams();

  const {
    data: searchResult,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSearchResultQuery(searchItem);

  console.log(searchItem, searchResult, isError);

  let content;
  if (isLoading) {
    content = <p>Loading..</p>;
  } else if (isSuccess) {
    const { ids, entities } = searchResult;

    content = ids.map((id) => (
      <SearchItem key={id} product={entities[id]} searchCat={searchItem} />
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <div className="search-sec my-5">
      <div className="container">
        <h2 class="section-heading text-center my-4">
          Search Result for "{searchItem}"
        </h2>
        {searchResult?.ids.length == 0 && (
          <div className="search-no-found">
            <p>Oops item Not Found</p>
            <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150696461.jpg?w=740&t=st=1692536558~exp=1692537158~hmac=673242a851c9eb623bc227f08cffd97836b0507795a293885864816e3ff0251a" />
          </div>
        )}
        <div className="row"> {content}</div>
      </div>
    </div>
  );
};

export default SearchResults;
