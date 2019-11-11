import React from 'react';
import './Backdrop.css';

const Backdrop = ({ show, clickedBackdrop }) => {
  const myClass = `backdrop ${show ? 'backdrop-open' : 'backdrop-closed'}`;

  return (
    <div className={myClass} onClick={clickedBackdrop} role="presentation" />
  );
};

export default Backdrop;
