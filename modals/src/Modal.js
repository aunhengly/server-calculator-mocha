import React from 'react';
import styled from 'styled-components';

export default props => {
  return (
    <Overlay className={props.active ? 'active' : ''}>
      ;
      <Content className="modal__wrapper">
        <p>I am modal</p>
        <button onClick={props.handleToggleModal}>Close</button>
      </Content>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  pointer-events: none;
  transition: opacity 0.1s ease-in-out;

  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;
const Content = styled.div`
  width: 80%;
  max-width: 500px;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
