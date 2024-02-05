import React from "react";

import NavigationBar from "../utils/navigationBar/NavigationBar";

import "./Dashboard.scss";

import Icon from "../../utils/icon/Icon";

export default function Dashboard({ quickLinks }) {
  const appQuickLinks = [
    {
      title: "Inventory",
      icon: "clipboard",
      link: "/app/inventory",
    },
    {
      title: "Register",
      icon: "cart",
      link: "/app/register",
    },
    {
      title: "Order History",
      icon: "clock",
      link: "/app/order-history",
    },
    {
      title: "Price Checker",
      icon: "dollar-sign",
      link: "/app/price-checker",
    },
    {
      title: "Label Maker",
      icon: "barcode",
      link: "/app/label-maker",
    },
    {
      title: "Reports",
      icon: "file",
      link: "/app/reports",
    },
  ];

  return (
    <div className="dashboard">
      <NavigationBar appNavigations={quickLinks} />
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
