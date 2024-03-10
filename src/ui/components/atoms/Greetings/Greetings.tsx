import React from 'react';
import styled from 'styled-components';

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-radius: 24px;
  background: #fff;
  padding: 24px;

  @media screen and (max-width: 988px) {
    padding: 20px;
  }
`;

const HelloHeading = styled.h2`
  color: #202020;
  margin: 0;
  font-family: Inter, serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: -0.59px;
`;

const GreetParagraph = styled.p`
  color: #bbb;
  max-width: 724px;
  font-family: Inter, serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: -0.59px;

  @media screen and (max-width: 790px) {
    font-size: 21px;
  }

  @media screen and (max-width: 450px) {
    font-size: 17px;
  }
`;

const GreetingsComponent = () => {
  return (
    <RootContainer>
      <HelloHeading>hello!</HelloHeading>
      <GreetParagraph>
        Welcome to a world where every piece is a masterpiece, waiting to adorn you with unparalleled glamour and
        allure.
        <br />
        <br />
        Delight in the brilliance of meticulously crafted gemstones and the allure of exquisite designs that capture the
        essence of elegance.
        <br />
        Embark on a journey of timeless beauty and discover treasures that resonate with grace and style, reflecting the
        artistry of generations past and present.
      </GreetParagraph>
    </RootContainer>
  );
};

export default GreetingsComponent;
