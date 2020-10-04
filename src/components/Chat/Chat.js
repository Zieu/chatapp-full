import React, { useContext } from "react";
import { TopBar } from "./TopBar";
import { Messages } from "./Messages";
import { MessageInput } from "./MessageInput";
import { InputProvider } from "./InputContext";
import { HideLoginContext } from '../HideLoginContext';
const Chat = () => {
  const [hideLogin, setHideLogin] = useContext(HideLoginContext);

  return (
    <InputProvider>
      <div className="chat" style={
        hideLogin ? {
          width: "100%",
        } : null
      }>
        <TopBar />
        <Messages />
        <MessageInput style={
          hideLogin ? {
            width: "95vw",
            left: "50%",
            transform: "translateX(-50%)"
          } : null
        } />
      </div>
      <div className="bottom-bar"></div>
    </InputProvider>
  );
};

export default Chat;
