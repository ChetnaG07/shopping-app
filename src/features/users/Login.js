import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

import { loggedIn } from "./authSlice";

import { useFormik } from "formik";
import * as yup from "yup";

import { useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const [user, loading] = useAuthState(auth);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    const { email, password } = values;
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      //console.log(res);
      //console.log("user", user);
      localStorage.setItem("accessToken", user?.accessToken);

      dispatch(
        loggedIn({
          uid: res?.user?.uid,
          name: res?.user?.displayName,
          email: res?.user?.email,
        })
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnBlur: true,
    validationSchema,
    onSubmit,
  });

  //console.log("errors", formik.errors);
  return (
    <>
      <div className="login-sec user-auth-sec">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 login-img-sec">
            <img
              src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7862.jpg?w=900&t=st=1688811023~exp=1688811623~hmac=e51e6ca4e9618b2acd6f51c820d79832d740ab4ecf7e875ecb49d8d5c8afdb63"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 user-auth-content">
            <div className="user-auth-box">
              <h2 className="section-heading">
                Login
                <span>
                  Not a User? <Link to="/register">Register</Link>
                </span>
              </h2>
              <form onSubmit={formik.handleSubmit}>
                <div className="user-auth-form">
                  <div className="input-grp">
                    <AiOutlineUser className="input-icon" />
                    <input
                      name="email"
                      type="text"
                      className="form-control"
                      value={formik.values.email}
                      placeholder="Email ID.."
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.errors.email ? (
                    <span className="text-danger">
                      <small>{formik.errors.email}</small>
                    </span>
                  ) : null}

                  <div className="input-grp">
                    <RiLockPasswordLine className="input-icon" />
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      value={formik.values.password}
                      placeholder="Password.."
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {showPassword ? (
                      <span
                        className="show-password"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <AiFillEye />
                      </span>
                    ) : (
                      <span
                        className="show-password"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <AiFillEyeInvisible />
                      </span>
                    )}
                  </div>

                  {formik.errors.password ? (
                    <span className="text-danger">
                      <small>{formik.errors.password}</small>
                    </span>
                  ) : null}
                  <Link to="/forgot-password" className="btn-forgot">
                    Forgot Password?
                  </Link>
                  <div className="form-btn-sec text-center mt-4">
                    <button
                      type="submit"
                      className="btn-comm"
                      disabled={!formik.isValid}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
              <span className="or-strip">OR</span>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
