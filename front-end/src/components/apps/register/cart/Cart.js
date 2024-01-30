import React from "react";

import ProductCard from "../../utils/productCard/ProductCard";

import "./Cart.scss";

export default function Cart({
  shoppingCart,
  shoppingCartTotal,
  cartRef,
  removeProductFromCart,
}) {
  return (
    <div className="cart" ref={cartRef}>
      <div>
        <h5 className="cart__title">Current order</h5>
      </div>
      <div className="cart__items">
        {shoppingCart.length ? (
          shoppingCart.map((product) => <ProductCard product={product} />)
        ) : (
          <div>Tap an item to start a new order</div>
        )}
      </div>
      <div className="cart__totals-container">
        <div className="cart__totals-titles">
          <div>Subtotal:</div>
          <div>Tax:</div>
          <div>Total:</div>
        </div>
        <div className="cart__totals">
          <div>${shoppingCartTotal.toFixed(2)}</div>
          <div>${(shoppingCartTotal * 0.0825).toFixed(2)}</div>
          <div>${(shoppingCartTotal * 1.0825).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}