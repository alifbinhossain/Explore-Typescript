import React from "react";
import Greetings from "./Components/Greetings";
import Heading from "./Components/Heading";
import Status from "./Components/Status";

function App() {
  return (
    <div className="App">
      <Greetings name="Alif" messageCount={10} isLoggedIn={false}></Greetings>
      <Status status="success" />
      <Heading>Explore Typescript</Heading>
    </div>
  );
}

export default App;
