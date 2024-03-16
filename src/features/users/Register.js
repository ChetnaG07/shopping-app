import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../config/firebase";

import { useFormik } from "formik";
import * as yup from "yup";

import SocialLogin from "./SocialLogin";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  name: yup.string().min(5, "Please provide full name.."),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match..")
    .required(),
});

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async (values) => {
    const { email, password } = values;
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then(({ user }) => {
        updateProfile(user, { displayName: values.name });
      });

      navigate("/login");
      console.log(res?.user?.email);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validateOnBlur: true,
    validationSchema,
    onSubmit,
  });

  console.log("errors", formik.errors);
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
                Register
                <span>
                  Already a User? <Link to="/login">Login</Link>
                </span>
              </h2>
              <form onSubmit={formik.handleSubmit}>
                <div className="user-auth-form">
                  <div className="input-grp">
                    <AiOutlineUser className="input-icon" />
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      value={formik.values.name}
                      placeholder="Name.."
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.errors.name ? (
                    <span className="text-danger">
                      <small>{formik.errors.name}</small>
                    </span>
                  ) : null}
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
                  <div className="input-grp">
                    <RiLockPasswordLine className="input-icon" />
                    <input
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      className="form-control"
                      value={formik.values.confirmPassword}
                      placeholder="Confirm password.."
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {showPassword ? (
                      <span
                        className="show-password"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
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

                  {formik.errors.confirmPassword ? (
                    <span className="text-danger">
                      <small>{formik.errors.confirmPassword}</small>
                    </span>
                  ) : null}
                  <div className="form-btn-sec text-center mt-4">
                    <button
                      type="submit"
                      className="btn-comm"
                      disabled={!formik.isValid}
                    >
                      Submit
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

export default Register;
