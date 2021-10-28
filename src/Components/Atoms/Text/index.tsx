import "./style.scss";
import React from "react";

interface IText {
  number: 1 | 2;
}

export const Text: React.FC<IText> = ({ children, number }) => {
  switch (number) {
    case 1:
      return <p className="paragraph-1">{children}</p>;
    case 2:
      return <p className="paragraph-2">{children}</p>;
  }
};
