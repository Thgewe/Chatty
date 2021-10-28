import "./style.scss";
import React from "react";
import { Logo } from "../../Atoms/Logo";
import { UserProfileButton } from "../../Atoms/UserProfileButton";

export const ChatHeader: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__button">
        <UserProfileButton onClick={() => false} />
      </div>
    </header>
  );
};
