import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import ButtonIcon from '../../../../data/imageMock/sendButtonIcon.svg';
import TailBlack from '../../../../data/imageMock/TailBlack.svg';
import TailWhite from '../../../../data/imageMock/TailWhite.svg';

type ChatSpec = Array<{
  fieldName?: string;
  message: string;
  fallBackMessage: string | null;
  validation: RegExp | null;
}>;

type FormData = Record<string, string>;

export type ChatComponentProps = {
  spec: ChatSpec;
  onSubmit: (formData: FormData) => void;
  title: string;
};

type Message = {
  id: string;
  text: string;
  isIncome: boolean;
};

const RootContainer = styled.div`
  display: flex;
  flex-flow: column;
  min-width: 33.8%;
  max-width: 33.8%;
  min-height: 600px;
  height: calc(50vh - 40px);
  border-radius: 24px;
  background: #fff;
  gap: 12px;
  overflow: hidden;
  @media screen and (max-width: 987px) {
    max-width: 100%;
    width: 100%;
  }
`;

const ScrollContainer = styled.div`
  overflow-y: scroll;
  display: block;
  margin-top: auto;
  scroll-behavior: smooth;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  width: 405px;
  padding: 24px;
  align-items: flex-start;
  color: #202020;
  font-family: Inter, serif;
  font-size: 28px;
  font-weight: 500;
  line-height: 121.429%;
`;

const MessageContainer = styled.div<{ $isIncome: boolean }>`
  overflow-wrap: break-word;
  position: relative;
  align-self: ${({ $isIncome }) => (!$isIncome ? 'flex-start' : 'flex-end')};
  margin: 8px 24px;
  max-width: 50%;
  padding: 8px 14px;
  border-radius: 15px 15px 15px 12px;
  background-color: ${({ $isIncome }) => ($isIncome ? '#202020' : '#F5F5F5')};
  color: ${({ $isIncome }) => ($isIncome ? '#FFFFFF' : '#202020')};
`;

const TailContainer = styled.div<{ $isIncome: boolean }>`
  position: absolute;
  bottom: -0.35rem;
  ${({ $isIncome }) => ($isIncome ? 'right' : 'left')}: -0.3rem;
`;

const InputAndButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px;
  align-items: stretch;
  background: #fff;
`;

const InputContainer = styled.div`
  display: flex;
  width: 89%;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 100px;
  border: 1px solid #ebebeb;
  background: #fff;
`;

const Input = styled.input`
  display: flex;
  width: 89%;
  padding: 5.7px 13px;
  flex: 1 0 0;
  border-radius: 100px;
  border: 1px solid #ebebeb;
  background: #fff;
  color: #202020;
  font-family: Inter, serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.13px;
`;

const SendButton = styled.div`
  display: flex;
  margin-left: 8px;
  width: 34px;
  height: 34px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  background: #202020;
  &:hover {
    color: #f5f5f5;
    background: #282828;
  }
  &:active {
    color: #f5f5f5;
    background: #343434;
  }
`;

const ChatComponent: React.FC<ChatComponentProps> = (props: ChatComponentProps) => {
  const { spec: arrayOfSpec, onSubmit: onSubmitFunc, title: chatTitle } = props;
  const [inputValue, setInputValue] = useState('');
  const [numberOfSpec, setNumberOfSpec] = useState(1);
  const startingSpecMessages = arrayOfSpec.slice(0, 2).reduce((acc: Array<Message>, spec) => {
    const { message } = spec;
    const newMessage: Message = {
      id: uuidv4(),
      text: message,
      isIncome: false
    };
    acc.push(newMessage);
    return acc;
  }, []);
  const [renderMessages, setRenderMessages] = useState<Array<Message>>(startingSpecMessages);

  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => scrollToBottom);

  const handleClick = () => {
    const { fieldName, validation, fallBackMessage } = arrayOfSpec[numberOfSpec];
    if (
      validation !== null &&
      validation.test(inputValue) &&
      fieldName !== undefined &&
      arrayOfSpec[numberOfSpec + 1]
    ) {
      const nextMessage = arrayOfSpec[numberOfSpec + 1].message;
      const result = { [fieldName]: inputValue };
      onSubmitFunc(result);
      setInputValue('');
      setNumberOfSpec(numberOfSpec + 1);
      const newMessages = renderMessages;
      newMessages.push({
        id: uuidv4(),
        text: inputValue,
        isIncome: true
      });
      newMessages.push({
        id: uuidv4(),
        text: nextMessage,
        isIncome: false
      });
      setRenderMessages(newMessages);
    } else if (fallBackMessage && inputValue.length !== 0) {
      const result = renderMessages;
      result.push({
        id: uuidv4(),
        text: inputValue,
        isIncome: true
      });
      result.push({
        id: uuidv4(),
        text: fallBackMessage,
        isIncome: false
      });
      setRenderMessages(result);
      setInputValue('');
    }
  };

  return (
    <RootContainer>
      <Title>{chatTitle}</Title>
      <ScrollContainer ref={chatContainerRef}>
        <FlexContainer>
          {renderMessages.map((message) => {
            const { id, text, isIncome } = message;
            const Tail = isIncome ? TailBlack : TailWhite;
            return (
              <MessageContainer key={id} $isIncome={isIncome}>
                {text}
                <TailContainer $isIncome={isIncome}>
                  <Tail />
                </TailContainer>
              </MessageContainer>
            );
          })}
        </FlexContainer>
      </ScrollContainer>
      <InputAndButtonContainer>
        <InputContainer>
          <Input
            placeholder='Say something...'
            type='text'
            value={inputValue}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleClick();
              }
            }}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </InputContainer>
        <SendButton onClick={handleClick}>
          <ButtonIcon />
        </SendButton>
      </InputAndButtonContainer>
    </RootContainer>
  );
};

export default ChatComponent;
