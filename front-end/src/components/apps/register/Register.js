import React, { useState, useRef } from "react";
import { Alphabetize } from "../utils/sortFunctions";

import ProductCard from "../utils/productCard/ProductCard";
import NavigationBar from "../utils/navigationBar/NavigationBar";
import Cart from "./cart/Cart";

import Searchbar from "../utils/searchbar/Searchbar";

import elfbar from "../../../images/Elfbar.png";
import Apparel from "../../../images/Apparel&Accessories.jpg";
import artSupplies from "../../../images/Art_Supplies.jpg";
import Blunts from "../../../images/Blunts.jpg";
import Butane from "../../../images/Butane.jpg";

import "./Register.scss";
export default function Register({
  shoppingCart,
  listOfProducts = [],
  categoryList,
  addProductToCart,
  loading,
}) {
  const [categorizedProducts, setCategorizedProducts] = useState([]);
  const [showCategories, setShowCategories] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [categoryImages, setCategoryImages] = useState({
    "Air Fresheners & Odor Eliminators": elfbar,
    "Apparel & Accessories": Apparel,
    "Art Supplies": artSupplies,
    Blunts: Blunts,
    Butane: Butane,
    Cigarettes: elfbar,
    Cigars: elfbar,
    "Cleaners & Detox": elfbar,
    "Concentrate Accessories": elfbar,
    Containers: elfbar,
    "Dry Herb & Concentrate Vaporizers": elfbar,
    Dugouts: elfbar,
    Glass: elfbar,
    Grinders: elfbar,
    Hemp: elfbar,
    "Hemp Disposables": elfbar,
    "Hemp Wraps": elfbar,
    Hookah: elfbar,
    Incense: elfbar,
    Kratom: elfbar,
    Lifestyle: elfbar,
    Lighters: elfbar,
    Miscellaneous: elfbar,
    "Papers & Cones": elfbar,
    "Posters & Stickers": elfbar,
    Scales: elfbar,
    Shisha: elfbar,
    "Smoking Accessories": elfbar,
    "Snacks & Drinks": elfbar,
    Supplements: elfbar,
    Torches: elfbar,
    "Vape Accessories": elfbar,
    "Vape Coils": elfbar,
    "Vape Disposables": elfbar,
    "Vape Gear": elfbar,
    "Vape Juice": elfbar,
    "Whip Cream Chargers": elfbar,
  });

  const cartRef = useRef();
  const searchRef = useRef();

  const handleMobileOpenCart = (e) => {
    if (cartRef.current.classList.contains("show")) {
      cartRef.current.classList.remove("show");
      return;
    }
    cartRef.current.classList.add("show");
  };

  const handleOpenCategory = (e, cat) => {
    const categorizedList = listOfProducts.filter(
      ({ product_name, category }) => (category === cat ? product_name : null)
    );
    setShowCategories(!showCategories);
    setCategorizedProducts([...categorizedList]);
  };

  const handleCloseCategory = (e) => {
    setShowCategories(!showCategories);
  };

  return (
    <div className="register">
      <div className="register__cart">
        <Cart shoppingCart={shoppingCart} cartRef={cartRef} />
      </div>
      <div className="register__content">
        <div className="register__toolbar">
          <button className="btn cart-btn" onClick={handleMobileOpenCart}>
            <i className="bi bi-cart-fill" />
          </button>
          {!showCategories && (
            <button
              className="category-back-button"
              onClick={handleCloseCategory}
            >
              {"<< Categories"}
            </button>
          )}
          <div className="register__search">
            <Searchbar
              listOfProducts={listOfProducts}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              searchRef={searchRef}
              addProductToCart={addProductToCart}
            />
          </div>
        </div>
        {!loading && showCategories ? (
          <div className="register__categories">
            {Alphabetize(categoryList, true).map((category, index) => (
              <div
                key={index}
                className="category"
                onClick={(e) => handleOpenCategory(e, category)}
              >
                <img
                  src={categoryImages[category]}
                  className="category__image"
                />
                <div className="category__title">{category}</div>
              </div>
            ))}
          </div>
        ) : loading ? (
          <>Loading...</>
        ) : null}
        {categorizedProducts.length && !showCategories ? (
          <div className="register__products-list">
            <div className="categorized-products">
              {Alphabetize(categorizedProducts).map((product, index) => (
                <ProductCard
                  product={product}
                  index={index}
                  manageCart={addProductToCart}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
