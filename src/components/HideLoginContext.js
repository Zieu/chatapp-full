import React, { createContext, useState } from "react";

export const HideLoginContext = createContext();

export const HideLoginProvider = (props) => {
  const [hideLogin, setHideLogin] = useState(false);

  return (
    <HideLoginContext.Provider value={[hideLogin, setHideLogin]}>
      {props.children}
    </HideLoginContext.Provider>
  );
};