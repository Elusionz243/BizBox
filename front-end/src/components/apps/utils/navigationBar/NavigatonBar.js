import React from "react";

import profilePlaceholder from "../../../../images/icons/profile-placeholder.svg";
import homeIcon from "../../../../images/icons/Home.svg";
import hamburgerMenu from "../../../../images/icons/hamburger-menu.svg";

import "./NavigationBar.scss";
import Icon from "../../../utils/icon/Icon";

export default function NavigationBar({ appNavigations = [] }) {
  const iconDim = 50;
  const handleNavigation = (e) => {};
  return (
    <div className="navigation-bar">
      <div className="navigation-bar__links">
        <a className="navigation-bar__link profile-thumbnail" href="#">
          <Icon
            name="user"
            width={iconDim}
            height={iconDim}
            currentColor={"#ffffff"}
            viewBox="-3 0 24 24"
          />
        </a>
        <a className="navigation-bar__link" href="/">
          <Icon
            name="home"
            width={iconDim}
            height={iconDim}
            currentColor={"#ffffff"}
            viewBox="-3 0 24 24"
          />
        </a>
        <a className="navigation-bar__link" href="/apps">
          <Icon
            name="app-grid"
            width={iconDim}
            height={iconDim}
            currentColor={"#ffffff"}
            viewBox="-3 0 24 24"
          />
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
