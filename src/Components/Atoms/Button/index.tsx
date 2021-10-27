import "./style.scss";
import React from "react";

interface IButton {
  type?: "submit" | "button" | "reset";
  text?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<IButton> = ({ type, text, onClick }) => {
  return (
    <div className="button">
      <button onClick={onClick} type={type} className="button__element">
        {text}
      </button>
    </div>
  );
};
