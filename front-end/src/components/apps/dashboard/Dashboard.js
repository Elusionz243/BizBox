import React from "react";

import "./Dashboard.scss";

import clipboardIcon from "../../../images/icons/clipboard-list-solid.png";
import registerIcon from "../../../images/icons/cash_register_icon.png";
import clockIcon from "../../../images/icons/clock-outline-filled.png";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <a className="dashboard__app" href="/app/inventory">
        <img
          className="dashboard__app-icon"
          alt="Inventory App"
          src={clipboardIcon}
        />
        <h3 className="dashboard__app-title">Inventory</h3>
      </a>

      <a className="dashboard__app" href="/app/register">
        <img
          className="dashboard__app-icon"
          alt="Register App"
          src={registerIcon}
        />
        <h3 className="dashboard__app-title">Register</h3>
      </a>

      <a className="dashboard__app" href="/app/order-history">
        <img
          className="dashboard__app-icon"
          alt="Order History App"
          src={clockIcon}
        />
        <h3 className="dashboard__app-title">Order History</h3>
      </a>

      <a className="dashboard__app" href="/app/label-maker">
        <h3 className="dashboard__app-title">Label Maker</h3>
      </a>

      <a className="dashboard__app" href="/app/price-checker">
        <h3 className="dashboard__app-title">Price Checker</h3>
      </a>

      <a className="dashboard__app" href="/app/reports">
        <h3 className="dashboard__app-title">Reports</h3>
      </a>
    </div>
  );
}
