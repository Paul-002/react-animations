import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Person from "../Person/Person";
import "./PersonsList.css";

const PersonsList = ({ persons, onClickItem }) => {
  const animationTiming = {
    enter: 200,
    exit: 300
  };
  return (
    <TransitionGroup component="ul" className="persons-list">
      {persons.map(person => (
        <CSSTransition
          key={person.id}
          classNames="list-item"
          timeout={animationTiming}
        >
          <Person person={person} onClickItem={onClickItem}>
            {person.name}
          </Person>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default PersonsList;
