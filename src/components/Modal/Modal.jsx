import React from 'react';
import './Modal.css';

const Modal = ({ show, children }) => {
  const myClass = `modal ${show ? 'modal-open' : 'modal-closed'}`;

  return <div className={myClass}>{children}</div>;
};

export default Modal;
