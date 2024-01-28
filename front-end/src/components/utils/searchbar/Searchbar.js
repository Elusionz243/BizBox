import { useState, useRef } from "react";

import "./Searchbar.scss";
import ProductCard from "../productCard/ProductCard";

export default function Searchbar({
  handleSearch,
  searchText,
  searchResults = [],
  searchRef,
  addProductToCart,
}) {
  return (
    <div className="searchbar-container">
      <input
        type="text"
        className="searchbar"
        placeholder="Search..."
        onChange={handleSearch}
        value={searchText}
      ></input>
      <div ref={searchRef} className="search-results">
        {searchResults.map((result, index) => (
          <div key={index}>
            <ProductCard
              product={result}
              index={index}
              manageCart={addProductToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
