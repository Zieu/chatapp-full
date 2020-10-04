import React, { useContext } from "react";
import { messages } from "./localMsgs";
import { InputContext } from "./InputContext";
import Moment from "react-moment";
export const MessageInput = (props) => {
  const [input, setInput] = useContext(InputContext);
  const date = new Date();

  function submitHandler(e) {
    e.preventDefault();
    if (input !== "") {
      messages.push({
        author: "ziyo",
        authorId: 1,
        msgId: messages.length + 1,
        content: input,
        avatar: null,
        time: <Moment format="HH:mm">{date}</Moment>,
        msgOwner: true,
      });
    } else return;
    setInput("");
  }


  function inputHandler(e) {
    setInput(e.target.value);
  }


  return (
    <form className="input-msg" style={props.style}>
      <div tabIndex="-1" className="input-msg-emoji">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 0C1.56 0 0 1.56 0 3.5V16.5C0 18.44 1.56 20 3.5 20H14L20 14V3.5C20 1.56 18.44 0 16.5 0H3.5ZM3.75 2H16.25C16.7141 2 17.1592 2.18437 17.4874 2.51256C17.8156 2.84075 18 3.28587 18 3.75V13H16.5C14.56 13 13 14.56 13 16.5V18H3.75C3.28587 18 2.84075 17.8156 2.51256 17.4874C2.18437 17.1592 2 16.7141 2 16.25V3.75C2 3.28587 2.18437 2.84075 2.51256 2.51256C2.84075 2.18437 3.28587 2 3.75 2ZM12.44 4.77C12.28 4.77 12.12 4.79 11.97 4.83C11.03 5.09 10.5 6.05 10.74 7C10.79 7.15 10.86 7.3 10.95 7.44L14.18 6.56C14.18 6.39 14.16 6.22 14.12 6.05C13.91 5.3 13.22 4.77 12.44 4.77ZM6.17 6.5C6 6.5 5.85 6.5 5.7 6.55C4.77 6.81 4.22 7.77 4.47 8.7C4.5 8.86 4.59 9 4.68 9.16L7.91 8.28C7.91 8.11 7.89 7.94 7.85 7.78C7.75217 7.41021 7.53386 7.08359 7.2296 6.85177C6.92534 6.61995 6.55249 6.49617 6.17 6.5ZM14.72 9.26L5.59 11.77C6.23838 12.5203 7.08543 13.0723 8.03367 13.3624C8.98191 13.6525 9.9928 13.669 10.95 13.41C11.9051 13.1428 12.7654 12.6117 13.4323 11.8776C14.0991 11.1435 14.5455 10.2363 14.72 9.26Z"
            fill="white"
          />
        </svg>
      </div>
      <input
        value={input}
        onChange={inputHandler}
        className="input-msg-input"
        type="text"
        placeholder="Write your message here"
      />
      <button className="input-msg-btn" onClick={submitHandler}>
        <svg
          width="13"
          height="13"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5648 5.49953L1.53442 0.98433C1.46364 0.948933 1.38414 0.934751 1.30549 0.94349C1.22684 0.952229 1.15239 0.983517 1.09111 1.03359C1.03258 1.08264 0.988901 1.14704 0.964972 1.21955C0.941043 1.29206 0.937815 1.36981 0.955651 1.44406L2.0434 5.45438H6.68585V6.27533H2.0434L0.939232 10.2733C0.922495 10.3353 0.920542 10.4004 0.933528 10.4633C0.946514 10.5262 0.974078 10.5852 1.014 10.6355C1.05393 10.6858 1.1051 10.726 1.1634 10.7529C1.22171 10.7799 1.28552 10.7927 1.3497 10.7905C1.41396 10.7901 1.47723 10.7747 1.53442 10.7454L10.5648 6.23018C10.6321 6.19573 10.6885 6.1434 10.7279 6.07894C10.7673 6.01448 10.7881 5.9404 10.7881 5.86485C10.7881 5.78931 10.7673 5.71523 10.7279 5.65077C10.6885 5.58631 10.6321 5.53398 10.5648 5.49953Z"
            fill="white"
          />
        </svg>
      </button>
    </form>
  );
};
