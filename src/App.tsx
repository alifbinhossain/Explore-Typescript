import React from "react";
import Container from "./Components/Container";

function App() {
  return (
    <div className="App">
      <Container
        styles={{
          border: "1px solid #eeee",
          margin: "2rem auto",
          width: "50%",
          padding: "6rem",
        }}
      ></Container>
    </div>
  );
}

export default App;
