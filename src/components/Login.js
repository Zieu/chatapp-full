import React, { useContext } from "react";
import { HideLoginContext } from './HideLoginContext';

const Login = () => {
  const [hideLogin, setHideLogin] = useContext(HideLoginContext);
  return (
    <>
      {!hideLogin ? (
        <form className="login">
          <div className="login-inputs">
            <label className="login-label" htmlFor="login-name">
              Enter your name
            </label>
            <input
              className="login-name"
              type="text"
              id="login-name"
              placeholder="This will be your username"
            />
            <input className="login-button" type="button" value="Enter the chat" />
          </div>
        </form>
      ) : null
      }
    </>
  );
};

export default Login;
