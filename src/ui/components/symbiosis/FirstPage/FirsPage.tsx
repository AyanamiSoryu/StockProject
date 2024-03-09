import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import TrueChatMock from '../../../../data/chatMock/chatMock';
import useHtmlElementRefSize from '../../../../utils/hooks/useHtmlElementRefSize/useHtmlElementRefSize';
import Greetings from '../../atoms/Greetings/Greetings';
import ChatComponent from '../../organisms/Chat/Chat';
import ChatButton from '../../organisms/ChatButton/ChatButton';

const RootContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  min-height: 600px;
  height: calc(50vh - 40px);
  border-radius: 32px;
  gap: 20px;
  overflow: hidden;
  overflow-wrap: unset;
  justify-content: center;
  margin-bottom: 20px;
`;

interface MobileChatProps {
  isActive: boolean;
}

const MobileChatContainer = styled.div<MobileChatProps>`
  width: 100%;
  position: absolute;
  display: flex;
  min-height: 600px;
  transform: ${({ isActive }) => (isActive ? 'translate(0)' : 'translate(1000px)')};
  transition: 500ms ease-out;
`;

const FirstPage: React.FC = () => {
  const [isActive, setActive] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const rootWidth = useHtmlElementRefSize(rootRef).width;
  const isMobile = rootWidth < 948;

  return (
    <RootContainer ref={rootRef}>
      {/* <Filter onFilterChange={onFilterChange} /> */}
      <Greetings />
      {isMobile ? (
        <>
          <MobileChatContainer isActive={isActive}>
            <ChatComponent spec={TrueChatMock.spec} onSubmit={TrueChatMock.onSubmit} title={TrueChatMock.title} />
          </MobileChatContainer>
          <ChatButton setState={setActive} />
        </>
      ) : (
        <ChatComponent spec={TrueChatMock.spec} onSubmit={TrueChatMock.onSubmit} title={TrueChatMock.title} />
      )}
    </RootContainer>
  );
};

export default FirstPage;
