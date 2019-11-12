import React from "react";
import "./Modal.css";
import CSSTransition from "react-transition-group/CSSTransition";

const Modal = ({ show, children }) => {
  const animationTiming = {
    enter: 300,
    exit: 300
  };

  return (
    <CSSTransition
      classNames="modal-animation"
      in={show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
    >
      <div className="modal">{children}</div>
    </CSSTransition>
  );
};

export default Modal;
