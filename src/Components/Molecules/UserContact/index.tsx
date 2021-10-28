import "./style.scss";
import React from "react";
import { UserAvatar } from "../../Atoms/UserAvatar";
import { Header } from "../../Atoms/Header";
import { Text } from "../../Atoms/Text";

interface IUserContact {
  name: string;
  isLastMessageYour: boolean;
  lastMessage: string;
  hasAvatar: boolean;
  onClick: () => void;
}

export const UserContact: React.FC<IUserContact> = ({
  name,
  isLastMessageYour,
  lastMessage,
  hasAvatar,
  onClick,
}) => {
  if (lastMessage.length > 20) {
    lastMessage = lastMessage.slice(0, 20) + "...";
  }
  if (isLastMessageYour) {
    return (
      <div onClick={onClick} className="contact">
        <div className="contact__avatar">
          <UserAvatar isHas={hasAvatar}></UserAvatar>
        </div>
        <div className="contact__desc">
          <Header number={4}>{name}</Header>
          <Text number={2}>
            <span>You: </span>
            <span>{lastMessage}</span>
          </Text>
        </div>
      </div>
    );
  }
  return (
    <div onClick={onClick} className="contact">
      <div className="contact__avatar">
        <UserAvatar isHas={false}></UserAvatar>
      </div>
      <div className="contact__desc">
        <Header number={4}>{name}</Header>
        <Text number={2}>{lastMessage}</Text>
      </div>
    </div>
  );
};
