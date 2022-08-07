import React, { useContext } from "react";
import { StateContext } from "./StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const [{ basket }] = useContext(StateContext);
  const computeTotal = () => {
    let total = 0;
    basket.forEach((item) => (total += item.price));
    return total;
  };

  return (
    <div className="subtotal">
      <p>
        Subtotal({basket.length} items):
        <strong> ₹{computeTotal()}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button className="subtotal__checkoutButton">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
