import "./style.scss";
import React from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { IData } from "../../models/IData";

interface IInput {
  placeholder?: string;
  type: string;
  register: UseFormRegister<IData>;
  name: Path<IData>;
}

export const Input: React.FC<IInput> = ({
  placeholder,
  type,
  register,
  name,
}) => {
  return (
    <div className="container">
      <input
        {...register(name, { required: true })}
        className="input-field"
        placeholder={placeholder}
        type={type}
      ></input>
    </div>
  );
};
