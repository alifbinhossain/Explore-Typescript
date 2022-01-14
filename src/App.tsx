import React from "react";
import Greetings from "./Components/Greetings";
import Heading from "./Components/Heading";
import Oscar from "./Components/Oscar";
import Status from "./Components/Status";

function App() {
  return (
    <div className="App">
      <Greetings name="Alif" isLoggedIn={true}></Greetings>
      <Status status="success" />
      <Heading>Explore Typescript</Heading>
      <Oscar>
        <Heading>Oscar award goes to Leonardo Di Caprio </Heading>
      </Oscar>
    </div>
  );
}

export default App;
