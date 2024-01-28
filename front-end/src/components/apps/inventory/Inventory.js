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

  const handleSearch = (e) => {
    let value = e.target.value;
    setSearchText((prev) => (prev = value));
    if (value.length === 0) {
      setSearchResults([]);
    }

    let split = value
      .replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
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
  };

  return (
    <div className="inv-container">
      <div className="inv-header">
        <div className="app-title">INVENTORY</div>
        <div className="inv-search">
          <i className="bi bi-search" />
          <Searchbar handleSearch={handleSearch} searchText={searchText} />
        </div>
        <div className="toolbar-buttons">
          <button onClick={showForm} className="inv-btns">
            Add Product
          </button>
          <button onClick={handleEditMode} className="inv-btns">
            {!editMode ? "Edit" : "Cancel"}
          </button>
          {editMode ? (
            <button onClick={handleInventoryUpdate} className="inv-btns">
              Save
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
      {!loading ? (
        <div className="inv-sub-container">
          <table className="table-container">
            {!editMode ? (
              <tr className="table-header">
                <th>Product Name</th>
                <th>Variant</th>
                <th>Barcode</th>
                <th>Location</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Cost</th>
              </tr>
            ) : (
              <tr className="table-header">
                <th>Product Name</th>
                <th>Variant</th>
                <th>Category</th>
                <th>Barcode</th>
                <th>Location</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Cost</th>
              </tr>
            )}
            {listOfProducts.length === 0 ? (
              <>Couldn't find anything to load...</>
            ) : !editMode ? (
              (searchResults.length > 0
                ? searchResults
                : Alphabetize(listOfProducts)
              ).map(
                (
                  {
                    brand,
                    product_name,
                    vendor,
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
                    <td className="product-name">
                      <div>{`${
                        brand.length ? `${brand} -` : ""
                      } ${product_name}`}</div>
                      <div className="product-category">{category}</div>
                    </td>
                    <td>{variant}</td>
                    <td>{barcode}</td>
                    <td>{location}</td>
                    <td>{quantity}</td>
                    <td>${Number(price).toFixed(2)}</td>
                    <td>
                      <input type="text" disabled value={`$${cost}`}></input>
                    </td>
                  </tr>
                )
              )
            ) : (
              editList.map(
                (
                  {
                    product_name,
                    variant,
                    category,
                    barcode,
                    location,
                    quantity,
                    price,
                    cost,
                  },
                  index
                ) => (
                  <tr key={index} className="table-data">
                    <td>
                      <input
                        type="text"
                        className="product-name"
                        value={product_name}
                        onChange={(e) => handleChange(e, index)}
                        name="product_name"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="variant-input"
                        value={variant}
                        onChange={(e) => handleChange(e, index)}
                        name="variant"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="category-input"
                        value={category}
                        onChange={(e) => handleChange(e, index)}
                        name="category"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={barcode}
                        onChange={(e) => handleChange(e, index)}
                        name="barcode"
                        className=""
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => handleChange(e, index)}
                        name="location"
                        className=""
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={quantity}
                        onChange={(e) => handleChange(e, index)}
                        name="quantity"
                        className=""
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={Number(price).toFixed(2)}
                        onChange={(e) => handleChange(e, index)}
                        name="price"
                        className=""
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={Number(cost).toFixed(2)}
                        onChange={(e) => handleChange(e, index)}
                        name="cost"
                        className=""
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => removeProduct(index)}
                        className="btn btn-warning"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )
            )}
          </table>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
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
