import React, { useState } from "react";

import { useGetAllCategoriesQuery } from "../../features/products/productsSlice";

import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import NavBarItem from "./NavBarItem";

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const { data: catagories } = useGetAllCategoriesQuery();
  console.log(catagories);
  if (!catagories) return;
  const navLi = catagories.map((category, i) => (
    <NavBarItem key={i} item={category} />
  ));

  return (
    <>
      <div className="navbar-custom`">
        <span className="navbar-icon" onClick={() => setIsSidebar(true)}>
          <FaBars />
          All Categories
        </span>

        <div className={isSidebar ? "sidebar-sec in" : "sidebar-sec"}>
          <span className="close-sidebar" onClick={() => setIsSidebar(false)}>
            <AiFillCloseCircle />
          </span>
          <ul>{navLi}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
