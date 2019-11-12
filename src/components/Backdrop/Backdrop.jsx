import React from "react";
import "./Backdrop.css";
import CSSTransition from "react-transition-group/CSSTransition";

const Backdrop = ({ show, clickedBackdrop }) => {
  const animationTiming = {
    enter: 400,
    exit: 400
  };

  return (
    <CSSTransition
      in={show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames="backdrop-animation"
    >
      <div className="backdrop" onClick={clickedBackdrop} role="presentation" />
    </CSSTransition>
  );
};

export default Backdrop;
