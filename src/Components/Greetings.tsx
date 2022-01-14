import React from "react";

type GreetingProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greetings = (props: GreetingProps) => {
  return (
    <div>
      <h1>
        {props.isLoggedIn
          ? `Hello ${props.name} | You have ${props.messageCount} unread messages.`
          : "Hello Guest"}
      </h1>
    </div>
  );
};

export default Greetings;
