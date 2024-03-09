import React, { useState } from 'react';
import styled from 'styled-components';

import PlusIcon from '../../../../data/imageMock/plus.svg';

const RootContainer = styled.div`
  position: absolute;
  display: flex;
  right: 20px;
  top: 20px;
`;

const PicButton = styled.div`
  border-radius: 100px;
  background: #fff;
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  transition: 300ms ease-out;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.04);

  &:hover {
    color: #f5f5f5;
    background: #282828;
  }

  &:active {
    color: #f5f5f5;
    background: #343434;
  }
`;

type ChatButtonProps = {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatButton: React.FC<ChatButtonProps> = (props) => {
  const { setState } = props;
  const [isActive, setActive] = useState(false);

  return (
    <RootContainer>
      <PicButton
        style={{ transform: `rotate(${isActive ? 0.375 : 0}turn)` }}
        onClick={() => {
          setActive(!isActive);
          setState(!isActive);
        }}>
        <PlusIcon />
      </PicButton>
    </RootContainer>
  );
};

export default ChatButton;
