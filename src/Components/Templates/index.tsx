import "./style.scss";
import React from "react";
import { Picture } from "../Atoms/Picture";
import { LoginForm } from "../Organisms/LoginForm";
import { LoginWellcome } from "../Molecules/LoginWellcome";
import pic from "./img/right-pic.svg";

export const LoginPageTemplate: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="left-side">
        <LoginWellcome />
        <LoginForm />
      </div>
      <div className="right-side">
        <Picture path={pic}></Picture>
      </div>
    </div>
  );
};
