import "./style.scss";
import React from "react";
import male from "./img/male.svg";
import female from "./img/female.svg";

interface IUserAvatar {
  isHas: boolean;
  path?: string;
  gender?: "male" | "female";
}

export const UserAvatar: React.FC<IUserAvatar> = ({ isHas, path, gender }) => {
  if (isHas) {
    return (
      <div className="avatar">
        <img src={path} alt="User Avatar" className="avatar__img" />
      </div>
    );
  }
  let avatar: string;
  gender === "female" ? (avatar = female) : (avatar = male);
  return (
    <div className="avatar">
      <img src={avatar} alt="Default avatar" className="avatar__img" />
    </div>
  );
};
