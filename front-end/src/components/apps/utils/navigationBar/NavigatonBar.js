import React from "react";

import profilePlaceholder from "../../../../images/icons/profile-placeholder.svg";
import homeIcon from "../../../../images/icons/Home.svg";
import hamburgerMenu from "../../../../images/icons/hamburger-menu.svg";

import "./NavigationBar.scss";

export default function NavigationBar({ appNavigations = [] }) {
  const handleNavigation = (e) => {};
  return (
    <div className="navigation-bar">
      <div className="navigation-bar__links">
        <a className="navigation-bar__link profile-thumbnail" href="#">
          <img src={profilePlaceholder} alt="Profile picture placeholder" />
        </a>
        <a className="navigation-bar__link" href="/">
          <img src={homeIcon} alt="Home Icon" />
        </a>
        <a className="navigation-bar__link" href="/apps">
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
