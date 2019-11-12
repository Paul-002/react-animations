import React from "react";
import "./Backdrop.css";
import Transition from "react-transition-group/Transition";

const Backdrop = ({ show, clickedBackdrop }) => {
  const animationTiming = {
    enter: 400,
    exit: 400
  };

  return (
    <Transition in={show} timeout={animationTiming} mountOnEnter unmountOnExit>
      {state => {
        const myClass = `backdrop ${
          state === "entering"
            ? "backdrop-open"
            : state === "exiting"
            ? "backdrop-closed"
            : ""
        }`;

        return (
          <div
            className={myClass}
            onClick={clickedBackdrop}
            role="presentation"
          />
        );
      }}
    </Transition>
  );
};

export default Backdrop;
