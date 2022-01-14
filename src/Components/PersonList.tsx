import React from "react";

type ListProps = {
  list: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: ListProps) => {
  const { list } = props;
  return (
    <div>
      {list.map((obj, index) => (
        <h4 key={index}>
          {obj.first} {obj.last}
        </h4>
      ))}
    </div>
  );
};

export default PersonList;
