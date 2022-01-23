import React from "react";
import User from "./Context/User";
import UserContextProvider from "./Context/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
