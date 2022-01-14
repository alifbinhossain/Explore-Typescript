import React from "react";

type ButtonProps = {
  handleClick: (id: number) => void;
};

const Button = (props: ButtonProps) => {
  return <button onClick={() => props.handleClick(5)}>Click</button>;
};

export default Button;
