import "./style.scss";
import React from "react";

interface IText {
  value: string;
  number: 1 | 2;
}

export const Text: React.FC<IText> = ({ value, number }) => {
  switch (number) {
    case 1:
      return <p className="paragraph-1">{value}</p>;
    case 2:
      return <p className="paragraph-2">{value}</p>;
  }
};
