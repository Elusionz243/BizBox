import React, { useRef, useState } from "react";

import "./NavigationBar.scss";
import Icon from "../../../utils/icon/Icon";

export default function NavigationBar({ appNavigations = [] }) {
  const [navigationOpen, setNavigationOpen] = useState(false);

  const navRef = useRef();

  const iconDim = 50;

  const toggleNavigation = (e) => {
    // TODO: add code to toggle the navigation bar
    setNavigationOpen(!navigationOpen);
    if (navRef.current.classList.contains("expand")) {
      navRef.current.classList.remove("expand");
      return;
    }
    navRef.current.classList.add("expand");
  };

  return (
    <div className="navigation-bar" ref={navRef}>
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
          width="24"
          height="24"
          currentColor={"#ffffff"}
          viewBox="2 -1 18 18"
        />
      </button>
    </div>
  );
}
