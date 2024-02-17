import React, { useState } from "react";

import ProductCard from "../../utils/productCard/ProductCard";

import "./Cart.scss";

export default function Cart({ shoppingCart, cartRef, subTotal, tax, total }) {
  return (
    <div className="cart" ref={cartRef}>
      <div className="cart__title">Current order</div>
      <div className="cart__items">
        {shoppingCart.length ? (
          shoppingCart.map((product) => <ProductCard product={product} />)
        ) : (
          <div className="cart__empty">Tap an item to start a new order</div>
        )}
      </div>
      <footer className="cart__totals-container">
        <div className="cart__totals-titles">
          <div>Subtotal:</div>
          <div>Tax:</div>
          <div>Total:</div>
        </div>
        <div className="cart__totals">
          <div>${subTotal}</div>
          <div>${tax}</div>
          <div>${total}</div>
        </div>
      </footer>
    </div>
  );
}
