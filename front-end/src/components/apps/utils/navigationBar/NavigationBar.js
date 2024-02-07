import React, { useRef, useState } from "react";

import "./NavigationBar.scss";
import Icon from "../../../utils/icon/Icon";

export let navWidth = "75px";
export default function NavigationBar({
  navigationOpen,
  toggleNavigation,
  appNavigations = [],
}) {
  const navRef = useRef();
  document.documentElement.style.setProperty("--nav-expanded", navigationOpen);

  const iconDim = 50;

  return (
    <div
      className="navigation-bar"
      style={{ width: `${navigationOpen ? "250px" : "75px"}` }}
    >
      <div className="navigation-bar__links">
        <a className="navigation-bar__link" href="/">
          <Icon
            name="home"
            width={iconDim}
            height={iconDim}
            currentColor={"#ffffff"}
            viewBox="-3 0 24 24"
          />
          {navigationOpen && (
            <div className="navigation-bar__link-label">Home</div>
          )}
        </a>
        <a className="navigation-bar__link" href="/apps">
          <Icon
            name="app-grid"
            width={iconDim}
            height={iconDim}
            currentColor={"#ffffff"}
            viewBox="-3 0 24 24"
          />
          {navigationOpen && (
            <div className="navigation-bar__link-label">Apps</div>
          )}
        </a>
        {appNavigations.map((navigation, index) => (
          <a
            key={index}
            href={navigation.link}
            className="navigation-bar__link"
          >
            <Icon
              name={navigation.icon}
              width={iconDim}
              height={iconDim}
              currentColor={"#ffffff"}
              viewBox="-3 0 24 24"
            />
            {navigationOpen && (
              <div className="navigation-bar__link-label">
                {navigation.title}
              </div>
            )}
          </a>
        ))}
      </div>
      <div className="navigation-bar__extras">
        <p>0.00</p>
        <p>$0.00</p>
      </div>
      <button className="navigation-bar__toggle-btn" onClick={toggleNavigation}>
        <Icon
          name="sm-arrow-right"
          width="25"
          height="25"
          currentColor={"#000"}
          viewBox="5 0 18 18"
        />
      </button>
    </div>
  );
}
