import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: #000000a8;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const OuterModal = styled.div`
  background-color: #dbffeb;
  display: flex;
  flex: 0 0 500px;
  padding: 30px;
  padding-bottom: 50px;
  border: 1px solid #494949;
  flex-direction: column;
`;

const modalDom = document.getElementById('modal');

const Modal = (props) => ReactDOM.createPortal(
  <Container onClick={(ev) => {
    props.toggle(false);
  }}>
    <OuterModal onClick={(ev) => {
      ev.stopPropagation();
    }}>
      {props.children}
    </OuterModal>
  </Container>,
  modalDom,
);

export default Modal;
