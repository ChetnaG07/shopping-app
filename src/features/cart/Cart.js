import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PayButton from "./PayButton";

import { BsCurrencyDollar } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { removeFromCart } from "./cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log("pay ", cart.cart);
  const dispatch = useDispatch();

  const cartTotal = cart.cart.reduce(
    (prev, item) => item.qty * item.price + prev,
    0
  );

  console.log("cartTotal", cartTotal);

  console.log("cart", cart, cart.isEmpty);
  if (cart.cart.length == 0) {
    return (
      <div className="container text-center emptyCart">
        <p>Your Cart is Empty</p>
        <img src="https://img.freepik.com/free-vector/big-box-store-abstract-concept-illustration-superstore-big-box-discounter-large-area-store-shopping-center-retail-park-general-merchandise-specialized-megastore_335657-3354.jpg?w=740&t=st=1692534820~exp=1692535420~hmac=9bf84983ebc3dde34d8a46bc2774d790f629e0ddf347c142e07014695c649702" />
      </div>
    );
  }
  let content = cart.cart.map((item) => {
    let totalPrice = item.price * item.qty;
    return (
      <tr key={item.id}>
        <td>
          <div className="cart-product">
            <img src={item.thumbnail} alt={item.title} />
            <h4>{item.title}</h4>
          </div>
        </td>
        <td>{item.qty}</td>
        <td>{item.price}</td>
        <td className="text-right">{totalPrice}</td>
        <td className="delete-cart-item">
          <span onClick={() => dispatch(removeFromCart(item.id))}>
            <AiFillDelete />
          </span>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="cart-sec mt-5">
        <div className="container">
          <h2 className="section-heading text-center my-5">Your Cart</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr className="table-heading">
                      <th>Product</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th className="text-right">Total</th>
                      <th></th>
                    </tr>
                    {content}
                    <tr>
                      <th colSpan={3}>&nbsp;</th>
                      <th className="cart-total">
                        <span>Total:</span>{" "}
                        <span>
                          <BsCurrencyDollar />
                          {cartTotal}
                        </span>
                      </th>
                      <th></th>
                    </tr>
                    <tr>
                      <th colSpan={3}>&nbsp;</th>
                      <th className="cart-paymentbtn">
                        <PayButton cartItems={cart.cart} />
                      </th>
                      <th></th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
