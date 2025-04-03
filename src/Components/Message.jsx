import React from "react";
import { auth } from "../Firebase";

const style = {
  messageContainer: `flex m-4`, 
  messageBox: `px-4 py-2 rounded-tl-full rounded-tr-full w-fit`, 
  name: `text-gray-600 text-xs mb-1 block`, 
  sent: `bg-[#395dff] text-white self-end text-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black self-start rounded-br-full`,
};

const Message = ({ message }) => {
  const isSentByUser = message.uid === auth.currentUser.uid;

  return (
    <div className={`${style.messageContainer} ${isSentByUser ? "justify-end" : "justify-start"}`}>
      <div className={`${style.messageBox} ${isSentByUser ? style.sent : style.received}`}>
        <p className={style.name}>{message.name}</p> 
        <p>{message.text}</p> 
      </div>
    </div>
  );
};

export default Message;
