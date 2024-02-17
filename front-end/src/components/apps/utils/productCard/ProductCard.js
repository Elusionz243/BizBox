import React from "react";

import "./ProductCard.scss";

export default function ProductCard({ product, addToCart }) {
  let {
    id,
    brand,
    product_name,
    vendor,
    variant,
    price,
    quantity,
    barcode,
    cartQuantity,
  } = product;
  price = Number(price);
  cartQuantity = Number(cartQuantity);
  quantity = Number(quantity);
  return (
    <div
      key={`${barcode}-${id}`}
      className="product-card"
      onClick={!cartQuantity ? () => addToCart(barcode) : null}
    >
      <div className="product-card-title">{`${
        brand.length ? `${brand} - ` : ""
      }${product_name}${variant.length ? ` - ${variant}` : ""}`}</div>
      <div>
        <div className="product-card-price">
          ${cartQuantity ? (price * cartQuantity).toFixed(2) : price.toFixed(2)}
        </div>
        <div className="product-card-quantity">
          {cartQuantity ? `x${cartQuantity}` : `(${quantity})`}
        </div>
      </div>
    </div>
  );
}
