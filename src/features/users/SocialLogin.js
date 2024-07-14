import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";

import { auth } from "../../config/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

import { loggedIn } from "./authSlice";

const SocialLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(auth, googleProvider);
      //console.log("google", res);
      dispatch(
        loggedIn({
          uid: res?.user?.uid,
          name: res?.user?.displayName,
          email: res?.user?.email,
        })
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const signInWithFacebook = async () => {
    const fbProvider = new FacebookAuthProvider();
    try {
      const res = await signInWithPopup(auth, fbProvider);
      //console.log("google", res);

      dispatch(
        loggedIn({
          uid: res?.user?.uid,
          name: res?.user?.displayName,
          email: res?.user?.email,
        })
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="social-login-sec">
        <ul>
          <li>
            <span onClick={signInWithGoogle}>
              <AiOutlineGoogle />
            </span>
          </li>
          <li>
            <span onClick={signInWithFacebook}>
              <FaFacebookF />
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SocialLogin;
