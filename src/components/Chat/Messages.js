import React, { useEffect, useContext, useRef, createRef } from "react";
import { Message } from "./Message";
import { messages } from "./localMsgs";
import { InputContext } from "./InputContext";

export const Messages = () => {
  const [input, setInput] = useContext(InputContext);
  useEffect(() => {
    scrollToBottomInstantly();
  }, []);
  useEffect(() => {
    scrollToBottomSmoothly();
  });
  let messagesEnd = useRef();
  const scrollToBottomInstantly = () => {
    messagesEnd.scrollIntoView();
  };
  const scrollToBottomSmoothly = () => {
    messagesEnd.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="messages">
      {messages.map((msg) => (
        <Message
          content={msg.content}
          author={msg.author}
          time={msg.time}
          msgOwner={msg.msgOwner}
          key={msg.msgId}
        />
      ))}
      <div
        style={{ cssFloat: "left", clear: "both" }}
        ref={(el) => {
          messagesEnd = el;
        }}
      ></div>
    </div>
  );
};
