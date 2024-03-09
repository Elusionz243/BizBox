import React from "react";

import "./FormGen.scss";

export default function FormGen({
  formData,
  setFormData,
  formRef,
  handleCancel,
  handleSubmit,
}) {
  const handleChange = (e) => {
    let key = e.key;

    if (key === "Enter") {
      e.preventDefault();
      return;
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const cancelEnterButton = (e) => {
    let key = e.key;
    if (key === "Enter") return;
  };

  return (
    <div className="card form-container" ref={formRef}>
      <div className="card-header form-header">Add Product</div>
      <form className="form-control card-body form-body">
        <label>
          {formData.title}
          <input
            type="text"
            name="productName"
            value={formData.value}
            onKeyDown={cancelEnterButton}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        {/* <label>
          Variant:
          <input
            type="text"
            name="variant"
            value={formData.variant}
            onKeyDown={cancelEnterButton}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onKeyDown={cancelEnterButton}
            onChange={handleChange}
            placeholder="Vape Disposable"
            className="form-control"
          />
        </label>
        <label>
          Barcode/SKU:
          <input
            type="text"
            name="barcode"
            value={formData.barcode}
            onKeyDown={cancelEnterButton}
            onChange={handleChange}
            placeholder="00000000"
            className="form-control"
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onKeyDown={cancelEnterButton}
            onChange={handleChange}
            placeholder="Hazel Sky Smoke Shop"
            className="form-control"
          />
        </label>
        <label>
          Quantity:
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onKeyDown={cancelEnterButton}
            onChange={handleChange}
            placeholder="0"
            className="form-control"
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onKeyDown={cancelEnterButton}
            onChange={handleChange}
            placeholder="0.00"
            className="form-control"
          />
        </label>
        <label>
          Cost:
          <input
            type="text"
            name="cost"
            value={formData.cost}
            onKeyDown={cancelEnterButton}
            onChange={handleChange}
            placeholder="0.00"
            className="form-control"
          />
        </label> */}
        <button onClick={handleCancel} className="btn btn-secondary">
          Cancel
        </button>
        <button onSubmit={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
