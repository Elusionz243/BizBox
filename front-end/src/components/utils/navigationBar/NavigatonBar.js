import React from "react";

import profilePlaceholder from "../../../images/icons/profile-placeholder.svg";
import homeIcon from "../../../images/icons/Home.svg";
import hamburgerMenu from "../../../images/icons/hamburger-menu.svg";

import "./NavigationBar.css";

export default function NavigationBar({ appNavigations = [] }) {
  const handleNavigation = (e) => {};
  return (
    <div className="navigation-bar-container">
      <div className="navigation-link-container">
        <a className="navigation-link profile-thumbnail" href="#">
          <img src={profilePlaceholder} alt="Profile picture placeholder" />
        </a>
        <a className="navigation-link" href="/">
          <img src={homeIcon} alt="Home Icon" />
        </a>
        <a className="navigation-link" href="#">
          <img src={hamburgerMenu} alt="Hamburger menu button" />
        </a>
        {appNavigations.map((navigation, index) => (
          <button onClick={handleNavigation} key={index}>
            {navigation}
          </button>
        ))}
      </div>
      <div className="profile-stats">
        <p>0.00</p>
        <p>$0.00</p>
      </div>
    </div>
  );
}
