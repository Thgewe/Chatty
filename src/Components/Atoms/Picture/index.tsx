import "./style.scss";
import React from "react";

interface IPicture {
  path: string;
  alt?: string;
}

export const Picture: React.FC<IPicture> = ({ path, alt }) => {
  return <img src={path} alt={alt} />;
};
