import React from "react";
import Container from "./Components/Container";
import Person from "./Components/Person";

function App() {
  const person = {
    first: "Alif",
    last: "Bin Hossain",
  };
  return (
    <div className="App">
      <Container
        styles={{
          border: "1px solid #eeee",
          margin: "2rem 4rem",
          textAlign: "center",
          minHeight: "50vh",
        }}
      >
        <Person name={person}></Person>
      </Container>
    </div>
  );
}

export default App;
