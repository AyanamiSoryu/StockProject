import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  position: relative;
  margin-top: 50vh;
  margin-left: auto;
  margin-right: auto;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #09f;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const StyledRoot = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  opacity: 0.5;
`;

const Loader = () => {
  return (
    <StyledRoot>
      <StyledLoader />
    </StyledRoot>
  );
};

export default Loader;
