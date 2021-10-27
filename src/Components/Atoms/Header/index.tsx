import "./style.scss";
import React from "react";

interface IHeader {
  number: 1 | 2 | 3 | 4;
}

export const Header: React.FC<IHeader> = ({ number, children }) => {
  switch (number) {
    case 1:
      return <h1 className="header-1">{children}</h1>;
    case 2:
      return <h2 className="header-2">{children}</h2>;
    case 3:
      return <h3 className="header-3">{children}</h3>;
    case 4:
      return <h4 className="header-4">{children}</h4>;
  }
};
