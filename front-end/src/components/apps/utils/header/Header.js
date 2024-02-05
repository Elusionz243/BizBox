import React from "react";

import "./Header.scss";
export default function Header({ title }) {
  return (
    <header className="header">
      <p className="header__title">{title}</p>
    </header>
  );
}
