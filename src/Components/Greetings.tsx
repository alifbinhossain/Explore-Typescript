import React from "react";

type GreetingProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greetings = (props: GreetingProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h1>
        {props.isLoggedIn
          ? `Hello ${props.name} | You have ${messageCount} unread messages.`
          : "Hello Guest"}
      </h1>
    </div>
  );
};

export default Greetings;
