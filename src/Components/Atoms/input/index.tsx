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
    <div className="input">
      <input
        {...register(name, { required: true, minLength: 3 })}
        className="input__field"
        placeholder={placeholder}
        type={type}
      ></input>
    </div>
  );
};
