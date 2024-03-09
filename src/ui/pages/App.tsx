import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '../../assets/fonts/GlobalStyle';
import FilterAndProductList from '../components/symbiosis/FilterAndProductList/FilterAndProductList';
import FirsPage from '../components/symbiosis/FirstPage/FirsPage';

const StyledRoot = styled.div`
  background-color: #e6e6e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyledRoot>
        <FirsPage />
        <FilterAndProductList />
      </StyledRoot>
    </>
  );
};

export default App;
