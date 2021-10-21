import "./style.scss";
import React from "react";

interface IButton {
  type?: "submit" | "button" | "reset";
  text?: string;
}

export const Button: React.FC<IButton> = ({ type, text }) => {
  return (
    <div className="login-item__button">
      <button type={type} className="button">
        {text}
      </button>
    </div>
  );
};
