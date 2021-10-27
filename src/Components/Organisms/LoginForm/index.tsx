import "./style.scss";
import React from "react";
import { Button } from "../../Atoms/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginPasswordField } from "../../Molecules/LoginPasswordField";
import { LoginUsernameField } from "../../Molecules/LoginUsernameField";
import { IData } from "../../models/IData";

function onClick(event: React.MouseEvent<HTMLButtonElement>) {
  console.log(event.target);
}

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IData>();
  const onSubmit: SubmitHandler<IData> = (data) => console.log(data);
  // console.log(isValid);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="loginForm">
        <div className="loginForm__username">
          <LoginUsernameField register={register} />
          {errors.username && (
            <p className="item__error-text">Something goes wrong</p>
          )}
        </div>
        <div className="loginForm__password">
          <LoginPasswordField register={register} />
          {errors.password && (
            <p className="item__error-text">Something goes wrong</p>
          )}
        </div>
        <Button onClick={onClick} type="submit" text="Log In" />
      </div>
    </form>
  );
};
