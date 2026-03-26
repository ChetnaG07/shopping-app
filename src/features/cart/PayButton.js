import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const PayButton = ({ cartItems }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const [isLoading, setLoading] = useState("idle");
  const handleCheckout = async () => {
    try {
      setLoading("loading");
      const res = await axios.post(
        "https://stripe-backend-9ch1.onrender.com/create-checkout-session",
        {
          cartItems,
          /* userId: currentUser.uid, */
        }
      );
      if (res.data.url) {
        //console.log(res.data.url);
        window.location.href = res.data.url;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button className="btn-comm" type="submit" onClick={handleCheckout}>
        {isLoading === "loading" ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            style={{ display: "inline-block", marginRight: "5px" }}
          />
        ) : null}
        Checkout
      </button>
    </>
  );
};

export default PayButton;
