import React from "react";

import Icon from "../../../utils/icon/Icon";

import "./Header.scss";
export default function Header({ title }) {
  const iconDim = "35";
  return (
    <header className="header">
      <p className="header__title">{title}</p>
      <a className="header__login" href="#">
        <Icon
          name="user"
          width={iconDim}
          height={iconDim}
          currentColor={"#ffffff"}
          viewBox="-3 0 24 24"
        />
        Login/Signup
      </a>
    </header>
  );
}
