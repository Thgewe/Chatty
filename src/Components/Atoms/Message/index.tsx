import "./style.scss";
import React from "react";

interface IMessage {
  sent: boolean;
  file: boolean;
  fileName?: string;
  fileSize?: string;
}

export const Message: React.FC<IMessage> = ({
  sent,
  file,
  children,
  fileName,
  fileSize,
}) => {
  let str: string;
  sent ? (str = "message--sent") : (str = "message--received");
  switch (file) {
    case true:
      return (
        <div className="message">
          <div className={str}>
            <p className="message__file-name">{fileName}</p>
            <p className="message__file-size">{fileSize}</p>
          </div>
        </div>
      );
    case false:
      return (
        <div className="message">
          <div className={str}>
            <p className="message__text">{children}</p>
          </div>
        </div>
      );
  }
};
