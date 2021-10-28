import "./style.scss";
import React from "react";

interface INoStyleButton {
  path: string;
  onClick: () => void;
}

export const NoStyleButton: React.FC<INoStyleButton> = ({ path, onClick }) => {
  return (
    <div className="no-style-button">
      <button
        className="no-style-button__button"
        style={{
          backgroundImage: `url(${path})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        onClick={onClick}
      />
    </div>
  );
};
