import React, { useState } from "react";

import FormGen from "../utils/FormGen";

import "./Reports.scss";
import Icon from "../../utils/icon/Icon";
export default function Reports({}) {
  const expenseReport = {
    title: "Expense Upload Form",
    structure: [
      {
        type: "text",
        title: "Purchaser's Name",
        description: "Who placed the order?",
        options: [],
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
      },
      {
        type: "date",
        title: "Date of Purchase",
        description:
          "When was the purchase made? (Weekend skyco orders must be submitted on the following Monday)",
        options: [],
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
      },
      {
        type: "text",
        title: "Receipt Total",
        description:
          "List the payment total on the receipt, including taxes, shipping, etc.",
        options: [],
      },
      {
        type: "text",
        title: "Sales Tax Total",
        description: "How much did we pay in sales tax on this order?",
        options: [],
      },
      {
        type: "file",
        title: "Receipt / Invoice Upload",
        description:
          "Upload a copy of the receipt or invoice for this purchase.",
        options: [],
      },
    ],
  };

  const initialGroupList = [
    {
      title: "Finances",
      reports: ["Expense Upload Form", "View Submitted Expenses"],
    },
    {
      title: "Inventory",
      reports: [
        "Thrive Product Category Guide",
        "Product Loss Upload Form",
        "This Month's Submitted Losses",
        "Last Month's Submitted Losses",
      ],
    },
    {
      title: "Human Resources",
      reports: [
        "Training Manuals",
        "Anonymous Complaint Form",
        "Employee Write Up Form",
        "Manager Review Form",
        "Employee Review Form",
        "Employee Review Entries",
      ],
    },
    {
      title: "Property Management",
      reports: ["Maintenance Request Form", "Maintenance Queue"],
    },
    {
      title: "Extra Files",
      reports: ["Simple Tip Calculator", "Hazel Sky Logo Files"],
    },
  ];

  const groupListStructure = {
    title: "Create Group",
    structure: [
      {
        type: "text",
        title: "Group Name",
        description: "Enter the name of the group you want to create.",
        options: [],
      },
    ],
  };

  const [groupList, setGroupList] = useState([...initialGroupList]);
  const [reportList, setReportList] = useState([]);
  const [uploadedReports, setUploadedReports] = useState([]);
  const [formStructure, setFormStructure] = useState({});
  const [openGroup, setOpenGroup] = useState();
  const [formData, setFormData] = useState({});

  const openCategory = (index) => {
    setReportList(groupList[index].reports);
  };

  const addGroup = (e) => {
    e.preventDefault();
    setGroupList([
      ...groupList,
      { title: formData["Group Name"], reports: [] },
    ]);
    setFormData({});
  };
  return (
    <div className="reports">
      <div className="reports__nav">
        <div className="reports__nav-buttons">
          <div
            className="reports__add-group"
            onClick={() => setFormStructure({ ...groupListStructure })}
          >
            <div>
              <Icon
                name="plus-circle"
                width={28}
                height={28}
                currentColor={"#fff"}
                viewBox={"0 0 16 16"}
              />
            </div>
            <div className="reports__add-group-text">Add Group</div>
          </div>
        </div>
        {groupList.length > 0 &&
          groupList.map(({ title }, index) => (
            <div
              className="reports__button"
              onClick={() => openCategory(index)}
            >
              {title}
            </div>
          ))}
      </div>
      <div className="reports__content">
        {formStructure.structure && formStructure.structure.length > 0 ? (
          <FormGen
            formStructure={formStructure}
            onSubmit={addGroup}
            formData={formData}
            setFormData={setFormData}
          />
        ) : null}
      </div>
    </div>
  );
}
