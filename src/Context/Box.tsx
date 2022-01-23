import React from "react";
import useAll from "./useAll";

const Box = () => {
  const theme = useAll();

  return (
    <div
      style={{
        backgroundColor: theme.secondary.main,
        color: theme.secondary.text,
      }}
    >
      Typescript Context Provider
    </div>
  );
};

export default Box;
