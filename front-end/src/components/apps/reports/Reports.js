import React, { useState } from "react";

import FormGen from "../utils/FormGen";

import "./Reports.scss";
export default function Reports({}) {
  const [reports, setReports] = useState([]);
  const [reportData, setReportData] = useState([]);
  const [expenseForm, setExpenseForm] = useState({
    "Purchaser's Name": "",
    "Store": "",
    "Vendor": "",
    "Date of Purchase": "",
    "Invoice / Receipt Upload": "",
    "Type of Purchase": "",
    "Receipt Total": "",
    "Leave a note": "",
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
        <FormGen />
      </div>
    </div>
  );
}
