import React, { useState, useRef } from "react";

import FormGen from "../utils/FormGen";

import "./Inventory.scss";
import { Alphabetize } from "../utils/sortFunctions";
import Searchbar from "../utils/searchbar/Searchbar";
export default function Inventory({
  loading,
  listOfProducts,
  setListOfProducts,
}) {
  const initialProductForm = {
    product_name: "",
    variant: "",
    barcode: "",
    category: "",
    location: "",
    quantity: "",
    price: "",
    cost: "",
  };

  const formRef = useRef();

  const [productForm, setProductForm] = useState({ ...initialProductForm });

  const [editList, setEditList] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const showForm = () => {
    if (formRef.current.classList.contains("show")) {
      formRef.current.classList.remove("show");
      return;
    }
    formRef.current.classList.add("show");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setProductForm({ ...productForm });
    showForm();
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const key = e.key;

    if (key === "Enter") return;
    if (
      productForm.product_name.length === 0 ||
      productForm.barcode.length === 0 ||
      productForm.location.length === 0
    ) {
      // Show some kind of alert here to let the user know they need to fill out the correct data
      return;
    }
    setListOfProducts([...listOfProducts, productForm]);
    showForm();
    return;
  };

  const handleEditMode = () => {
    if (!editMode)
      setEditList([...(searchResults.length ? searchResults : listOfProducts)]);
    setEditMode(!editMode);
    return;
  };

  const handleChange = (e, index) => {
    let key = e.key;

    if (key === "Enter") {
      return;
    }
    setEditList([
      ...editList,
      (editList[index][e.target.name] = e.target.value),
    ]);
    return;
  };

  const removeProduct = (index) => {
    let tempList = [...editList];
    tempList.splice(index, 1);
    setEditList([...tempList]);
    return;
  };

  const handleInventoryUpdate = () => {
    setListOfProducts([...editList]);
    setEditMode(!editMode);
    return;
  };

  // function searchInventory(searchText) {
  //   // Create an empty results array
  //   const results = [];

  //   // Loop through the inventory list
  //   for (const product of inventoryList) {
  //     // Check if searchText matches barcode, name, variant or category
  //     if (
  //       product.barcode.includes(searchText) ||
  //       product.name.includes(searchText) ||
  //       product.variant.includes(searchText) ||
  //       product.category.includes(searchText)
  //     ) {
  //       // Add matching product to results
  //       results.push(product);
  //     }
  //   }

  //   // Return the results array
  //   return results;
  // }

  let timeout = 0;
  let tempSearchText = "";
  const handleSearch = (e) => {
    tempSearchText = e.target.value;
    if (timeout) {
      clearTimeout(timeout);
    }

    // tempSearchText = value;
    timeout = setTimeout(() => {
      // setSearchText((prev) => (prev = value));
      let split = tempSearchText
        .replace(/[-\/\\^$*+?.()|[\]{}]/g, "")
        .split(" ")
        .map((val) => `(?=.*${val})`);

      let regex = new RegExp(`${split.join("")}`, "gi");
      let filtered = [];
      for (let i = 0; i < listOfProducts.length; i++) {
        const { brand, product_name, category, variant, barcode, vendor } =
          listOfProducts[i];
        if (barcode.toString().match(regex)) {
          filtered.push(listOfProducts[i]);
          continue;
        }
        if (brand.match(regex)) {
          filtered.push(listOfProducts[i]);
          continue;
        }
        if (`${product_name} ${variant} ${category}`.match(regex)) {
          filtered.push(listOfProducts[i]);
        }
      }
      setSearchResults([...filtered]);
      clearTimeout(timeout);
    }, 5000);
    if (tempSearchText === "") {
      setSearchResults([]);
    }
  };

  return (
    <div className="inventory">
      <div className="inventory__toolbar">
        <div className="inventory__toolbar-btns">
          <button onClick={showForm} className="inventory__toolbar-btn">
            Add Product
          </button>
          <button onClick={handleEditMode} className="inventory__toolbar-btn">
            {!editMode ? "Edit" : "Cancel"}
          </button>
          {editMode ? (
            <button
              onClick={handleInventoryUpdate}
              className="inventory__toolbar-btn"
            >
              Save
            </button>
          ) : (
            <></>
          )}
        </div>
        <div className="inventory__toolbar-search">
          <Searchbar
            listOfProducts={listOfProducts}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            searchingList={true}
          />
        </div>
      </div>
      <div className="inventory__table-container">
        {!loading ? (
          <table className="table-container">
            <tr className="table-header">
              <th>Product Name</th>
              <th>Variant</th>
              {editMode && <th>Category</th>}
              <th>Barcode</th>
              <th>Location</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Cost</th>
            </tr>
            {listOfProducts.length === 0 ? (
              <>Couldn't find anything to load...</>
            ) : (
              (searchResults.length > 0
                ? searchResults
                : Alphabetize(listOfProducts)
              ).map(
                (
                  {
                    brand,
                    product_name,
                    variant,
                    barcode,
                    category,
                    location,
                    quantity,
                    price,
                    cost,
                  },
                  index
                ) => (
                  <tr key={index} className="table-data">
                    {!editMode ? (
                      <td className="product-name">
                        <div>{`${
                          brand.length ? `${brand} -` : ""
                        } ${product_name}`}</div>
                        <div className="product-category">{category}</div>
                      </td>
                    ) : (
                      <td>
                        <input
                          type="text"
                          className="product-name"
                          value={product_name}
                          onChange={(e) => handleChange(e, index)}
                          name="product_name"
                        />
                      </td>
                    )}
                    <td>
                      {!editMode ? (
                        variant
                      ) : (
                        <input
                          type="text"
                          className="variant-input"
                          value={variant}
                          onChange={(e) => handleChange(e, index)}
                          name="variant"
                        />
                      )}
                    </td>
                    {editMode && (
                      <td>
                        <input
                          type="text"
                          className="category-input"
                          value={category}
                          onChange={(e) => handleChange(e, index)}
                          name="category"
                        />
                      </td>
                    )}
                    <td>
                      {!editMode ? (
                        barcode
                      ) : (
                        <input
                          type="text"
                          value={barcode}
                          onChange={(e) => handleChange(e, index)}
                          name="barcode"
                          className=""
                        />
                      )}
                    </td>
                    <td>
                      {!editMode ? (
                        location
                      ) : (
                        <input
                          type="text"
                          value={location}
                          onChange={(e) => handleChange(e, index)}
                          name="location"
                          className=""
                        />
                      )}
                    </td>
                    <td>
                      {!editMode ? (
                        quantity
                      ) : (
                        <input
                          type="text"
                          value={quantity}
                          onChange={(e) => handleChange(e, index)}
                          name="quantity"
                          className=""
                        />
                      )}
                    </td>
                    <td>
                      $
                      {!editMode ? (
                        Number(price).toFixed(2)
                      ) : (
                        <input
                          type="text"
                          value={Number(price).toFixed(2)}
                          onChange={(e) => handleChange(e, index)}
                          name="price"
                          className=""
                        />
                      )}
                    </td>
                    <td>
                      {!editMode ? (
                        <input type="text" disabled value={`$${cost}`}></input>
                      ) : (
                        <input
                          type="text"
                          value={Number(cost).toFixed(2)}
                          onChange={(e) => handleChange(e, index)}
                          name="cost"
                          className=""
                        />
                      )}
                    </td>
                    {editMode && (
                      <td>
                        <button
                          onClick={() => removeProduct(index)}
                          className="btn btn-warning"
                        >
                          Delete
                        </button>
                      </td>
                    )}
                  </tr>
                )
              )
            )}
          </table>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      <FormGen
        formData={productForm}
        setFormData={setProductForm}
        formRef={formRef}
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
