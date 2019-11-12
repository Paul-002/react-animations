import React from "react";
import "./Person.css";

const Person = ({ children, person: { id }, onClickItem }) => {
  return (
    <li className="person" onClick={() => onClickItem(id)}>
      <span>{children}</span>
    </li>
  );
};

export default Person;
