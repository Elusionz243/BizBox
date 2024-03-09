import React, { useState } from "react";

import FormGen from "../utils/FormGen";

import "./Reports.scss";
export default function Reports({}) {
  const [reports, setReports] = useState([]);
  const [formStructure, setFormStructure] = useState({
    title: "",
    questions: [
      {
        type: "text",
        title: "Purchaser's Name",
        description: "Who placed the order?",
        options: [],
        value: "",
      },
      {
        type: "select",
        title: "Store",
        description: "Select the store the purchase was for.",
        options: [
          "#1 Fredericksburg", 
          "#2 San Pedro", 
          "#3 HWY 151", 
          "#4 Wurzbach", 
          "#5 Shaenfield",
          "#6 Huebner",
          "#8 Potranco",
          "#9 Dominion",
          "#10 Blanco",
          "#11 TPC",
          "#12 Stone Oak",
            ],
        value: "",
      },
      {
        type: "select",
        title: "Vendor",
        description: "Where was the purchase made?",
        options: [
          "Skyco",
          "Texas Wholesale",
          "Amazon",
          "Walmart",
          "Fincks",
          "Medusa",
          "Sam's Club",
          "Unknown",
          "Other",
        ],
        value: "",
      },
      {
        type: "select",
        title: "Expense Type",
        description: "What is the purpose of this purchase?",
        options: [
          "Inventory Restock",
          "Store Supplies & Business Equipment",
          "Snacks and personal care items",
          "Decorations",
          "Maintenance",
          "Rent & Bills",
          "Other",
        ],
        value: "",
      },
      {
        type: "date",
        title: "Date of Purchase",
        description: "When was the purchase made? (Weekend skyco orders must be submitted on the following Monday)",
        options: [],
        value: "",
      },
      {
        type: "select",
        title: "Payment Method",
        description: "How was the purchase paid for?",
        options: [
          "Cash",
          "Credit Card",
          "Debit Card",
          "Check",
          "Plum Amex",
          "Other",
        ],
        value: "",
      },
      {
        type: "text",
        title: "Receipt Total",
        description: "List the payment total on the receipt, including taxes, shipping, etc.",
        options: [],
        value: "",
      },
      {
        type: "text",
        title: "Sales Tax Total",
        description: "How much did we pay in sales tax on this order?",
        options: [],
        value: "",
      },
      {
        type: "file",
        title: "Receipt / Invoice Upload",
        description: "Upload a copy of the receipt or invoice for this purchase.",
        options: [],
        value: "",
      }
    ],
  });
  const [openGroup, setOpenGroup] = useState({
    Finances: false,
    Inventory: false,
    "Human Resources": false,
    "Property Management": false,
    "Tip Calculator": false,
    "Extra Files": false,
  });

  const openCategory = (group) => {
    setOpenGroup({
      ...openGroup,
      [group]: !openGroup[group],
    });
  };
  return (
    <div className="reports">
      <div className="reports__nav">
        <div
          className="reports__button"
          onClick={() => openCategory("Finances")}
        >
          Finances
        </div>
        {openGroup["Finances"] && (
          <div className="reports__group-list">
            <div className="reports__button">Upload Expense Report</div>
            <div className="reports__button">Submitted Expense Reports</div>
          </div>
        )}
        <div
          className="reports__button"
          onClick={() => openCategory("Inventory")}
        >
          Inventory
        </div>
        {openGroup["Inventory"] && (
          <div className="reports__group-list">
            <div className="reports__button">Thrive Product Category Guide</div>
            <div className="reports__button">Product Loss Upload Form</div>
            <div className="reports__button">This Month's Submitted Losses</div>
            <div className="reports__button">Last Month's Submitted Losses</div>
          </div>
        )}
        <div
          className="reports__button"
          onClick={() => openCategory("Human Resources")}
        >
          Human Resources
        </div>
        {openGroup["Human Resources"] && (
          <div className="reports__group-list">
            <div className="reports__button">Training Manuals</div>
            <div className="reports__button">Anonymous Complaint Form</div>
            <div className="reports__button">Employee Write Up Form</div>
            <div className="reports__button">Manager Review Form</div>
            <div className="reports__button">Employee Review Form</div>
            <div className="reports__button">Employee Review Entries</div>
          </div>
        )}
        <div
          className="reports__button"
          onClick={() => openCategory("Property Management")}
        >
          Property Management
        </div>
        {openGroup["Property Management"] && (
          <div className="reports__group-list">
            <div className="reports__button">Maintenance Request Form</div>
            <div className="reports__button">Maintenance Queue</div>
          </div>
        )}
        <div
          className="reports__button"
          onClick={() => openCategory("Extra Files")}
        >
          Extra Files
        </div>
        {openGroup["Extra Files"] && (
          <div className="reports__group-list">
            <div className="reports__button">Simple Tip Calculator</div>
            <div className="reports__button">Hazel Sky Logo Files</div>
          </div>
        )}
      </div>
      <div className="reports__content">
        <FormGen formData={} />
      </div>
    </div>
  );
}
