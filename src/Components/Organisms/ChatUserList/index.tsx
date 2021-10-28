import "./style.scss";
import React from "react";
import { UserContact } from "../../Molecules/UserContact";
import { HasNoUsers } from "../../Molecules/HasNoUsers";

const arrayOfUsers = [
  {
    id: 123,
    username: "Konstantin Konstantinopolski",
    lastMessage: "Hey!",
    hasAvatar: false,
    isLastMessageYour: false,
  },
  {
    id: 1234,
    username: "Marina Joe",
    lastMessage:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanti",
    hasAvatar: false,
    isLastMessageYour: true,
  },
  {
    id: 12345,
    username: "Ernest Gillroy",
    lastMessage: "How are you doing?",
    hasAvatar: false,
    isLastMessageYour: true,
  },
  {
    id: 123456,
    username: "Konstantin Konstantinopolski",
    lastMessage: "Hey!",
    hasAvatar: false,
    isLastMessageYour: false,
  },
];

export const ChatUserList: React.FC = () => {
  if (arrayOfUsers.length === 0) {
    return (
      <div className="chat-user-list--void">
        <HasNoUsers />
      </div>
    );
  }
  const array = arrayOfUsers.map((user) => {
    return (
      <UserContact
        key={user.id}
        name={user.username}
        isLastMessageYour={user.isLastMessageYour}
        lastMessage={user.lastMessage}
        hasAvatar={user.hasAvatar}
        onClick={() => false}
      />
    );
  });
  return <div className="chat-user-list">{array}</div>;
};
