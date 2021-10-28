import "./style.scss";
import React from "react";
import { NoStyleButton } from "../../Atoms/NoStyleButton";
import filePic from "./img/fileadd.svg";
import sendPic from "./img/send.svg";
import { WriteMsgField } from "../../Atoms/WriteMsgField";

export const ChatMsgSend: React.FC = () => {
  return (
    <div className="msg-send">
      <div className="msg-send__add-file">
        <NoStyleButton onClick={() => false} path={filePic} />
      </div>
      <div className="msg-send__msg-field">
        <WriteMsgField placeholder="Write something..." name="sentMsg" />
      </div>
      <div className="msg-send__send">
        <NoStyleButton onClick={() => false} path={sendPic} />
      </div>
    </div>
  );
};
