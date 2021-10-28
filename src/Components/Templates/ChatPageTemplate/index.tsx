import "./style.scss";
import React from "react";
import { ChatHeader } from "../../Molecules/ChatHeader";
import { ChatUserList } from "../../Organisms/ChatUserList";
import { ChatMsgSend } from "../../Molecules/ChatMsgSend";
import { ChatFieldHeader } from "../../Molecules/ChatFieldHeader";
import { ChatHistory } from "../../Molecules/ChatHistory";

export const ChatPageTemplate: React.FC = () => {
  return (
    <div className="chat">
      <div className="chat__wrapper">
        <div className="chat__header">
          <ChatHeader />
        </div>
        <div className="bottom">
          <div className="bottom__list">
            <ChatUserList />
          </div>
          <div className="bottom__diolog">
            <div className="diolog__hat">
              <ChatFieldHeader
                username="Jane Doe"
                time="3 minutes"
                isOnline={false}
              />
            </div>
            <div className="diolog__history">
              <ChatHistory />
            </div>
            <div className="diolog__input">
              <ChatMsgSend />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
