import React, { useContext } from "react";
import { StateContext } from "./StateProvider";
import "./Checkout.css";
import CheckoutProducts from "./CheckoutProducts";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useContext(StateContext);
  return (
    <div className="checkout">
      <div class="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          className="checkout__ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2> Your cart is empty</h2>
            <p>
              Your shopping cart is empty. To buy one or more items click on
              "Add to cart" next to the item{" "}
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title"> Your Shopping Cart</h2>
            {basket.map((item) => {
              return (
                <CheckoutProducts
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div class="</h2>">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
