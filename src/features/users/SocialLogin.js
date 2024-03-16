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
import { useAuthState } from "react-firebase-hooks/auth";

import { loggedIn } from "./authSlice";

const SocialLogin = () => {
  const [user, loading] = useAuthState(auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log("google", res);
      console.log("googleUser", user);
      dispatch(
        loggedIn({
          uid: user?.uid,
          name: user?.displayName,
          email: user?.email,
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
      console.log("google", res);
      console.log("fbUser", user);
      dispatch(
        loggedIn({
          uid: user?.uid,
          name: user?.displayName,
          email: user?.email,
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
