import React, { useContext } from "react";
import "./Product.css";
import { StateContext } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useContext(StateContext);
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">{Array(rating).fill(<p>⭐</p>)}</div>
      </div>
      <img src={image} alt="product-image" />
      <button className="product__addBasketBtn" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
