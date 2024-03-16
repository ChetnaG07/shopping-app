import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const PayButton = ({ cartItems }) => {
	const { currentUser } = useSelector((state) => state.auth);
	const handleCheckout = async () => {
		try {
			const res = await axios.post(
				"http://localhost:4000/create-checkout-session",
				{
					cartItems,
					userId: currentUser.uid,
				}
			);
			if (res.data.url) {
				console.log(res.data.url);
				window.location.href = res.data.url;
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<button className="btn-comm" type="submit" onClick={handleCheckout}>
				Checkout
			</button>
		</>
	);
};

export default PayButton;
