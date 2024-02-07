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
  shoppingCartTotal,
  setShoppingCartTotal,
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
    // setCategoryList([...]);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText((prev) => (prev = value));
    if (value.length === 0) {
      setSearchResults([]);
      if (searchRef.current.classList.contains("active"))
        searchRef.current.classList.remove("active");
      return;
    }

    searchRef.current.classList.add("active");

    let split = value.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&").split(" ");
    split = split.map((val) => `(?=.*${val})`);

    const regex = new RegExp(split.join(""), "gi");

    let filtered = listOfProducts.filter((product) => {
      const { product_name, variant, category, barcode } = product;
      return barcode.toString().match(regex)
        ? product
        : `${product_name} ${variant} ${category}`.match(regex)
        ? product
        : null;
    });

    setSearchResults([...filtered]);
  };

  return (
    <div className="register-container">
      <div className="register-toolbar-container">
        <button className="btn cart-btn" onClick={handleMobileOpenCart}>
          <i className="bi bi-cart-fill" />
        </button>
        <div className="register-search">
          <i className="bi bi-search" />
          <Searchbar
            handleSearch={handleSearch}
            searchText={searchText}
            searchResults={searchResults}
            searchRef={searchRef}
            addProductToCart={addProductToCart}
          />
        </div>
      </div>
      <div className="register-secondary-container">
        <Cart
          shoppingCart={shoppingCart}
          shoppingCartTotal={shoppingCartTotal}
          cartRef={cartRef}
        />
        {!loading && showCategories ? (
          <div className="register-categories">
            {Alphabetize(categoryList, true).map((category, index) => (
              <div
                key={index}
                className="category"
                onClick={(e) => handleOpenCategory(e, category)}
              >
                <img
                  src={categoryImages[category]}
                  className="category-image"
                />
                <div className="category-title">
                  <h6>{category}</h6>
                </div>
              </div>
            ))}
          </div>
        ) : loading ? (
          <>Loading...</>
        ) : null}
        {categorizedProducts.length && !showCategories ? (
          <div className="categorized-products-container">
            <div className="category-toolbar-container">
              <button
                className="category-back-button"
                onClick={handleCloseCategory}
              >
                {"<< Categories"}
              </button>
            </div>
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
