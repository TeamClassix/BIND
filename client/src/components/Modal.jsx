import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const modalDom = document.getElementById('modal');

const Modal = (props) => {
  const el = document.createElement('div');
  useEffect(() => {
    modalDom.appendChild(el);
    return modalDom.removeChild(el);
  }, []);
  return ReactDOM.createPortal(
    <div>
      test
    </div>,
    el,
  );
};

export default Modal;
