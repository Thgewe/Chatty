import "./style.scss";
import React from "react";
import { Label } from "../../Atoms/Label";
import { Input } from "../../Atoms/input";
import { IData } from "../../models/IData";
import { UseFormRegister } from "react-hook-form";

interface IUsernameField {
  register: UseFormRegister<IData>;
}

export const LoginUsernameField: React.FC<IUsernameField> = ({ register }) => {
  return (
    <div className="login-username-field">
      <Label value="User name" htmlFor="username" />
      <Input
        name="username"
        type="text"
        placeholder="Input user name"
        register={register}
      />
    </div>
  );
};
