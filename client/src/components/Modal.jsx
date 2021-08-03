import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const modalDom = document.getElementById('modal');

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div>
      test
    </div>,
    modalDom,
  );
};

export default Modal;
