import "./style.scss";
import React from "react";
import { Button } from "../../Atoms/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginPasswordField } from "../../Molecules/LoginPasswordField";
import { LoginUsernameField } from "../../Molecules/LoginUsernameField";

export interface IData {
  username: string;
  password: string;
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IData>();
  const onSubmit: SubmitHandler<IData> = (data) => console.log(data);
  console.log(isValid);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="LoginForm">
        <LoginUsernameField register={register} />
        {errors.username && (
          <p className="login-item__error-text">Something goes wrong</p>
        )}
        <LoginPasswordField register={register} />
        {errors.password && (
          <p className="login-item__error-text">Something goes wrong</p>
        )}
        <Button type="submit" text="Log In" />
      </div>
    </form>
  );
}

export default LoginForm;
