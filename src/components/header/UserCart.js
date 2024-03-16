import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";

import { BsFillCaretDownFill } from "react-icons/bs";

import React, { useState, useEffect } from "react";

import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/users/authSlice";
import { Link } from "react-router-dom";

const UserCart = () => {
  const [user, loading] = useAuthState(auth);
  const { loggedIn } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const cartTotal = cart.reduce((prev, item) => {
    return prev + item.qty;
  }, 0);

  //console.log("cartTotal", cartTotal);

  const logOut = () => {
    auth.signOut();
    dispatch(logout());
  };

  return (
    <div className="user-cart-sec">
      <ul>
        <li
          className={loggedIn ? "header-user-sec drp-user" : "header-user-sec"}
        >
          <Link to="/login">
            <AiOutlineUser />
            <span className={loggedIn ? "user-drp-icon" : "user-drp-icon out"}>
              <BsFillCaretDownFill />
            </span>
          </Link>
          <div className="header-user-drm-menu">
            <h3>{user?.displayName}</h3>
            <button className="btn-logout" onClick={logOut}>
              Logout
              <AiOutlineLogout />
            </button>
          </div>
        </li>
        <li className="cart-icon">
          <Link to="/cart">
            <AiOutlineShoppingCart />
            <span>{cartTotal}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserCart;
