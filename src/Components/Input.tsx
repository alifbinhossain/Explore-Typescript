import React from "react";
type InputProps = {
  value: string;
  handleChange: (event: React.MouseEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return (
    <input
      type="text"
      value={props.value}
      onChange={(event) => props.handleChange}
    />
  );
};

export default Input;
