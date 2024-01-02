import React from "react";

import "./PortalHeader.css";

import HazelSkyLogo from "../../images/HazelSkyLogo.png";

export default function PortalHeader({ title}) {
  return (
    <div className="portal-header-container">
      <a href="/" className="logo-container">
        <img
          src={HazelSkyLogo}
          alt="Hazel Sky Smoke Shop Logo"
          id="HazelSkyLogo"
        />
      </a>
    </div>
  );
}
