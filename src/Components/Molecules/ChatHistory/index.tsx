import "./style.scss";
import React from "react";
import { Message } from "../../Atoms/Message";

const msgArray = [
  {
    id: 1,
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem reiciendis, similique magni consequatur doloribus itaque. Accusantium quia laboriosam eveniet maxime a quo modi? Dignissimos sunt temporibus dolor porro iusto aspernatur modi ad eveniet quis vel deleniti illum quos, nesciunt repellat optio, alias minus recusandae ipsum hic iure non voluptates!",
    sent: true,
    file: false,
  },
  {
    id: 2,
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem reiciendis, similique magni consequatur doloribus itaque. Accusantium quia laboriosam eveniet maxime a quo modi? Dignissimos sunt temporibus dolor porro iusto aspernatur modi ad eveniet quis vel deleniti illum quos, nesciunt repellat optio, alias minus recusandae ipsum hic iure non voluptates!",
    sent: true,
    file: false,
  },
  {
    id: 3,
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem reiciendis, similique magni consequatur doloribus itaque. Accusantium quia laboriosam eveniet maxime a quo modi? Dignissimos sunt temporibus dolor porro iusto aspernatur modi ad eveniet quis vel deleniti illum quos, nesciunt repellat optio, alias minus recusandae ipsum hic iure non voluptates!",
    sent: false,
    file: false,
  },
  {
    id: 3,
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem reiciendis, similique magni consequatur doloribus itaque. Accusantium quia laboriosam eveniet maxime a quo modi? Dignissimos sunt temporibus dolor porro iusto aspernatur modi ad eveniet quis vel deleniti illum quos, nesciunt repellat optio, alias minus recusandae ipsum hic iure non voluptates!",
    sent: false,
    file: false,
  },
  {
    id: 3,
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem reiciendis, similique magni consequatur doloribus itaque. Accusantium quia laboriosam eveniet maxime a quo modi? Dignissimos sunt temporibus dolor porro iusto aspernatur modi ad eveniet quis vel deleniti illum quos, nesciunt repellat optio, alias minus recusandae ipsum hic iure non voluptates!",
    sent: true,
    file: false,
  },
];

let htmlClass: string;

export const ChatHistory: React.FC = () => {
  const mappedArray = msgArray.map((msg) => {
    if (msg.sent) {
      htmlClass = "history__message-sent";
    } else {
      htmlClass = "history__message-received";
    }
    return (
      <div key={msg.id} className={htmlClass}>
        <Message sent={msg.sent} file={msg.file}>
          {msg.value}
        </Message>
      </div>
    );
  });
  return <div className="history">{mappedArray}</div>;
};
