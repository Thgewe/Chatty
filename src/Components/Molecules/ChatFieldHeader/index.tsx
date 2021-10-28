import "./style.scss";
import React from "react";
import { Header } from "../../Atoms/Header";
import { Text } from "../../Atoms/Text";

interface IChatFieldHeader {
  username: string;
  time: string;
  isOnline: boolean;
}

export const ChatFieldHeader: React.FC<IChatFieldHeader> = ({
  username,
  time,
  isOnline,
}) => {
  isOnline ? (time = "Online") : (time = "Last seen " + time + " ago");
  return (
    <div className="chat-field-header">
      <div className="chat-field-header__name">
        <Header number={3}>{username}</Header>
      </div>
      <div className="chat-field-header__time">
        <Text number={1}>{time}</Text>
      </div>
    </div>
  );
};
