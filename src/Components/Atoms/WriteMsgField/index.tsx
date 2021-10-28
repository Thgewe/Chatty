import "./style.scss";
import React from "react";

interface IWriteMsgField {
  placeholder: string;
  name: string;
}

export const WriteMsgField: React.FC<IWriteMsgField> = ({
  placeholder,
  name,
}) => {
  return (
    <div className="msg-field">
      <input
        type="text"
        className="msg-field__input"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};
