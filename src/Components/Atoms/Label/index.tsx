import "./style.scss";
import React from "react";

interface ILabel {
  value: string;
  htmlFor: string;
}

export const Label: React.FC<ILabel> = ({ value, htmlFor }) => {
  return <label htmlFor={htmlFor}>{value}</label>;
};
