import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

import { auth } from "../../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await sendPasswordResetEmail(auth, email);
      console.log("res forgot password", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="user-auth-sec forgot-password">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 login-img-sec">
            <img
              src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7862.jpg?w=900&t=st=1688811023~exp=1688811623~hmac=e51e6ca4e9618b2acd6f51c820d79832d740ab4ecf7e875ecb49d8d5c8afdb63"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 forgot-form-sec">
            <div className="user-auth-box">
              <h2 class="section-heading">Forgot Password</h2>
              <form>
                <div class="user-auth-form">
                  <div className="input-grp">
                    <AiOutlineUser className="input-icon" />
                    <input
                      name="email"
                      type="text"
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-btn-sec text-center mt-4">
                  <button
                    type="submit"
                    className="btn-comm"
                    onClick={handleResetPassword}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
