import React from 'react';
import './Backdrop.css';

const Backdrop = ({ show, clickedBackdrop }) =>
  show ? (
    <div className="backdrop" onClick={clickedBackdrop} role="presentation" />
  ) : null;

export default Backdrop;
