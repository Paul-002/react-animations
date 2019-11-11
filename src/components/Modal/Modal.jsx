import React from 'react';
import './Modal.css';

const Modal = ({ show, children }) => {
  const modalAnimation = {
    opacity: show ? '1' : '0'
  };

  return (
    <div className="modal" style={modalAnimation}>
      {children}
    </div>
  );
};

export default Modal;
