import React from "react";

import "./Dashboard.css";
import PortalHeader from "../header/PortalHeader";

import clipboardIcon from "../../images/icons/clipboard-list-solid.png";
import registerIcon from "../../images/icons/cash_register_icon.png";
import clockIcon from "../../images/icons/clock-outline-filled.png";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <a className="dashboard-app" href="/app/inventory">
        <img className="dashboard-app-icon" src={clipboardIcon} />
        <h3 className="dashboard-app-title">Inventory</h3>
      </a>

      <a className="dashboard-app" href="/app/register">
        <img className="dashboard-app-icon" src={registerIcon} />
        <h3 className="dashboard-app-title">Register</h3>
      </a>

      <a className="dashboard-app" href="/app/order-history">
        <img className="dashboard-app-icon" src={clockIcon} />
        <h3 className="dashboard-app-title">Order History</h3>
      </a>

      <a className="dashboard-app" href="/app/label-maker">
        <h3 className="dashboard-app-title">Label Maker</h3>
      </a>

      <a className="dashboard-app" href="/app/price-checker">
        <h3 className="dashboard-app-title">Price Checker</h3>
      </a>

      <a className="dashboard-app" href="/app/reports">
        <h3 className="dashboard-app-title">Reports</h3>
      </a>
    </div>
  );
}
