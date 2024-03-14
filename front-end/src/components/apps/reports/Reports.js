import React, { useState } from "react";

import FormGen from "../utils/FormGen";

import "./Reports.scss";
import Icon from "../../utils/icon/Icon";
import reportBuilderStructure from "../../../utils/reportBuilder.json";

export default function Reports({}) {
  const reportBuilder = reportBuilderStructure[0];
  const expenseReport = reportBuilderStructure[1];
  const groupStructure = reportBuilderStructure[2];
  const initialGroupList = [
    {
      title: "Finances",
      reports: [
        { title: "Expense Upload Form", structure: [expenseReport] },
        { title: "View Submitted Expenses", structure: [] },
      ],
    },
    {
      title: "Inventory",
      reports: [
        { title: "Thrive Product Category Guide", structure: [] },
        { title: "Product Loss Upload Form", structure: [] },
        { title: "This Month's Submitted Losses", structure: [] },
        { title: "Last Month's Submitted Losses", structure: [] },
      ],
    },
    {
      title: "Human Resources",
      reports: [
        { title: "Training Manuals", structure: [] },
        { title: "Anonymous Complaint Form", structure: [] },
        { title: "Employee Write Up Form", structure: [] },
        { title: "Manager Review Form", structure: [] },
        { title: "Employee Review Form", structure: [] },
        { title: "Employee Review Entries", structure: [] },
      ],
    },
    {
      title: "Property Management",
      reports: [
        { title: "Maintenance Request Form", structure: [] },
        { title: "Maintenance Queue", structure: [] },
      ],
    },
    {
      title: "Extra Files",
      reports: [
        { title: "Simple Tip Calculator", structure: [] },
        { title: "Hazel Sky Logo Files", structure: [] },
      ],
    },
  ];

  const [groupList, setGroupList] = useState([...initialGroupList]);
  const [reportList, setReportList] = useState([]);
  const [uploadedReports, setUploadedReports] = useState([]);

  const [formStructure, setFormStructure] = useState({});
  const [formData, setFormData] = useState({});

  const [showGroupList, setShowGroupList] = useState(true);

  const openCategory = (index) => {
    setReportList(groupList[index].reports);
    setShowGroupList(!showGroupList);
  };

  const openReport = (structure) => {
    if (!structure) return;
    setFormStructure({ ...structure[0] });
    // setShowGroupList(!showGroupList);
  };

  const addGroup = (e) => {
    e.preventDefault();
    setGroupList([
      ...groupList,
      { title: formData["Group Name"], reports: [] },
    ]);
    setFormData({});
  };

  const openReportBuilder = () => {
    setFormStructure({ ...reportBuilder });
    // setFormData({});
  };
  return (
    <div className="reports">
      <div className="reports-nav">
        <div className="reports-nav__buttons">
          <div
            className="reports-nav__add-group"
            onClick={() =>
              showGroupList
                ? setFormStructure({ ...groupStructure })
                : openReportBuilder()
            }
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
            <div className="reports-nav__add-group-text">
              {showGroupList ? "Add Group" : "Add Report"}
            </div>
          </div>
        </div>
        {!showGroupList && (
          <div
            className="reports-nav__button"
            onClick={(e) => setShowGroupList(!showGroupList)}
          >
            Back
          </div>
        )}
        {showGroupList && groupList.length > 0
          ? groupList.map(({ title }, index) => (
              <div
                className="reports-nav__button"
                onClick={() => openCategory(index)}
              >
                {title}
              </div>
            ))
          : reportList.length > 0 &&
            reportList.map(({ title, structure }) => (
              <div
                className="reports-nav__button"
                onClick={(e) => openReport(structure)}
              >
                {title}
              </div>
            ))}
      </div>
      <div className="reports-content">
        {formStructure.structure && formStructure.structure.length > 0 ? (
          <FormGen
            formStructure={formStructure}
            onSubmit={addGroup}
            formData={formData}
            setFormData={setFormData}
          />
        ) : (
          <div className="reports-content__dashboard">
            <div className="reports-content__dashboard-title">Reports</div>
          </div>
        )}
      </div>
    </div>
  );
}
