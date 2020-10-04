import React from "react";
import Login from "./components/Login";
import Chat from "./components/Chat/Chat";
import { HideLoginProvider } from "./components/HideLoginContext";

function App() {
  return (
    <div className="App">
      <HideLoginProvider>
        <Login />
        <Chat />
      </HideLoginProvider>
    </div>
  );
}

export default App;
