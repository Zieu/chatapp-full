import React from "react";

export const Message = (props) => {
  return (
    <div
      className="message"
      style={
        props.msgOwner
          ? {
              justifyContent: "flex-end",
              padding: "0 30px",
            }
          : null
      }
    >
      <div
        className="message-avatar"
        style={
          props.msgOwner
            ? {
                order: 1,
              }
            : null
        }
      >
        <img src={props.avatar} alt="" />
      </div>
      <div
        className="message-cloud"
        style={
          props.msgOwner
            ? {
                background: "#56638b",
              }
            : null
        }
      >
        <p
          className="message-author"
          style={
            props.msgOwner
              ? {
                  display: "none",
                }
              : null
          }
        >
          {props.author}
        </p>
        <p className="message-content">{props.content}</p>
        <p className="message-time">{props.time}</p>
      </div>
    </div>
  );
};
