import "./style.scss";
import React from "react";

interface IUserProfileButton {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const UserProfileButton: React.FC<IUserProfileButton> = ({
  onClick,
}) => {
  return (
    <div className="profile">
      <button className="profile__button" onClick={onClick} />
    </div>
  );
};
