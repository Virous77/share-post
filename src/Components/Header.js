import React, { useState } from "react";
import "./styles/Header.css";

const Header = ({ change, onThemeChange }) => {
  return (
    <header className="header">
      <h1>postIT</h1>
      <div onClick={onThemeChange}>{change ? "LIGHT" : "DARK"}</div>
    </header>
  );
};

export default Header;
