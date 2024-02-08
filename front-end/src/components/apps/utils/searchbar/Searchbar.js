import { useState, useRef } from "react";

import "./Searchbar.scss";
import ProductCard from "../productCard/ProductCard";
import Icon from "../../../utils/icon/Icon";

export default function Searchbar({
  listOfProducts,
  searchResults = [],
  setSearchResults,
  searchRef,
  addProductToCart,
  searchingList = false,
}) {
  const [searchText, setSearchText] = useState("");

  let timeout = 0;
  const handleSearch = (e) => {
    let value = e.target.value;
    let tempSearchResults = [];
    setSearchText((prev) => (prev = value));

    if (timeout) clearTimeout(timeout);
    if (value.length === 0) {
      return setSearchResults([]);
    }
    timeout = setTimeout(() => {
      // console.log("30919871".toLowerCase());
      for (let i = 0; i < listOfProducts.length; i++) {
        const { brand, product_name, category, variant, barcode } =
          listOfProducts[i];

        if (product_name.toLowerCase().match(value.toLowerCase())) {
          tempSearchResults.push(listOfProducts[i]);
          continue;
        }
        if (variant.toLowerCase().includes(value.toLowerCase())) {
          tempSearchResults.push(listOfProducts[i]);
          continue;
        }
        if (category.toLowerCase().includes(value.toLowerCase())) {
          tempSearchResults.push(listOfProducts[i]);
          continue;
        }
        if (brand.toLowerCase().includes(value.toLowerCase())) {
          tempSearchResults.push(listOfProducts[i]);
          continue;
        }
        if (barcode.toString().toLowerCase().toString().includes(value)) {
          tempSearchResults.push(listOfProducts[i]);
          continue;
        }
      }
      setSearchResults([...tempSearchResults]);
      clearTimeout(timeout);
    }, 750);
  };

  return (
    <div className="searchbar-container" style={{}}>
      <Icon
        name="magnifying-glass"
        width="32"
        height="32"
        currentColor="#000"
        viewBox="0 0 24 24"
      />
      <input
        type="text"
        className="searchbar"
        placeholder="Search..."
        onChange={handleSearch}
        value={searchText}
      ></input>
      {searchingList && (
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
      )}
    </div>
  );
}
