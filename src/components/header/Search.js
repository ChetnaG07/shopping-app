import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const searchHandle = (e) => {
    e.preventDefault();
    navigate(`/products/${searchValue}`);

    setSearchValue("");
  };

  return (
    <>
      <div className="search-input-grp">
        <form onSubmit={searchHandle}>
          <input
            type="text"
            className="form-control"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search.."
          />
          <span>
            <AiOutlineSearch />
          </span>
        </form>
      </div>
    </>
  );
};

export default Search;
