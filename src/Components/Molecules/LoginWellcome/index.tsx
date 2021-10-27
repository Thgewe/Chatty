import "./style.scss";
import React from "react";
import { Logo } from "../../Atoms/Logo";
import { Header } from "../../Atoms/Header";

export const LoginWellcome: React.FC = () => {
  return (
    <div className="login-wellcome">
      <div className="login-wellcome__logo">
        <Logo />
      </div>
      <div className="login-wellcome__header-1">
        <Header number={1}>
          Wellcome to
          <span> Chatty</span>
          <span>!</span>
        </Header>
      </div>
      <div className="login-wellcome__header-2">
        <Header number={2}>Please, autorize yourself</Header>
      </div>
    </div>
  );
};
