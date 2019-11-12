import React from "react";
import "./Modal.css";
import Transition from "react-transition-group/Transition";

const Modal = ({ show, children }) => {
  const animationTiming = {
    enter: 300,
    exit: 300
  };

  return (
    <Transition in={show} timeout={animationTiming} mountOnEnter unmountOnExit>
      {state => {
        const myClass = `modal ${
          state === "entering"
            ? "modal-open"
            : state === "exiting"
            ? "modal-closed"
            : ""
        }`;
        return <div className={myClass}>{children}</div>;
      }}
    </Transition>
  );
};

export default Modal;
