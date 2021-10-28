import "./style.scss";
import React from "react";
import logo from "./img/logo.svg";

export const Logo: React.FC = () => {
  return <img className="logotip" src={logo} alt="logo" />;
};
