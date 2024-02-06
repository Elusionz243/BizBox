import React from "react";

import "./Dashboard.scss";

import Icon from "../../utils/icon/Icon";

export default function Dashboard({ quickLinks }) {
  return (
    <div className="dashboard">
      <div className="dashboard__apps">
        <a className="dashboard__app" href="/app/inventory">
          <Icon
            name="clipboard"
            width="100"
            height="100"
            currentColor="#000"
            viewBox="-6 0 28 28"
          />
          <h3 className="dashboard__app-title">Inventory</h3>
        </a>

        <a className="dashboard__app" href="/app/register">
          <Icon
            name="cart"
            width="100"
            height="100"
            currentColor="#000"
            viewBox="-6 0 28 28"
          />
          <h3 className="dashboard__app-title">Register</h3>
        </a>

        <a className="dashboard__app" href="/app/order-history">
          <Icon
            name="clock"
            width="100"
            height="100"
            currentColor="#000"
            viewBox="-4 0 24 24"
          />
          <h3 className="dashboard__app-title">Order History</h3>
        </a>

        <a className="dashboard__app" href="/app/label-maker">
          <Icon
            name="barcode"
            width="100"
            height="100"
            currentColor="#000"
            viewBox="-4 0 24 24"
          />
          <h3 className="dashboard__app-title">Label Maker</h3>
        </a>

        <a className="dashboard__app" href="/app/price-checker">
          <Icon
            name="price-tag"
            width="100"
            height="100"
            currentColor="#000"
            viewBox="-4 0 24 24"
          />
          <h3 className="dashboard__app-title">Price Checker</h3>
        </a>

        <a className="dashboard__app" href="/app/reports">
          <Icon
            name="file"
            width="100"
            height="100"
            currentColor="#000"
            viewBox="-4 0 24 24"
          />
          <h3 className="dashboard__app-title">Reports</h3>
        </a>
      </div>
    </div>
  );
}
