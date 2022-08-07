import React, { useContext } from "react";
import { StateContext } from "./StateProvider";
import "./CheckoutProducts.css";

function CheckoutProducts({ id, title, image, price, rating }) {
  const [{ baket }, dispatch] = useContext(StateContext);
  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };
  return (
    <div className="checkoutProducts">
      <img src={image} alt="" className="checkoutProducts__image" />
      <div className="checkoutProducts__info">
        <p className="checkoutProducts__title">{title}</p>
        <p className="checkoutProducts__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">{Array(rating).fill(<p>⭐</p>)}</div>
        <button
          className="checkoutProducts__removeFromCart"
          onClick={removeFromCart}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProducts;
