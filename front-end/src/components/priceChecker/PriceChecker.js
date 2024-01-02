import React, { useState } from "react";

import PortalHeader from "../header/PortalHeader";
import Searchbar from "../utils/searchbar/Searchbar";

export default function PriceChecker({ listOfProducts }) {
  const [itemPrice, setItemPrice] = useState(0);
  const [itemName, setItemName] = useState("");
  const [itemBarcode, setItemBarcode] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    let value = e.target.value;
    const foundItem = listOfProducts.filter((product) =>
      product.productName.includes(value)
    );
    if (foundItem) {
      setItemName(foundItem.productName);
      setItemPrice(foundItem.price);
      setItemBarcode(foundItem.barcode);
    } else {
      setItemPrice(0);
      setItemBarcode("");
    }
  };

  return (
    <div className="price-checker">
      <Searchbar handleSearch={handleSearch} searchText={searchText} />
      <h1>Item Name: {itemName}</h1>
      <h3>Barcode: {itemBarcode}</h3>
      <h2>Price: {itemPrice}</h2>
    </div>
  );
}
