import React from "react";
type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  const { status } = props;
  let message;
  if (status === "loading") {
    message = "Loading...!";
  } else if (status === "success") {
    message = "Successfully fetched the data..";
  } else if (status === "error") {
    message = "You have got an error";
  }

  return (
    <div>
      <h4>{message}</h4>
    </div>
  );
};

export default Status;
