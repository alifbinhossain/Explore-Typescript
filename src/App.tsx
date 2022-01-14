import React from "react";
import Button from "./Components/Button";
import Input from "./Components/Input";

function App() {
  const handleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.target);
  };

  return (
    <div className="App">
      <Button handleClick={(id) => alert(`button clicked ${id}`)}></Button>
      <Input value="" handleChange={(event) => console.log(event)} />

      <button onClick={handleButton}>Click Me</button>
    </div>
  );
}

export default App;
