import React from "react";

import "./PortalHeader.scss";

export default function PortalHeader({ title }) {
  return (
    <div className="portal-header-container">
      <a href="/" className="logo-container">
        <h1 id="Logo">BizBox</h1>
      </a>
    </div>
  );
}
