import "./style.scss";
import React from "react";
import { Label } from "../../Atoms/Label";
import { Input } from "../../Atoms/input";
import { IData } from "../../models/IData";
import { UseFormRegister } from "react-hook-form";

interface ILoginField {
  register: UseFormRegister<IData>;
}

export const LoginPasswordField: React.FC<ILoginField> = ({ register }) => {
  return (
    <div className="login-item__password">
      <Label value="Password" htmlFor="password" />
      <Input
        name="password"
        type="password"
        placeholder="Input password"
        register={register}
      />
    </div>
  );
};
