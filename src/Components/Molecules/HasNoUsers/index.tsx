import "./style.scss";
import React from "react";
import { Picture } from "../../Atoms/Picture";
import pic from "./img/noUsers.svg";

export const HasNoUsers: React.FC = () => {
  return (
    <div className="no-users">
      <div className="no-users__pic">
        <Picture path={pic} />
      </div>
      <p className="no-users__text">There is no other users yet</p>
    </div>
  );
};
