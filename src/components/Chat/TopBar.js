import React, { useContext } from "react";
import { HideLoginContext } from '../HideLoginContext';
export const TopBar = () => {
  const [hideLogin, setHideLogin] = useContext(HideLoginContext);
  const collapse = () => {
    setHideLogin(!hideLogin);
  };

  return (
    <div className="topbar">
      <div className="topbar-back" onClick={collapse}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M15 19.1667L5.83337 10.4167L15 1.66666"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <span className="topbar-label">Chat</span>
    </div>
  );
};
