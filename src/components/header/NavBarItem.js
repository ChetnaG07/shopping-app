import { Link } from "react-router-dom";

const NavBarItem = ({ item }) => {
  return (
    <>
      <li>
        <Link to={`/products/category/${item}`}>{item}</Link>
      </li>
    </>
  );
};

export default NavBarItem;
