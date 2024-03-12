import React, { useState, useEffect } from "react";

import "./FormGen.scss";

export default function FormGen({
  formStructure,
  onSubmit,
  formData,
  setFormData,
}) {
  useEffect(() => {
    generateFormData();
  }, []);

  const generateFormData = () => {
    let form = {};
    formStructure.structure.forEach((question) => {
      const { title, options } = question;
      if (options.length > 0) {
        form[title] = options[0];
        return;
      }
      form[title] = "";
    });
    setFormData({ ...form });
  };

  const handleChange = (e) => {
    let key = e.key;
    if (key === "Enter") e.preventDefault();

    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const cancelEnterButton = (e) => {
    let key = e.key;
    if (key === "Enter") return;
  };

  return (
    <div className="form">
      <div className="form__title">{formStructure.title}</div>
      <form className="form__content">
        {formStructure.structure.map(
          ({ type, title, description, options }, index) => {
            return (
              <label key={title} className="form__question">
                <h4>{title}</h4>
                {description ? <p>{description}</p> : null}
                {type === "select" ? (
                  <select
                    name={title}
                    value={formData.value}
                    onChange={handleChange}
                    className="form-select"
                  >
                    {options.map((option, index) => {
                      return <option key={option}>{option}</option>;
                    })}
                  </select>
                ) : (
                  <input
                    name={title}
                    type={type}
                    value={formData.value}
                    onChange={handleChange}
                    className="form-control"
                  />
                )}
              </label>
            );
          }
        )}

        <button className="btn btn-secondary">Cancel</button>
        <button className="btn btn-primary" onClick={(e) => onSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
}
